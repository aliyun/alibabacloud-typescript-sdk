// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterShardNumberResponseBodyAvailableShardNumberList extends $dara.Model {
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 128
   */
  shardNumber?: number;
  static names(): { [key: string]: string } {
    return {
      shardNumber: 'ShardNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

