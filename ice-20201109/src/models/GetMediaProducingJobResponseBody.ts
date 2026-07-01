// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaProducingJobResponseBodyMediaProducingJob extends $dara.Model {
  /**
   * @remarks
   * The clip parameters of the template used for the job.
   * 
   * @example
   * {"VideoArray":["****05512043f49f697f7425****","****05512043f49f697f7425****","****05512043f49f697f7425****"]}
   */
  clipsParam?: string;
  /**
   * @remarks
   * The error code of the media producing job. >Notice: This parameter is returned only if the job fails.
   * 
   * @example
   * ExceededMaximumValue
   */
  code?: string;
  /**
   * @remarks
   * The time in UTC when the media producing job was completed, formatted as `YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"`.
   * 
   * @example
   * 2020-12-23T13:33:52Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time in UTC when the media producing job was created, formatted as `YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"`.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration of the output media. >Notice: This parameter is returned only if the job is successful and the output is an audio or video file.
   * 
   * @example
   * 30.500000
   */
  duration?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the output media asset.
   * 
   * @example
   * ****0cc6ba49eab379332c5b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the output media file.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example2.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The error message of the media producing job.
   * 
   * >Notice: 
   * 
   * This parameter is returned only if the job fails.
   * 
   * @example
   * The specified "Width_Height" has exceeded maximum value.
   */
  message?: string;
  /**
   * @remarks
   * The time in UTC when the media producing job was last modified, formatted as `YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"`.
   * 
   * @example
   * 2020-12-23T13:33:49Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The progress of the job. Valid values: 0 to 100.
   */
  progress?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @remarks
   * The status of the media producing job. Valid values:
   * 
   * - `Init` (Initialized)
   * 
   * - `Queuing` (In queue)
   * 
   * - `Processing` (In progress)
   * 
   * - `Success` (Successful)
   * 
   * - `Failed` (Failed)
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * If the job is a subtask of a batch smart one-click video creation task, this parameter contains the subtask\\"s materials, such as the title and speech script.
   * 
   * @example
   * {"Title": "标题", "SpeechText": "批量智能一键成片口播文案"}
   */
  subJobMaterials?: string;
  /**
   * @remarks
   * The ID of the template used for the job.
   * 
   * @example
   * ****6e76134d739cc3e85d3e****
   */
  templateId?: string;
  /**
   * @remarks
   * The timeline of the media producing job.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The user data, in JSON format.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx","Key":"Valuexxx"}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the media asset in VOD (Video on Demand). This ID is returned if the job\\"s output is stored in VOD.
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
   * The details of the media producing job.
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

