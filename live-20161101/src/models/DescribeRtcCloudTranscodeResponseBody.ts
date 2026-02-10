// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcCloudTranscodeResponseBodyTaskInfoInputParamSingleSubUserParam extends $dara.Model {
  /**
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @example
   * userA
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceType: 'SourceType',
      streamType: 'StreamType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceType: 'number',
      streamType: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcCloudTranscodeResponseBodyTaskInfoInputParam extends $dara.Model {
  singleSubUserParam?: DescribeRtcCloudTranscodeResponseBodyTaskInfoInputParamSingleSubUserParam;
  static names(): { [key: string]: string } {
    return {
      singleSubUserParam: 'SingleSubUserParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      singleSubUserParam: DescribeRtcCloudTranscodeResponseBodyTaskInfoInputParamSingleSubUserParam,
    };
  }

  validate() {
    if(this.singleSubUserParam && typeof (this.singleSubUserParam as any).validate === 'function') {
      (this.singleSubUserParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcCloudTranscodeResponseBodyTaskInfoOutputParams extends $dara.Model {
  /**
   * @example
   * myChannel
   */
  channelId?: string;
  /**
   * @example
   * lhd
   */
  transcodeTemplate?: string;
  /**
   * @example
   * userA_360p
   */
  userId?: string;
  /**
   * @example
   * eyJhcHBpZCI********
   */
  userToken?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      transcodeTemplate: 'TranscodeTemplate',
      userId: 'UserId',
      userToken: 'UserToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      transcodeTemplate: 'string',
      userId: 'string',
      userToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcCloudTranscodeResponseBodyTaskInfo extends $dara.Model {
  /**
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @example
   * myChannel
   */
  channelId?: string;
  inputParam?: DescribeRtcCloudTranscodeResponseBodyTaskInfoInputParam;
  /**
   * @example
   * 600
   */
  maxIdleTime?: number;
  outputParams?: DescribeRtcCloudTranscodeResponseBodyTaskInfoOutputParams[];
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * ******73-8501-****-8ac1-72295a******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      inputParam: 'InputParam',
      maxIdleTime: 'MaxIdleTime',
      outputParams: 'OutputParams',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      inputParam: DescribeRtcCloudTranscodeResponseBodyTaskInfoInputParam,
      maxIdleTime: 'number',
      outputParams: { 'type': 'array', 'itemType': DescribeRtcCloudTranscodeResponseBodyTaskInfoOutputParams },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.inputParam && typeof (this.inputParam as any).validate === 'function') {
      (this.inputParam as any).validate();
    }
    if(Array.isArray(this.outputParams)) {
      $dara.Model.validateArray(this.outputParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcCloudTranscodeResponseBody extends $dara.Model {
  /**
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  taskInfo?: DescribeRtcCloudTranscodeResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: DescribeRtcCloudTranscodeResponseBodyTaskInfo,
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

