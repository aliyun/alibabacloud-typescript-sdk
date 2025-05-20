// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeys } from "./DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeys";


export class DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob extends $dara.Model {
  /**
   * @remarks
   * The details about the large keys.
   * 
   * > The sub-parameters of this parameter and the content of the sub-parameters are not returned. To query the detailed information about the cache analysis tasks, call the [DescribeCacheAnalysisJob](https://help.aliyun.com/document_detail/443012.html) operation.
   */
  bigKeys?: DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeys;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp18ff4a195d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the cache analysis task.
   * 
   * @example
   * sf79-sd99-sa37-****
   */
  jobId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the data node on the instance.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The state of the cache analysis task. Valid values:
   * 
   * * **BACKUP**: The data is being backed up.
   * * **ANALYZING**: The data is being analyzed.
   * * **FINISHED**: The data is analyzed.
   * * **FAILED**: An error occurred.
   * 
   * @example
   * BACKUP
   */
  taskState?: string;
  static names(): { [key: string]: string } {
    return {
      bigKeys: 'BigKeys',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      message: 'Message',
      nodeId: 'NodeId',
      taskState: 'TaskState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeys: DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeys,
      instanceId: 'string',
      jobId: 'string',
      message: 'string',
      nodeId: 'string',
      taskState: 'string',
    };
  }

  validate() {
    if(this.bigKeys && typeof (this.bigKeys as any).validate === 'function') {
      (this.bigKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

