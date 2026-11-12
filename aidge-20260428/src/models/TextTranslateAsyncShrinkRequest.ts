// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The caller business ID. The ID can be up to 128 characters in length and is passed through in the translation results. This parameter is used only for asynchronous text translation and is returned as is in the task results.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * This field represents your identity and facilitates communication for various issues. If you are an internal Alibaba organization, we recommend that you specify this field based on the actual scenario, such as BU name-product or BU name-chat. If you are an external Alibaba partner, we recommend that you specify the full name of your company. The company name must be the same as the one you used when registering your Alibaba Cloud account.
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
   * The ID of the intervention glossary. You must create the glossary in the console and provide its ID in the input parameters. If the intervention glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * " glossary_1"
   */
  glossary?: string;
  /**
   * @remarks
   * The source language code. For more information, see the supported language list below. If you do not specify this parameter, the source language is automatically detected.
   * 
   * @example
   * auto
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The list of text to be translated.
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
   * The business scenario identifier. You can specify only one of the following values. After you specify a value, the translation engine uses the terminology library and style policy of the corresponding industry to output industry-specific translations. If this field is not specified or is invalid, the general translation policy is used. Valid values:
   * - e-commerce-title: Cross-border e-commerce product title translation.
   * - e-commerce-description: Cross-border e-commerce product description translation.
   * - e-commerce-chat: Cross-border e-commerce conversation translation.
   * - e-commerce-cpv: Cross-border e-commerce product CPV attribute translation.
   * - novel: Novel translation.
   * - game: Game translation.
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

