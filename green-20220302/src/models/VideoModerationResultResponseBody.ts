// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultResponseBodyDataAudioResultAudioSummarys extends $dara.Model {
  /**
   * @remarks
   * The description of the labels.
   * 
   * @example
   * no risk
   */
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
  /**
   * @remarks
   * The description of the labels.
   * 
   * @example
   * no risk
   */
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
   * The distance from the top-left corner of the text area to the y-axis, with the top-left corner of the image as the origin. Unit: pixels.
   * 
   * @example
   * 111
   */
  x?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the x-axis, with the top-left corner of the image as the origin. Unit: pixels.
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
   * Confidence score, ranging from 0 to 100, with two decimal places.
   * 
   * @example
   * 99.10
   */
  confidence?: number;
  /**
   * @remarks
   * label
   * 
   * @example
   * pt_logotoSocialNetwork
   */
  label?: string;
  /**
   * @remarks
   * Logo name.
   * 
   * @example
   * **logo
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
   * The location of the logo.
   */
  location?: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation;
  /**
   * @remarks
   * Logo information.
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure extends $dara.Model {
  /**
   * @remarks
   * The information about the code of the identified figure.
   * 
   * @example
   * xxx001
   */
  figureId?: string;
  figureName?: string;
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
  /**
   * @remarks
   * Returns logo information when the video contains a logo.
   */
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
  manualTaskId?: string;
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
      manualTaskId: 'ManualTaskId',
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
      manualTaskId: 'string',
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

