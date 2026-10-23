// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationStandardAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The business order ID of the caller. It is recorded upon acceptance and returned as-is when querying the asynchronous task result.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The intervention glossary.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The URL of the image to be translated.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to include the translation of the product area.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The source language.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Specifies whether to translate the brand text in the product area.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to use the image editor protocol.
   * 
   * @example
   * false
   */
  useImageEditor?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      glossary: 'Glossary',
      imageUrl: 'ImageUrl',
      includingProductArea: 'IncludingProductArea',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      translatingBrandInTheProduct: 'TranslatingBrandInTheProduct',
      useImageEditor: 'UseImageEditor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      glossary: 'string',
      imageUrl: 'string',
      includingProductArea: 'boolean',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      translatingBrandInTheProduct: 'boolean',
      useImageEditor: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

