import { useState } from "react"
import { IData_SnippetNews } from "../../types/types"
import { MainInfo } from "../MainInfo/MainInfo"
import s from "./Dublicates.module.scss"
import { Button } from "antd"
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"

type Props = {
	data: IData_SnippetNews[]
}

const Dublicates = ({ data }: Props) => {
	const [isShowAllDublicates, setIsShowAllDublicates] = useState(false)
	return (
		<section className={s.dublicates}>
			<h4>Dublicates: {data.length}</h4>

			{!isShowAllDublicates ? (
				<article className={s.dublicateItem}>
					<MainInfo key={data[0].ID} data={data[0]} />
				</article>
			) : (
				data.map((el) => (
					<article className={s.dublicateItem}>
						<MainInfo key={el.ID} data={el} />
					</article>
				))
			)}
			<Button type="text" block className={s.button} onClick={() => setIsShowAllDublicates(!isShowAllDublicates)}>
				{!isShowAllDublicates ? (
					<>
						<CaretDownOutlined />
						View Dublicates
					</>
				) : (
					<>
						<CaretUpOutlined />
						Less Dublicates
					</>
				)}
			</Button>
		</section>
	)
}

export default Dublicates
