// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterShardNumberResponseBodyAvailableShardNumberList } from "./DescribeDbclusterShardNumberResponseBodyAvailableShardNumberList";


export class DescribeDBClusterShardNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The supported numbers of shards, including the number of current shards and the number of desired shards.
   */
  availableShardNumberList?: DescribeDBClusterShardNumberResponseBodyAvailableShardNumberList[];
  /**
   * @remarks
   * The number of desired shards, excluding the number of current shards.
   */
  availableShardNumbers?: number[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBE843D8-964D-5EA3-9D31-822125611B6E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of shards that you want to change during the data migration.
   * 
   * @example
   * 128
   */
  shardNumber?: number;
  static names(): { [key: string]: string } {
    return {
      availableShardNumberList: 'AvailableShardNumberList',
      availableShardNumbers: 'AvailableShardNumbers',
      requestId: 'RequestId',
      shardNumber: 'ShardNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableShardNumberList: { 'type': 'array', 'itemType': DescribeDBClusterShardNumberResponseBodyAvailableShardNumberList },
      availableShardNumbers: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
      shardNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.availableShardNumberList)) {
      $dara.Model.validateArray(this.availableShardNumberList);
    }
    if(Array.isArray(this.availableShardNumbers)) {
      $dara.Model.validateArray(this.availableShardNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

