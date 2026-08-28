// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VisionFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The AI capabilities to apply (1=Intelligent Element Detection, 2=Intelligent Matting, 3=Intelligent Removal, 4=Image Translation Pro, 5=Intelligent Cropping, 6=HD Upscaling). Multiple selections allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * [1,2,3,4]
   */
  abilityShrink?: string;
  /**
   * @remarks
   * The background type of the output image. Valid values: WHITE_BACKGROUND (white background) and TRANSPARENT (transparent background). Required when the Intelligent Matting capability is selected.
   * 
   * @example
   * WHITE_BACKGROUND
   */
  backGroundType?: string;
  /**
   * @remarks
   * The glossary ID. Optional. Create the glossary separately in the console and provide its ID. If empty, translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The URL of the image to process. Required. Resolution must be greater than 256×256, long side no greater than 1920 pixels, short side no greater than 1080 pixels. File size must not exceed 5 MB. Supported formats: png, jpeg, jpg, bmp, webp.
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
   * Specifies whether images containing the specified elements proceed to subsequent processing. A value of true indicates that images with the specified elements proceed to subsequent processing. A value of false indicates that images without the specified elements proceed. Required when the Intelligent Element Detection capability is selected.
   * 
   * @example
   * true
   */
  isFilter?: boolean;
  /**
   * @remarks
   * The specific removal area in RLE format. Optional. If provided, this takes priority and the ObjectRemoveElements and NonobjectRemoveElements parameters are ignored.
   * 
   * @example
   * 474556 160 475356 160
   */
  mask?: string;
  /**
   * @remarks
   * The elements to detect on the non-subject area of the image (1=Watermark, 2=Logo, 3=Text, 4=Text-bearing color block). Multiple selections allowed. When the Intelligent Element Detection capability is selected, at least one of NonobjectDetectElements or ObjectDetectElements is required.
   * 
   * @example
   * [1,2,3]
   */
  nonobjectDetectElementsShrink?: string;
  /**
   * @remarks
   * The elements to remove from the non-subject area of the image (1=Transparent text block, 2=Specific name, 3=Text, 4=Ad patch). Multiple selections allowed. When the Intelligent Removal capability is selected, at least one of NonobjectRemoveElements or ObjectRemoveElements is required.
   * 
   * @example
   * [1,2,4]
   */
  nonobjectRemoveElementsShrink?: string;
  /**
   * @remarks
   * The elements to detect on the image subject (1=Watermark, 2=Logo, 3=Text, 4=Text-bearing color block). Multiple selections allowed. When the Intelligent Element Detection capability is selected, at least one of ObjectDetectElements or NonobjectDetectElements is required.
   * 
   * @example
   * [1,2,3,4]
   */
  objectDetectElementsShrink?: string;
  /**
   * @remarks
   * The elements to remove from the image subject (1=Transparent text block, 2=Specific name, 3=Text, 4=Ad patch). Multiple selections allowed. When the Intelligent Removal capability is selected, at least one of ObjectRemoveElements or NonobjectRemoveElements is required.
   * 
   * @example
   * [1,2,4]
   */
  objectRemoveElementsShrink?: string;
  /**
   * @remarks
   * The source language code. Optional. Refer to the supported language pairs list for available language directions.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The desired height of the cropped image, in pixels. Valid values: 100 to 5000. Required when the Intelligent Cropping capability is selected.
   * 
   * @example
   * 800
   */
  targetHeight?: number;
  /**
   * @remarks
   * The target language code. Optional. Refer to the supported language pairs list for available language directions.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The desired width of the cropped image, in pixels. Valid values: 100 to 5000. Required when the Intelligent Cropping capability is selected.
   * 
   * @example
   * 800
   */
  targetWidth?: number;
  /**
   * @remarks
   * Specifies whether to translate brand names in the image. Optional. Default value: false. Helps protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * The image upscaling factor. Optional. Default value: 2. Valid values: 2 to 4. Required when the HD Upscaling capability is selected.
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

