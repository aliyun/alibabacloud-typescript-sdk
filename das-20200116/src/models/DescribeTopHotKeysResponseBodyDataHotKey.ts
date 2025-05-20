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

