import { dublicatesMockData } from "../../mockData/mockData"
import { IData_SnippetNews } from "../../types/types"
import Dublicates from "../Dublicates/Dublicates"
import KeyWords from "../KeyWords/KeyWords"
import { MainInfo } from "../MainInfo/MainInfo"
import NewsContent from "../NewsContent/NewsContent"
import s from "./News.module.scss"

type Props = {
	data: IData_SnippetNews
}

export const News = ({ data }: Props) => {
	return (
		<div className={s.wrapper}>
			<section>
				<MainInfo data={data} isPreview={false} />
				<NewsContent text={data.AB} keyWords={data.KW} />
				<KeyWords data={data.KW} />
			</section>
			<Dublicates data={dublicatesMockData} />
		</div>
	)
}
