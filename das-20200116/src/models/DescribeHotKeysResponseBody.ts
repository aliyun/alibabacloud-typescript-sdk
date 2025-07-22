// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHotKeysResponseBodyDataHotKey extends $dara.Model {
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
   * The frequency at which the key is accessed, which indicates the queries per second (QPS) of the key.
   * 
   * @example
   * 5500~6000
   */
  hot?: string;
  /**
   * @remarks
   * The name of the key.
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
   * The number of elements in the key.
   * 
   * @example
   * 2
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      hot: 'Hot',
      key: 'Key',
      keyType: 'KeyType',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'number',
      hot: 'string',
      key: 'string',
      keyType: 'string',
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

export class DescribeHotKeysResponseBodyData extends $dara.Model {
  hotKey?: DescribeHotKeysResponseBodyDataHotKey[];
  static names(): { [key: string]: string } {
    return {
      hotKey: 'HotKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotKey: { 'type': 'array', 'itemType': DescribeHotKeysResponseBodyDataHotKey },
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

export class DescribeHotKeysResponseBody extends $dara.Model {
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
   * The details of the hot keys.
   */
  data?: DescribeHotKeysResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, Successful is returned. If the request failed, an error message such as an error code is returned.
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
      data: DescribeHotKeysResponseBodyData,
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

