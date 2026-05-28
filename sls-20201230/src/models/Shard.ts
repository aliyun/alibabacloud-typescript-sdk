// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Shard extends $dara.Model {
  /**
   * @remarks
   * The time at which the shard was created. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1524222931
   */
  createTime?: number;
  /**
   * @remarks
   * The end of the MD5 hash range.
   * 
   * @example
   * 8000000000000000000000000000000
   */
  exclusiveEndKey?: string;
  /**
   * @remarks
   * The start of the MD5 hash range. The value is included in the MD5 hash range of the shard.
   * 
   * @example
   * 00000000000000000000000000000000
   */
  inclusiveBeginKey?: string;
  /**
   * @remarks
   * shard id
   * 
   * @example
   * 0
   */
  shardID?: number;
  /**
   * @remarks
   * The status of the shard. After you create a shard, the shard enters the readwrite state. If you split a shard or merge shards, the shard status changes to readonly. The newly generated shards are in the readwrite state. The status of a shard does not affect the performance of read operations that are performed on the shard. Data can be written to the shards that are in the readwrite state, but data cannot be written to the shards that are in the readonly state. Valid values:
   * 
   * *   readwrite
   * *   readonly
   * 
   * @example
   * readwrite
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      exclusiveEndKey: 'exclusiveEndKey',
      inclusiveBeginKey: 'inclusiveBeginKey',
      shardID: 'shardID',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      exclusiveEndKey: 'string',
      inclusiveBeginKey: 'string',
      shardID: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

