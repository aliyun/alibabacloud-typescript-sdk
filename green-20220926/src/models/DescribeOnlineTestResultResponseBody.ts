// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnlineTestResultResponseBodyAudioData extends $dara.Model {
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1724378510396
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnlineTestResultResponseBodyFrameData extends $dara.Model {
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1725761005419
   */
  timeStamp?: string;
  /**
   * @remarks
   * The detection URL.
   * 
   * @example
   * https://xxxxxxxxx.com/data/data.mp4
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
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

export class DescribeOnlineTestResultResponseBodySummaryList extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * video
   */
  resourceType?: string;
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
   * The risk level summary.
   */
  riskLevelSummary?: { [key: string]: number };
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 10
   */
  sliceCount?: number;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      riskLevel: 'RiskLevel',
      riskLevelSummary: 'RiskLevelSummary',
      sliceCount: 'SliceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      riskLevel: 'string',
      riskLevelSummary: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      sliceCount: 'number',
    };
  }

  validate() {
    if(this.riskLevelSummary) {
      $dara.Model.validateMap(this.riskLevelSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnlineTestResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The audio data.
   */
  audioData?: DescribeOnlineTestResultResponseBodyAudioData;
  /**
   * @remarks
   * The video frame data.
   */
  frameData?: DescribeOnlineTestResultResponseBodyFrameData;
  /**
   * @remarks
   * The detection time, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1725761005419
   */
  moderationTime?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
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
   * The service code.
   * 
   * @example
   * videoDetection
   */
  serviceCode?: string;
  /**
   * @remarks
   * The list of detection results.
   */
  summaryList?: DescribeOnlineTestResultResponseBodySummaryList[];
  /**
   * @remarks
   * The ID of the detection task.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The detection status.
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * The detection URL.
   * 
   * @example
   * https://xxxxxxxxx.com/data/data.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      audioData: 'AudioData',
      frameData: 'FrameData',
      moderationTime: 'ModerationTime',
      requestId: 'RequestId',
      riskLevel: 'RiskLevel',
      serviceCode: 'ServiceCode',
      summaryList: 'SummaryList',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioData: DescribeOnlineTestResultResponseBodyAudioData,
      frameData: DescribeOnlineTestResultResponseBodyFrameData,
      moderationTime: 'string',
      requestId: 'string',
      riskLevel: 'string',
      serviceCode: 'string',
      summaryList: { 'type': 'array', 'itemType': DescribeOnlineTestResultResponseBodySummaryList },
      taskId: 'string',
      taskStatus: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.audioData && typeof (this.audioData as any).validate === 'function') {
      (this.audioData as any).validate();
    }
    if(this.frameData && typeof (this.frameData as any).validate === 'function') {
      (this.frameData as any).validate();
    }
    if(Array.isArray(this.summaryList)) {
      $dara.Model.validateArray(this.summaryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

