// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationProRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the asynchronous mode. Default value: false, which indicates the synchronous mode. If you set this parameter to true, the API immediately returns a TaskId, and you must call the query translation result API to obtain the final result.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the intervention glossary. This parameter is optional. You must create the glossary in the console and provide its ID. If the provided intervention glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The URL of the original image. This parameter is required.  
   * Image requirements:  
   * • Image URL: The image must be accessible over the Internet.   
   * • Format: PNG, JPEG, JPG, BMP, or WebP.   
   * • Pixels: The width and height must not exceed 4,000 pixels.  
   * • File size: The original file size must not exceed 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i3/O1CN01HTDhDi28Fd85ZYs7H_!!6000000007903-0-tps-800-800.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate the text on the image subject. This parameter is optional. Default value: false. This helps you protect information and prevents embedded information such as product names from being translated.
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
   * Specifies whether to translate brand names in the image. This parameter is optional. Default value: false. This helps you protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layout information such as the position, font, and color of the text. If you set this parameter to true, layer information is returned, which can be used for secondary editing when you integrate an image editor. Default value: true.
   * 
   * @example
   * true
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

