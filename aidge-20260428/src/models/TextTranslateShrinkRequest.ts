// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This field represents your identity and facilitates communication for various issues. If you are an internal Alibaba organization, we recommend that you specify this parameter based on the actual scenario, such as BU name-product or BU name-chat. If you are an external Alibaba partner, we recommend that you specify the full name of your company. The company name must be the same as the company name you used when registering your Alibaba Cloud account.
   * 
   * @example
   * MyCompany-Chat
   */
  bizName?: string;
  /**
   * @remarks
   * The format type of the source text. This parameter is optional. Valid values:
   * - text: Plain text format.
   * - html: Web page format, which retains HTML tags.
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
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The source language code. If this parameter is not specified, the language is automatically detected. This parameter is optional. You can set this parameter to auto for language identification.   
   * <props="china">For supported language pairs, see [Language pair mapping table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).      
   * 
   * <props="intl">For supported language pairs, see [Language pair mapping table](https://www.alibabacloud.com/help/zh/aidge/language-direction-mapping).
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
   * The target language code. This parameter is required.   
   * <props="china">For supported language pairs, see [Language pair mapping table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).      
   * 
   * <props="intl">For supported language pairs, see [Language pair mapping table](https://www.alibabacloud.com/help/zh/aidge/language-direction-mapping).
   * 
   * This parameter is required.
   * 
   * @example
   * ko
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The business scenario identifier. You can specify only one of the following values. After the value is specified, the translation engine calls the terminology library and style policy of the corresponding industry to output translations that better fit the industry. If this parameter is not specified or an invalid value is specified, the general translation policy is used. Valid values:
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

