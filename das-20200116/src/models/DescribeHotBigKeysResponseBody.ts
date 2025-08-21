// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHotBigKeysResponseBodyDataBigKeysBigKey extends $dara.Model {
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

export class DescribeHotBigKeysResponseBodyDataBigKeys extends $dara.Model {
  bigKey?: DescribeHotBigKeysResponseBodyDataBigKeysBigKey[];
  static names(): { [key: string]: string } {
    return {
      bigKey: 'BigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKey: { 'type': 'array', 'itemType': DescribeHotBigKeysResponseBodyDataBigKeysBigKey },
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

export class DescribeHotBigKeysResponseBodyDataHighTrafficKeysHighTrafficKey extends $dara.Model {
  db?: number;
  hot?: string;
  key?: string;
  keyType?: string;
  nodeId?: string;
  size?: number;
  inBytes?: number;
  outBytes?: number;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      hot: 'Hot',
      key: 'Key',
      keyType: 'KeyType',
      nodeId: 'NodeId',
      size: 'Size',
      inBytes: 'inBytes',
      outBytes: 'outBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'number',
      hot: 'string',
      key: 'string',
      keyType: 'string',
      nodeId: 'string',
      size: 'number',
      inBytes: 'number',
      outBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponseBodyDataHighTrafficKeys extends $dara.Model {
  highTrafficKey?: DescribeHotBigKeysResponseBodyDataHighTrafficKeysHighTrafficKey[];
  static names(): { [key: string]: string } {
    return {
      highTrafficKey: 'HighTrafficKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highTrafficKey: { 'type': 'array', 'itemType': DescribeHotBigKeysResponseBodyDataHighTrafficKeysHighTrafficKey },
    };
  }

  validate() {
    if(Array.isArray(this.highTrafficKey)) {
      $dara.Model.validateArray(this.highTrafficKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponseBodyDataHotKeysHotKey extends $dara.Model {
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
  size?: number;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      hot: 'Hot',
      key: 'Key',
      keyType: 'KeyType',
      lfu: 'Lfu',
      nodeId: 'NodeId',
      size: 'Size',
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

export class DescribeHotBigKeysResponseBodyDataHotKeys extends $dara.Model {
  hotKey?: DescribeHotBigKeysResponseBodyDataHotKeysHotKey[];
  static names(): { [key: string]: string } {
    return {
      hotKey: 'HotKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotKey: { 'type': 'array', 'itemType': DescribeHotBigKeysResponseBodyDataHotKeysHotKey },
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

export class DescribeHotBigKeysResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the large key failed to be queried.
   * 
   * @example
   * current version doesn\\"t support
   */
  bigKeyMsg?: string;
  /**
   * @remarks
   * The list of large keys.
   */
  bigKeys?: DescribeHotBigKeysResponseBodyDataBigKeys;
  highTrafficKeyMsg?: string;
  highTrafficKeys?: DescribeHotBigKeysResponseBodyDataHighTrafficKeys;
  /**
   * @remarks
   * The reason why the hot key failed to be queried.
   * 
   * @example
   * current version doesn\\"t support
   */
  hotKeyMsg?: string;
  /**
   * @remarks
   * The list of hot keys.
   */
  hotKeys?: DescribeHotBigKeysResponseBodyDataHotKeys;
  static names(): { [key: string]: string } {
    return {
      bigKeyMsg: 'BigKeyMsg',
      bigKeys: 'BigKeys',
      highTrafficKeyMsg: 'HighTrafficKeyMsg',
      highTrafficKeys: 'HighTrafficKeys',
      hotKeyMsg: 'HotKeyMsg',
      hotKeys: 'HotKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeyMsg: 'string',
      bigKeys: DescribeHotBigKeysResponseBodyDataBigKeys,
      highTrafficKeyMsg: 'string',
      highTrafficKeys: DescribeHotBigKeysResponseBodyDataHighTrafficKeys,
      hotKeyMsg: 'string',
      hotKeys: DescribeHotBigKeysResponseBodyDataHotKeys,
    };
  }

  validate() {
    if(this.bigKeys && typeof (this.bigKeys as any).validate === 'function') {
      (this.bigKeys as any).validate();
    }
    if(this.highTrafficKeys && typeof (this.highTrafficKeys as any).validate === 'function') {
      (this.highTrafficKeys as any).validate();
    }
    if(this.hotKeys && typeof (this.hotKeys as any).validate === 'function') {
      (this.hotKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponseBody extends $dara.Model {
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
   * The list of hot keys and large keys.
   */
  data?: DescribeHotBigKeysResponseBodyData;
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
      data: DescribeHotBigKeysResponseBodyData,
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

