// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcCloudTranscodeResponseBodyTaskInfoInputParamSingleSubUserParam extends $dara.Model {
  /**
   * @remarks
   * The video input stream type of the subscription.
   * 
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @remarks
   * The media type of the subscribed user.
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * The user ID of the subscribed user.
   * 
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
  /**
   * @remarks
   * The single-stream subscription input parameters.
   */
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
   * @remarks
   * The channel ID to which the transcoded stream is relayed.
   * 
   * @example
   * myChannel
   */
  channelId?: string;
  /**
   * @remarks
   * The transcoding template name.
   * 
   * @example
   * lhd
   */
  transcodeTemplate?: string;
  /**
   * @remarks
   * The user ID in the channel to which the transcoded stream is relayed.
   * 
   * @example
   * userA_360p
   */
  userId?: string;
  /**
   * @remarks
   * The user token required to relay the transcoded stream to the channel.
   * 
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
   * @remarks
   * The application ID.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * myChannel
   */
  channelId?: string;
  /**
   * @remarks
   * The subscription input parameters.
   */
  inputParam?: DescribeRtcCloudTranscodeResponseBodyTaskInfoInputParam;
  /**
   * @remarks
   * The idle timeout period. If the task remains idle for longer than the MaxIdleTime value, the task is automatically stopped. Unit: seconds. Valid values: 10 to 14400 (maximum of 4 hours). Default value: 300.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * The transcoding output parameters.
   */
  outputParams?: DescribeRtcCloudTranscodeResponseBodyTaskInfoOutputParams[];
  /**
   * @remarks
   * The status of the cloud transcoding task. Valid values:
   * 
   * - STARTING
   * - RUNNING
   * - RECOVERING
   * - STOPPED.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The cloud transcoding task ID.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the cloud transcoding task.
   */
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

