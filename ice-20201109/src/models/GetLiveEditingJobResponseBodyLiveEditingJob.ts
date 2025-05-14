// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveEditingJobResponseBodyLiveEditingJobLiveStreamConfig } from "./GetLiveEditingJobResponseBodyLiveEditingJobLiveStreamConfig";
import { GetLiveEditingJobResponseBodyLiveEditingJobMediaProduceConfig } from "./GetLiveEditingJobResponseBodyLiveEditingJobMediaProduceConfig";
import { GetLiveEditingJobResponseBodyLiveEditingJobOutputMediaConfig } from "./GetLiveEditingJobResponseBodyLiveEditingJobOutputMediaConfig";


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

