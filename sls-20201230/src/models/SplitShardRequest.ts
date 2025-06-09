// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SplitShardRequest extends $dara.Model {
  /**
   * @remarks
   * The position where the shard is split.
   * 
   * @example
   * ef000000000000000000000000000000
   */
  key?: string;
  /**
   * @remarks
   * The number of new shards that are generated after splitting.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      shardCount: 'shardCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      shardCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

