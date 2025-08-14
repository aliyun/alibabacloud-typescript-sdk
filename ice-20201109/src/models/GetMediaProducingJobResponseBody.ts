// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaProducingJobResponseBodyMediaProducingJob extends $dara.Model {
  /**
   * @remarks
   * The template parameters of the media editing and production job.
   * 
   * @example
   * {"VideoArray":["****05512043f49f697f7425****","****05512043f49f697f7425****","****05512043f49f697f7425****"]}
   */
  clipsParam?: string;
  /**
   * @remarks
   * The response code
   * 
   * Note: Pay attention to this parameter if the job failed.
   * 
   * @example
   * ExceededMaximumValue
   */
  code?: string;
  /**
   * @remarks
   * The time when the media editing and production job was complete.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:52Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the media editing and production job was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration of the output file.
   * 
   * Note: This parameter has a value if the job is successful and the output file is an audio or video file.
   * 
   * @example
   * 30.500000
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the media editing and production job.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
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
   * The URL of the output file.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example2.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * Note: Pay attention to this parameter if the job failed.
   * 
   * @example
   * The specified "Width_Height" has exceeded maximum value.
   */
  message?: string;
  /**
   * @remarks
   * The time when the media editing and production job was last modified.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:49Z
   */
  modifiedTime?: string;
  progress?: number;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @remarks
   * The state of the media editing and production job. Valid values:
   * 
   * Init
   * 
   * Queuing
   * 
   * Processing
   * 
   * Success
   * 
   * Failed
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * The materials of the media editing and production job if the job is a subjob of a quick video production job, including the broadcast text and title.
   * 
   * @example
   * {"Title": "Title", "SpeechText": "Broadcast text of a quick video production job"}
   */
  subJobMaterials?: string;
  /**
   * @remarks
   * The ID of the template used by the media editing and production job.
   * 
   * @example
   * ****6e76134d739cc3e85d3e****
   */
  templateId?: string;
  /**
   * @remarks
   * The timeline of the media editing and production job.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx","Key":"Valuexxx"}
   */
  userData?: string;
  /**
   * @remarks
   * The media asset ID of the output file in ApsaraVideo VOD if the output file is stored in ApsaraVideo VOD.
   * 
   * @example
   * ****332c5b0cc6ba49eab379****
   */
  vodMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      clipsParam: 'ClipsParam',
      code: 'Code',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      duration: 'Duration',
      jobId: 'JobId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      progress: 'Progress',
      projectId: 'ProjectId',
      status: 'Status',
      subJobMaterials: 'SubJobMaterials',
      templateId: 'TemplateId',
      timeline: 'Timeline',
      userData: 'UserData',
      vodMediaId: 'VodMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsParam: 'string',
      code: 'string',
      completeTime: 'string',
      createTime: 'string',
      duration: 'number',
      jobId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      message: 'string',
      modifiedTime: 'string',
      progress: 'number',
      projectId: 'string',
      status: 'string',
      subJobMaterials: 'string',
      templateId: 'string',
      timeline: 'string',
      userData: 'string',
      vodMediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaProducingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the online editing project.
   */
  mediaProducingJob?: GetMediaProducingJobResponseBodyMediaProducingJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****83B7-7F87-4792-BFE9-63CD2137****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaProducingJob: 'MediaProducingJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaProducingJob: GetMediaProducingJobResponseBodyMediaProducingJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaProducingJob && typeof (this.mediaProducingJob as any).validate === 'function') {
      (this.mediaProducingJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

