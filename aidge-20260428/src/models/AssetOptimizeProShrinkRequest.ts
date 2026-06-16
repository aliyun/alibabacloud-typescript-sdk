// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssetOptimizeProShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of column names to recognize in size chart images. Optional.
   * 
   * @example
   * ["胸围","腰围","臀围"]
   */
  columnNameListShrink?: string;
  /**
   * @remarks
   * The glossary ID. Optional. Create a glossary in the console and provide its ID. If left empty, translation results are not modified by any glossary.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * Specifies whether to translate text on the product subject area of images. Setting this to false helps protect embedded information such as product names from being translated. Default value: false.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The output language format for size chart images. If not specified, the original format is used. Set to en for English output or cn for Chinese output.
   * 
   * @example
   * cn
   */
  languageModel?: string;
  /**
   * @remarks
   * Specifies whether translation is required (true/false). If set to true, SourceLanguage and TargetLanguage are required.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  needTrans?: boolean;
  /**
   * @remarks
   * The product URL. This parameter is required. Only 1688 product links are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * https://detail.1688.com/offer/771024907536.html
   */
  productUrl?: string;
  /**
   * @remarks
   * The source language code. Optional. For supported language pairs, refer to the supported translation language list. This parameter is required if NeedTrans is set to true.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The source platform. Only 1688 is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1688
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * The target language code. Optional. For supported language pairs, refer to the supported translation language list. This parameter is required if NeedTrans is set to true.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The target listing platform. Only temu is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * temu
   */
  targetPlatform?: string;
  /**
   * @remarks
   * The confidence threshold for size chart detection. Default value: 0.4. A value of 0 treats all images as size charts. A value of 1 treats no images as size charts.
   * 
   * @example
   * 0.4
   */
  threshold?: number;
  /**
   * @remarks
   * Specifies whether to translate brand names on images. Optional. Default value: false. Setting this to false helps protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnNameListShrink: 'ColumnNameList',
      glossary: 'Glossary',
      includingProductArea: 'IncludingProductArea',
      languageModel: 'LanguageModel',
      needTrans: 'NeedTrans',
      productUrl: 'ProductUrl',
      sourceLanguage: 'SourceLanguage',
      sourcePlatform: 'SourcePlatform',
      targetLanguage: 'TargetLanguage',
      targetPlatform: 'TargetPlatform',
      threshold: 'Threshold',
      translatingBrandInTheProduct: 'TranslatingBrandInTheProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNameListShrink: 'string',
      glossary: 'string',
      includingProductArea: 'boolean',
      languageModel: 'string',
      needTrans: 'boolean',
      productUrl: 'string',
      sourceLanguage: 'string',
      sourcePlatform: 'string',
      targetLanguage: 'string',
      targetPlatform: 'string',
      threshold: 'number',
      translatingBrandInTheProduct: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

