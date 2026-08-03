// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultResponseBodyDataAudioResultAudioSummarys extends $dara.Model {
  /**
   * @remarks
   * The label descriptions.
   * 
   * @example
   * 疑似违禁内容
   */
  description?: string;
  /**
   * @remarks
   * The video audio label.
   * 
   * @example
   * profanity
   */
  label?: string;
  /**
   * @remarks
   * The number of times the label was detected.
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

export class VideoModerationResultResponseBodyDataAudioResultSliceDetailsResultCustomizedHit extends $dara.Model {
  /**
   * @remarks
   * The custom keywords.
   * 
   * @example
   * fxxk
   */
  keyWords?: string;
  /**
   * @remarks
   * The name of the custom library.
   * 
   * @example
   * 备用词库02
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

export class VideoModerationResultResponseBodyDataAudioResultSliceDetailsResultRiskPositions extends $dara.Model {
  /**
   * @remarks
   * The end position.
   * 
   * @example
   * 3
   */
  endPos?: number;
  /**
   * @remarks
   * The detected sensitive word.
   * 
   * @example
   * fxxk
   */
  riskWord?: string;
  /**
   * @remarks
   * The start position.
   * 
   * @example
   * 0
   */
  startPos?: number;
  static names(): { [key: string]: string } {
    return {
      endPos: 'EndPos',
      riskWord: 'RiskWord',
      startPos: 'StartPos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPos: 'number',
      riskWord: 'string',
      startPos: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataAudioResultSliceDetailsResult extends $dara.Model {
  /**
   * @remarks
   * The confidence level.
   * 
   * @example
   * 99.9
   */
  confidence?: number;
  /**
   * @remarks
   * The list of hit custom libraries.
   */
  customizedHit?: VideoModerationResultResponseBodyDataAudioResultSliceDetailsResultCustomizedHit[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 疑似违禁内容
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * profanity
   */
  label?: string;
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
   * The list of risk positions.
   */
  riskPositions?: VideoModerationResultResponseBodyDataAudioResultSliceDetailsResultRiskPositions[];
  /**
   * @remarks
   * The hit risk content.
   * 
   * @example
   * fxxk
   */
  riskWords?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      customizedHit: 'CustomizedHit',
      description: 'Description',
      label: 'Label',
      riskLevel: 'RiskLevel',
      riskPositions: 'RiskPositions',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      customizedHit: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataAudioResultSliceDetailsResultCustomizedHit },
      description: 'string',
      label: 'string',
      riskLevel: 'string',
      riskPositions: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataAudioResultSliceDetailsResultRiskPositions },
      riskWords: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customizedHit)) {
      $dara.Model.validateArray(this.customizedHit);
    }
    if(Array.isArray(this.riskPositions)) {
      $dara.Model.validateArray(this.riskPositions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataAudioResultSliceDetails extends $dara.Model {
  /**
   * @remarks
   * The label descriptions.
   * 
   * @example
   * 疑似违禁内容
   */
  descriptions?: string;
  /**
   * @remarks
   * The end time of the segment, in seconds.
   * 
   * @example
   * 30
   */
  endTime?: number;
  /**
   * @remarks
   * The end timestamp.
   * 
   * @example
   * 1685245261939
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * {\\"consoleProduct\\":\\"slbnext\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The violated labels that were hit.
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * The text detection result.
   */
  result?: VideoModerationResultResponseBodyDataAudioResultSliceDetailsResult[];
  /**
   * @remarks
   * The risk level, returned based on the configured high and low risk score thresholds. Valid values:
   * 
   * - high: High risk.
   * 
   * - medium: Medium risk.
   *  
   * - low: Low risk.
   * 
   * - none: No risk detected.
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
   * ""
   */
  riskTips?: string;
  /**
   * @remarks
   * The risk keywords that were hit.
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
   * The start time of the segment, in seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The start timestamp, in milliseconds.
   * 
   * @example
   * 1659935002123
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The transcribed text of the audio segment.
   * 
   * @example
   * 今天天气真不错
   */
  text?: string;
  /**
   * @remarks
   * The temporary URL of the audio segment file.
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
      result: 'Result',
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
      result: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataAudioResultSliceDetailsResult },
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
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataAudioResult extends $dara.Model {
  /**
   * @remarks
   * The audio label summary.
   */
  audioSummarys?: VideoModerationResultResponseBodyDataAudioResultAudioSummarys[];
  /**
   * @remarks
   * The risk level, returned based on the configured high and low risk score thresholds. Valid values:
   * 
   * - high: High risk.
   * 
   * - medium: Medium risk.
   *  
   * - low: Low risk.
   * 
   * - none: No risk detected.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The list of audio segments.
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

export class VideoModerationResultResponseBodyDataExtAigcDataAIGC extends $dara.Model {
  /**
   * @remarks
   * The code or name of the service provider, used to identify the content producer.
   * 
   * @example
   * 001191******M000100Y43
   */
  contentProducer?: string;
  /**
   * @remarks
   * The name, code, or identifier of the propagation platform. For services that provide artificial intelligence-generated content, this value can be the same as ContentProducer.
   * 
   * @example
   * 001191******M000100Y43
   */
  contentPropagator?: string;
  /**
   * @remarks
   * Indicates whether the content is generated by artificial intelligence (AI). Valid values:
   * 
   * - 1: The content is AI-generated content (AIGC).
   * 
   * - 2: (Propagation platforms only) The content may be AI-generated content generation.
   * 
   * - 3: (Propagation platforms only) The content is suspected to be AI-generated content generation.
   * 
   * @example
   * 1
   */
  label?: string;
  /**
   * @remarks
   * The content production ID, a unique identifier used by the production platform to trace synthesized content.
   * 
   * @example
   * 123******456
   */
  produceID?: string;
  /**
   * @remarks
   * The content propagation ID, a unique identifier assigned by the propagation platform to the distributed AI-generated content.
   * 
   * @example
   * 123******456
   */
  propagateID?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * This field can store information used by the content generation service provider for self-initiated security protection and content/identifier integrity assurance. A hashing mechanism based on ContentProducer and ProduceID can be used to securely store and verify critical information.
   * 
   * @example
   * d41d**********427e
   */
  reservedCode1?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * This field can be used by the content propagation service provider for self-initiated security protection and content/identifier integrity assurance. A hashing mechanism based on ContentProducer and ProduceID can be used to securely store and verify critical information.
   * 
   * @example
   * d41d**********427e
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

export class VideoModerationResultResponseBodyDataExtAigcData extends $dara.Model {
  /**
   * @remarks
   * The AIGC metadata.
   */
  AIGC?: VideoModerationResultResponseBodyDataExtAigcDataAIGC;
  /**
   * @remarks
   * The detection result.
   * 
   * @example
   * None
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      AIGC: 'AIGC',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIGC: VideoModerationResultResponseBodyDataExtAigcDataAIGC,
      result: 'string',
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

export class VideoModerationResultResponseBodyDataExt extends $dara.Model {
  /**
   * @remarks
   * The AIGC metadata detection result.
   */
  aigcData?: VideoModerationResultResponseBodyDataExtAigcData;
  static names(): { [key: string]: string } {
    return {
      aigcData: 'AigcData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aigcData: VideoModerationResultResponseBodyDataExtAigcData,
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

export class VideoModerationResultResponseBodyDataFrameResultFrameSummarys extends $dara.Model {
  /**
   * @remarks
   * The description of the Label field.
   * 
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @remarks
   * The video frame label.
   * 
   * @example
   * violent_armedForces
   */
  label?: string;
  /**
   * @remarks
   * The number of times the label was detected.
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsAigcData extends $dara.Model {
  explain?: string;
  static names(): { [key: string]: string } {
    return {
      explain: 'Explain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      explain: 'string',
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
   * The ID of the hit custom image.
   * 
   * @example
   * 1234
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the hit custom image library.
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
  /**
   * @remarks
   * The height of the text area. Unit: pixels.
   * 
   * @example
   * 111
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area. Unit: pixels.
   * 
   * @example
   * 111
   */
  w?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the text area to the y-axis, with the upper-left corner of the image as the origin. Unit: pixels.
   * 
   * @example
   * 111
   */
  x?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the text area to the x-axis, with the upper-left corner of the image as the origin. Unit: pixels.
   * 
   * @example
   * 222
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLogo extends $dara.Model {
  /**
   * @remarks
   * The confidence score, ranging from 0 to 100, rounded to two decimal places.
   * 
   * @example
   * 99.1
   */
  confidence?: number;
  /**
   * @remarks
   * The hit label.
   * 
   * @example
   * pt_logotoSocialNetwork
   */
  label?: string;
  /**
   * @remarks
   * The logo name.
   * 
   * @example
   * **卫视
   */
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
  /**
   * @remarks
   * The text line and coordinate information.
   */
  location?: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation;
  /**
   * @remarks
   * The logo information.
   */
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigureLocation extends $dara.Model {
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 222
   */
  h?: number;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 111
   */
  w?: number;
  /**
   * @remarks
   * The x-coordinate of the starting point.
   * 
   * @example
   * 111
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate of the starting point.
   * 
   * @example
   * 222
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure extends $dara.Model {
  /**
   * @remarks
   * The code of the identified public figure.
   * 
   * @example
   * xxx001
   */
  figureId?: string;
  /**
   * @remarks
   * The name of the identified public figure.
   * 
   * @example
   * 张三
   */
  figureName?: string;
  /**
   * @remarks
   * The location of the identified public figure.
   */
  location?: VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigureLocation[];
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
      location: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigureLocation },
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score, ranging from 0 to 100, rounded to two decimal places.
   * 
   * @example
   * 50
   */
  confidence?: number;
  /**
   * @remarks
   * The description of the Label field.
   * 
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @remarks
   * The classification of the detection result.
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsVlContent extends $dara.Model {
  /**
   * @remarks
   * The output text from the large model.
   * 
   * @example
   * in the picture XXX
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResults extends $dara.Model {
  aigcData?: VideoModerationResultResponseBodyDataFrameResultFramesResultsAigcData;
  /**
   * @remarks
   * The custom image library information returned when a custom image library is hit.
   */
  customImage?: VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage[];
  /**
   * @remarks
   * The logo information returned when a logo is detected in the video.
   */
  logoData?: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData[];
  /**
   * @remarks
   * The identified public figure codes returned when the video contains specific public figures.
   */
  publicFigure?: VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure[];
  /**
   * @remarks
   * The hit result details.
   */
  result?: VideoModerationResultResponseBodyDataFrameResultFramesResultsResult[];
  /**
   * @remarks
   * The image moderation service type.
   * 
   * @example
   * tonalityImprove
   */
  service?: string;
  /**
   * @remarks
   * The text information detected in the hit image.
   */
  textInImage?: { [key: string]: any };
  /**
   * @remarks
   * The large model result.
   */
  vlContent?: VideoModerationResultResponseBodyDataFrameResultFramesResultsVlContent;
  static names(): { [key: string]: string } {
    return {
      aigcData: 'AigcData',
      customImage: 'CustomImage',
      logoData: 'LogoData',
      publicFigure: 'PublicFigure',
      result: 'Result',
      service: 'Service',
      textInImage: 'TextInImage',
      vlContent: 'VlContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aigcData: VideoModerationResultResponseBodyDataFrameResultFramesResultsAigcData,
      customImage: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage },
      logoData: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData },
      publicFigure: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure },
      result: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsResult },
      service: 'string',
      textInImage: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vlContent: VideoModerationResultResponseBodyDataFrameResultFramesResultsVlContent,
    };
  }

  validate() {
    if(this.aigcData && typeof (this.aigcData as any).validate === 'function') {
      (this.aigcData as any).validate();
    }
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
    if(this.vlContent && typeof (this.vlContent as any).validate === 'function') {
      (this.vlContent as any).validate();
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
   * The offset of the captured frame.
   * 
   * @example
   * 338
   */
  offset?: number;
  /**
   * @remarks
   * The frame detection result details.
   */
  results?: VideoModerationResultResponseBodyDataFrameResultFramesResults[];
  /**
   * @remarks
   * The risk level, returned based on the configured high and low risk score thresholds. Valid values:
   * 
   * - high: High risk.
   * 
   * - medium: Medium risk.
   *  
   * - low: Low risk.
   * 
   * - none: No risk detected.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The temporary access URL of the captured frame image.
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
   * The number of result frames.
   * 
   * @example
   * 10
   */
  frameNum?: number;
  /**
   * @remarks
   * The video frame label summary.
   */
  frameSummarys?: VideoModerationResultResponseBodyDataFrameResultFrameSummarys[];
  /**
   * @remarks
   * The information about video frames that contain hit labels.
   */
  frames?: VideoModerationResultResponseBodyDataFrameResultFrames[];
  /**
   * @remarks
   * The risk level, returned based on the configured high and low risk score thresholds. Valid values:
   * 
   * - high: High risk.
   * 
   * - medium: Medium risk.
   *  
   * - low: Low risk.
   * 
   * - none: No risk detected.
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
   * The segmented results of video audio moderation.
   */
  audioResult?: VideoModerationResultResponseBodyDataAudioResult;
  /**
   * @remarks
   * The value of dataId passed in the API request. This field is not returned if dataId was not specified in the request.
   * 
   * @example
   * product_content-2055763
   */
  dataId?: string;
  /**
   * @remarks
   * The extended information.
   */
  ext?: VideoModerationResultResponseBodyDataExt;
  /**
   * @remarks
   * The list of video frame capture results.
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
   * The manual review task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  manualTaskId?: string;
  /**
   * @remarks
   * The risk level, returned based on the configured high and low risk score thresholds. Valid values:
   * 
   * - high: High risk.
   * 
   * - medium: Medium risk.
   *  
   * - low: Low risk.
   * 
   * - none: No risk detected.
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
      ext: 'Ext',
      frameResult: 'FrameResult',
      liveId: 'LiveId',
      manualTaskId: 'ManualTaskId',
      riskLevel: 'RiskLevel',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: VideoModerationResultResponseBodyDataAudioResult,
      dataId: 'string',
      ext: VideoModerationResultResponseBodyDataExt,
      frameResult: VideoModerationResultResponseBodyDataFrameResult,
      liveId: 'string',
      manualTaskId: 'string',
      riskLevel: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.audioResult && typeof (this.audioResult as any).validate === 'function') {
      (this.audioResult as any).validate();
    }
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
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

export class VideoModerationResultResponseBody extends $dara.Model {
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
   * The moderation result data.
   */
  data?: VideoModerationResultResponseBodyData;
  /**
   * @remarks
   * The return message.
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

