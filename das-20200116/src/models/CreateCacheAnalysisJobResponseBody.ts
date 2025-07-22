// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo extends $dara.Model {
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
   * task_x****
   */
  key?: string;
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
   * The data type of the ApsaraDB for Redis instance.
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

export class CreateCacheAnalysisJobResponseBodyDataBigKeys extends $dara.Model {
  keyInfo?: CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo },
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

export class CreateCacheAnalysisJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of elements in the key.
   */
  bigKeys?: CreateCacheAnalysisJobResponseBodyDataBigKeys;
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
   * >  This parameter can be used to query a specific cache analysis task. When you call the CreateCacheAnalysisJob operation, it takes some time to create a cache analysis task. As a result, the analysis results cannot be immediately returned. You can call the [DescribeCacheAnalysisJob](https://help.aliyun.com/document_detail/180983.html) operation to query the analysis results of the specified cache analysis task.
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
   * *   **BACKUP**: The data is being backed up.
   * *   **ANALYZING**: The data is being analyzed.
   * *   **FINISHED**: The data is analyzed.
   * *   **FAILED**: An error occurred.
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
      bigKeys: CreateCacheAnalysisJobResponseBodyDataBigKeys,
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

export class CreateCacheAnalysisJobResponseBody extends $dara.Model {
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
   * The detailed information.
   */
  data?: CreateCacheAnalysisJobResponseBodyData;
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
      data: CreateCacheAnalysisJobResponseBodyData,
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

