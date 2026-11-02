// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchMediaProducingJobResponseBodyEditingBatchJobSubJobList extends $dara.Model {
  /**
   * @remarks
   * The duration of the produced video. Unit: seconds.
   * 
   * @example
   * 24.5
   */
  duration?: number;
  /**
   * @remarks
   * The error code returned when the subtask fails. This parameter is not returned if the subtask is successful.
   * 
   * @example
   * InvalidMaterial.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the subtask fails. This parameter is not returned if the subtask is successful.
   * 
   * @example
   * The specified clips id not found:["****30d0b5e871eebb2ff7f6c75a****"]
   */
  errorMessage?: string;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * ****8e81933d44e3ae69e2f81485****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the produced media asset.
   * 
   * @example
   * ****1470b11171ee9d19e7e6c66a****
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the output video file.
   * 
   * @example
   * http:/xxx.oss-cn-shanghai.aliyuncs.com/xxx_0.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The ID of the cloud editing project.
   * 
   * @example
   * ****7cc47fe04eaa81bd853acb6a****
   */
  projectId?: string;
  /**
   * @remarks
   * The subtask status. Valid values:
   * 
   * - Init: initialized
   * 
   * - Processing: processing
   * 
   * - Success: successful
   * 
   * - Failed: failed
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
   * The time when the task was completed. The time is displayed in UTC.
   * 
   * Format: "YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"".
   * 
   * @example
   * 2024-06-13T08:57:07Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC.
   * 
   * @example
   * 2024-06-13T08:47:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The editing-related configuration. For more information about the structure, see [EditingConfig](~~2692547#1be9bba03b7qu~~).
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
   * The extended information. Field details:
   * 
   * - ErrorCode: the error code of the main task
   * 
   * - ErrorMessage: the error message of the main task
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
   * The additional input.
   * - If JobType is set to Smart_Mix_Timeline_Organize or Screen_Media_Highlights_Timeline_Organize, the additional input is the media selection result.
   * - If JobType is set to Scene_Batch_Editing, the additional input is the list of editing project IDs.
   * 
   * @example
   * ["****7cc47fe04eaa81bd853acb6a****", "****04eaa7cc47fe81bd853acb6a****"]
   */
  extendInput?: string;
  /**
   * @remarks
   * The additional output.
   * - If JobType is set to Smart_Mix_Media_Select or Screen_Media_Highlights_Media_Select, the media selection result is additionally returned.
   * 
   * @example
   * {
   * 	"textMatchMediaOutputList": [{
   * 		"textMatchMediaSentenceOutputList": [{
   * 				"duration": 3.366667,
   * 				"matchClipList": [{
   * 					"clipId": "null-2",
   * 					"endTime": 11.16,
   * 					"mediaId": "****a0900f5071efbf1ce7e6c66a****",
   * 					"score": -0.253,
   * 					"startTime": 8.04
   * 				}],
   * 				"text": "A new box of fresh horses has been opened in the nearby shopping mall.",
   * 				"textId": "0"
   * 			},
   * 			{
   * 				"duration": 1.566667,
   * 				"matchClipList": [{
   * 					"clipId": "null-1",
   * 					"endTime": 1.54,
   * 					"mediaId": "****a0900f5071efbf1ce7e6c66a****",
   * 					"score": -0.2326,
   * 					"startTime": 0
   * 				}],
   * 				"text": "Today is the first day of opening",
   * 				"textId": "0"
   * 			}
   * 		]
   * 	}]
   * }
   */
  extendOutput?: string;
  /**
   * @remarks
   * The user synthesis output configuration. For more information about the structure, see [InputConfig](~~2692547#2faed1559549n~~).
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
   *       "Huilongguan Box Ma Xiansheng Opened",
   *       "Box of Ma Xiansheng has opened" ],
   *   "SpeechTextArray": [
   *       "A new box of fresh horses has been opened in a nearby shopping mall. Today is the first day of opening."
   *       "There are a lot of people in the shopping mall. Snacks and drinks are relatively cheap. Come and have a look." ]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ****b6b2750d4308892ac3330238****
   */
  jobId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - Script: scripted automatic video production
   * - Smart_Mix: intelligent image and text matching video production
   * - Sports_Highlights: sports event highlights video production
   * - Screen_Media_Highlights: high-energy mashup video production
   * - Smart_Mix_Media_Select: intelligent matching - media selection
   * - Smart_Mix_Timeline_Organize: intelligent matching - timeline arrangement
   * - Screen_Media_Highlights_Media_Select: high-energy mashup - media selection
   * - Screen_Media_Highlights_Timeline_Organize: high-energy mashup - timeline arrangement
   * - Scene_Batch_Editing: multi-timeline batch synthesis
   * 
   * @example
   * Script
   */
  jobType?: string;
  /**
   * @remarks
   * The time when the task was modified. The time is displayed in UTC.
   * 
   * Format: "YYYY-MM-DD\\"T\\"hh:mm:ss\\"Z\\"".
   * 
   * @example
   * 2024-06-13T08:57:07Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The output configuration. For more information about the structure, see [OutputConfig](~~2692547#447b928fcbuoa~~).
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
   * The task status. Valid values:
   * 
   * - Init: initialized
   * 
   * - Processing: processing
   * 
   * - Finished: finished
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The list of one-click video production subtasks.
   */
  subJobList?: GetBatchMediaProducingJobResponseBodyEditingBatchJobSubJobList[];
  /**
   * @remarks
   * The user business and callback configurations. For more information about the structure, see [UserData](~~357745#section-urj-v3f-0s1~~).
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
   * The batch intelligent one-click video production task information.
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

