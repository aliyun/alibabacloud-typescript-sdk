// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchMediaProducingJobResponseBodyEditingBatchJobSubJobList extends $dara.Model {
  /**
   * @remarks
   * The duration of the output video, in seconds (s).
   * 
   * @example
   * 24.5
   */
  duration?: number;
  /**
   * @remarks
   * The error code that is returned if the subjob failed. This parameter is not returned if the subjob is successful.
   * 
   * @example
   * InvalidMaterial.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the subjob failed. This parameter is not returned if the subjob is successful.
   * 
   * @example
   * The specified clips id not found:["****30d0b5e871eebb2ff7f6c75a****"]
   */
  errorMessage?: string;
  /**
   * @remarks
   * The subjob ID.
   * 
   * @example
   * ****8e81933d44e3ae69e2f81485****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the output media asset.
   * 
   * @example
   * ****1470b11171ee9d19e7e6c66a****
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * @example
   * http:/xxx.oss-cn-shanghai.aliyuncs.com/xxx_0.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * ****7cc47fe04eaa81bd853acb6a****
   */
  projectId?: string;
  /**
   * @remarks
   * The subjob state. Valid values:
   * 
   * Init: The subjob is initialized.
   * 
   * Processing: The subjob is in progress.
   * 
   * Success: The subjob is successful.
   * 
   * Failed: The subjob failed.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      projectId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchMediaProducingJobResponseBodyEditingBatchJob extends $dara.Model {
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-06-13T08:57:07Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the job was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-06-13T08:47:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The editing configurations. For more information, see [EditingConfig](~~2692547#1be9bba03b7qu~~).
   * 
   * @example
   * {
   *   "MediaConfig": {
   *       "Volume": 0
   *   },
   *   "SpeechConfig": {
   *       "Volume": 1
   *   },
   *  "BackgroundMusicConfig": {
   *       "Volume": 0.3
   *   }
   * }
   */
  editingConfig?: string;
  /**
   * @remarks
   * The extended information. This parameter contains the following fields:
   * 
   * ErrorCode: the error code of the main job.
   * 
   * ErrorMessage: the error message of the main job.
   * 
   * @example
   * {
   * 	"ErrorCode": "InvalidMaterial.NotFound",
   * 	"ErrorMessage": "The specified clips id not found:[\\"****30d0b5e871eebb2ff7f6c75a****\\"]"
   * }
   */
  extend?: string;
  /**
   * @remarks
   * Additional input.
   * 
   * - When JobType is Smart_Mix_Timeline_Organize or Screen_Media_Highlights_Timeline_Organize, the additional input is the material selection result.
   * 
   * - When JobType is Scene_Batch_Editing, the additional input is a list of video editing project IDs.
   * 
   * @example
   * ["****7cc47fe04eaa81bd853acb6a****", "****04eaa7cc47fe81bd853acb6a****"]
   */
  extendInput?: string;
  /**
   * @remarks
   * Additional outputs.
   * 
   * - When JobType is Smart_Mix_Media_Select or Screen_Media_Highlights_Media_Select, material selection results are additionally returned.
   * 
   * @example
   * {
   * "textMatchMediaOutputList": [{
   * "textMatchMediaSentenceOutputList": [{
   * "duration": 3.366667,
   * "matchClipList": [{
   * "clipId": "null-2",
   * "endTime": 11.16,
   * "mediaId": "****a0900f5071efbf1ce7e6c66a****",
   * "score": -0.253,
   * "startTime": 8.04
   * }],
   * "text": "A new Freshippo store just opened at the nearby mall.",
   * "textId": "0"
   * },
   * {
   * "duration": 1.566667,
   * "matchClipList": [{
   * "clipId": "null-1",
   * "endTime": 1.54,
   * "mediaId": "****a0900f5071efbf1ce7e6c66a****",
   * "score": -0.2326,
   * "startTime": 0
   * }],
   * "text": "today Yesfirst day of opening",
   * "textId": "0"
   * }
   * ]
   * }]
   * }
   */
  extendOutput?: string;
  /**
   * @remarks
   * The input configurations. For more information, see [InputConfig](~~2692547#2faed1559549n~~).
   * 
   * @example
   * {
   *   "MediaGroupArray": [{
   *       "GroupName": "MediaGroup1",
   *       "MediaArray": [
   *         "****9d46c886b45481030f6e****",
   *         "****6c886b4549d481030f6e****" ]
   *     }, {
   *       "GroupName": "MediaGroup2",
   *       "MediaArray": [
   *         "****d46c886810b454930f6e****",
   *         "****4549d886810b46c30f6e****" ]
   *   }],
   *   "TitleArray": [
   *       "回龙观盒马鲜生开业啦",
   *       "盒马鲜生开业啦" ],
   *   "SpeechTextArray": [
   *       "附近的商场新开了一家盒马鲜生，今天是第一天开业"
   *       "商场里的人不少，零食、酒水都比较便宜大家也快来看看呀" ]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****b6b2750d4308892ac3330238****
   */
  jobId?: string;
  /**
   * @remarks
   * Task Type:
   * 
   * - Script (Script-based automated video editing)
   * 
   * - Smart_Mix (Intelligent text-to-media matching for video editing)
   * 
   * - Sports_Highlights (Sporting event highlights compilation)
   * 
   * - Screen_Media_Highlights (High-energy multi-media mashup editing)
   * 
   * - Smart_Mix_Media_Select (Intelligent matching – Material selection)
   * 
   * - Smart_Mix_Timeline_Organize (Intelligent matching – Timeline orchestration)
   * 
   * - Screen_Media_Highlights_Media_Select (High-energy mashup – Material selection)
   * 
   * - Screen_Media_Highlights_Timeline_Organize (High-energy mashup – Timeline orchestration)
   * 
   * - Scene_Batch_Editing (Batch synthesis across multiple timelines)
   * 
   * @example
   * Script
   */
  jobType?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-06-13T08:57:07Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The output configurations. For more information, see [OutputConfig](~~2692547#447b928fcbuoa~~).
   * 
   * @example
   * {
   *   "MediaURL": "http://xxx.oss-cn-shanghai.aliyuncs.com/xxx_{index}.mp4",
   *   "Count": 20,
   *   "MaxDuration": 15,
   *   "Width": 1080,
   *   "Height": 1920,
   *   "Video": {"Crf": 27}
   * }
   */
  outputConfig?: string;
  /**
   * @remarks
   * The job state. Valid values:
   * 
   * Init: The job is initialized.
   * 
   * Processing: The job is in progress.
   * 
   * Finished: The job is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The quick video production subjobs.
   */
  subJobList?: GetBatchMediaProducingJobResponseBodyEditingBatchJobSubJobList[];
  /**
   * @remarks
   * The user-defined data, including the business and callback configurations. For more information, see [UserData](https://help.aliyun.com/document_detail/357745.html).
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      editingConfig: 'EditingConfig',
      extend: 'Extend',
      extendInput: 'ExtendInput',
      extendOutput: 'ExtendOutput',
      inputConfig: 'InputConfig',
      jobId: 'JobId',
      jobType: 'JobType',
      modifiedTime: 'ModifiedTime',
      outputConfig: 'OutputConfig',
      status: 'Status',
      subJobList: 'SubJobList',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      createTime: 'string',
      editingConfig: 'string',
      extend: 'string',
      extendInput: 'string',
      extendOutput: 'string',
      inputConfig: 'string',
      jobId: 'string',
      jobType: 'string',
      modifiedTime: 'string',
      outputConfig: 'string',
      status: 'string',
      subJobList: { 'type': 'array', 'itemType': GetBatchMediaProducingJobResponseBodyEditingBatchJobSubJobList },
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subJobList)) {
      $dara.Model.validateArray(this.subJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchMediaProducingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the quick video production job.
   */
  editingBatchJob?: GetBatchMediaProducingJobResponseBodyEditingBatchJob;
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
      editingBatchJob: 'EditingBatchJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingBatchJob: GetBatchMediaProducingJobResponseBodyEditingBatchJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.editingBatchJob && typeof (this.editingBatchJob as any).validate === 'function') {
      (this.editingBatchJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

