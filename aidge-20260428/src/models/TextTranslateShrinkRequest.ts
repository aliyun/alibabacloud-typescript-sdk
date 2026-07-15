// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateShrinkRequest extends $dara.Model {
  /**
   * @example
   * MyCompany-Chat
   */
  bizName?: string;
  /**
   * @remarks
   * The format type of the source text. This parameter is optional. Valid values: text (plain text format) and html (web page format that preserves HTML tags).
   * 
   * @example
   * text
   */
  formatType?: string;
  /**
   * @remarks
   * The intervention glossary ID. This parameter is optional. The glossary must be created separately in the console and its ID provided here. If the glossary ID is empty, the translation result is not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The source language code. This parameter is optional. If not specified, the language is automatically detected. You can pass auto for language detection.
   * 
   * @example
   * auto
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The list of texts to translate. This parameter is required. The total character length cannot exceed 50,000, and the list length cannot exceed 50.
   * 
   * This parameter is required.
   * 
   * @example
   * ["Hello world"]
   */
  sourceTextListShrink?: string;
  /**
   * @remarks
   * The target language code. This parameter is required. More than 100 language directions are supported. For details, refer to the supported language directions list.
   * 
   * This parameter is required.
   * 
   * @example
   * ko
   */
  targetLanguage?: string;
  /**
   * @example
   * e-commerce-title
   */
  translateScene?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      formatType: 'FormatType',
      glossary: 'Glossary',
      sourceLanguage: 'SourceLanguage',
      sourceTextListShrink: 'SourceTextList',
      targetLanguage: 'TargetLanguage',
      translateScene: 'TranslateScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      formatType: 'string',
      glossary: 'string',
      sourceLanguage: 'string',
      sourceTextListShrink: 'string',
      targetLanguage: 'string',
      translateScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

