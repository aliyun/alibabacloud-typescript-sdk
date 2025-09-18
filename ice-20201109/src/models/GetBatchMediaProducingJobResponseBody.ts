// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchMediaProducingJobResponseBodyEditingBatchJobSubJobList extends $dara.Model {
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
  extendInput?: string;
  extendOutput?: string;
  /**
   * @remarks
   * The input configurations. For more information, see [InputConfig](~~2692547#2faed1559549n~~).
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

