import { GlobalOutlined, ReadOutlined, UserOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import moment from "moment"
import { IData_SnippetNews } from "../../types/types"
import s from "./MainInfo.module.scss"

type Props = {
	data: IData_SnippetNews
	isPreview?: boolean
}

export const MainInfo = ({ data, isPreview = true }: Props) => {
	const momentDate = moment(data.DP)
	const day = momentDate.format("D")
	const rest = momentDate.format("MMM YYYY")
	return (
		<div>
			<div className={s.info}>
				<div className={s.dateAndTraffic}>
					<Flex>
						{isPreview ? (
							<p className={s.colorGrey}>
								{day} {rest}{" "}
							</p>
						) : (
							<p>
								{day} <span className={s.colorGrey}> {rest} </span>
							</p>
						)}
					</Flex>
					<div>
						{isPreview ? (
							<p>{data.REACH} Top Reach</p>
						) : (
							<p>
								{data.REACH}
								<span className={s.colorGrey}> Reach</span>
							</p>
						)}
					</div>
					{!isPreview && (
						<Flex className={s.traffic}>
							{data.TRAFFIC.map((el) => (
								<p key={el.value}>
									{(el.count * 100).toLocaleString(undefined, {
										maximumFractionDigits: 2,
										minimumFractionDigits: 0,
									})}
									% <span className={s.colorGrey}>{el.value}</span>
								</p>
							))}
						</Flex>
					)}
				</div>

				<div>
					<Flex gap={"10px"} align={"center"}>
						{!isPreview && (
							<p className={`${s.sent} ${data.SENT === "negative" ? s.negative : s.positive}`}>{data.SENT}</p>
						)}
						<p className={s.infoIcon}>i</p>
						<p className={s.infoIcon}></p>
					</Flex>
				</div>
			</div>
			<h2 className={`${s.title} ${s.colorBlue}`}>{data.TI}</h2>

			<div className={s.aboutNews}>
				<p>
					<GlobalOutlined className={s.icon} />
					<a href={data.URL} className={s.link}>
						{data.DOM}
					</a>
				</p>
				<p>{data.CNTR}</p>
				<p>
					<ReadOutlined className={s.icon} />
					{data.LANG.charAt(0).toUpperCase() + data.LANG.slice(1)}
				</p>
				<p>
					<UserOutlined className={s.icon} />
					{data.AU.length > 0 ? data.AU : "Author undefined"}
				</p>
			</div>
		</div>
	)
}
