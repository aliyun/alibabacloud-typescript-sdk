// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 25.0
   */
  confidence?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a title.
   */
  description?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * nonlabel
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation extends $dara.Model {
  /**
   * @remarks
   * The H value of the coordinate point.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The W value of the coordinate point.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The X value of the coordinate point.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The Y value of the coordinate point.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageResultImageResult extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a title.
   */
  description?: string;
  /**
   * @remarks
   * The label information.
   */
  labelResult?: DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult[];
  /**
   * @remarks
   * The location information
   */
  location?: DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation;
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The moderation service.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labelResult: 'LabelResult',
      location: 'Location',
      riskLevel: 'RiskLevel',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labelResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult },
      location: DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation,
      riskLevel: 'string',
      service: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelResult)) {
      $dara.Model.validateArray(this.labelResult);
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageResultTextResult extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a title.
   */
  description?: string;
  descriptions?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk details that are hit.
   * 
   * @example
   * xxx
   */
  riskTips?: string;
  /**
   * @remarks
   * The risk words that are hit.
   * 
   * @example
   * xxx
   */
  riskWords?: string;
  /**
   * @remarks
   * The moderation service.
   * 
   * @example
   * chat_detection
   */
  service?: string;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * This is a text.
   */
  text?: string;
  /**
   * @remarks
   * The text segmentation information.
   * 
   * @example
   * [0,999]
   */
  textSegment?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      descriptions: 'Descriptions',
      labels: 'Labels',
      riskLevel: 'RiskLevel',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      service: 'Service',
      text: 'Text',
      textSegment: 'TextSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      descriptions: 'string',
      labels: 'string',
      riskLevel: 'string',
      riskTips: 'string',
      riskWords: 'string',
      service: 'string',
      text: 'string',
      textSegment: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageResult extends $dara.Model {
  /**
   * @remarks
   * The image moderation results.
   */
  imageResult?: DescribeFileModerationResultResponseBodyDataPageResultImageResult[];
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The text moderation results.
   */
  textResult?: DescribeFileModerationResultResponseBodyDataPageResultTextResult[];
  /**
   * @remarks
   * The text URL.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.txt
   */
  textUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageResult: 'ImageResult',
      imageUrl: 'ImageUrl',
      pageNum: 'PageNum',
      textResult: 'TextResult',
      textUrl: 'TextUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResultImageResult },
      imageUrl: 'string',
      pageNum: 'number',
      textResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResultTextResult },
      textUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageResult)) {
      $dara.Model.validateArray(this.imageResult);
    }
    if(Array.isArray(this.textResult)) {
      $dara.Model.validateArray(this.textResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageSummaryImageSummaryImageLabels extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * contraband
   */
  label?: string;
  /**
   * @remarks
   * The number of times that the label is matched.
   * 
   * @example
   * 1
   */
  labelSum?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      labelSum: 'LabelSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      labelSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary extends $dara.Model {
  /**
   * @remarks
   * Image Label
   */
  imageLabels?: DescribeFileModerationResultResponseBodyDataPageSummaryImageSummaryImageLabels[];
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      imageLabels: 'ImageLabels',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageLabels: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageSummaryImageSummaryImageLabels },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageLabels)) {
      $dara.Model.validateArray(this.imageLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageSummaryTextSummaryTextLabels extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * contraband
   */
  label?: string;
  /**
   * @remarks
   * The number of times that the label is matched.
   * 
   * @example
   * 1
   */
  labelSum?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      labelSum: 'LabelSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      labelSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary extends $dara.Model {
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Text Label
   */
  textLabels?: DescribeFileModerationResultResponseBodyDataPageSummaryTextSummaryTextLabels[];
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      textLabels: 'TextLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      textLabels: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageSummaryTextSummaryTextLabels },
    };
  }

  validate() {
    if(Array.isArray(this.textLabels)) {
      $dara.Model.validateArray(this.textLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageSummary extends $dara.Model {
  /**
   * @remarks
   * Image Results Summary
   */
  imageSummary?: DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary;
  /**
   * @remarks
   * Number of pages
   * 
   * @example
   * 1
   */
  pageSum?: number;
  /**
   * @remarks
   * Text Results Summary
   */
  textSummary?: DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary;
  static names(): { [key: string]: string } {
    return {
      imageSummary: 'ImageSummary',
      pageSum: 'PageSum',
      textSummary: 'TextSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageSummary: DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary,
      pageSum: 'number',
      textSummary: DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary,
    };
  }

  validate() {
    if(this.imageSummary && typeof (this.imageSummary as any).validate === 'function') {
      (this.imageSummary as any).validate();
    }
    if(this.textSummary && typeof (this.textSummary as any).validate === 'function') {
      (this.textSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * Optional. The document type.
   * 
   * @example
   * doc
   */
  docType?: string;
  /**
   * @remarks
   * An array that consists of the moderation results.
   */
  pageResult?: DescribeFileModerationResultResponseBodyDataPageResult[];
  /**
   * @remarks
   * Summary of results
   */
  pageSummary?: DescribeFileModerationResultResponseBodyDataPageSummary;
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The URL of the moderated object.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      docType: 'DocType',
      pageResult: 'PageResult',
      pageSummary: 'PageSummary',
      riskLevel: 'RiskLevel',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      docType: 'string',
      pageResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResult },
      pageSummary: DescribeFileModerationResultResponseBodyDataPageSummary,
      riskLevel: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pageResult)) {
      $dara.Model.validateArray(this.pageResult);
    }
    if(this.pageSummary && typeof (this.pageSummary as any).validate === 'function') {
      (this.pageSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The description of the result.
   * 
   * @example
   * no risk
   */
  description?: string;
  /**
   * @remarks
   * The labels returned after the image moderation.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of dataId that is specified in the API request. If this parameter is not specified in the API request, this field is not available in the response.
   * 
   * @example
   * 2a5389eb-4ff8-4584-ac99-644e2a539aa1
   */
  dataId?: string;
  /**
   * @remarks
   * The information about the captured frames.
   * 
   * @example
   * [{"result":[{"confidence":81.22,"label":"violent_explosion"}]}]
   */
  frame?: string;
  /**
   * @remarks
   * The number of frames.
   * 
   * @example
   * 1
   */
  frameNum?: number;
  /**
   * @remarks
   * The reqId field returned by the Image Async Moderation API.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  /**
   * @remarks
   * The results of image moderation parameters such as the label parameter and the confidence parameter.
   */
  result?: DescribeImageModerationResultResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      frame: 'Frame',
      frameNum: 'FrameNum',
      reqId: 'ReqId',
      result: 'Result',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      frame: 'string',
      frameNum: 'number',
      reqId: 'string',
      result: { 'type': 'array', 'itemType': DescribeImageModerationResultResponseBodyDataResult },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataCustomImage extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 123456
   */
  imageId?: string;
  /**
   * @remarks
   * The image library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * The image library name.
   * 
   * @example
   * 图库123
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataPublicFigure extends $dara.Model {
  /**
   * @remarks
   * Identified person coding information.
   * 
   * @example
   * yzazhzou
   */
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataTextInImageCustomTexts extends $dara.Model {
  /**
   * @remarks
   * Custom words, multiple words separated by commas.
   * 
   * @example
   * aaa,bbb
   */
  keyWords?: string;
  /**
   * @remarks
   * Custom library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * Custom library name.
   * 
   * @example
   * test
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataTextInImage extends $dara.Model {
  /**
   * @remarks
   * When a custom text library is hit, the custom library ID, custom library name, and custom word are returned.
   */
  customTexts?: DescribeImageResultExtResponseBodyDataTextInImageCustomTexts[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrDatas?: string[];
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   */
  riskWords?: string[];
  static names(): { [key: string]: string } {
    return {
      customTexts: 'CustomTexts',
      ocrDatas: 'OcrDatas',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTexts: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataTextInImageCustomTexts },
      ocrDatas: { 'type': 'array', 'itemType': 'string' },
      riskWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customTexts)) {
      $dara.Model.validateArray(this.customTexts);
    }
    if(Array.isArray(this.ocrDatas)) {
      $dara.Model.validateArray(this.ocrDatas);
    }
    if(Array.isArray(this.riskWords)) {
      $dara.Model.validateArray(this.riskWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the hit custom image library is returned.
   */
  customImage?: DescribeImageResultExtResponseBodyDataCustomImage[];
  /**
   * @remarks
   * Person information list.
   */
  publicFigure?: DescribeImageResultExtResponseBodyDataPublicFigure[];
  /**
   * @remarks
   * Returns the text information in the hit image.
   */
  textInImage?: DescribeImageResultExtResponseBodyDataTextInImage;
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      publicFigure: 'PublicFigure',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataCustomImage },
      publicFigure: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataPublicFigure },
      textInImage: DescribeImageResultExtResponseBodyDataTextInImage,
    };
  }

  validate() {
    if(Array.isArray(this.customImage)) {
      $dara.Model.validateArray(this.customImage);
    }
    if(Array.isArray(this.publicFigure)) {
      $dara.Model.validateArray(this.publicFigure);
    }
    if(this.textInImage && typeof (this.textInImage as any).validate === 'function') {
      (this.textInImage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NUEUjvDqMuvH6oQA1TXxxH4wVR
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * xxxx
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * oss-cip-shanghai
   */
  bucketName?: string;
  /**
   * @remarks
   * The time when the file sharing link expires.
   * 
   * @example
   * 1720577200
   */
  expiration?: number;
  /**
   * @remarks
   * The file prefix.
   * 
   * @example
   * upload/1xxb89/
   */
  fileNamePrefix?: string;
  /**
   * @remarks
   * the oss intranet point.
   * 
   * @example
   * https://oss-cn-shanghai-internal.aliyuncs.com
   */
  ossInternalEndPoint?: string;
  /**
   * @remarks
   * the oss internet point.
   * 
   * @example
   * https://oss-cn-shanghai.aliyuncs.com
   */
  ossInternetEndPoint?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * xxxx
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expiration: 'Expiration',
      fileNamePrefix: 'FileNamePrefix',
      ossInternalEndPoint: 'OssInternalEndPoint',
      ossInternetEndPoint: 'OssInternetEndPoint',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expiration: 'number',
      fileNamePrefix: 'string',
      ossInternalEndPoint: 'string',
      ossInternetEndPoint: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The ICP number.
   * 
   * @example
   * xx
   */
  icpNo?: string;
  /**
   * @remarks
   * The type of the ICP filing.
   * 
   * @example
   * xx
   */
  icpType?: string;
  /**
   * @remarks
   * The type of site
   * 
   * @example
   * game
   */
  siteType?: string;
  static names(): { [key: string]: string } {
    return {
      icpNo: 'IcpNo',
      icpType: 'IcpType',
      siteType: 'SiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNo: 'string',
      icpType: 'string',
      siteType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The labels returned after the asynchronous URL moderation.
   * 
   * @example
   * sexual_url
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of dataId that is specified in the API request. If this parameter is not specified in the API request, this field is not available in the response.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The supplementary information.
   */
  extraInfo?: DescribeUrlModerationResultResponseBodyDataExtraInfo;
  /**
   * @remarks
   * The ReqId field returned by an asynchronous URL moderation operation.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: DescribeUrlModerationResultResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      extraInfo: 'ExtraInfo',
      reqId: 'ReqId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      extraInfo: DescribeUrlModerationResultResponseBodyDataExtraInfo,
      reqId: 'string',
      result: { 'type': 'array', 'itemType': DescribeUrlModerationResultResponseBodyDataResult },
    };
  }

  validate() {
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * fb5ffab1-993b-449f-b8d6-b97d5e3331f2
   */
  dataId?: string;
  /**
   * @remarks
   * The reqId field returned by the Image Async Moderation API. You can use this field to query the detection results.
   * 
   * @example
   * A07B3DB9-D762-5C56-95B1-8EC55CF176D2
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * Confidence score, ranging from 0 to 100, retained to two decimal places. Some labels do not have a confidence score.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * No risk detected
   */
  description?: string;
  /**
   * @remarks
   * The labels returned after image content detection. A single image may be associated with multiple labels and corresponding scores.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtCustomImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the hit custom image.
   * 
   * @example
   * 1965304870002
   */
  imageId?: string;
  /**
   * @remarks
   * Custom library ID
   * 
   * @example
   * 1965304870002
   */
  libId?: string;
  /**
   * @remarks
   * The name of the hit custom gallery.
   * 
   * @example
   * Whitelist
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtLogoDataLocation extends $dara.Model {
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 440
   */
  h?: number;
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 330
   */
  w?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the y-axis, with the top-left corner of the image as the origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the x-axis, with the top-left corner of the image as the origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtLogoDataLogo extends $dara.Model {
  /**
   * @remarks
   * Confidence score, from 0 to 100, rounded to two decimal places.
   * 
   * @example
   * 99.1
   */
  confidence?: number;
  /**
   * @remarks
   * Identify the category.
   * 
   * @example
   * logo_sns
   */
  label?: string;
  /**
   * @remarks
   * identifier  name.
   * 
   * @example
   * Alibaba Cloud
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtLogoData extends $dara.Model {
  /**
   * @remarks
   * The location information of the identifier.
   */
  location?: ImageBatchModerationResponseBodyDataResultsExtLogoDataLocation;
  /**
   * @remarks
   * identification information
   */
  logo?: ImageBatchModerationResponseBodyDataResultsExtLogoDataLogo[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      logo: 'Logo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageBatchModerationResponseBodyDataResultsExtLogoDataLocation,
      logo: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtLogoDataLogo },
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(Array.isArray(this.logo)) {
      $dara.Model.validateArray(this.logo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation extends $dara.Model {
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 440
   */
  h?: number;
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 330
   */
  w?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the y-axis, with the top-left corner of the image as the origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the x-axis, with the top-left corner of the image as the origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtPublicFigure extends $dara.Model {
  /**
   * @remarks
   * Identify the encoded information of the person.
   * 
   * @example
   * 12324222
   */
  figureId?: string;
  /**
   * @remarks
   * The identified person\\"s name information.
   * 
   * @example
   * xxxxx
   */
  figureName?: string;
  /**
   * @remarks
   * The location information of the identifier.
   */
  location?: ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation[];
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
      figureName: 'FigureName',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
      figureName: 'string',
      location: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation },
    };
  }

  validate() {
    if(Array.isArray(this.location)) {
      $dara.Model.validateArray(this.location);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText extends $dara.Model {
  /**
   * @remarks
   * Custom words, separate multiple words with commas.
   * 
   * @example
   * Custom Word 1  and  Custom Word 2
   */
  keyWords?: string;
  /**
   * @remarks
   * Custom library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * Custom library name.
   * 
   * @example
   * Custom Library 1
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 33
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 44
   */
  w?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the y-axis, with the top-left corner of the image as the origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the x-axis, with the top-left corner of the image as the origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult extends $dara.Model {
  /**
   * @remarks
   * Text line coordinate information.
   */
  location?: ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation;
  /**
   * @remarks
   * Text information.
   * 
   * @example
   * abcd
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation,
      text: 'string',
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExtTextInImage extends $dara.Model {
  /**
   * @remarks
   * When a custom text library is matched, return the custom library ID, custom library name, and custom words.
   */
  customText?: ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText[];
  /**
   * @remarks
   * Return the text information of each line recognized in the image.
   */
  ocrResult?: ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult[];
  /**
   * @remarks
   * hit risk keywords
   */
  riskWord?: string[];
  static names(): { [key: string]: string } {
    return {
      customText: 'CustomText',
      ocrResult: 'OcrResult',
      riskWord: 'RiskWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customText: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText },
      ocrResult: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult },
      riskWord: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customText)) {
      $dara.Model.validateArray(this.customText);
    }
    if(Array.isArray(this.ocrResult)) {
      $dara.Model.validateArray(this.ocrResult);
    }
    if(Array.isArray(this.riskWord)) {
      $dara.Model.validateArray(this.riskWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsExt extends $dara.Model {
  /**
   * @remarks
   * Custom image library hit information list.
   */
  customImage?: ImageBatchModerationResponseBodyDataResultsExtCustomImage[];
  /**
   * @remarks
   * Logo identification information.
   */
  logoData?: ImageBatchModerationResponseBodyDataResultsExtLogoData;
  /**
   * @remarks
   * List of character information.
   */
  publicFigure?: ImageBatchModerationResponseBodyDataResultsExtPublicFigure[];
  /**
   * @remarks
   * Return the text information from the recognized images.
   */
  textInImage?: ImageBatchModerationResponseBodyDataResultsExtTextInImage;
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      logoData: 'LogoData',
      publicFigure: 'PublicFigure',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtCustomImage },
      logoData: ImageBatchModerationResponseBodyDataResultsExtLogoData,
      publicFigure: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtPublicFigure },
      textInImage: ImageBatchModerationResponseBodyDataResultsExtTextInImage,
    };
  }

  validate() {
    if(Array.isArray(this.customImage)) {
      $dara.Model.validateArray(this.customImage);
    }
    if(this.logoData && typeof (this.logoData as any).validate === 'function') {
      (this.logoData as any).validate();
    }
    if(Array.isArray(this.publicFigure)) {
      $dara.Model.validateArray(this.publicFigure);
    }
    if(this.textInImage && typeof (this.textInImage as any).validate === 'function') {
      (this.textInImage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResultsResult extends $dara.Model {
  /**
   * @remarks
   * Confidence score, ranging from 0 to 100, rounded to two decimal places. Some labels do not have a confidence score.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * No risk detected
   */
  description?: string;
  /**
   * @remarks
   * The labels returned after image content detection. A single image may have multiple labels and corresponding scores detected.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Image supplementary reference information.
   */
  ext?: ImageBatchModerationResponseBodyDataResultsExt;
  /**
   * @remarks
   * The risk labels, confidence scores, and other parameters of image detection results, in an array structure.
   */
  result?: ImageBatchModerationResponseBodyDataResultsResult[];
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The enhanced image detection service supports various detection services.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      result: 'Result',
      riskLevel: 'RiskLevel',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: ImageBatchModerationResponseBodyDataResultsExt,
      result: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsResult },
      riskLevel: 'string',
      service: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * To detect the data ID corresponding to the object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The risk labels, confidence scores, and other parameters of image detection results, in an array structure.
   */
  result?: ImageBatchModerationResponseBodyDataResult[];
  /**
   * @remarks
   * The risk labels, confidence scores, and other parameters for each service\\"s image detection, in an array structure.
   */
  results?: ImageBatchModerationResponseBodyDataResults[];
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      result: 'Result',
      results: 'Results',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      result: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResult },
      results: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResults },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtCustomImage extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 123456
   */
  imageId?: string;
  /**
   * @remarks
   * The image library ID.
   * 
   * @example
   * lib_123456
   */
  libId?: string;
  /**
   * @remarks
   * The image library name.
   * 
   * @example
   * xx
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataBang extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the bang recognition result. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 81.88
   */
  confidence?: number;
  /**
   * @remarks
   * Indicates whether the recognition result of bangs is available.
   * 
   * @example
   * Has
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataGender extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the gender recognition result. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 81.88
   */
  confidence?: number;
  /**
   * @remarks
   * The gender recognition result. Valid values:
   * 
   * - Male
   * 
   * - FeMale
   * 
   * @example
   * FeMale
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataHairstyle extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the hairstyle recognition result. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 81.88
   */
  confidence?: number;
  /**
   * @remarks
   * The hairstyle recognition result. Valid values:
   * 
   * - Bald: bald head.
   * 
   * - Long: Long hair.
   * 
   * - Short: Short hair.
   * 
   * @example
   * Short
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataHat extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the result of wearing the hat. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 88.88
   */
  confidence?: number;
  /**
   * @remarks
   * The recognition result of whether to wear the hat. Valid values:
   * 
   * - Wear: Wear a hat.
   * 
   * - None: No hat.
   * 
   * @example
   * Wear
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the face area. Unit: pixels.
   * 
   * @example
   * 26
   */
  h?: number;
  /**
   * @remarks
   * The width of the face area. Unit: pixels.
   * 
   * @example
   * 83
   */
  w?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the face area to the y-axis with the upper-left corner of the image as the coordinate origin. Unit: pixels.
   * 
   * @example
   * 41
   */
  x?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the face area to the x-axis with the upper-left corner of the image as the coordinate origin. Unit: pixels.
   * 
   * @example
   * 84
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataMask extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the result of wearing the mask. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 99.99
   */
  confidence?: number;
  /**
   * @remarks
   * The recognition result of whether to wear a mask. Valid values:
   * 
   * - Wear a mask.
   * 
   *  - None: No mask.
   * 
   * @example
   * Wear
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataMustache extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the result of the beard. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 99.99
   */
  confidence?: number;
  /**
   * @remarks
   * The identification result of whether there is a beard.Valid values:
   * 
   * - Has:have a beard.
   * 
   * - None:No beard.
   * 
   * @example
   * Has
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceDataQuality extends $dara.Model {
  /**
   * @remarks
   * The blur of the face image. Valid values: 0 to 100. The higher the score, the more fuzzy it is.
   * Recommended values: 0 to 25.
   * 
   * @example
   * 5.88
   */
  blur?: number;
  /**
   * @remarks
   * The integrity of the human face. Recommended values:80 to 100.
   * 
   * @example
   * 100.0
   */
  integrity?: number;
  /**
   * @remarks
   * The head-up or head-down angle of the face.
   * Recommended values:-30 to 30.
   * 
   * @example
   * 5.88
   */
  pitch?: number;
  /**
   * @remarks
   * The plane rotation angle of the face.
   * Recommended values:-30 to 30.
   * 
   * @example
   * 5.18
   */
  roll?: number;
  /**
   * @remarks
   * The left and right shaking angle of the human face.
   * Recommended values:-30 to 30.
   * 
   * @example
   * 5.18
   */
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      blur: 'Blur',
      integrity: 'Integrity',
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blur: 'number',
      integrity: 'number',
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtFaceData extends $dara.Model {
  /**
   * @remarks
   * The age recognition result.
   * 
   * @example
   * 18
   */
  age?: number;
  /**
   * @remarks
   * Indicates whether the recognition result of bangs is available.
   */
  bang?: ImageModerationResponseBodyDataExtFaceDataBang;
  /**
   * @remarks
   * The gender recognition result.
   */
  gender?: ImageModerationResponseBodyDataExtFaceDataGender;
  /**
   * @remarks
   * The recognition result of whether to wear glasses.
   * 
   * - None: No glasses.
   * 
   * - Wear: Wear glasses.
   * 
   * - Sunglass: Wear sunglasses.
   * 
   * @example
   * Common
   */
  glasses?: string;
  /**
   * @remarks
   * The hairstyle recognition result.
   */
  hairstyle?: ImageModerationResponseBodyDataExtFaceDataHairstyle;
  /**
   * @remarks
   * The recognition result of whether to wear a hat.
   */
  hat?: ImageModerationResponseBodyDataExtFaceDataHat;
  /**
   * @remarks
   * The location of the face.
   */
  location?: ImageModerationResponseBodyDataExtFaceDataLocation;
  /**
   * @remarks
   * The recognition result of whether to wear a mask.
   */
  mask?: ImageModerationResponseBodyDataExtFaceDataMask;
  /**
   * @remarks
   * The identification result of whether there is a beard.
   */
  mustache?: ImageModerationResponseBodyDataExtFaceDataMustache;
  /**
   * @remarks
   * The quality information of the face image.
   */
  quality?: ImageModerationResponseBodyDataExtFaceDataQuality;
  /**
   * @remarks
   * The smiling degree of the face.
   * 
   * @example
   * 85.88
   */
  smile?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      bang: 'Bang',
      gender: 'Gender',
      glasses: 'Glasses',
      hairstyle: 'Hairstyle',
      hat: 'Hat',
      location: 'Location',
      mask: 'Mask',
      mustache: 'Mustache',
      quality: 'Quality',
      smile: 'Smile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      bang: ImageModerationResponseBodyDataExtFaceDataBang,
      gender: ImageModerationResponseBodyDataExtFaceDataGender,
      glasses: 'string',
      hairstyle: ImageModerationResponseBodyDataExtFaceDataHairstyle,
      hat: ImageModerationResponseBodyDataExtFaceDataHat,
      location: ImageModerationResponseBodyDataExtFaceDataLocation,
      mask: ImageModerationResponseBodyDataExtFaceDataMask,
      mustache: ImageModerationResponseBodyDataExtFaceDataMustache,
      quality: ImageModerationResponseBodyDataExtFaceDataQuality,
      smile: 'number',
    };
  }

  validate() {
    if(this.bang && typeof (this.bang as any).validate === 'function') {
      (this.bang as any).validate();
    }
    if(this.gender && typeof (this.gender as any).validate === 'function') {
      (this.gender as any).validate();
    }
    if(this.hairstyle && typeof (this.hairstyle as any).validate === 'function') {
      (this.hairstyle as any).validate();
    }
    if(this.hat && typeof (this.hat as any).validate === 'function') {
      (this.hat as any).validate();
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(this.mask && typeof (this.mask as any).validate === 'function') {
      (this.mask as any).validate();
    }
    if(this.mustache && typeof (this.mustache as any).validate === 'function') {
      (this.mustache as any).validate();
    }
    if(this.quality && typeof (this.quality as any).validate === 'function') {
      (this.quality as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtLogoDataLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtLogoDataLogo extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 99.01
   */
  confidence?: number;
  /**
   * @remarks
   * Logo category.
   * 
   * @example
   * xx
   */
  label?: string;
  /**
   * @remarks
   * Logo name.
   * 
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtLogoData extends $dara.Model {
  /**
   * @remarks
   * Location information.
   */
  location?: ImageModerationResponseBodyDataExtLogoDataLocation;
  /**
   * @remarks
   * Logo information.
   */
  logo?: ImageModerationResponseBodyDataExtLogoDataLogo[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      logo: 'Logo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageModerationResponseBodyDataExtLogoDataLocation,
      logo: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtLogoDataLogo },
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(Array.isArray(this.logo)) {
      $dara.Model.validateArray(this.logo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtOcrResultLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtOcrResult extends $dara.Model {
  /**
   * @remarks
   * Location information.
   */
  location?: ImageModerationResponseBodyDataExtOcrResultLocation;
  /**
   * @remarks
   * The text information in the recognized image.
   * 
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageModerationResponseBodyDataExtOcrResultLocation,
      text: 'string',
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtPublicFigureLocation extends $dara.Model {
  /**
   * @remarks
   * The height
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The weight
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * X coordinate
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtPublicFigure extends $dara.Model {
  /**
   * @remarks
   * Identified person coding information.
   * 
   * @example
   * xx
   */
  figureId?: string;
  /**
   * @remarks
   * Identified person name information.
   * 
   * @example
   * xx
   */
  figureName?: string;
  /**
   * @remarks
   * the data array of location info
   */
  location?: ImageModerationResponseBodyDataExtPublicFigureLocation[];
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
      figureName: 'FigureName',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
      figureName: 'string',
      location: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtPublicFigureLocation },
    };
  }

  validate() {
    if(Array.isArray(this.location)) {
      $dara.Model.validateArray(this.location);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtRecognition extends $dara.Model {
  /**
   * @remarks
   * The category of image recognition.
   * 
   * @example
   * xx
   */
  classification?: string;
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 99.01
   */
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      confidence: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImageCustomText extends $dara.Model {
  /**
   * @remarks
   * Custom words, multiple words separated by commas.
   * 
   * @example
   * aaa,bbb
   */
  keyWords?: string;
  /**
   * @remarks
   * Custom library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * Custom library name.
   * 
   * @example
   * xxxx
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImageOcrResultLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 33
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 44
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImageOcrResult extends $dara.Model {
  /**
   * @remarks
   * Location information.
   */
  location?: ImageModerationResponseBodyDataExtTextInImageOcrResultLocation;
  /**
   * @remarks
   * The text information in the recognized image.
   * 
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageModerationResponseBodyDataExtTextInImageOcrResultLocation,
      text: 'string',
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImage extends $dara.Model {
  /**
   * @remarks
   * When a custom text library is hit, the custom library ID, custom library name, and custom word are returned.
   */
  customText?: ImageModerationResponseBodyDataExtTextInImageCustomText[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrResult?: ImageModerationResponseBodyDataExtTextInImageOcrResult[];
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   */
  riskWord?: string[];
  static names(): { [key: string]: string } {
    return {
      customText: 'CustomText',
      ocrResult: 'OcrResult',
      riskWord: 'RiskWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customText: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtTextInImageCustomText },
      ocrResult: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtTextInImageOcrResult },
      riskWord: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customText)) {
      $dara.Model.validateArray(this.customText);
    }
    if(Array.isArray(this.ocrResult)) {
      $dara.Model.validateArray(this.ocrResult);
    }
    if(Array.isArray(this.riskWord)) {
      $dara.Model.validateArray(this.riskWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtVlContent extends $dara.Model {
  /**
   * @remarks
   * the vl output content
   * 
   * @example
   * this is a cat
   */
  outputText?: string;
  static names(): { [key: string]: string } {
    return {
      outputText: 'OutputText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExt extends $dara.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the hit custom image library is returned.
   */
  customImage?: ImageModerationResponseBodyDataExtCustomImage[];
  /**
   * @remarks
   * The returned face attribute information
   */
  faceData?: ImageModerationResponseBodyDataExtFaceData[];
  /**
   * @remarks
   * Logo information.
   */
  logoData?: ImageModerationResponseBodyDataExtLogoData[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrResult?: ImageModerationResponseBodyDataExtOcrResult[];
  /**
   * @remarks
   * Person information list.
   */
  publicFigure?: ImageModerationResponseBodyDataExtPublicFigure[];
  /**
   * @remarks
   * The result of image recognition.
   */
  recognition?: ImageModerationResponseBodyDataExtRecognition[];
  /**
   * @remarks
   * Returns the text information in the hit image.
   */
  textInImage?: ImageModerationResponseBodyDataExtTextInImage;
  /**
   * @remarks
   * the vl output content
   */
  vlContent?: ImageModerationResponseBodyDataExtVlContent;
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      faceData: 'FaceData',
      logoData: 'LogoData',
      ocrResult: 'OcrResult',
      publicFigure: 'PublicFigure',
      recognition: 'Recognition',
      textInImage: 'TextInImage',
      vlContent: 'VlContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtCustomImage },
      faceData: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtFaceData },
      logoData: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtLogoData },
      ocrResult: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtOcrResult },
      publicFigure: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtPublicFigure },
      recognition: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtRecognition },
      textInImage: ImageModerationResponseBodyDataExtTextInImage,
      vlContent: ImageModerationResponseBodyDataExtVlContent,
    };
  }

  validate() {
    if(Array.isArray(this.customImage)) {
      $dara.Model.validateArray(this.customImage);
    }
    if(Array.isArray(this.faceData)) {
      $dara.Model.validateArray(this.faceData);
    }
    if(Array.isArray(this.logoData)) {
      $dara.Model.validateArray(this.logoData);
    }
    if(Array.isArray(this.ocrResult)) {
      $dara.Model.validateArray(this.ocrResult);
    }
    if(Array.isArray(this.publicFigure)) {
      $dara.Model.validateArray(this.publicFigure);
    }
    if(Array.isArray(this.recognition)) {
      $dara.Model.validateArray(this.recognition);
    }
    if(this.textInImage && typeof (this.textInImage as any).validate === 'function') {
      (this.textInImage as any).validate();
    }
    if(this.vlContent && typeof (this.vlContent as any).validate === 'function') {
      (this.vlContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The description of the result.
   * 
   * @example
   * no risk
   */
  description?: string;
  /**
   * @remarks
   * The labels returned after the image moderation. Multiple risk labels and the corresponding scores of confidence levels may be returned for an image.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * >  If you specify the dataId parameter in the request, the value of the dataId parameter is returned in the response.
   * 
   * @example
   * fb5ffab1-993b-449f-b8d6-b97d5e3331f2
   */
  dataId?: string;
  /**
   * @remarks
   * Auxiliary reference information.
   */
  ext?: ImageModerationResponseBodyDataExt;
  /**
   * @remarks
   * The results of image moderation parameters such as the label parameter and the confidence parameter, which are an array structure.
   */
  result?: ImageModerationResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      ext: 'Ext',
      result: 'Result',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      ext: ImageModerationResponseBodyDataExt,
      result: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataResult },
      riskLevel: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualModerationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2a5389eb-4ff8-4584-ac99-644e2a539aa1
   */
  dataId?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualModerationResultResponseBodyDataResult extends $dara.Model {
  description?: string;
  /**
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualModerationResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * data1234
   */
  dataId?: string;
  result?: ManualModerationResultResponseBodyDataResult[];
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      result: 'Result',
      riskLevel: 'RiskLevel',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      result: { 'type': 'array', 'itemType': ManualModerationResultResponseBodyDataResult },
      riskLevel: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123456
   */
  accountId?: string;
  dataId?: string;
  descriptions?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * xxxxxx
   */
  deviceId?: string;
  /**
   * @remarks
   * Labels.
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * The JSON string used to locate the cause.
   * 
   * @example
   * {\\"detectedLanguage\\":\\"ar\\",\\"riskTips\\":\\"sexuality_Suggestive\\",\\"riskWords\\":\\"pxxxxy\\",\\"translatedContent\\":\\"pxxxxy sxxxx\\"}
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      dataId: 'dataId',
      descriptions: 'descriptions',
      deviceId: 'deviceId',
      labels: 'labels',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dataId: 'string',
      descriptions: 'string',
      deviceId: 'string',
      labels: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataAdvice extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * XXX
   */
  answer?: string;
  /**
   * @remarks
   * Hit Label
   * 
   * @example
   * xxx
   */
  hitLabel?: string;
  /**
   * @remarks
   * Hit Library Name
   * 
   * @example
   * xxx
   */
  hitLibName?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      hitLabel: 'HitLabel',
      hitLibName: 'HitLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      hitLabel: 'string',
      hitLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataResultCustomizedHit extends $dara.Model {
  /**
   * @remarks
   * The terms that are hit. Multiple terms are separated by commas (,).
   * 
   * @example
   * xxx
   */
  keyWords?: string;
  /**
   * @remarks
   * The library name.
   * 
   * @example
   * test
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The custom term hit by the moderated content.
   */
  customizedHit?: TextModerationPlusResponseBodyDataResultCustomizedHit[];
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * none
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The term hit by the moderated content.
   * 
   * @example
   * XXX
   */
  riskWords?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      customizedHit: 'CustomizedHit',
      description: 'Description',
      label: 'Label',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      customizedHit: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResultCustomizedHit },
      description: 'string',
      label: 'string',
      riskWords: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customizedHit)) {
      $dara.Model.validateArray(this.customizedHit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The suggestion.
   */
  advice?: TextModerationPlusResponseBodyDataAdvice[];
  dataId?: string;
  /**
   * @remarks
   * The results.
   */
  result?: TextModerationPlusResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 1
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      dataId: 'DataId',
      result: 'Result',
      riskLevel: 'RiskLevel',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataAdvice },
      dataId: 'string',
      result: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResult },
      riskLevel: 'string',
      score: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.advice)) {
      $dara.Model.validateArray(this.advice);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The reqId field returned by the Url Async Moderation API.
   * 
   * @example
   * A07B3DB9-D762-5C56-95B1-8EC55CF176D2
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * data1234
   */
  dataId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataAudioResultAudioSummarys extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * The voice label.
   * 
   * @example
   * profanity
   */
  label?: string;
  /**
   * @remarks
   * The number of times that the label is matched.
   * 
   * @example
   * 8
   */
  labelSum?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      labelSum: 'LabelSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      labelSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataAudioResultSliceDetails extends $dara.Model {
  descriptions?: string;
  /**
   * @remarks
   * The end time of the text after voice-to-text conversion. Unit: seconds.
   * 
   * @example
   * 30
   */
  endTime?: number;
  /**
   * @remarks
   * The end timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1685245261939
   */
  endTimestamp?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * {\\"consoleProduct\\":\\"slbnext\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Subcategory labels. Multiple labels are separated by commas (,).
   * 
   * @example
   * ""
   */
  riskTips?: string;
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   * 
   * @example
   * ""
   */
  riskWords?: string;
  /**
   * @remarks
   * The risk score. Default range: 0 to 99.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The start time of the text after voice-to-text conversion. Unit: seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The start timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1659935002123
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The text converted from voice.
   * 
   * @example
   * Disgusting
   */
  text?: string;
  /**
   * @remarks
   * If the moderation object is a voice stream, this parameter indicates the temporary access URL of the voice stream to which the text entry corresponds. The validity period of the URL is 30 minutes. You must prepare another URL to store the voice stream at the earliest opportunity.
   * 
   * @example
   * http://xxxx.abc.img
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      descriptions: 'Descriptions',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      extend: 'Extend',
      labels: 'Labels',
      riskLevel: 'RiskLevel',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      score: 'Score',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descriptions: 'string',
      endTime: 'number',
      endTimestamp: 'number',
      extend: 'string',
      labels: 'string',
      riskLevel: 'string',
      riskTips: 'string',
      riskWords: 'string',
      score: 'number',
      startTime: 'number',
      startTimestamp: 'number',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataAudioResult extends $dara.Model {
  /**
   * @remarks
   * Summary of voice labels.
   */
  audioSummarys?: VideoModerationResultResponseBodyDataAudioResultAudioSummarys[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The details about the text in the moderated voice. The value is a JSON array that contains one or more elements. Each element corresponds to a text entry.
   */
  sliceDetails?: VideoModerationResultResponseBodyDataAudioResultSliceDetails[];
  static names(): { [key: string]: string } {
    return {
      audioSummarys: 'AudioSummarys',
      riskLevel: 'RiskLevel',
      sliceDetails: 'SliceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSummarys: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataAudioResultAudioSummarys },
      riskLevel: 'string',
      sliceDetails: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataAudioResultSliceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.audioSummarys)) {
      $dara.Model.validateArray(this.audioSummarys);
    }
    if(Array.isArray(this.sliceDetails)) {
      $dara.Model.validateArray(this.sliceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFrameSummarys extends $dara.Model {
  /**
   * @remarks
   * The description of the result.
   * 
   * @example
   * no risk
   */
  description?: string;
  /**
   * @remarks
   * The label against which a captured frame is matched.
   * 
   * @example
   * violent_armedForces
   */
  label?: string;
  /**
   * @remarks
   * The number of times that the label is matched.
   * 
   * @example
   * 8
   */
  labelSum?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      labelSum: 'LabelSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      labelSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom image that is hit.
   * 
   * @example
   * 1234
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the custom image library that is hit.
   * 
   * @example
   * 12345678
   */
  libId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation extends $dara.Model {
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLogo extends $dara.Model {
  confidence?: number;
  label?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'confidence',
      label: 'label',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData extends $dara.Model {
  location?: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation;
  logo?: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLogo[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      logo: 'Logo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation,
      logo: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLogo },
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(Array.isArray(this.logo)) {
      $dara.Model.validateArray(this.logo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure extends $dara.Model {
  /**
   * @remarks
   * The information about the code of the identified figure.
   * 
   * @example
   * xxx001
   */
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 50
   */
  confidence?: number;
  /**
   * @remarks
   * The description of the result.
   * 
   * @example
   * no risk
   */
  description?: string;
  /**
   * @remarks
   * The label returned after a frame is moderated. Multiple risk labels and the corresponding scores of confidence levels may be returned for a frame.
   * 
   * @example
   * bloody
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResults extends $dara.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the custom image library is returned.
   */
  customImage?: VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage[];
  logoData?: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData[];
  /**
   * @remarks
   * If the video contains a specific figure, the code of the identified figure is returned.
   */
  publicFigure?: VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure[];
  /**
   * @remarks
   * The results of frame moderation parameters such as the label parameter and the confidence parameter.
   */
  result?: VideoModerationResultResponseBodyDataFrameResultFramesResultsResult[];
  /**
   * @remarks
   * The moderation service that is called.
   * 
   * @example
   * tonalityImprove
   */
  service?: string;
  /**
   * @remarks
   * The information about the text hit in the image is returned.
   */
  textInImage?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      logoData: 'LogoData',
      publicFigure: 'PublicFigure',
      result: 'Result',
      service: 'Service',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage },
      logoData: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData },
      publicFigure: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure },
      result: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsResult },
      service: 'string',
      textInImage: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.customImage)) {
      $dara.Model.validateArray(this.customImage);
    }
    if(Array.isArray(this.logoData)) {
      $dara.Model.validateArray(this.logoData);
    }
    if(Array.isArray(this.publicFigure)) {
      $dara.Model.validateArray(this.publicFigure);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(this.textInImage) {
      $dara.Model.validateMap(this.textInImage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFrames extends $dara.Model {
  /**
   * @remarks
   * The interval between the start of the video file and the captured frame. Unit: seconds.
   * 
   * @example
   * 338
   */
  offset?: number;
  /**
   * @remarks
   * The results of frame moderation parameters such as the label parameter and the confidence parameter.
   */
  results?: VideoModerationResultResponseBodyDataFrameResultFramesResults[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The temporary URL of a captured frame.
   * 
   * @example
   * http://xxxx.abc.jpg
   */
  tempUrl?: string;
  /**
   * @remarks
   * The absolute timestamp. Unit: milliseconds.
   * 
   * @example
   * 1684559739000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      results: 'Results',
      riskLevel: 'RiskLevel',
      tempUrl: 'TempUrl',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      results: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResults },
      riskLevel: 'string',
      tempUrl: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResult extends $dara.Model {
  /**
   * @remarks
   * The number of captured frames that are returned for the video file.
   * 
   * @example
   * 10
   */
  frameNum?: number;
  /**
   * @remarks
   * The summary of the labels against which captured frames are matched.
   */
  frameSummarys?: VideoModerationResultResponseBodyDataFrameResultFrameSummarys[];
  /**
   * @remarks
   * The information about the frames that match the labels.
   */
  frames?: VideoModerationResultResponseBodyDataFrameResultFrames[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      frameNum: 'FrameNum',
      frameSummarys: 'FrameSummarys',
      frames: 'Frames',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameNum: 'number',
      frameSummarys: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFrameSummarys },
      frames: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFrames },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frameSummarys)) {
      $dara.Model.validateArray(this.frameSummarys);
    }
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The voice moderation results. The moderation results contain a structure.
   */
  audioResult?: VideoModerationResultResponseBodyDataAudioResult;
  /**
   * @remarks
   * The value of dataId that is specified in the API request. If this parameter is not specified in the API request, the dataId field is not available in the response.
   * 
   * @example
   * product_content-2055763
   */
  dataId?: string;
  /**
   * @remarks
   * The image moderation results. If the call is successful, the HTTP status code 200 and moderation results are returned. The moderation results contain a structure.
   */
  frameResult?: VideoModerationResultResponseBodyDataFrameResult;
  /**
   * @remarks
   * The unique ID of the live stream.
   * 
   * @example
   * liveId
   */
  liveId?: string;
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      audioResult: 'AudioResult',
      dataId: 'DataId',
      frameResult: 'FrameResult',
      liveId: 'LiveId',
      riskLevel: 'RiskLevel',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: VideoModerationResultResponseBodyDataAudioResult,
      dataId: 'string',
      frameResult: VideoModerationResultResponseBodyDataFrameResult,
      liveId: 'string',
      riskLevel: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.audioResult && typeof (this.audioResult as any).validate === 'function') {
      (this.audioResult as any).validate();
    }
    if(this.frameResult && typeof (this.frameResult as any).validate === 'function') {
      (this.frameResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * data1234
   */
  dataId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultResponseBodyDataSliceDetails extends $dara.Model {
  descriptions?: string;
  /**
   * @remarks
   * The end time of the audio segment in seconds.
   * 
   * @example
   * 10
   */
  endTime?: number;
  /**
   * @remarks
   * The end timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1678854649720
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Extended fields.
   * 
   * @example
   * {\\"riskTips\\":\\"sexuality_Suggestive\\",\\"riskWords\\":\\"pxxxxy\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * sexual_sounds
   */
  labels?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * {}
   */
  originAlgoResult?: { [key: string]: any };
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The details of the risky content.
   * 
   * @example
   * sexuality_Suggestive
   */
  riskTips?: string;
  /**
   * @remarks
   * The term hit by the risky content.
   * 
   * @example
   * AAA,BBB,CCC
   */
  riskWords?: string;
  /**
   * @remarks
   * The risk score. Default range: 0 to 99.
   * 
   * @example
   * 87.01
   */
  score?: number;
  /**
   * @remarks
   * The start time of the audio segment in seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The start timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1678854649720
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The text converted from the audio segment.
   * 
   * @example
   * Disgusting
   */
  text?: string;
  /**
   * @remarks
   * The temporary URL of the audio segment.
   * 
   * @example
   * https://aliyundoc.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      descriptions: 'Descriptions',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      extend: 'Extend',
      labels: 'Labels',
      originAlgoResult: 'OriginAlgoResult',
      riskLevel: 'RiskLevel',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      score: 'Score',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descriptions: 'string',
      endTime: 'number',
      endTimestamp: 'number',
      extend: 'string',
      labels: 'string',
      originAlgoResult: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      riskLevel: 'string',
      riskTips: 'string',
      riskWords: 'string',
      score: 'number',
      startTime: 'number',
      startTimestamp: 'number',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.originAlgoResult) {
      $dara.Model.validateMap(this.originAlgoResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The unique ID of the live stream.
   * 
   * @example
   * liveId
   */
  liveId?: string;
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The moderation results of audio segments.
   */
  sliceDetails?: VoiceModerationResultResponseBodyDataSliceDetails[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * kw24ihd0WGkdi5nniVZM@qOj-1x5Ibb
   */
  taskId?: string;
  /**
   * @remarks
   * The URL of the moderated content.
   * 
   * @example
   * https://aliyundoc.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      liveId: 'LiveId',
      riskLevel: 'RiskLevel',
      sliceDetails: 'SliceDetails',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      liveId: 'string',
      riskLevel: 'string',
      sliceDetails: { 'type': 'array', 'itemType': VoiceModerationResultResponseBodyDataSliceDetails },
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sliceDetails)) {
      $dara.Model.validateArray(this.sliceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * document_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * *   taskId: required. The URL of the object that you want to moderate. Make sure that the URL can be accessed over the Internet.
   * 
   * @example
   * {\\"taskId\\":\\"vi_f_hPgx9PFIQISdlfA888hOFG-1yJq8v\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeFileModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeFileModerationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFileModerationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFileModerationResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ReqId field returned by the asynchronous Image Moderation 2.0 API.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The image moderation results.
   */
  data?: DescribeImageModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2881AD4F-638B-52A3-BA20-F74C5B1CEAE3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeImageModerationResultResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageModerationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImageModerationResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the information to be obtained. Multiple values are separated by commas.
   * 
   * @example
   * customImage,textInImage
   */
  infoType?: string;
  /**
   * @remarks
   * The reqId field returned by the Url Async Moderation API.
   * 
   * @example
   * 638EDDC65C82AB39319A9F60
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      infoType: 'InfoType',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoType: 'string',
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeImageResultExtResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeImageResultExtResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageResultExtResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImageResultExtResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeUploadTokenResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeUploadTokenResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUploadTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUploadTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ReqId field returned by an asynchronous URL moderation operation.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeUrlModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01F9144A-2088-5D87-935B-2DB865284B1A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeUrlModerationResultResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUrlModerationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUrlModerationResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * document_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"url":"https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.pdf"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: FileModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: FileModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileModerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FileModerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FileModerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"imageUrl":"https://img.alicdn.com/tfs/TB1U4r9AeH2gK0jSZJnXXaT1FXa-2880-480.png","dataId":"img123****"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: ImageAsyncModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A926AE2-4C96-573F-824F-0532960799F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImageAsyncModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncModerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageAsyncModerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImageAsyncModerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The types of detection supported by the enhanced image review, separated by English commas. Values:
   * 
   * - baselineCheck：General Baseline Detection
   * - baselineCheck_pro：General Baseline Detection_Pro Edition
   * - tonalityImprove：Content governance monitoring
   * - aigcCheck：AIGC image detection
   * 
   * @example
   * baselineCheck,tonalityImprove
   */
  service?: string;
  /**
   * @remarks
   * The set of relevant parameters for content detection objects.
   * 
   * @example
   * {
   *         "imageUrl": "https://img.alicdn.com/tfs/TB1U4r9AeH2gK0jSZJnXXaT1FXa-2880-480.png",
   *         "dataId": "img123****"
   *     }
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code. A return of 200 represents success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The result of image content detection.
   */
  data?: ImageBatchModerationResponseBodyData;
  /**
   * @remarks
   * The response message for this request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The ID of this invocation request, generated by Alibaba Cloud as a unique identifier for the request, can be used for troubleshooting and pinpointing issues.
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImageBatchModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageBatchModerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageBatchModerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImageBatchModerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The moderation services supported by Image Moderation 2.0. Valid values:
   * 
   * *   baselineCheck: common baseline moderation
   * *   baselineCheck_pro: common baseline moderation_Professional
   * *   baselineCheck_cb: common baseline moderation_For regions outside the Chinese mainland
   * *   tonalityImprove: content governance moderation
   * *   aigcCheck: AI-generated image identification
   * *   profilePhotoCheck: avatar image moderation
   * *   advertisingCheck: marketing material identification
   * *   liveStreamCheck: moderation of screenshots of videos and live streams
   * 
   * Valid values:
   * 
   * *   liveStreamCheck: moderation of screenshots of videos and live streams
   * *   baselineCheck: common baseline moderation
   * *   aigcCheck: AI-generated image identification
   * *   baselineCheck_pro: common baseline moderation_Professional
   * *   advertisingCheck: marketing material identification
   * *   baselineCheck_cb: common baseline moderation_For regions outside the Chinese mainland
   * *   tonalityImprove: content governance moderation
   * *   profilePhotoCheck: avatar image moderation
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * *   imageUrl: the URL of the object that you want to moderate. This parameter is required.
   * *   dataId: the ID of the object that you want to moderate. This parameter is optional.
   * 
   * @example
   * {"imageUrl":"https://www.aliyun.com/test.jpg","dataId":"img1234567"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation results.
   */
  data?: ImageModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImageModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageModerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImageModerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualCallbackRequest extends $dara.Model {
  channel?: string;
  /**
   * @example
   * abc
   */
  checksum?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {\\"Result\\": [{\\"Confidence\\": 100.0, \\"CustomizedHit\\": [{\\"KeyWords\\": u\\"\\u4fdd\\u969c,\\u6700\\u5927,\\u9ad8\\u7ea7\\", \\"LibName\\": u\\"\\u4f18\\u8def\\u654f\\u611f\\u8bcd\\"}], \\"Label\\": \\"customized\\"}]}
   */
  data?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      checksum: 'Checksum',
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      checksum: 'string',
      code: 'string',
      data: 'string',
      msg: 'string',
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualCallbackResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManualCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ManualCallbackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualModerationRequest extends $dara.Model {
  /**
   * @example
   * imageManualCheck
   */
  service?: string;
  /**
   * @example
   * {"url": "https://talesofai.oss-cn-shanghai.aliyuncs.com/xxx.mp4", "dataId": "data1234"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualModerationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ManualModerationResponseBodyData;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ManualModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualModerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManualModerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ManualModerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualModerationResultRequest extends $dara.Model {
  /**
   * @example
   * {\\"TaskId\\":\\"e5f2d886-4c23-440d-999c-bd98acde11b6\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualModerationResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ManualModerationResultResponseBodyData;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ManualModerationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualModerationResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManualModerationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ManualModerationResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"content":"Content to be moderated"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation results.
   */
  data?: TextModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TextModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextModerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextModerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusRequest extends $dara.Model {
  /**
   * @remarks
   * The moderation service.
   * 
   * Valid values:
   * 
   * *   chat_detection_pro: moderation of interactive content of private chats_Professional
   * *   llm_response_moderation: moderation of text generated by LLMs
   * *   llm_query_moderation: moderation of input text of LLMs
   * *   nickname_detection_pro: moderation of user nicknames_Professional
   * *   comment_detection_pro: moderation of comment content of public chats_Professional
   * 
   * @example
   * llm_query_moderation
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"content":"Content to be moderated"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation results.
   */
  data?: TextModerationPlusResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TextModerationPlusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextModerationPlusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextModerationPlusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * url_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {
   *         "url": "https://help.aliyun.com/",
   *         "dataId": "url123******"
   * }
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: UrlAsyncModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CF2815C-****-****-B52E-FF6E2****492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UrlAsyncModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UrlAsyncModerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UrlAsyncModerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {\\"url\\": \\"https://talesofai.oss-cn-shanghai.aliyuncs.com/xxx.mp4\\", \\"dataId\\": \\"94db0b88-f521-11ed-806e-fae21c1f239c\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: VideoModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: VideoModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoModerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VideoModerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationCancelRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {\\"taskId\\":\\"vi_s_4O9gp7GfNQdx9GOqdekFmk-1z2RJT\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationCancelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF2815C-****-****-B52E-FF6E2****492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationCancelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoModerationCancelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VideoModerationCancelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * Valid values:
   * 
   * *   liveStreamDetection: live stream moderation
   * *   videoDetection: video file moderation
   * *   liveStreamDetection_cb: live stream moderation_For regions outside the Chinese mainland
   * *   videoDetection_cb: video file moderation_For regions outside the Chinese mainland.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The ID of the task that you want to query. You can specify one task ID at a time.
   * 
   * @example
   * {\\"taskId\\":\\"au_f_8PoWiZKoLbczp5HRn69VdT-1y8@U5\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation results.
   */
  data?: VideoModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success finished
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: VideoModerationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoModerationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VideoModerationResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"url": "http://aliyundoc.com/test.flv", "dataId": "data1234"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: VoiceModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: VoiceModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceModerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VoiceModerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationCancelRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"taskId":"xxxxx-xxxx"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationCancelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A926AE2-4C96-573F-824F-0532960799F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationCancelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceModerationCancelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VoiceModerationCancelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service. Valid values: nickname_detection: user nickname
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters of API requests that are sent from API Gateway to the backend service.
   * 
   * For more information, see [ServiceParameter](https://help.aliyun.com/document_detail/43988.html).
   * 
   * @example
   * {"taskId":"xxxxx-xxxx"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: VoiceModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2881AD4F-638B-52A3-BA20-F74C5B1CEAE3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: VoiceModerationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceModerationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VoiceModerationResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "green.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "green.aliyuncs.com",
      'cn-hongkong': "green.aliyuncs.com",
      'cn-huhehaote': "green.aliyuncs.com",
      'cn-qingdao': "green.aliyuncs.com",
      'cn-zhangjiakou': "green.aliyuncs.com",
      'eu-central-1': "green.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "green.ap-southeast-1.aliyuncs.com",
      'me-east-1': "green.ap-southeast-1.aliyuncs.com",
      'us-east-1': "green.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "green.aliyuncs.com",
      'cn-shenzhen-finance-1': "green.aliyuncs.com",
      'cn-shanghai-finance-1': "green.aliyuncs.com",
      'cn-north-2-gov-1': "green.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("green", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 文档审核结果
   * 
   * @param request - DescribeFileModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileModerationResultResponse
   */
  async describeFileModerationResultWithOptions(request: DescribeFileModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFileModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFileModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFileModerationResultResponse>(await this.callApi(params, req, runtime), new DescribeFileModerationResultResponse({}));
    } else {
      return $dara.cast<DescribeFileModerationResultResponse>(await this.execute(params, req, runtime), new DescribeFileModerationResultResponse({}));
    }

  }

  /**
   * 文档审核结果
   * 
   * @param request - DescribeFileModerationResultRequest
   * @returns DescribeFileModerationResultResponse
   */
  async describeFileModerationResult(request: DescribeFileModerationResultRequest): Promise<DescribeFileModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileModerationResultWithOptions(request, runtime);
  }

  /**
   * Obtains the moderation results of an Image Moderation 2.0 task.
   * 
   * @remarks
   *   Billing: This operation is free of charge.
   * *   QPS limit: You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeImageModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageModerationResultResponse
   */
  async describeImageModerationResultWithOptions(request: DescribeImageModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<DescribeImageModerationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeImageModerationResultResponse>(await this.callApi(params, req, runtime), new DescribeImageModerationResultResponse({}));
    } else {
      return $dara.cast<DescribeImageModerationResultResponse>(await this.execute(params, req, runtime), new DescribeImageModerationResultResponse({}));
    }

  }

  /**
   * Obtains the moderation results of an Image Moderation 2.0 task.
   * 
   * @remarks
   *   Billing: This operation is free of charge.
   * *   QPS limit: You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeImageModerationResultRequest
   * @returns DescribeImageModerationResultResponse
   */
  async describeImageModerationResult(request: DescribeImageModerationResultRequest): Promise<DescribeImageModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageModerationResultWithOptions(request, runtime);
  }

  /**
   * 查询检测结果辅助信息
   * 
   * @param request - DescribeImageResultExtRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageResultExtResponse
   */
  async describeImageResultExtWithOptions(request: DescribeImageResultExtRequest, runtime: $dara.RuntimeOptions): Promise<DescribeImageResultExtResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.infoType)) {
      body["InfoType"] = request.infoType;
    }

    if (!$dara.isNull(request.reqId)) {
      body["ReqId"] = request.reqId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageResultExt",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeImageResultExtResponse>(await this.callApi(params, req, runtime), new DescribeImageResultExtResponse({}));
    } else {
      return $dara.cast<DescribeImageResultExtResponse>(await this.execute(params, req, runtime), new DescribeImageResultExtResponse({}));
    }

  }

  /**
   * 查询检测结果辅助信息
   * 
   * @param request - DescribeImageResultExtRequest
   * @returns DescribeImageResultExtResponse
   */
  async describeImageResultExt(request: DescribeImageResultExtRequest): Promise<DescribeImageResultExtResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageResultExtWithOptions(request, runtime);
  }

  /**
   * 查询上传token
   * 
   * @param request - DescribeUploadTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUploadTokenResponse
   */
  async describeUploadTokenWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeUploadTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUploadToken",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUploadTokenResponse>(await this.callApi(params, req, runtime), new DescribeUploadTokenResponse({}));
    } else {
      return $dara.cast<DescribeUploadTokenResponse>(await this.execute(params, req, runtime), new DescribeUploadTokenResponse({}));
    }

  }

  /**
   * 查询上传token
   * @returns DescribeUploadTokenResponse
   */
  async describeUploadToken(): Promise<DescribeUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUploadTokenWithOptions(runtime);
  }

  /**
   * Queries the moderation results based on the ReqId returned by asynchronous URL moderation.
   * 
   * @remarks
   *   Billing: This operation is free of charge.
   * *   Query timeout: We recommend that you query moderation results at least 480 seconds after you send an asynchronous moderation request. Content Moderation retains moderation results for up to 3 days. After 3 days, the results are deleted.
   * *   You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUrlModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUrlModerationResultResponse
   */
  async describeUrlModerationResultWithOptions(request: DescribeUrlModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUrlModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reqId)) {
      body["ReqId"] = request.reqId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUrlModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUrlModerationResultResponse>(await this.callApi(params, req, runtime), new DescribeUrlModerationResultResponse({}));
    } else {
      return $dara.cast<DescribeUrlModerationResultResponse>(await this.execute(params, req, runtime), new DescribeUrlModerationResultResponse({}));
    }

  }

  /**
   * Queries the moderation results based on the ReqId returned by asynchronous URL moderation.
   * 
   * @remarks
   *   Billing: This operation is free of charge.
   * *   Query timeout: We recommend that you query moderation results at least 480 seconds after you send an asynchronous moderation request. Content Moderation retains moderation results for up to 3 days. After 3 days, the results are deleted.
   * *   You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUrlModerationResultRequest
   * @returns DescribeUrlModerationResultResponse
   */
  async describeUrlModerationResult(request: DescribeUrlModerationResultRequest): Promise<DescribeUrlModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUrlModerationResultWithOptions(request, runtime);
  }

  /**
   * 文档审核
   * 
   * @param request - FileModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileModerationResponse
   */
  async fileModerationWithOptions(request: FileModerationRequest, runtime: $dara.RuntimeOptions): Promise<FileModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FileModerationResponse>(await this.callApi(params, req, runtime), new FileModerationResponse({}));
    } else {
      return $dara.cast<FileModerationResponse>(await this.execute(params, req, runtime), new FileModerationResponse({}));
    }

  }

  /**
   * 文档审核
   * 
   * @param request - FileModerationRequest
   * @returns FileModerationResponse
   */
  async fileModeration(request: FileModerationRequest): Promise<FileModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fileModerationWithOptions(request, runtime);
  }

  /**
   * 图片异步检测
   * 
   * @param request - ImageAsyncModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageAsyncModerationResponse
   */
  async imageAsyncModerationWithOptions(request: ImageAsyncModerationRequest, runtime: $dara.RuntimeOptions): Promise<ImageAsyncModerationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageAsyncModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ImageAsyncModerationResponse>(await this.callApi(params, req, runtime), new ImageAsyncModerationResponse({}));
    } else {
      return $dara.cast<ImageAsyncModerationResponse>(await this.execute(params, req, runtime), new ImageAsyncModerationResponse({}));
    }

  }

  /**
   * 图片异步检测
   * 
   * @param request - ImageAsyncModerationRequest
   * @returns ImageAsyncModerationResponse
   */
  async imageAsyncModeration(request: ImageAsyncModerationRequest): Promise<ImageAsyncModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageAsyncModerationWithOptions(request, runtime);
  }

  /**
   * 图片批量调用
   * 
   * @param request - ImageBatchModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageBatchModerationResponse
   */
  async imageBatchModerationWithOptions(request: ImageBatchModerationRequest, runtime: $dara.RuntimeOptions): Promise<ImageBatchModerationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageBatchModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ImageBatchModerationResponse>(await this.callApi(params, req, runtime), new ImageBatchModerationResponse({}));
    } else {
      return $dara.cast<ImageBatchModerationResponse>(await this.execute(params, req, runtime), new ImageBatchModerationResponse({}));
    }

  }

  /**
   * 图片批量调用
   * 
   * @param request - ImageBatchModerationRequest
   * @returns ImageBatchModerationResponse
   */
  async imageBatchModeration(request: ImageBatchModerationRequest): Promise<ImageBatchModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageBatchModerationWithOptions(request, runtime);
  }

  /**
   * Identifies whether an image contains content or elements that violate relevant regulations on network content dissemination, affect the content order of a specific platform, or affect user experience. Image Moderation 2.0 supports over 90 content risk labels and over 100 risk control items. Image Moderation 2.0 of Content Moderation allows you to develop further moderation or governance measures for specific image content based on business scenarios, platform-specific content governance rules, or rich risk labels and scores of confidence levels returned by API calls.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/467826.html)[](https://www.aliyun.com/price/product?#/lvwang/detail/cdibag) of Image Moderation 2.0.
   * 
   * @param request - ImageModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageModerationResponse
   */
  async imageModerationWithOptions(request: ImageModerationRequest, runtime: $dara.RuntimeOptions): Promise<ImageModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ImageModerationResponse>(await this.callApi(params, req, runtime), new ImageModerationResponse({}));
    } else {
      return $dara.cast<ImageModerationResponse>(await this.execute(params, req, runtime), new ImageModerationResponse({}));
    }

  }

  /**
   * Identifies whether an image contains content or elements that violate relevant regulations on network content dissemination, affect the content order of a specific platform, or affect user experience. Image Moderation 2.0 supports over 90 content risk labels and over 100 risk control items. Image Moderation 2.0 of Content Moderation allows you to develop further moderation or governance measures for specific image content based on business scenarios, platform-specific content governance rules, or rich risk labels and scores of confidence levels returned by API calls.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/467826.html)[](https://www.aliyun.com/price/product?#/lvwang/detail/cdibag) of Image Moderation 2.0.
   * 
   * @param request - ImageModerationRequest
   * @returns ImageModerationResponse
   */
  async imageModeration(request: ImageModerationRequest): Promise<ImageModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageModerationWithOptions(request, runtime);
  }

  /**
   * 内容安全人审结果回调接口
   * 
   * @param request - ManualCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualCallbackResponse
   */
  async manualCallbackWithOptions(request: ManualCallbackRequest, runtime: $dara.RuntimeOptions): Promise<ManualCallbackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.checksum)) {
      body["Checksum"] = request.checksum;
    }

    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.msg)) {
      body["Msg"] = request.msg;
    }

    if (!$dara.isNull(request.reqId)) {
      body["ReqId"] = request.reqId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManualCallback",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ManualCallbackResponse>(await this.callApi(params, req, runtime), new ManualCallbackResponse({}));
    } else {
      return $dara.cast<ManualCallbackResponse>(await this.execute(params, req, runtime), new ManualCallbackResponse({}));
    }

  }

  /**
   * 内容安全人审结果回调接口
   * 
   * @param request - ManualCallbackRequest
   * @returns ManualCallbackResponse
   */
  async manualCallback(request: ManualCallbackRequest): Promise<ManualCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualCallbackWithOptions(request, runtime);
  }

  /**
   * 内容安全人审提交请求接口
   * 
   * @param request - ManualModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualModerationResponse
   */
  async manualModerationWithOptions(request: ManualModerationRequest, runtime: $dara.RuntimeOptions): Promise<ManualModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManualModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ManualModerationResponse>(await this.callApi(params, req, runtime), new ManualModerationResponse({}));
    } else {
      return $dara.cast<ManualModerationResponse>(await this.execute(params, req, runtime), new ManualModerationResponse({}));
    }

  }

  /**
   * 内容安全人审提交请求接口
   * 
   * @param request - ManualModerationRequest
   * @returns ManualModerationResponse
   */
  async manualModeration(request: ManualModerationRequest): Promise<ManualModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualModerationWithOptions(request, runtime);
  }

  /**
   * 获取人审结果
   * 
   * @param request - ManualModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualModerationResultResponse
   */
  async manualModerationResultWithOptions(request: ManualModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<ManualModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManualModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ManualModerationResultResponse>(await this.callApi(params, req, runtime), new ManualModerationResultResponse({}));
    } else {
      return $dara.cast<ManualModerationResultResponse>(await this.execute(params, req, runtime), new ManualModerationResultResponse({}));
    }

  }

  /**
   * 获取人审结果
   * 
   * @param request - ManualModerationResultRequest
   * @returns ManualModerationResultResponse
   */
  async manualModerationResult(request: ManualModerationResultRequest): Promise<ManualModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualModerationResultWithOptions(request, runtime);
  }

  /**
   * 文本审核
   * 
   * @param request - TextModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextModerationResponse
   */
  async textModerationWithOptions(request: TextModerationRequest, runtime: $dara.RuntimeOptions): Promise<TextModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TextModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TextModerationResponse>(await this.callApi(params, req, runtime), new TextModerationResponse({}));
    } else {
      return $dara.cast<TextModerationResponse>(await this.execute(params, req, runtime), new TextModerationResponse({}));
    }

  }

  /**
   * 文本审核
   * 
   * @param request - TextModerationRequest
   * @returns TextModerationResponse
   */
  async textModeration(request: TextModerationRequest): Promise<TextModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textModerationWithOptions(request, runtime);
  }

  /**
   * Moderates the input command and generated text of large language models (LLMs). Specific model input commands can be used to retrieve standard answers. The feature of enabling and disabling the moderation labels is also available.
   * 
   * @remarks
   * Before you call this operation, make sure that you have [activated the Content Moderation 2.0 service](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn) and are familiar with the [billing](https://help.aliyun.com/document_detail/2671445.html?#section-6od-32j-99n) of the Text Moderation 2.0 Plus service.
   * 
   * @param request - TextModerationPlusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextModerationPlusResponse
   */
  async textModerationPlusWithOptions(request: TextModerationPlusRequest, runtime: $dara.RuntimeOptions): Promise<TextModerationPlusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TextModerationPlus",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TextModerationPlusResponse>(await this.callApi(params, req, runtime), new TextModerationPlusResponse({}));
    } else {
      return $dara.cast<TextModerationPlusResponse>(await this.execute(params, req, runtime), new TextModerationPlusResponse({}));
    }

  }

  /**
   * Moderates the input command and generated text of large language models (LLMs). Specific model input commands can be used to retrieve standard answers. The feature of enabling and disabling the moderation labels is also available.
   * 
   * @remarks
   * Before you call this operation, make sure that you have [activated the Content Moderation 2.0 service](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn) and are familiar with the [billing](https://help.aliyun.com/document_detail/2671445.html?#section-6od-32j-99n) of the Text Moderation 2.0 Plus service.
   * 
   * @param request - TextModerationPlusRequest
   * @returns TextModerationPlusResponse
   */
  async textModerationPlus(request: TextModerationPlusRequest): Promise<TextModerationPlusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textModerationPlusWithOptions(request, runtime);
  }

  /**
   * url异步检测
   * 
   * @param request - UrlAsyncModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UrlAsyncModerationResponse
   */
  async urlAsyncModerationWithOptions(request: UrlAsyncModerationRequest, runtime: $dara.RuntimeOptions): Promise<UrlAsyncModerationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UrlAsyncModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UrlAsyncModerationResponse>(await this.callApi(params, req, runtime), new UrlAsyncModerationResponse({}));
    } else {
      return $dara.cast<UrlAsyncModerationResponse>(await this.execute(params, req, runtime), new UrlAsyncModerationResponse({}));
    }

  }

  /**
   * url异步检测
   * 
   * @param request - UrlAsyncModerationRequest
   * @returns UrlAsyncModerationResponse
   */
  async urlAsyncModeration(request: UrlAsyncModerationRequest): Promise<UrlAsyncModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.urlAsyncModerationWithOptions(request, runtime);
  }

  /**
   * 视频检测任务提交
   * 
   * @param request - VideoModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoModerationResponse
   */
  async videoModerationWithOptions(request: VideoModerationRequest, runtime: $dara.RuntimeOptions): Promise<VideoModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VideoModerationResponse>(await this.callApi(params, req, runtime), new VideoModerationResponse({}));
    } else {
      return $dara.cast<VideoModerationResponse>(await this.execute(params, req, runtime), new VideoModerationResponse({}));
    }

  }

  /**
   * 视频检测任务提交
   * 
   * @param request - VideoModerationRequest
   * @returns VideoModerationResponse
   */
  async videoModeration(request: VideoModerationRequest): Promise<VideoModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoModerationWithOptions(request, runtime);
  }

  /**
   * 取消视频直播流检测
   * 
   * @param request - VideoModerationCancelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoModerationCancelResponse
   */
  async videoModerationCancelWithOptions(request: VideoModerationCancelRequest, runtime: $dara.RuntimeOptions): Promise<VideoModerationCancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoModerationCancel",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VideoModerationCancelResponse>(await this.callApi(params, req, runtime), new VideoModerationCancelResponse({}));
    } else {
      return $dara.cast<VideoModerationCancelResponse>(await this.execute(params, req, runtime), new VideoModerationCancelResponse({}));
    }

  }

  /**
   * 取消视频直播流检测
   * 
   * @param request - VideoModerationCancelRequest
   * @returns VideoModerationCancelResponse
   */
  async videoModerationCancel(request: VideoModerationCancelRequest): Promise<VideoModerationCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoModerationCancelWithOptions(request, runtime);
  }

  /**
   * Obtains the moderation results of a Video Moderation 2.0 task
   * 
   * @remarks
   * This operation is free of charge. We recommend that you query moderation results at least 30 seconds after you send an asynchronous moderation request. Content Moderation retains moderation results for at most 24 hours. After 24 hours, the results are deleted.
   * 
   * @param request - VideoModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoModerationResultResponse
   */
  async videoModerationResultWithOptions(request: VideoModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<VideoModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VideoModerationResultResponse>(await this.callApi(params, req, runtime), new VideoModerationResultResponse({}));
    } else {
      return $dara.cast<VideoModerationResultResponse>(await this.execute(params, req, runtime), new VideoModerationResultResponse({}));
    }

  }

  /**
   * Obtains the moderation results of a Video Moderation 2.0 task
   * 
   * @remarks
   * This operation is free of charge. We recommend that you query moderation results at least 30 seconds after you send an asynchronous moderation request. Content Moderation retains moderation results for at most 24 hours. After 24 hours, the results are deleted.
   * 
   * @param request - VideoModerationResultRequest
   * @returns VideoModerationResultResponse
   */
  async videoModerationResult(request: VideoModerationResultRequest): Promise<VideoModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoModerationResultWithOptions(request, runtime);
  }

  /**
   * 语音审核
   * 
   * @param request - VoiceModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceModerationResponse
   */
  async voiceModerationWithOptions(request: VoiceModerationRequest, runtime: $dara.RuntimeOptions): Promise<VoiceModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VoiceModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VoiceModerationResponse>(await this.callApi(params, req, runtime), new VoiceModerationResponse({}));
    } else {
      return $dara.cast<VoiceModerationResponse>(await this.execute(params, req, runtime), new VoiceModerationResponse({}));
    }

  }

  /**
   * 语音审核
   * 
   * @param request - VoiceModerationRequest
   * @returns VoiceModerationResponse
   */
  async voiceModeration(request: VoiceModerationRequest): Promise<VoiceModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.voiceModerationWithOptions(request, runtime);
  }

  /**
   * 取消检测
   * 
   * @param request - VoiceModerationCancelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceModerationCancelResponse
   */
  async voiceModerationCancelWithOptions(request: VoiceModerationCancelRequest, runtime: $dara.RuntimeOptions): Promise<VoiceModerationCancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VoiceModerationCancel",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VoiceModerationCancelResponse>(await this.callApi(params, req, runtime), new VoiceModerationCancelResponse({}));
    } else {
      return $dara.cast<VoiceModerationCancelResponse>(await this.execute(params, req, runtime), new VoiceModerationCancelResponse({}));
    }

  }

  /**
   * 取消检测
   * 
   * @param request - VoiceModerationCancelRequest
   * @returns VoiceModerationCancelResponse
   */
  async voiceModerationCancel(request: VoiceModerationCancelRequest): Promise<VoiceModerationCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.voiceModerationCancelWithOptions(request, runtime);
  }

  /**
   * Obtains the moderation results of a Voice Moderation 2.0 task.
   * 
   * @param request - VoiceModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceModerationResultResponse
   */
  async voiceModerationResultWithOptions(request: VoiceModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<VoiceModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VoiceModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VoiceModerationResultResponse>(await this.callApi(params, req, runtime), new VoiceModerationResultResponse({}));
    } else {
      return $dara.cast<VoiceModerationResultResponse>(await this.execute(params, req, runtime), new VoiceModerationResultResponse({}));
    }

  }

  /**
   * Obtains the moderation results of a Voice Moderation 2.0 task.
   * 
   * @param request - VoiceModerationResultRequest
   * @returns VoiceModerationResultResponse
   */
  async voiceModerationResult(request: VoiceModerationResultRequest): Promise<VoiceModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.voiceModerationResultWithOptions(request, runtime);
  }

}
