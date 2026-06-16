// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssetOptimizeLiteRequest extends $dara.Model {
  /**
   * @remarks
   * Custom glossary
   * 
   * @example
   * 测试
   */
  glossary?: string;
  /**
   * @remarks
   * Whether to include product region translation
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * Whether translation is required
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  needTrans?: boolean;
  /**
   * @remarks
   * Product Link URL
   * 
   * This parameter is required.
   * 
   * @example
   * https://detail.1688.com/offer/631960323816.html
   */
  productUrl?: string;
  /**
   * @remarks
   * Source language code, e.g., zh
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * Source platform, e.g., 1688
   * 
   * This parameter is required.
   * 
   * @example
   * 1688
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * Target language code, e.g., en
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Target platform, e.g., temu
   * 
   * This parameter is required.
   * 
   * @example
   * temu
   */
  targetPlatform?: string;
  /**
   * @remarks
   * Whether to translate brand names in images, default false
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  static names(): { [key: string]: string } {
    return {
      glossary: 'Glossary',
      includingProductArea: 'IncludingProductArea',
      needTrans: 'NeedTrans',
      productUrl: 'ProductUrl',
      sourceLanguage: 'SourceLanguage',
      sourcePlatform: 'SourcePlatform',
      targetLanguage: 'TargetLanguage',
      targetPlatform: 'TargetPlatform',
      translatingBrandInTheProduct: 'TranslatingBrandInTheProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glossary: 'string',
      includingProductArea: 'boolean',
      needTrans: 'boolean',
      productUrl: 'string',
      sourceLanguage: 'string',
      sourcePlatform: 'string',
      targetLanguage: 'string',
      targetPlatform: 'string',
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

