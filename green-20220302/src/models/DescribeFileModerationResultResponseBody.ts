// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult extends $dara.Model {
  /**
   * @remarks
   * The risk score.
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
   * The label.
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
   * The location information.
   */
  location?: DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The invoked service.
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
  /**
   * @remarks
   * The label descriptions.
   * 
   * @example
   * Suspected advertising content.
   */
  descriptions?: string;
  /**
   * @remarks
   * The label values.
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The details of the hit risk.
   * 
   * @example
   * xxx
   */
  riskTips?: string;
  /**
   * @remarks
   * The risk keywords that are hit.
   * 
   * @example
   * xxx
   */
  riskWords?: string;
  /**
   * @remarks
   * The service.
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
   * blah blah.
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
   * The image detection results.
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
   * The URL where the text content is stored.
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
   * The label description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * contraband
   */
  label?: string;
  /**
   * @remarks
   * The number of times the label appears.
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
   * The image labels.
   */
  imageLabels?: DescribeFileModerationResultResponseBodyDataPageSummaryImageSummaryImageLabels[];
  /**
   * @remarks
   * The risk level.
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

export class DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryExtAigcDataAIGC extends $dara.Model {
  /**
   * @remarks
   * The content producer code.
   * 
   * @example
   * 00119144030008867405X210001
   */
  contentProducer?: string;
  /**
   * @remarks
   * The content propagator code.
   * 
   * @example
   * 00119144030008867405X220001
   */
  contentPropagator?: string;
  /**
   * @remarks
   * The content attribute declared by the implicit identifier.
   * 
   * @example
   * Belongs to AI-generated synthetic content.
   */
  label?: string;
  /**
   * @remarks
   * The content production ID.
   * 
   * @example
   * tos-cn-i-tb4s082cfz/ad88d9b125694f57b2c72235e5c42af1
   */
  produceID?: string;
  /**
   * @remarks
   * The content propagation ID.
   * 
   * @example
   * tos-cn-i-tb4s082cfz/ad88d9b125694f57b2c72235e5c42af1
   */
  propagateID?: string;
  /**
   * @remarks
   * Reserved field 1.
   * 
   * @example
   * None.
   */
  reservedCode1?: string;
  /**
   * @remarks
   * Reserved field 2.
   * 
   * @example
   * None.
   */
  reservedCode2?: string;
  static names(): { [key: string]: string } {
    return {
      contentProducer: 'ContentProducer',
      contentPropagator: 'ContentPropagator',
      label: 'Label',
      produceID: 'ProduceID',
      propagateID: 'PropagateID',
      reservedCode1: 'ReservedCode1',
      reservedCode2: 'ReservedCode2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentProducer: 'string',
      contentPropagator: 'string',
      label: 'string',
      produceID: 'string',
      propagateID: 'string',
      reservedCode1: 'string',
      reservedCode2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryExtAigcData extends $dara.Model {
  /**
   * @remarks
   * The implicit identifier information of AI-generated content.
   */
  AIGC?: DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryExtAigcDataAIGC;
  /**
   * @remarks
   * The comprehensive analysis report of large model authenticity verification.
   * 
   * @example
   * ### Comprehensive report for users.
   */
  explain?: string;
  static names(): { [key: string]: string } {
    return {
      AIGC: 'AIGC',
      explain: 'Explain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIGC: DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryExtAigcDataAIGC,
      explain: 'string',
    };
  }

  validate() {
    if(this.AIGC && typeof (this.AIGC as any).validate === 'function') {
      (this.AIGC as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryExt extends $dara.Model {
  /**
   * @remarks
   * The detection details of AI-generated content.
   */
  aigcData?: DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryExtAigcData;
  static names(): { [key: string]: string } {
    return {
      aigcData: 'AigcData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aigcData: DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryExtAigcData,
    };
  }

  validate() {
    if(this.aigcData && typeof (this.aigcData as any).validate === 'function') {
      (this.aigcData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryRiskLabels extends $dara.Model {
  /**
   * @remarks
   * The label confidence score.
   * 
   * @example
   * 95.96
   */
  confidence?: number;
  /**
   * @remarks
   * The Chinese description of the risk label.
   * 
   * @example
   * Suspected AI-generated synthetic content.
   */
  description?: string;
  /**
   * @remarks
   * The risk label.
   * 
   * @example
   * tamper_aigc
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

export class DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummary extends $dara.Model {
  /**
   * @remarks
   * The extended information.
   */
  ext?: DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryExt;
  /**
   * @remarks
   * The list of hit authenticity verification risk labels.
   */
  riskLabels?: DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryRiskLabels[];
  /**
   * @remarks
   * The overall risk level of the document, which is the highest level among all hit labels.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      riskLabels: 'RiskLabels',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryExt,
      riskLabels: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummaryRiskLabels },
      riskLevel: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(Array.isArray(this.riskLabels)) {
      $dara.Model.validateArray(this.riskLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageSummaryTextSummaryTextLabels extends $dara.Model {
  /**
   * @remarks
   * The label descriptions.
   * 
   * @example
   * No risk detected.
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * contraband
   */
  label?: string;
  /**
   * @remarks
   * The number of times the label appears.
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
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The text labels.
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
   * The image summary information.
   */
  imageSummary?: DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  pageSum?: number;
  /**
   * @remarks
   * The document authenticity verification risk summary.
   */
  riskSummary?: DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummary;
  /**
   * @remarks
   * The text summary information.
   */
  textSummary?: DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary;
  static names(): { [key: string]: string } {
    return {
      imageSummary: 'ImageSummary',
      pageSum: 'PageSum',
      riskSummary: 'RiskSummary',
      textSummary: 'TextSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageSummary: DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary,
      pageSum: 'number',
      riskSummary: DescribeFileModerationResultResponseBodyDataPageSummaryRiskSummary,
      textSummary: DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary,
    };
  }

  validate() {
    if(this.imageSummary && typeof (this.imageSummary as any).validate === 'function') {
      (this.imageSummary as any).validate();
    }
    if(this.riskSummary && typeof (this.riskSummary as any).validate === 'function') {
      (this.riskSummary as any).validate();
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
   * The AccountId specified in the request.
   * 
   * @example
   * accountIdtest123
   */
  accountId?: string;
  /**
   * @remarks
   * The data ID.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The document type. This parameter is optional.
   * 
   * @example
   * doc
   */
  docType?: string;
  /**
   * @remarks
   * The list of detection results.
   */
  pageResult?: DescribeFileModerationResultResponseBodyDataPageResult[];
  /**
   * @remarks
   * The summary information.
   */
  pageSummary?: DescribeFileModerationResultResponseBodyDataPageSummary;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The file download URL.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
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
      accountId: 'string',
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

export class DescribeFileModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeFileModerationResultResponseBodyData;
  /**
   * @remarks
   * The error message.
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

