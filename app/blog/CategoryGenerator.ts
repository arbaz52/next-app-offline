import styles from "./CategoryGenerator.module.css";

const TEMPLATE = `
<div class="py-8 flex flex-wrap md:flex-nowrap">
	<div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
		<span class="font-semibold title-font text-gray-700">
			CATEGORY
		</span>
		<span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
	</div>
	<div class="md:flex-grow">
		<h2 class="${styles.heading}">
			Bitters hashtag waistcoat fashion axe chia unicorn
		</h2>
		<p class="${styles.description}">
			Glossier echo park pug, church-key sartorial biodiesel
			vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
			party messenger bag selfies, poke vaporware kombucha
			lumbersexual pork belly polaroid hoodie portland craft beer.
		</p>
		<a class="${styles.learnMore}">
			Learn More
			<svg
				class="w-4 h-4 ml-2"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M5 12h14"></path>
				<path d="M12 5l7 7-7 7"></path>
			</svg>
		</a>
	</div>
</div>
`;

class Category {
  el = new DOMParser().parseFromString(TEMPLATE, "text/html").body
    .firstChild as HTMLElement;

  constructor(public domElement: HTMLElement) {}

  mount() {
    this.domElement.appendChild(this.el);
  }
  unmount() {
    this.el.remove();
  }
}

export class CategoryGenerator {
  constructor(public domElement: HTMLElement) {}

  generate() {
    return new Category(this.domElement);
  }
}
