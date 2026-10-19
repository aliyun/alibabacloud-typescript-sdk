// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationProAsyncRequest extends $dara.Model {
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
   * • Image URL: Must be accessible over the Internet.   
   * • Format: PNG, JPEG, JPG, BMP, or WEBP.   
   * • Pixels: Both the width and height must not exceed 4,000.  
   * • File size: The original file size must be less than or equal to 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate the text on the product subject in the image. Set this parameter to false to protect the subject information, such as the product name, from being translated. Default value: false.
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
   * Specifies whether to translate the brand names in the image. Default value: false, which indicates that brand names are not translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layout information such as the position, font, and color of the text. If you set this parameter to true, layer information is returned, which can be used for secondary editing in an image editor. Default value: false.
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

