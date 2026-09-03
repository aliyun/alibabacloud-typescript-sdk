// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationProRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use asynchronous mode. Default value: false (synchronous mode). When set to true, the API immediately returns a TaskId. Use the query translation result API to retrieve the final result.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the intervention glossary. This parameter is optional. Create the glossary separately in the console and provide its ID. If the glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The URL of the original image. This parameter is required.
   * 
   * Image requirements:
   * - Image URL: Must be publicly accessible.
   * - Format: png, jpeg, jpg, bmp, or webp.
   * - Pixels: The width and height must not exceed 4000 pixels each.
   * - File size: The original file must be 10 MB or smaller.
   * 
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i3/O1CN01HTDhDi28Fd85ZYs7H_!!6000000007903-0-tps-800-800.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate text on the image subject. This parameter is optional. Default value: false. Setting this parameter to false helps protect information such as embedded product names from being translated.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The source language code. This parameter is required. For supported language directions, see [Language Direction Mapping Table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language code. This parameter is required. For supported language directions, see [Language Direction Mapping Table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ko
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Specifies whether to translate brand names on the image. This parameter is optional. Default value: false. Setting this parameter to false helps protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layout information such as text position, font, and color. When set to true, layer information is returned for secondary editing with an image editor. Default value: false.
   * 
   * @example
   * false
   */
  useImageEditor?: boolean;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
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
      async: 'boolean',
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

