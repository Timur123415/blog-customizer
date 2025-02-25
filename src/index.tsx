import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleProps, setArticleProps] = useState(defaultArticleState)
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleProps.fontFamilyOption.value,
					'--font-size': articleProps.fontSizeOption.value,
					'--font-color': articleProps.fontColor.value,
					'--container-width': articleProps.contentWidth.value,
					'--bg-color': articleProps.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticleParams={setArticleProps}/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
