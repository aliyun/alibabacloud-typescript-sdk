// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VisionFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The AI capabilities to be processed. Multiple values are supported. Valid values: 1 (Intelligent element recognition), 2 (Intelligent cutout), 3 (Intelligent erasure), 4 (Image translation Pro), 5 (Intelligent cropping), and 6 (High-definition upscaling).
   * 
   * This parameter is required.
   * 
   * @example
   * [1,2,3,4]
   */
  ability?: number[];
  /**
   * @remarks
   * The background type of the returned image. Valid values: WHITE_BACKGROUND (White background image) and TRANSPARENT (Transparent background image). Required when the intelligent cutout capability is selected.
   * 
   * @example
   * WHITE_BACKGROUND
   */
  backGroundType?: string;
  /**
   * @remarks
   * The ID of the intervention glossary. Optional. You must create the glossary in the console and provide its ID. If this parameter is left empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The URL of the image to be processed. Required. The resolution must be greater than 256×256, the long side must not exceed 1920 pixels, and the short side must not exceed 1080 pixels. The size must not exceed 5 MB. Supported formats include PNG, JPEG, JPG, BMP, and WEBP.
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
   * Specifies whether to include images with the specified elements in subsequent processing. A value of true indicates that images with the elements are included in subsequent processing. A value of false indicates that images with the elements are not included. Required when the intelligent element recognition capability is selected.
   * 
   * @example
   * true
   */
  isFilter?: boolean;
  /**
   * @remarks
   * The specific erasure area in Run-Length Encoding (RLE) format. Optional. If this parameter is specified, it takes precedence and the ObjectRemoveElements and NonobjectRemoveElements parameters are ignored.
   * 
   * @example
   * 474556 160 475356 160
   */
  mask?: string;
  /**
   * @remarks
   * The elements to detect on the non-subject area of the image. Multiple values are supported. Valid values: 1 (Watermark), 2 (Logo), 3 (Text), and 4 (Text block). When the intelligent element recognition capability is selected, at least one of this parameter and ObjectDetectElements must be specified.
   * 
   * @example
   * [1,2,3]
   */
  nonobjectDetectElements?: number[];
  /**
   * @remarks
   * The elements to remove from the non-subject area of the image. Multiple values are supported. Valid values: 1 (Transparent text block), 2 (Specific name), 3 (Text), and 4 (Cluttered text). When the intelligent erasure capability is selected, at least one of this parameter and ObjectRemoveElements must be specified.
   * 
   * @example
   * [1,2,4]
   */
  nonobjectRemoveElements?: number[];
  /**
   * @remarks
   * The elements to detect on the image subject. Multiple values are supported. Valid values: 1 (Watermark), 2 (Logo), 3 (Text), and 4 (Text block). When the intelligent element recognition capability is selected, at least one of this parameter and NonobjectDetectElements must be specified.
   * 
   * @example
   * [1,2,3,4]
   */
  objectDetectElements?: number[];
  /**
   * @remarks
   * The elements to remove from the image subject. Multiple values are supported. Valid values: 1 (Transparent text block), 2 (Specific name), 3 (Text), and 4 (Cluttered text). When the intelligent erasure capability is selected, at least one of this parameter and NonobjectRemoveElements must be specified.
   * 
   * @example
   * [1,2,4]
   */
  objectRemoveElements?: number[];
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
   * The expected height of the cropped image, in pixels. Valid values: 100 to 5000. Required when the intelligent cropping capability is selected.
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
   * The expected width of the cropped image, in pixels. Valid values: 100 to 5000. Required when the intelligent cropping capability is selected.
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
   * The image upscaling factor. Optional. Default value: 2. Valid values: 2 to 4. Required when the high-definition upscaling capability is selected.
   * 
   * @example
   * 2
   */
  upscaleFactor?: number;
  static names(): { [key: string]: string } {
    return {
      ability: 'Ability',
      backGroundType: 'BackGroundType',
      glossary: 'Glossary',
      imageUrl: 'ImageUrl',
      includingProductArea: 'IncludingProductArea',
      isFilter: 'IsFilter',
      mask: 'Mask',
      nonobjectDetectElements: 'NonobjectDetectElements',
      nonobjectRemoveElements: 'NonobjectRemoveElements',
      objectDetectElements: 'ObjectDetectElements',
      objectRemoveElements: 'ObjectRemoveElements',
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
      ability: { 'type': 'array', 'itemType': 'number' },
      backGroundType: 'string',
      glossary: 'string',
      imageUrl: 'string',
      includingProductArea: 'boolean',
      isFilter: 'boolean',
      mask: 'string',
      nonobjectDetectElements: { 'type': 'array', 'itemType': 'number' },
      nonobjectRemoveElements: { 'type': 'array', 'itemType': 'number' },
      objectDetectElements: { 'type': 'array', 'itemType': 'number' },
      objectRemoveElements: { 'type': 'array', 'itemType': 'number' },
      sourceLanguage: 'string',
      targetHeight: 'number',
      targetLanguage: 'string',
      targetWidth: 'number',
      translatingBrandInTheProduct: 'boolean',
      upscaleFactor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ability)) {
      $dara.Model.validateArray(this.ability);
    }
    if(Array.isArray(this.nonobjectDetectElements)) {
      $dara.Model.validateArray(this.nonobjectDetectElements);
    }
    if(Array.isArray(this.nonobjectRemoveElements)) {
      $dara.Model.validateArray(this.nonobjectRemoveElements);
    }
    if(Array.isArray(this.objectDetectElements)) {
      $dara.Model.validateArray(this.objectDetectElements);
    }
    if(Array.isArray(this.objectRemoveElements)) {
      $dara.Model.validateArray(this.objectRemoveElements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

