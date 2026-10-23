// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationProAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the caller. This ID is recorded when the request is accepted and returned as-is when you query the asynchronous task result.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The ID of the intervention glossary. You must create the glossary in the console and provide its ID. If this parameter is left empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * • Image URL: The URL must be publicly accessible over the Internet.   
   * • Formats: PNG, JPEG, JPG, BMP, and WEBP.   
   * • Pixels: The width and height cannot exceed 4,000 pixels.  
   * • File size: The original file size cannot exceed 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate the text on the image subject. Set this parameter to false to protect the subject information, such as the product name, from being translated. Default value: false.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The source language code. The value auto is supported for automatic detection.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language code. For supported language pairs, see the appendix.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Specifies whether to translate brand names in the image. Default value: false, which indicates that brand names are not translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layout information such as the position, font, and color of the text. If you set this parameter to true, layer information is returned, which can be used for secondary editing when you integrate an image editor. Default value: false.
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

