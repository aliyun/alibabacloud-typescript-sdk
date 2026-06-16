// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationStandardRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the intervention glossary. This parameter is optional. Create the glossary in the console and provide its ID. If the glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The URL of the original image. This parameter is required. Image requirements: the width and height cannot exceed 4000 × 4000 pixels, the file size cannot exceed 10 MB, and the supported formats are png, jpeg, jpg, bmp, and webp.
   * 
   * This parameter is required.
   * 
   * @example
   * https://images-na.ssl-images-amazon.com/images/I/41bKsNBDcwL.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate text on the product subject in the image. This parameter is optional. Default value: false. This helps protect information by preventing translation of embedded information such as product names.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The source language code. This parameter is required. For supported language directions, see the supported language directions list.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language code. This parameter is required. For supported language directions, see the supported language directions list.
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
  static names(): { [key: string]: string } {
    return {
      glossary: 'Glossary',
      imageUrl: 'ImageUrl',
      includingProductArea: 'IncludingProductArea',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      translatingBrandInTheProduct: 'TranslatingBrandInTheProduct',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

