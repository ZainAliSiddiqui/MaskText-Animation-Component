import { MaskText } from "@animation";

export default function App() {
	const phrases = ["Chase Your", "Dream with us"];

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<h1 className="text-[30px] uppercase font-bold">
				<MaskText>{phrases}</MaskText>
			</h1>
		</div>
	);
}
