// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationPlusAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The business order number of the caller. This number is recorded when the request is accepted and returned as-is when you query the asynchronous task results.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The ID of the intervention glossary. You must create the intervention glossary separately and provide its ID in the input parameters. If the provided intervention glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * * Image URL: The URL must be publicly accessible.    
   * * Format: PNG, JPEG, JPG, BMP, or WebP.    
   * * Resolution: The width and height do not exceed 4,000 pixels.   
   * * File size: The size of the original file is less than or equal to 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate the text on the product subject in the image. This helps you protect information and prevents embedded information such as product names from being translated. In the sample image, the text in the red box represents the text on the subject, and the text in the blue box represents the text not on the subject.
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
   * Specifies whether to translate the brand names in the image. This helps you protect the brand name information from being translated. Default value: false, which indicates that brand names are not translated. In the sample image, "Lazy Corner" represents the brand name.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layout information such as the position, font, and color of the text. This information can be used to obtain data when you integrate the image editor for secondary editing. You can call the API operation for querying image translation results to obtain the complete parameter information.
   * 
   * @example
   * true
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

