// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaProducingJobResponseBodyMediaProducingJob extends $dara.Model {
  /**
   * @remarks
   * The template parameters corresponding to the video editing and producing job.
   * 
   * @example
   * {"VideoArray":["****05512043f49f697f7425****","****05512043f49f697f7425****","****05512043f49f697f7425****"]}
   */
  clipsParam?: string;
  /**
   * @remarks
   * The error code of the video editing and producing job.
   * >Notice: Pay attention to this field when the job fails.
   * 
   * @example
   * ExceededMaximumValue
   */
  code?: string;
  /**
   * @remarks
   * The time when the video editing and producing job was completed. The time is displayed in UTC.
   * 
   * Format: "YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"".
   * 
   * @example
   * 2020-12-23T13:33:52Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the video editing and producing job was created. The time is displayed in UTC.
   * 
   * Format: "YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"".
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration of the produced media.
   * >Notice: This field has a value only when the producing task is successful and the output type is audio or video.
   * 
   * @example
   * 30.500000
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the video editing and producing job.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The resource ID of the produced media.
   * 
   * @example
   * ****0cc6ba49eab379332c5b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the resource file for the produced media.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example2.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The error message of the video editing and producing job.
   * 
   * >Notice: Pay attention to this field when the job fails.
   * 
   * @example
   * The specified "Width_Height" has exceeded maximum value.
   */
  message?: string;
  /**
   * @remarks
   * The time when the video editing and producing job was modified. The time is displayed in UTC.
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
   * The status of the video editing and producing job. Valid values:
   * 
   * - Init: initial state
   * - Queuing: queuing
   * - Processing: processing
   * - Success: successful
   * - Failed: failed
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * The material information used by the subtask, such as the voiceover script and title. This field is returned when the editing task is a subtask of a batch intelligent one-click video producing task.
   * 
   * @example
   * {"Title": "title", "SpeechText": "Batch intelligent one-click into a piece of oral copy"}
   */
  subJobMaterials?: string;
  /**
   * @remarks
   * The ID of the template corresponding to the video editing and producing job.
   * 
   * @example
   * ****6e76134d739cc3e85d3e****
   */
  templateId?: string;
  /**
   * @remarks
   * The timeline corresponding to the video editing and producing job.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The custom user settings in JSON format.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx","Key":"Valuexxx"}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the media asset in ApsaraVideo VOD. If the produced media of the editing task is output to ApsaraVideo VOD, the produced media is registered as a media asset in ApsaraVideo VOD, and this field indicates the ID of the media asset.
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
   * The cloud editing project information.
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

