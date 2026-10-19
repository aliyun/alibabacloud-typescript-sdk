// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationPlusAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The intervention glossary ID. The intervention glossary ID must be created separately and provided in the input parameters. If the provided intervention glossary ID is empty, the translation results will not be modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * • Image URL: Must be publicly accessible.    
   * • Format: PNG, JPEG, JPG, BMP, or WEBP.    
   * • Pixels: Both width and height must not exceed 4,000.   
   * • File size: The original file must be less than or equal to 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate the text on the image subject. This helps you protect information and prevent embedded information, such as product names, from being translated. In the example image, the text in the red box represents the text on the subject, and the text in the blue box represents the text not on the subject.
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
   * The target language code. The 12 minor language pairs listed above are recommended.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Specifies whether to translate brand names in the image. This prevents brand names from being translated. Default value: false, which indicates that brand names are not translated. In the example image, \\"懒角落\\" represents a brand name.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layout information such as the position, font, and color of the text. This can be used to obtain data when integrating the image editor for secondary editing. You can call the image translation result query API to obtain the complete parameter information.
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

