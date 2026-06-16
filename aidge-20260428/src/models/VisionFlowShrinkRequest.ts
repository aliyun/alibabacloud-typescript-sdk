// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VisionFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The AI capabilities to apply (1 = intelligent element detection, 2 = intelligent matting, 3 = intelligent removal, 4 = Image Translation Pro, 5 = intelligent cropping, 6 = HD upscaling). Multiple selections allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * [1,2,3,4]
   */
  abilityShrink?: string;
  /**
   * @remarks
   * The background type of the returned image. Valid values: WHITE_BACKGROUND (white background) and TRANSPARENT (transparent background). Required when the intelligent matting capability is selected.
   * 
   * @example
   * WHITE_BACKGROUND
   */
  backGroundType?: string;
  /**
   * @remarks
   * The intervention glossary ID. Optional. Create a glossary separately in the console and provide its ID. If left empty, translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The URL of the image to process. Required. The resolution must be greater than 256 × 256, the long side must not exceed 1920 pixels, and the short side must not exceed 1080 pixels. The file size must not exceed 5 MB. Supported formats: png, jpeg, jpg, bmp, and webp.
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate text on the image subject. Optional. Default value: false. Helps protect embedded information such as product names from being translated.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * Specifies whether images with the detected elements proceed to subsequent processing. A value of true indicates that images containing the elements proceed to subsequent processing. A value of false indicates that they do not. Required when the intelligent element detection capability is selected.
   * 
   * @example
   * true
   */
  isFilter?: boolean;
  /**
   * @remarks
   * The specific removal area in RLE format. Optional. If provided, this parameter takes priority and the ObjectRemoveElements and NonobjectRemoveElements parameters are ignored.
   * 
   * @example
   * 474556 160 475356 160
   */
  mask?: string;
  /**
   * @remarks
   * The elements to detect on the non-subject area of the image (1 = watermark, 2 = logo, 3 = text, 4 = text-bearing color block). Multiple selections allowed. When the intelligent element detection capability is selected, at least one of NonobjectDetectElements and ObjectDetectElements is required.
   * 
   * @example
   * [1,2,3]
   */
  nonobjectDetectElementsShrink?: string;
  /**
   * @remarks
   * The elements to remove from the non-subject area of the image (1 = transparent text block, 2 = specific name, 3 = text, 4 = overlay patch). Multiple selections allowed. When the intelligent removal capability is selected, at least one of NonobjectRemoveElements and ObjectRemoveElements is required.
   * 
   * @example
   * [1,2,4]
   */
  nonobjectRemoveElementsShrink?: string;
  /**
   * @remarks
   * The elements to detect on the image subject (1 = watermark, 2 = logo, 3 = text, 4 = text-bearing color block). Multiple selections allowed. When the intelligent element detection capability is selected, at least one of ObjectDetectElements and NonobjectDetectElements is required.
   * 
   * @example
   * [1,2,3,4]
   */
  objectDetectElementsShrink?: string;
  /**
   * @remarks
   * The elements to remove from the image subject (1 = transparent text block, 2 = specific name, 3 = text, 4 = overlay patch). Multiple selections allowed. When the intelligent removal capability is selected, at least one of ObjectRemoveElements and NonobjectRemoveElements is required.
   * 
   * @example
   * [1,2,4]
   */
  objectRemoveElementsShrink?: string;
  /**
   * @remarks
   * The source language code. Optional. For supported language pairs, see the supported translation language pairs list.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The desired height of the cropped image, in pixels. Valid values: 100 to 5000. Required when the intelligent cropping capability is selected.
   * 
   * @example
   * 800
   */
  targetHeight?: number;
  /**
   * @remarks
   * The target language code. Optional. For supported language pairs, see the supported translation language pairs list.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The desired width of the cropped image, in pixels. Valid values: 100 to 5000. Required when the intelligent cropping capability is selected.
   * 
   * @example
   * 800
   */
  targetWidth?: number;
  /**
   * @remarks
   * Specifies whether to translate brand names on the image. Optional. Default value: false. Helps protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * The image upscaling factor. Optional. Default value: 2. Valid values: 2 to 4. Required when the HD upscaling capability is selected.
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

