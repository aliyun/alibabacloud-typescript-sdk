// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModerationResultResponseBodyDataSliceDetailsResultCustomizedHit extends $dara.Model {
  /**
   * @remarks
   * The custom keyword.
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
   * insultLib
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

export class VoiceModerationResultResponseBodyDataSliceDetailsResultRiskPositions extends $dara.Model {
  /**
   * @remarks
   * The end position.
   * 
   * @example
   * 4
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
   * 1
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

export class VoiceModerationResultResponseBodyDataSliceDetailsResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score.
   * 
   * @example
   * 100.00
   */
  confidence?: number;
  /**
   * @remarks
   * The matched custom libraries.
   */
  customizedHit?: VoiceModerationResultResponseBodyDataSliceDetailsResultCustomizedHit[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * profanity
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * ad
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
   * A list of risk positions.
   */
  riskPositions?: VoiceModerationResultResponseBodyDataSliceDetailsResultRiskPositions[];
  /**
   * @remarks
   * The matched risky content.
   * 
   * @example
   * XX
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
      customizedHit: { 'type': 'array', 'itemType': VoiceModerationResultResponseBodyDataSliceDetailsResultCustomizedHit },
      description: 'string',
      label: 'string',
      riskLevel: 'string',
      riskPositions: { 'type': 'array', 'itemType': VoiceModerationResultResponseBodyDataSliceDetailsResultRiskPositions },
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

export class VoiceModerationResultResponseBodyDataSliceDetails extends $dara.Model {
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * 疑似违禁内容
   */
  descriptions?: string;
  /**
   * @remarks
   * The end time of the slice, in seconds.
   * 
   * @example
   * 10
   */
  endTime?: number;
  /**
   * @remarks
   * The end timestamp of the slice, in milliseconds.
   * 
   * @example
   * 1678854649720
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Extended information.
   * 
   * @example
   * {\\"riskWords\\":\\"色情服务\\","adNums":"\\","riskTips":"涉政_人物，涉政_红歌"}
   */
  extend?: string;
  /**
   * @remarks
   * The matched violation labels.
   * 
   * @example
   * sexual_sounds
   */
  labels?: string;
  /**
   * @remarks
   * A reserved field.
   */
  originAlgoResult?: { [key: string]: any };
  /**
   * @remarks
   * The text detection results.
   */
  result?: VoiceModerationResultResponseBodyDataSliceDetailsResult[];
  /**
   * @remarks
   * The risk level, which is determined based on the configured thresholds for high and low risk scores. Valid values:
   * 
   * - `high`: high risk
   * 
   * - `medium`: medium risk
   * 
   * - `low`: low risk
   * 
   * - `none`: no risk detected
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Details about the matched risk.
   * 
   * @example
   * 涉政_人物
   */
  riskTips?: string;
  /**
   * @remarks
   * The matched risk keywords.
   * 
   * @example
   * 色情服务
   */
  riskWords?: string;
  /**
   * @remarks
   * The risk score. The value ranges from 0 to 99.
   * 
   * @example
   * 87.01
   */
  score?: number;
  /**
   * @remarks
   * The start time of the slice, in seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The start timestamp of the slice, in milliseconds.
   * 
   * @example
   * 1678854649720
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The transcribed text of the audio slice.
   * 
   * @example
   * 今天天气真不错
   */
  text?: string;
  /**
   * @remarks
   * The temporary URL of the audio slice.
   * 
   * @example
   * 暂无
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
      originAlgoResult: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      result: { 'type': 'array', 'itemType': VoiceModerationResultResponseBodyDataSliceDetailsResult },
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
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
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
   * The value of the `dataId` parameter you specified in the request. This parameter is returned only if you specified it in the request.
   * 
   * @example
   * data1234
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
   * The ID of the manual review task.
   * 
   * @example
   * xxxxx-xxxxx
   */
  manualTaskId?: string;
  /**
   * @remarks
   * The risk level, which is determined based on the configured thresholds for high and low risk scores. Valid values:
   * 
   * - `high`: high risk
   * 
   * - `medium`: medium risk
   * 
   * - `low`: low risk
   * 
   * - `none`: no risk detected
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The slice results.
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
   * The task URL.
   * 
   * @example
   * 暂无
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
   * The error code.
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
   * The response message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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

