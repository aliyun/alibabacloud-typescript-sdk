// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchMediaProducingJobsResponseBodyEditingBatchJobList extends $dara.Model {
  /**
   * @remarks
   * The completion time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-06-09T06:38:09Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-09T06:36:48Z
   */
  createTime?: string;
  /**
   * @remarks
   * The editing configurations. For more information about the structure, see [EditingConfig](~~2692547#1be9bba03b7qu~~).
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
   * The input configuration for user synthesis.
   * 
   * @example
   * {
   *   "MediaGroupArray": [{
   *       "MediaArray": [
   *         "****9d46c886b45481030f6e****",
   *         "****6c886b4549d481030f6e****" ]
   *     }, {
   *       "MediaArray": [
   *         "****d46c886810b454930f6e****",
   *         "****4549d886810b46c30f6e****" ]
   *   }],
   *   "TitleArray": [
   *       "Hema Fresh in Huilongguan is now open"],
   *   "SpeechTextArray": [
   *       "A new Hema Fresh store has opened in the nearby mall, and today is its first day of business"]
   * }
   */
  inputConfig?: string;
  /**
   * @remarks
   * The ID of the one-click video production job.
   * 
   * @example
   * ******7ecbee4c6d9b8474498e******
   */
  jobId?: string;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * Script
   */
  jobType?: string;
  /**
   * @remarks
   * The last modification time. The time follows the ISO 8601 standard and is displayed in UTC (ending with Z).
   * 
   * @example
   * 2023-06-09T06:37:58Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The output configurations. For more information about the structure, see [OutputConfig](~~2692547#447b928fcbuoa~~).
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
   * The job status.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The custom settings in JSON format. The maximum length is 512 bytes. You can configure a [custom callback URL](~~451631#section-fbd-xz2-xum~~).
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"}, {"NotifyAddress":"https://xx.xx.xxx"}, or {"NotifyAddress":"ice-callback-demo"}
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
   * The list of one-click video production jobs.
   */
  editingBatchJobList?: ListBatchMediaProducingJobsResponseBodyEditingBatchJobList[];
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * 8EqYpQbZ6Eh7+Zz8DxVYoQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
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

