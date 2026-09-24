// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationStandardRequest extends $dara.Model {
  /**
   * @remarks
   * The intervention glossary ID. This parameter is optional. You must create the glossary separately in the console and provide its ID. If the glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * - Image URL: The URL must be publicly accessible.
   * - Format: png, jpeg, jpg, bmp, or webp.
   * - Pixels: The width and height must not exceed 4000 pixels each.
   * - File size: The original file must be 10 MB or smaller.
   * 
   * This parameter is required.
   * 
   * @example
   * https://images-na.ssl-images-amazon.com/images/I/41bKsNBDcwL.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate text on the product area of the image. This parameter is optional. Default value: false. This helps protect information by preventing translation of embedded content such as product names.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The source language code. This parameter is required. For supported language directions, see [Language direction mapping table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language code. This parameter is required. For supported language directions, see [Language direction mapping table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ko
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Specifies whether to translate brand names on the image. This parameter is optional. Default value: false. This helps protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layer information such as text position, font, and color. If you set this parameter to true, layer information is returned for secondary editing through an image editor. Default value: false.
   * 
   * @example
   * false
   */
  useImageEditor?: boolean;
  static names(): { [key: string]: string } {
    return {
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

