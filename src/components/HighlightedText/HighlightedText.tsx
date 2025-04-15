import s from "./HighlightedText.module.scss"

const highlightKeywords = (text: string, keywords: string[]) => {
	const escaped = keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) // экранируем RegExp
	const pattern = new RegExp(`\\b(${escaped.join("|")})\\b`, "gi") // только целые слова

	return text.replace(pattern, (match) => `<span class="${s.highlight}">${match}</span>`)
}

export const HighlightedText = ({ AB, KW }: { AB: string; KW: { value: string }[] }) => {
	const keywords = KW.map((k) => k.value)
	const highlighted = highlightKeywords(AB, keywords)

	return <div dangerouslySetInnerHTML={{ __html: highlighted }} />
}
