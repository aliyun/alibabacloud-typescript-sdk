// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-12 14:52:42
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1272118248844842
   */
  creator?: string;
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * #!/bin/bash
   * 
   * # The following are predefined variables provided by the system. You can use them to obtain information about the job run.
   * echo "Job parameters: #{schedulerx.jobParameters}"
   * echo "Shard index: #{schedulerx.shardingId}"
   * echo "Shard parameters: #{schedulerx.shardingParameters}"
   * echo "Total number of shards: #{schedulerx.shardingNum}"
   * echo "Current retry count: #{schedulerx.attempt}"
   * echo "Trigger type: #{schedulerx.triggerType}"
   * echo "Scheduled timestamp: #{schedulerx.scheduleTime}"
   * echo "Data timestamp: #{schedulerx.dataTime}"
   * 
   * # The output of the last line will be returned as the result
   * echo "hello world"
   * 
   * # exit 1 indicates failure
   * exit 0
   */
  scriptContent?: string;
  /**
   * @remarks
   * The description of the script version.
   * 
   * @example
   * init version
   */
  versionesDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      scriptContent: 'ScriptContent',
      versionesDescription: 'VersionesDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      scriptContent: 'string',
      versionesDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobScriptHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the job\\"s historical scripts.
   */
  jobScriptHistoryInfos?: ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos[];
  static names(): { [key: string]: string } {
    return {
      jobScriptHistoryInfos: 'JobScriptHistoryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobScriptHistoryInfos: { 'type': 'array', 'itemType': ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos },
    };
  }

  validate() {
    if(Array.isArray(this.jobScriptHistoryInfos)) {
      $dara.Model.validateArray(this.jobScriptHistoryInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobScriptHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the jobs.
   */
  data?: ListJobScriptHistoryResponseBodyData;
  /**
   * @remarks
   * The additional information returned only if an error occurs.
   * 
   * @example
   * job is not existed, jobId=302
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true
   * 
   * false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListJobScriptHistoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

