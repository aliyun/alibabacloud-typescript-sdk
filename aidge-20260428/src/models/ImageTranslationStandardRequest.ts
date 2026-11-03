// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationStandardRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the intervention glossary. This parameter is optional. You must create the glossary in the console and provide its ID. If the provided intervention glossary ID is empty, the translation results will not be modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * - Image URL: Must be publicly accessible over the Internet.
   * - Formats: PNG, JPEG, JPG, BMP, and WEBP.
   * - Pixels: Both width and height must not exceed 4,000.
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
   * Specifies whether to translate the text on the product subject in the image. This parameter is optional. Default value: false. This helps protect information and prevents embedded information such as product names from being translated.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The source language code. This parameter is required.   
   * <props="china">For supported language pairs, see [Language pair mapping table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).      
   * <props="intl">For supported language pairs, see [Language pair mapping table](https://www.alibabacloud.com/help/zh/aidge/language-direction-mapping).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language code. This parameter is required.   
   * <props="china">For supported language pairs, see [Language pair mapping table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).      
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
   * Specifies whether to translate brand names in the image. This parameter is optional. Default value: false. This helps protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layer information such as text position, font, and color. If set to true, layer information is returned and can be used to integrate with image editors for secondary editing. Default value: false.
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

