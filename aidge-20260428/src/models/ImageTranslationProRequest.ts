// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationProRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use asynchronous mode. Default value: false (synchronous mode). When set to true, the operation immediately returns a TaskId, and you must call the query translation result operation to obtain the final result.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The glossary ID. Optional. Create a glossary separately in the console and provide its ID. If the glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The URL of the original image. Required. Image requirements: width and height cannot exceed 4000 × 4000 pixels, size cannot exceed 10 MB, and supported formats include png, jpeg, jpg, bmp, and webp.
   * 
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i3/O1CN01HTDhDi28Fd85ZYs7H_!!6000000007903-0-tps-800-800.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate text on the image subject body. Optional. Default value: false. This helps you protect information and avoid translating embedded information such as product names.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The source language code. Required. For supported language pairs, see the supported language pair list.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language code. Required. For supported language pairs, see the supported language pair list.
   * 
   * This parameter is required.
   * 
   * @example
   * ko
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Specifies whether to translate brand names on the image. Optional. Default value: false. This helps you protect brand name information and avoid unintended translation.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layout information such as text position, font, and color. When set to true, layer information is returned, which can be used with an image editor for secondary editing. Default value: false.
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

