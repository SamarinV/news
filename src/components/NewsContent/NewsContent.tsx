import { useState } from "react"
import s from "./NewsContent.module.scss"
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"
import { HighlightedText } from "../HighlightedText/HighlightedText"
import { IData_TagItem } from "../../types/types"

type Props = {
	text: string
	keyWords: IData_TagItem[]
}

const NewsContent = ({ text, keyWords }: Props) => {
	const [isOpenShowMore, setIsOpenShowMore] = useState(false)

	const truncatedText = text.length > 100 && !isOpenShowMore ? text.slice(0, 200) + "..." : text

	return (
		<div className={s.content}>
			<HighlightedText AB={truncatedText} KW={keyWords} />
			{text.length > 200 && !isOpenShowMore && (
				<span className={s.show} onClick={() => setIsOpenShowMore(true)}>
					Show more <CaretDownOutlined />
				</span>
			)}
			{isOpenShowMore && (
				<span className={s.show} onClick={() => setIsOpenShowMore(false)}>
					Show less <CaretUpOutlined />
				</span>
			)}
		</div>
	)
}

export default NewsContent
