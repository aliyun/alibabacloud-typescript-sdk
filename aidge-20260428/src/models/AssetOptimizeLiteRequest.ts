// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssetOptimizeLiteRequest extends $dara.Model {
  /**
   * @remarks
   * The custom glossary for term intervention.
   * 
   * @example
   * test
   */
  glossary?: string;
  /**
   * @remarks
   * Specifies whether product area translation is included.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * Specifies whether translation is needed.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  needTrans?: boolean;
  /**
   * @remarks
   * The product URL.
   * 
   * This parameter is required.
   * 
   * @example
   * https://detail.1688.com/offer/631960323816.html
   */
  productUrl?: string;
  /**
   * @remarks
   * The source language code, such as zh.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The source platform, such as 1688.
   * 
   * This parameter is required.
   * 
   * @example
   * 1688
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * The target language code, such as en.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The target platform, such as temu.
   * 
   * This parameter is required.
   * 
   * @example
   * temu
   */
  targetPlatform?: string;
  /**
   * @remarks
   * Specifies whether to translate brand names in images. Default value: false.
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

