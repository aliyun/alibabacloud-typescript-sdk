// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModerationResultResponseBodyDataSliceDetails extends $dara.Model {
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
      manualTaskId: 'ManualTaskId',
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
      manualTaskId: 'string',
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

