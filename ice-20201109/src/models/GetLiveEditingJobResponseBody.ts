// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveEditingJobResponseBodyLiveEditingJobLiveStreamConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The domain name of the live stream.
   * 
   * @example
   * domain.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * streamName
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobResponseBodyLiveEditingJobMediaProduceConfig extends $dara.Model {
  /**
   * @remarks
   * The editing mode. Default value: Accurate.
   * 
   * @example
   * Accurate
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobResponseBodyLiveEditingJobOutputMediaConfig extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output file. Unit: Kbit/s. You can leave this parameter empty. The default value is the maximum bitrate of the input materials.
   * 
   * @example
   * 1000
   */
  bitrate?: number;
  /**
   * @remarks
   * If OutputMediaTarget is set to vod-media, this parameter indicates the file name of the output file. The value contains the file name extension but not the path.
   * 
   * @example
   * test.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The height of the output file. You can leave this parameter empty. The default value is the maximum height of the input materials.
   * 
   * @example
   * 480
   */
  height?: number;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * @example
   * https://testice-testbucket.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * If OutputMediaTarget is set to vod-media, this parameter indicates the storage location of the media asset in ApsaraVideo VOD. The storage location is the path of the file in ApsaraVideo VOD, excluding the prefix http://. Example: outin-xxxxxx.oss-cn-shanghai.aliyuncs.com.
   * 
   * @example
   * outin-xxxxxx.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The ID of the VOD transcoding template group. If VOD transcoding is not required, set the value to VOD_NO_TRANSCODE.
   * 
   * @example
   * VOD_NO_TRANSCODE
   */
  vodTemplateGroupId?: string;
  /**
   * @remarks
   * The width of the output file. You can leave this parameter empty. The default value is the maximum width of the input materials.
   * 
   * @example
   * 640
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      fileName: 'FileName',
      height: 'Height',
      mediaURL: 'MediaURL',
      storageLocation: 'StorageLocation',
      vodTemplateGroupId: 'VodTemplateGroupId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      fileName: 'string',
      height: 'number',
      mediaURL: 'string',
      storageLocation: 'string',
      vodTemplateGroupId: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobResponseBodyLiveEditingJob extends $dara.Model {
  /**
   * @remarks
   * The clips.
   * 
   * @example
   * [{\\"StartTime\\": \\" 2021-06-21T08:01:00Z\\",  \\"EndTime\\": \\" 2021-06-21T08:03:00Z\\" }]
   */
  clips?: string;
  /**
   * @remarks
   * The response code. Note: Pay attention to this parameter if the job failed.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The time when the live editing job was completed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:52Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the live editing job was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the live editing job.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The live editing configurations.
   */
  liveStreamConfig?: GetLiveEditingJobResponseBodyLiveEditingJobLiveStreamConfig;
  /**
   * @remarks
   * The media asset ID of the output file.
   * 
   * @example
   * ****0cc6ba49eab379332c5b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The production configurations.
   */
  mediaProduceConfig?: GetLiveEditingJobResponseBodyLiveEditingJobMediaProduceConfig;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example2.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The returned message. Note: Pay attention to this parameter if the job failed.
   * 
   * @example
   * The specific parameter LiveStreamConfig is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The time when the live editing job was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:49Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The storage configurations of the output file.
   */
  outputMediaConfig?: GetLiveEditingJobResponseBodyLiveEditingJobOutputMediaConfig;
  /**
   * @remarks
   * The ID of the live editing project.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @remarks
   * The state of the live editing job. Valid values: Init, Queuing, Processing, Success, and Failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"key": "value\\"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      code: 'Code',
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      jobId: 'JobId',
      liveStreamConfig: 'LiveStreamConfig',
      mediaId: 'MediaId',
      mediaProduceConfig: 'MediaProduceConfig',
      mediaURL: 'MediaURL',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      outputMediaConfig: 'OutputMediaConfig',
      projectId: 'ProjectId',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: 'string',
      code: 'string',
      completeTime: 'string',
      creationTime: 'string',
      jobId: 'string',
      liveStreamConfig: GetLiveEditingJobResponseBodyLiveEditingJobLiveStreamConfig,
      mediaId: 'string',
      mediaProduceConfig: GetLiveEditingJobResponseBodyLiveEditingJobMediaProduceConfig,
      mediaURL: 'string',
      message: 'string',
      modifiedTime: 'string',
      outputMediaConfig: GetLiveEditingJobResponseBodyLiveEditingJobOutputMediaConfig,
      projectId: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.liveStreamConfig && typeof (this.liveStreamConfig as any).validate === 'function') {
      (this.liveStreamConfig as any).validate();
    }
    if(this.mediaProduceConfig && typeof (this.mediaProduceConfig as any).validate === 'function') {
      (this.mediaProduceConfig as any).validate();
    }
    if(this.outputMediaConfig && typeof (this.outputMediaConfig as any).validate === 'function') {
      (this.outputMediaConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveEditingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the live editing job.
   */
  liveEditingJob?: GetLiveEditingJobResponseBodyLiveEditingJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****36-3C1E-4417-BDB2-1E034F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveEditingJob: 'LiveEditingJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveEditingJob: GetLiveEditingJobResponseBodyLiveEditingJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveEditingJob && typeof (this.liveEditingJob as any).validate === 'function') {
      (this.liveEditingJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

