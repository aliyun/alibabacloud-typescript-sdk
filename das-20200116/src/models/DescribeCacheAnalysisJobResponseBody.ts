// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo extends $dara.Model {
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
   * The database name.
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
   * The time when the key expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. A value of 0 indicates that the key never expires.
   * 
   * @example
   * 1596256542547
   */
  expirationTimeMillis?: number;
  /**
   * @remarks
   * The key name.
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

export class DescribeCacheAnalysisJobResponseBodyDataBigKeys extends $dara.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo },
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

export class DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo extends $dara.Model {
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
   * The database name.
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
   * The time when the key expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. A value of 0 indicates that the key never expires.
   * 
   * @example
   * 1596256542547
   */
  expirationTimeMillis?: number;
  /**
   * @remarks
   * The key name.
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

export class DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum extends $dara.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo },
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

export class DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCountExpiryLevel extends $dara.Model {
  /**
   * @remarks
   * The time when the cache analysis task was complete. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1717469347000
   */
  analysisTs?: number;
  /**
   * @remarks
   * The expiration level. Valid values:
   * 
   * *   **0**: The key never expires.
   * *   **1**: The key has expired.
   * *   **2**: The key has expired for 0 to 1 hour.
   * *   **3**: The key has expired for 1 to 3 hours.
   * *   **4**: The key has expired for 3 to 12 hours.
   * *   **5**: The key has expired for 12 to 24 hours.
   * *   **6**: The key has expired for one to two days.
   * *   **7**: The key has expired for three to seven days.
   * *   **8**: The key has expired for more than seven days.
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The number of bytes occupied by the keys that have expired.
   * 
   * @example
   * 8064
   */
  totalBytes?: number;
  /**
   * @remarks
   * The total number of the keys that have expired.
   * 
   * @example
   * 62
   */
  totalKeys?: number;
  static names(): { [key: string]: string } {
    return {
      analysisTs: 'AnalysisTs',
      level: 'Level',
      totalBytes: 'TotalBytes',
      totalKeys: 'TotalKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTs: 'number',
      level: 'number',
      totalBytes: 'number',
      totalKeys: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCount extends $dara.Model {
  expiryLevel?: DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCountExpiryLevel[];
  static names(): { [key: string]: string } {
    return {
      expiryLevel: 'ExpiryLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryLevel: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCountExpiryLevel },
    };
  }

  validate() {
    if(Array.isArray(this.expiryLevel)) {
      $dara.Model.validateArray(this.expiryLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix extends $dara.Model {
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
   * The number of keys that contain the prefix.
   * 
   * @example
   * 123
   */
  keyNum?: number;
  /**
   * @remarks
   * The prefix of the key.
   * 
   * @example
   * task_
   */
  prefix?: string;
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
      keyNum: 'KeyNum',
      prefix: 'Prefix',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      keyNum: 'number',
      prefix: 'string',
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

export class DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes extends $dara.Model {
  prefix?: DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix[];
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix },
    };
  }

  validate() {
    if(Array.isArray(this.prefix)) {
      $dara.Model.validateArray(this.prefix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo extends $dara.Model {
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
   * The database name.
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
   * The time when the key expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. A value of 0 indicates that the key never expires.
   * 
   * @example
   * 1596256542547
   */
  expirationTimeMillis?: number;
  /**
   * @remarks
   * The key name.
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

export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes extends $dara.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo },
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

export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo extends $dara.Model {
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
   * The database name.
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
   * The time when the key expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. A value of 0 indicates that the key never expires.
   * 
   * @example
   * 1596256542547
   */
  expirationTimeMillis?: number;
  /**
   * @remarks
   * The key name.
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

export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum extends $dara.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo },
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

export class DescribeCacheAnalysisJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the large keys. The returned large keys are sorted in descending order based on the number of bytes occupied by the keys.
   */
  bigKeys?: DescribeCacheAnalysisJobResponseBodyDataBigKeys;
  /**
   * @remarks
   * The details of the large keys. The returned large keys are sorted in descending order based on the number of keys.
   */
  bigKeysOfNum?: DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum;
  /**
   * @remarks
   * The statistics of the keys that have expired.
   */
  expiryKeysLevelCount?: DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCount;
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
   * The prefixes of the keys.
   */
  keyPrefixes?: DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes;
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * >  If the request is successful, **Successful** is returned. If the request fails, an error message that contains information such as an error code is returned.
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
  /**
   * @remarks
   * The details of permanent keys. The returned keys are sorted in descending order based on the number of bytes occupied by the keys.
   */
  unexBigKeysOfBytes?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes;
  /**
   * @remarks
   * The details of permanent keys. The returned keys are sorted in descending order based on the number of keys.
   */
  unexBigKeysOfNum?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum;
  static names(): { [key: string]: string } {
    return {
      bigKeys: 'BigKeys',
      bigKeysOfNum: 'BigKeysOfNum',
      expiryKeysLevelCount: 'ExpiryKeysLevelCount',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      keyPrefixes: 'KeyPrefixes',
      message: 'Message',
      nodeId: 'NodeId',
      taskState: 'TaskState',
      unexBigKeysOfBytes: 'UnexBigKeysOfBytes',
      unexBigKeysOfNum: 'UnexBigKeysOfNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeys: DescribeCacheAnalysisJobResponseBodyDataBigKeys,
      bigKeysOfNum: DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum,
      expiryKeysLevelCount: DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCount,
      instanceId: 'string',
      jobId: 'string',
      keyPrefixes: DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes,
      message: 'string',
      nodeId: 'string',
      taskState: 'string',
      unexBigKeysOfBytes: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes,
      unexBigKeysOfNum: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum,
    };
  }

  validate() {
    if(this.bigKeys && typeof (this.bigKeys as any).validate === 'function') {
      (this.bigKeys as any).validate();
    }
    if(this.bigKeysOfNum && typeof (this.bigKeysOfNum as any).validate === 'function') {
      (this.bigKeysOfNum as any).validate();
    }
    if(this.expiryKeysLevelCount && typeof (this.expiryKeysLevelCount as any).validate === 'function') {
      (this.expiryKeysLevelCount as any).validate();
    }
    if(this.keyPrefixes && typeof (this.keyPrefixes as any).validate === 'function') {
      (this.keyPrefixes as any).validate();
    }
    if(this.unexBigKeysOfBytes && typeof (this.unexBigKeysOfBytes as any).validate === 'function') {
      (this.unexBigKeysOfBytes as any).validate();
    }
    if(this.unexBigKeysOfNum && typeof (this.unexBigKeysOfNum as any).validate === 'function') {
      (this.unexBigKeysOfNum as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBody extends $dara.Model {
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
   * The details of the cache analysis task.
   */
  data?: DescribeCacheAnalysisJobResponseBodyData;
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * >  If the request is successful, **Successful** is returned. If the request fails, an error message that contains information such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      data: DescribeCacheAnalysisJobResponseBodyData,
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

