// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopBigKeysResponseBodyDataBigKey extends $dara.Model {
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
   * The ID of the data shard on the ApsaraDB for Redis instance.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The number of elements in the key.
   * 
   * @example
   * 2
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      key: 'Key',
      keyType: 'KeyType',
      nodeId: 'NodeId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'number',
      key: 'string',
      keyType: 'string',
      nodeId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopBigKeysResponseBodyData extends $dara.Model {
  bigKey?: DescribeTopBigKeysResponseBodyDataBigKey[];
  static names(): { [key: string]: string } {
    return {
      bigKey: 'BigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKey: { 'type': 'array', 'itemType': DescribeTopBigKeysResponseBodyDataBigKey },
    };
  }

  validate() {
    if(Array.isArray(this.bigKey)) {
      $dara.Model.validateArray(this.bigKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopBigKeysResponseBody extends $dara.Model {
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
   * The detailed information about the large keys.
   * 
   * > This parameter is left empty If no large keys exist within the specified time range.
   */
  data?: DescribeTopBigKeysResponseBodyData;
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
      data: DescribeTopBigKeysResponseBodyData,
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

