// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartJobsResponseBodySmartJobListInputConfig extends $dara.Model {
  /**
   * @remarks
   * The information about the input file.
   * 
   * @example
   * oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputFile?: string;
  /**
   * @remarks
   * The keyword information.
   * 
   * @example
   * 测试关键词
   */
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
      keyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBodySmartJobListOutputConfig extends $dara.Model {
  /**
   * @remarks
   * The Object Storage Service (OSS) bucket.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS object.
   * 
   * @example
   * test-object
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBodySmartJobList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * 测试描述
   */
  description?: string;
  /**
   * @remarks
   * The editing configurations.
   * 
   * @example
   * {"AudioConfig":{},"InputConfig":""}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input configurations.
   */
  inputConfig?: ListSmartJobsResponseBodySmartJobListInputConfig;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The job state.
   * 
   * Valid values:
   * 
   * *   Finished: The job is complete.
   * *   Failed: The job failed.
   * *   Executing: The job is in progress.
   * *   Created: The job is created.
   * 
   * @example
   * Finished
   */
  jobState?: string;
  /**
   * @remarks
   * The job type.
   * 
   * Valid values:
   * 
   * *   ASR: ASR job.
   * *   DynamicChart: dynamic chart job.
   * *   TextToSpeech: intelligent audio production job.
   * 
   * @example
   * ASR
   */
  jobType?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The output configurations.
   */
  outputConfig?: ListSmartJobsResponseBodySmartJobListOutputConfig;
  /**
   * @remarks
   * The job title.
   * 
   * @example
   * 测试标题
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"user":"data"}
   */
  userData?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1084506228******
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      jobId: 'JobId',
      jobState: 'JobState',
      jobType: 'JobType',
      modifiedTime: 'ModifiedTime',
      outputConfig: 'OutputConfig',
      title: 'Title',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      editingConfig: 'string',
      inputConfig: ListSmartJobsResponseBodySmartJobListInputConfig,
      jobId: 'string',
      jobState: 'string',
      jobType: 'string',
      modifiedTime: 'string',
      outputConfig: ListSmartJobsResponseBodySmartJobListOutputConfig,
      title: 'string',
      userData: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.inputConfig && typeof (this.inputConfig as any).validate === 'function') {
      (this.inputConfig as any).validate();
    }
    if(this.outputConfig && typeof (this.outputConfig as any).validate === 'function') {
      (this.outputConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned on a single page. The value is set to the maximum number of entries returned on each page except for the last page. Valid example: 10,10,5. Invalid example: 10,5,10.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * CBB6BC61D08
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****9262E3DA-07FA-4862-FCBB6BC61D08*****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried intelligent jobs.
   */
  smartJobList?: ListSmartJobsResponseBodySmartJobList[];
  /**
   * @remarks
   * Optional. The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 110
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      smartJobList: 'SmartJobList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      smartJobList: { 'type': 'array', 'itemType': ListSmartJobsResponseBodySmartJobList },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.smartJobList)) {
      $dara.Model.validateArray(this.smartJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

