// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaProducingJobResponseBodyMediaProducingJob extends $dara.Model {
  /**
   * @remarks
   * The template parameters of the media producing job.
   * 
   * @example
   * {"VideoArray":["****05512043f49f697f7425****","****05512043f49f697f7425****","****05512043f49f697f7425****"]}
   */
  clipsParam?: string;
  /**
   * @remarks
   * The error code of the media producing job.
   * >Notice: Check this field when the job fails.
   * 
   * @example
   * ExceededMaximumValue
   */
  code?: string;
  /**
   * @remarks
   * The time when the media producing job was completed, in UTC.
   * 
   * Format: "YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"".
   * 
   * @example
   * 2020-12-23T13:33:52Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the media producing job was created, in UTC.
   * 
   * Format: "YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"".
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration of the output media asset.
   * >Notice: This field has a value only when the producing job succeeds and the output media asset type is audio or video.
   * 
   * @example
   * 30.500000
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the media producing job.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The resource ID of the output media asset.
   * 
   * @example
   * ****0cc6ba49eab379332c5b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The resource file URL of the output media asset.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example2.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The error message of the media producing job.
   * 
   * >Notice: Check this field when the job fails.
   * 
   * @example
   * The specified "Width_Height" has exceeded maximum value.
   */
  message?: string;
  /**
   * @remarks
   * The time when the media producing job was last modified, in UTC.
   * 
   * Format: "YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"".
   * 
   * @example
   * 2020-12-23T13:33:49Z
   */
  modifiedTime?: string;
  progress?: number;
  /**
   * @remarks
   * The ID of the cloud editing project.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @remarks
   * The status of the media producing job. Valid values:
   * 
   * - Init: init state.
   * - Queuing: queuing.
   * - Processing: processing.
   * - Success: succeeded.
   * - Failed: failed.
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * If this media producing job is a subtask of a batch intelligent one-click video production job, this field returns the material information used by the subtask, such as the narration text and title.
   * 
   * @example
   * {"Title": "Title", "SpeechText": "Narration text for batch intelligent one-click video production"}
   */
  subJobMaterials?: string;
  /**
   * @remarks
   * The template ID of the media producing job.
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
   * The custom settings in JSON format.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx","Key":"Valuexxx"}
   */
  userData?: string;
  /**
   * @remarks
   * If the output of the media producing job is delivered to ApsaraVideo VOD, the output is registered as a VOD media asset. The vodMediaId is the media asset ID in VOD.
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
   * The media producing job information.
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

