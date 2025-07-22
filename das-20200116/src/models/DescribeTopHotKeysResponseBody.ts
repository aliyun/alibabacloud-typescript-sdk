// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopHotKeysResponseBodyDataHotKey extends $dara.Model {
  /**
   * @remarks
   * The database in which the key is stored.
   * 
   * @example
   * 0
   */
  db?: number;
  /**
   * @remarks
   * The frequency at which the key is accessed, which indicates the QPS of the key.
   * 
   * @example
   * 5500~6000
   */
  hot?: string;
  /**
   * @remarks
   * The key.
   * 
   * @example
   * abc:def:eng
   */
  key?: string;
  /**
   * @remarks
   * The type of the key.
   * 
   * @example
   * zset
   */
  keyType?: string;
  /**
   * @remarks
   * The statistical value that is calculated based on the least frequently used (LFU) caching algorithm.
   * 
   * @example
   * 253
   */
  lfu?: number;
  /**
   * @remarks
   * The ID of the data shard on the ApsaraDB for Redis instance.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      hot: 'Hot',
      key: 'Key',
      keyType: 'KeyType',
      lfu: 'Lfu',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'number',
      hot: 'string',
      key: 'string',
      keyType: 'string',
      lfu: 'number',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopHotKeysResponseBodyData extends $dara.Model {
  hotKey?: DescribeTopHotKeysResponseBodyDataHotKey[];
  static names(): { [key: string]: string } {
    return {
      hotKey: 'HotKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotKey: { 'type': 'array', 'itemType': DescribeTopHotKeysResponseBodyDataHotKey },
    };
  }

  validate() {
    if(Array.isArray(this.hotKey)) {
      $dara.Model.validateArray(this.hotKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopHotKeysResponseBody extends $dara.Model {
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
   * The detailed information about the hot keys.
   */
  data?: DescribeTopHotKeysResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
      data: DescribeTopHotKeysResponseBodyData,
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

