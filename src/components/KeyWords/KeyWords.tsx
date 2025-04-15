import { IData_TagItem } from "../../types/types"
import s from "./KeyWords.module.scss"

type Props = {
	data: IData_TagItem[]
}
const KeyWords = ({ data }: Props) => {
	if (!data.length) {
		return <></>
	}

	return (
		<div className={s.wrapper}>
			{data.map((keyWord) => (
				<div className={s.keyWord}>
					<span>{keyWord.value}</span>
					<span>{keyWord.count}</span>
				</div>
			))}
		</div>
	)
}

export default KeyWords
