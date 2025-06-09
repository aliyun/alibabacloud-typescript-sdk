// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Shard extends $dara.Model {
  /**
   * @example
   * 1453949705
   */
  createTime?: number;
  /**
   * @example
   * 8000000000000000000000000000000
   */
  exclusiveEndKey?: string;
  /**
   * @example
   * 00000000000000000000000000000000
   */
  inclusiveBeginKey?: string;
  /**
   * @example
   * 0
   */
  shardID?: number;
  /**
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

