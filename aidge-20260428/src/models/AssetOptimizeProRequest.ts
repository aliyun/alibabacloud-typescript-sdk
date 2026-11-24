// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssetOptimizeProRequest extends $dara.Model {
  /**
   * @remarks
   * The list of column names to be recognized in the size chart. Optional.
   * 
   * @example
   * ["Bust","Waist","Hip"]
   */
  columnNameList?: string[];
  /**
   * @remarks
   * The ID of the intervention glossary. Optional. You must create the glossary in the console and provide its ID. If this parameter is left empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * Specifies whether to translate the text on the main subject of the image. This helps protect embedded information such as product names from being translated. Default value: false.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The output language format for the size chart. If this parameter is left empty, the original language is used. Set this parameter to en for English output or cn for Chinese output.
   * 
   * @example
   * cn
   */
  languageModel?: string;
  /**
   * @remarks
   * Specifies whether translation is required. Valid values: true and false. If this parameter is set to true, SourceLanguage and TargetLanguage are required.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  needTrans?: boolean;
  /**
   * @remarks
   * The product URL. Required. Only 1688 product links are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * https://detail.1688.com/offer/771024907536.html
   */
  productUrl?: string;
  /**
   * @remarks
   * The source language code. Optional. For supported language pairs, refer to the list of supported translation language pairs. Required if NeedTrans is set to true.
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
   * The target language code. Optional. For supported language pairs, refer to the list of supported translation language pairs. Required if NeedTrans is set to true.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The target platform for listing. Only TEMU is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * temu
   */
  targetPlatform?: string;
  /**
   * @remarks
   * The confidence threshold for size chart detection. Default value: 0.4. If this parameter is set to 0, all images are considered size charts. If this parameter is set to 1, no images are considered size charts.
   * 
   * @example
   * 0.4
   */
  threshold?: number;
  /**
   * @remarks
   * Specifies whether to translate the brand name in the image. Optional. Default value: false. This helps protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnNameList: 'ColumnNameList',
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
      columnNameList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.columnNameList)) {
      $dara.Model.validateArray(this.columnNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

