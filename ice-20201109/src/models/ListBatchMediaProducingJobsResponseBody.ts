// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchMediaProducingJobsResponseBodyEditingBatchJobList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-09T06:38:09Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the job was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-09T06:36:48Z
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
   * The extended information of the job.
   * 
   * @example
   * {}
   */
  extend?: string;
  /**
   * @remarks
   * The input configurations.
   */
  inputConfig?: string;
  /**
   * @remarks
   * The ID of the quick video production job.
   * 
   * @example
   * ******7ecbee4c6d9b8474498e******
   */
  jobId?: string;
  /**
   * @remarks
   * The job type.
   * 
   * Valid values:
   * 
   * *   Script: script-based editing job that mixes media assets.
   * *   Smart_Mix: intelligent editing job that mixes media assets.
   * 
   * @example
   * Script
   */
  jobType?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2023-06-09T06:37:58Z
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
   * The job state.
   * 
   * Valid values:
   * 
   * *   Finished
   * *   Init
   * *   Failed
   * *   Processing
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format, which can be up to 512 bytes in length. You can specify a custom callback URL. For more information, see [Configure a callback upon editing completion](https://help.aliyun.com/document_detail/451631.html).
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      editingConfig: 'EditingConfig',
      extend: 'Extend',
      inputConfig: 'InputConfig',
      jobId: 'JobId',
      jobType: 'JobType',
      modifiedTime: 'ModifiedTime',
      outputConfig: 'OutputConfig',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      createTime: 'string',
      editingConfig: 'string',
      extend: 'string',
      inputConfig: 'string',
      jobId: 'string',
      jobType: 'string',
      modifiedTime: 'string',
      outputConfig: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchMediaProducingJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried quick video production jobs.
   */
  editingBatchJobList?: ListBatchMediaProducingJobsResponseBodyEditingBatchJobList[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 8EqYpQbZ6Eh7+Zz8DxVYoQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      editingBatchJobList: 'EditingBatchJobList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingBatchJobList: { 'type': 'array', 'itemType': ListBatchMediaProducingJobsResponseBodyEditingBatchJobList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.editingBatchJobList)) {
      $dara.Model.validateArray(this.editingBatchJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

