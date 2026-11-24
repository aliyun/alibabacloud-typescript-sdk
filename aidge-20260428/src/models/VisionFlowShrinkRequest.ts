// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VisionFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The AI capabilities to be processed. Valid values: 1 for intelligent element recognition, 2 for intelligent cutout, 3 for intelligent erasure, 4 for image translation Pro, 5 for intelligent cropping, and 6 for high-definition upscaling. You can specify multiple values.
   * 
   * This parameter is required.
   * 
   * @example
   * [1,2,3,4]
   */
  abilityShrink?: string;
  /**
   * @remarks
   * The background type of the returned image. Valid values: WHITE_BACKGROUND (white background) and TRANSPARENT (transparent background). Required if you select the intelligent cutout capability.
   * 
   * @example
   * WHITE_BACKGROUND
   */
  backGroundType?: string;
  /**
   * @remarks
   * The ID of the intervention glossary. Optional. You must create the glossary in the console and provide its ID. If this parameter is empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The URL of the image to be processed. Required. The resolution must be greater than 256×256, the long edge must not exceed 1920 pixels, and the short edge must not exceed 1080 pixels. The maximum size is 5 MB. Supported formats include PNG, JPEG, JPG, BMP, and WEBP.
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate text on the image subject. Optional. Default value: false. This parameter helps protect embedded information such as product names from being translated.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * Specifies whether to include images with the specified elements in subsequent processing. A value of true indicates that images with the elements are included. A value of false indicates that images with the elements are excluded. Required if you select the intelligent element recognition capability.
   * 
   * @example
   * true
   */
  isFilter?: boolean;
  /**
   * @remarks
   * The specific area to remove in Run-Length Encoding (RLE) format. Optional. If specified, this parameter takes precedence, and the ObjectRemoveElements and NonobjectRemoveElements parameters are ignored.
   * 
   * @example
   * 474556 160 475356 160
   */
  mask?: string;
  /**
   * @remarks
   * The elements to detect on the non-subject area of the image. Valid values: 1 for watermark, 2 for logo, 3 for text, and 4 for text block. You can specify multiple values. If you select the intelligent element recognition capability, you must specify at least one of this parameter and ObjectDetectElements.
   * 
   * @example
   * [1,2,3]
   */
  nonobjectDetectElementsShrink?: string;
  /**
   * @remarks
   * The elements to remove from the non-subject area of the image. Valid values: 1 for transparent text block, 2 for specific name, 3 for text, and 4 for cluttered text overlay. You can specify multiple values. If you select the intelligent erasure capability, you must specify at least one of this parameter and ObjectRemoveElements.
   * 
   * @example
   * [1,2,4]
   */
  nonobjectRemoveElementsShrink?: string;
  /**
   * @remarks
   * The elements to detect on the image subject. Valid values: 1 for watermark, 2 for logo, 3 for text, and 4 for text block. You can specify multiple values. If you select the intelligent element recognition capability, you must specify at least one of this parameter and NonobjectDetectElements.
   * 
   * @example
   * [1,2,3,4]
   */
  objectDetectElementsShrink?: string;
  /**
   * @remarks
   * The elements to remove from the image subject. Valid values: 1 for transparent text block, 2 for specific name, 3 for text, and 4 for cluttered text overlay. You can specify multiple values. If you select the intelligent erasure capability, you must specify at least one of this parameter and NonobjectRemoveElements.
   * 
   * @example
   * [1,2,4]
   */
  objectRemoveElementsShrink?: string;
  /**
   * @remarks
   * The source language code. Optional. For supported language pairs, see the list of supported translation languages.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The expected height of the cropped image in pixels. Valid values: 100 to 5000. Required if you select the intelligent cropping capability.
   * 
   * @example
   * 800
   */
  targetHeight?: number;
  /**
   * @remarks
   * The target language code. Optional. For supported language pairs, see the list of supported translation languages.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The expected width of the cropped image in pixels. Valid values: 100 to 5000. Required if you select the intelligent cropping capability.
   * 
   * @example
   * 800
   */
  targetWidth?: number;
  /**
   * @remarks
   * Specifies whether to translate brand names in the image. Optional. Default value: false. This parameter helps protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * The image upscaling factor. Optional. Default value: 2. Valid values: 2 to 4. Required if you select the high-definition upscaling capability.
   * 
   * @example
   * 2
   */
  upscaleFactor?: number;
  static names(): { [key: string]: string } {
    return {
      abilityShrink: 'Ability',
      backGroundType: 'BackGroundType',
      glossary: 'Glossary',
      imageUrl: 'ImageUrl',
      includingProductArea: 'IncludingProductArea',
      isFilter: 'IsFilter',
      mask: 'Mask',
      nonobjectDetectElementsShrink: 'NonobjectDetectElements',
      nonobjectRemoveElementsShrink: 'NonobjectRemoveElements',
      objectDetectElementsShrink: 'ObjectDetectElements',
      objectRemoveElementsShrink: 'ObjectRemoveElements',
      sourceLanguage: 'SourceLanguage',
      targetHeight: 'TargetHeight',
      targetLanguage: 'TargetLanguage',
      targetWidth: 'TargetWidth',
      translatingBrandInTheProduct: 'TranslatingBrandInTheProduct',
      upscaleFactor: 'UpscaleFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilityShrink: 'string',
      backGroundType: 'string',
      glossary: 'string',
      imageUrl: 'string',
      includingProductArea: 'boolean',
      isFilter: 'boolean',
      mask: 'string',
      nonobjectDetectElementsShrink: 'string',
      nonobjectRemoveElementsShrink: 'string',
      objectDetectElementsShrink: 'string',
      objectRemoveElementsShrink: 'string',
      sourceLanguage: 'string',
      targetHeight: 'number',
      targetLanguage: 'string',
      targetWidth: 'number',
      translatingBrandInTheProduct: 'boolean',
      upscaleFactor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

