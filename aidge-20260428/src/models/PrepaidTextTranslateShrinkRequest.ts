// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepaidTextTranslateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario identifier. This parameter is optional. Valid values: e-commerce-title, e-commerce-description, e-commerce-chat, e-commerce-cpv, novel, and game. If this parameter is not specified or is invalid, the general translation policy is used by default.
   * 
   * @example
   * Alibaba-Product
   */
  bizName?: string;
  /**
   * @remarks
   * The format type of the source text. This parameter is optional. Valid values: text (plain text format) and html (web page format, which retains HTML tags).
   * 
   * @example
   * text
   */
  formatType?: string;
  /**
   * @remarks
   * The ID of the intervention glossary. This parameter is optional. You must create the glossary in the console and provide its ID. If the provided intervention glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * custom_glossary
   */
  glossary?: string;
  /**
   * @remarks
   * The source language code. This parameter is optional. If you do not specify this parameter, the language is automatically detected. You can set this parameter to auto for language detection.
   * 
   * @example
   * auto
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The list of text to be translated. This parameter is required. The total character length cannot exceed 50,000, and the list length cannot exceed 50.
   * 
   * This parameter is required.
   * 
   * @example
   * ["Hello world"]
   */
  sourceTextListShrink?: string;
  /**
   * @remarks
   * The target language code. This parameter is required. More than 100 language pairs are supported. For details, see the supported language pairs list.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The format of the translated text. Valid values: html (web page format. Setting this parameter processes the source and translated text in HTML format) and text (text format. Setting this parameter processes the source and translated text as plain text without format processing).
   * 
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

