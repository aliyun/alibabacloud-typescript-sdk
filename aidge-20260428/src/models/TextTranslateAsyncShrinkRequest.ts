// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the caller. The maximum length is 128 characters. This ID is passed through in the translation results.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The business name of the caller. This field represents your identity and facilitates subsequent communication. If you are an internal Alibaba organization, specify this parameter based on the actual scenario, such as BU name-product or BU name-chat. If you are an external partner, specify the full name of your company. The company name must be the same as the one used when registering your Alibaba Cloud account.
   * 
   * @example
   * BUxxx-chat
   */
  bizName?: string;
  /**
   * @remarks
   * The format type of the source text. Valid values: text and html.
   * 
   * @example
   * text
   */
  formatType?: string;
  /**
   * @remarks
   * The ID of the intervention glossary. You must create the glossary in the console and provide its ID in the request parameters. If the intervention glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * " glossary_1"
   */
  glossary?: string;
  /**
   * @remarks
   * The source language code. For more information, see the supported language list below. If this parameter is not specified, the language is automatically detected.
   * 
   * @example
   * auto
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The list of texts to be translated.
   * 
   * This parameter is required.
   */
  sourceTextListShrink?: string;
  /**
   * @remarks
   * The target language code. For more information, see the supported language pair list below.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The business scenario identifier. You can specify only one of the following values. After you specify a value, the translation engine uses the terminology library and style policy of the corresponding industry to output industry-specific translations. If this parameter is not specified or an invalid value is specified, the general translation policy is used. Valid values:
   * - e-commerce-title: Translates cross-border e-commerce product titles.
   * - e-commerce-description: Translates cross-border e-commerce product descriptions.
   * - e-commerce-chat: Translates cross-border e-commerce conversations.
   * - e-commerce-cpv: Translates cross-border e-commerce product CPV attributes.
   * - novel: Translates novels.
   * - game: Translates games.
   * 
   * @example
   * e-commerce-title
   */
  translateScene?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
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
      bizId: 'string',
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

