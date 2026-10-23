// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationPlusAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The business order ID of the caller. This ID is recorded when the request is accepted and returned as is when you query the asynchronous task result.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The intervention glossary ID. You must create the intervention glossary separately and provide its ID in the input parameters. If the provided intervention glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * * Image URL: The image must be accessible over the Internet.    
   * * Format: PNG, JPEG, JPG, BMP, or WEBP.    
   * * Resolution: The width and height cannot exceed 4,000 pixels.   
   * * File size: The original file size cannot exceed 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate the text on the image subject. This helps you protect information and prevent embedded information, such as the product name, from being translated. In the example image, the text in the red box represents the text on the subject, and the text in the blue box represents the text not on the subject.
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
   * The target language code. We recommend that you use the 12 minor language pairs listed above.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Specifies whether to translate the brand name in the image. This prevents the brand name from being translated. Default value: false. In the example image, \\"懒角落\\" represents the brand name.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layout information such as the position, font, and color of the text. This can be used to obtain data when you integrate the image editor for secondary editing. You can call the image translation result data query API operation to obtain the complete parameter information.
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

