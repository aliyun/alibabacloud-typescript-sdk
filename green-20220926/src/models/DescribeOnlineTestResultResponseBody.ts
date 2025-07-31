// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnlineTestResultResponseBodyAudioData extends $dara.Model {
  /**
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
   * @example
   * 1725761005419
   */
  timeStamp?: string;
  /**
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
   * @example
   * video
   */
  resourceType?: string;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  riskLevelSummary?: { [key: string]: number };
  /**
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
  audioData?: DescribeOnlineTestResultResponseBodyAudioData;
  frameData?: DescribeOnlineTestResultResponseBodyFrameData;
  /**
   * @example
   * 1725761005419
   */
  moderationTime?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * VideoModeration
   */
  serviceCode?: string;
  summaryList?: DescribeOnlineTestResultResponseBodySummaryList[];
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  /**
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
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

