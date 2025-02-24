import { useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

import clsx from 'clsx';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';

interface IArticleParamsForm {
	setArticleParams: (articleParams: ArticleStateType) => void;
}
export const ArticleParamsForm = ({
	setArticleParams,
}: IArticleParamsForm) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formArticleParams, setFormArticleParams] =
		useState<ArticleStateType>(defaultArticleState);

	const arrowBtnOpened = () => {
		setIsOpen(!isOpen);
	};

	const saveFormParametrs = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setArticleParams(formArticleParams);
	};

	const resetFormParametrs = () => {
		setArticleParams(defaultArticleState);
		setFormArticleParams(defaultArticleState);
	};

	const inputChange = (
		propName: keyof ArticleStateType,
		propValue: OptionType
	) => {
		setFormArticleParams({
			...formArticleParams,
			[propName]: propValue,
		});
	};

	const closeForm = () => {
		setIsOpen(false);
	};

	return (
		<>
			<ArrowButton onClick={arrowBtnOpened} isOpen={isOpen} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form
					className={styles.form}
					onReset={resetFormParametrs}
					onSubmit={saveFormParametrs}>
					<Text as='h2' size={31} weight={800}>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={formArticleParams.fontFamilyOption}
						title='шрифт'
						onChange={(font) => inputChange('fontFamilyOption', font)}
					/>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={formArticleParams.fontSizeOption}
						onChange={(fontSize) =>
							inputChange('fontSizeOption', fontSize)
						}
						title='размер шрифта'
					/>
					<Select
						options={fontColors}
						selected={formArticleParams.fontColor}
						title='цвет шрифта'
						onChange={(fontColor) => inputChange('fontColor', fontColor)}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={formArticleParams.backgroundColor}
						title='цвет фона'
						onChange={(backgroundColor) =>
							inputChange('backgroundColor', backgroundColor)
						}
					/>
					<Select
						options={contentWidthArr}
						selected={formArticleParams.contentWidth}
						title='ширина контента'
						onChange={(contentWidth) =>
							inputChange('contentWidth', contentWidth)
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
			<div
				className={clsx(styles.background, isOpen && styles.background_open)}
				onClick={closeForm}
			/>
		</>
	);
};
