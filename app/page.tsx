import { INGREDIENTS, INSTRUCTIONS, NUTRITION, PREPARATION } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Home() {
	return (
		<main className="md:flexCenter bg-neutral-20 min-h-screen">
			<section className="bg-white md:w-[620px] md:rounded-lg md:m-16">
				<div className="md:px-8 md:pt-8">
					<Image
						src="/image-omelette.jpeg"
						alt="omelette"
						width={1312}
						height={600}
						className="md:rounded-md"
					/>
				</div>
				<article className="px-8 py-8 flex flex-col gap-7">
					<h1 className="text-3xl text-neutral-50">Simple Omelette Recipe</h1>
					<p className="">
						An easy and quick dish, perfect for any meal. This classic omelette
						combines beaten eggs cooked to perfection, optionally filled with
						your choice of cheese, vegetables, or meats.
					</p>
					<div className="px-8 py-5 bg-primary-25 rounded-md flex flex-col gap-4">
						<h3 className="text-primary-20 font-bold text-xl">
							Preparation time
						</h3>
						<ul className="list-disc pl-4 marker:text-primary-20">
							{PREPARATION.map((prepstep, index) => (
								<li key={`prep: ${index + 1}`} className="pl-4">
									<span className="font-semibold">{prepstep.step}</span>
									{prepstep.value}
								</li>
							))}
						</ul>
					</div>
					<h2>Ingredients</h2>
					<ul className="list-disc pl-4 ml-2 marker:text-primary-10">
						{INGREDIENTS.map((ingredient, index) => (
							<li className="pl-4" key={`ingredient: ${index + 1}`}>
								{ingredient}
							</li>
						))}
					</ul>
					<hr className="bg-neutral-30" />
					<h2>Instructions</h2>
					<div>
						<ol className="list-decimal pl-4 ml-2 marker:text-primary-10 marker:font-semibold">
							{INSTRUCTIONS.map((instruction) => (
								<li key={instruction[0]} className="pl-4">
									<span className="font-semibold">{instruction[0]}</span>
									{instruction[1]}
								</li>
							))}
						</ol>
					</div>
					<hr className="bg-neutral-30" />
					<h2>Nutrition</h2>
					<div>
						<p>
							The table below shows nutritional values per serving without the
							additional fillings.
						</p>
						{NUTRITION.map((stat, index) => (
							<React.Fragment key={`stat: ${index + 1}`}>
								<div className="p-4">
									<span className="pl-4 inline-block w-[50%]">
										{stat.macro}
									</span>
									<span className="text-primary-10 font-semibold">
										{stat.value}
									</span>
								</div>
								{index !== NUTRITION.length - 1 && (
									<hr className="bg-neutral-30" />
								)}
							</React.Fragment>
						))}
					</div>
				</article>
			</section>
		</main>
	);
}
