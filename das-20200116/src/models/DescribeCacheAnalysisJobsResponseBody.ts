// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeysKeyInfo extends $dara.Model {
  /**
   * @remarks
   * The number of bytes that are occupied by the key.
   * 
   * @example
   * 12345
   */
  bytes?: number;
  /**
   * @remarks
   * The number of elements in the key.
   * 
   * @example
   * 127
   */
  count?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * 0
   */
  db?: number;
  /**
   * @remarks
   * The data type of the key.
   * 
   * @example
   * hashtable
   */
  encoding?: string;
  /**
   * @remarks
   * The expiration period of the key. Unit: milliseconds. A value of 0 indicates that the key does not expire.
   * 
   * @example
   * 1596256542547
   */
  expirationTimeMillis?: number;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * task_*****
   */
  key?: string;
  /**
   * @remarks
   * The ID of the data node on the instance.
   * 
   * @example
   * r-****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The data type of the instance.
   * 
   * @example
   * hash
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      db: 'Db',
      encoding: 'Encoding',
      expirationTimeMillis: 'ExpirationTimeMillis',
      key: 'Key',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      db: 'number',
      encoding: 'string',
      expirationTimeMillis: 'number',
      key: 'string',
      nodeId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeys extends $dara.Model {
  keyInfo?: DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeysKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeysKeyInfo },
    };
  }

  validate() {
    if(Array.isArray(this.keyInfo)) {
      $dara.Model.validateArray(this.keyInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeCacheAnalysisJobsResponseBodyDataList extends $dara.Model {
  cacheAnalysisJob?: DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob[];
  static names(): { [key: string]: string } {
    return {
      cacheAnalysisJob: 'CacheAnalysisJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheAnalysisJob: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob },
    };
  }

  validate() {
    if(Array.isArray(this.cacheAnalysisJob)) {
      $dara.Model.validateArray(this.cacheAnalysisJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  extra?: string;
  /**
   * @remarks
   * The ID of the data node on the instance.
   */
  list?: DescribeCacheAnalysisJobsResponseBodyDataList;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: DescribeCacheAnalysisJobsResponseBodyDataList,
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of cache analysis tasks.
   */
  data?: DescribeCacheAnalysisJobsResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
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
      code: 'string',
      data: DescribeCacheAnalysisJobsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

