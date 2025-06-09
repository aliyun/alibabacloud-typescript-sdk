// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckPointRequest extends $dara.Model {
  /**
   * @remarks
   * The shard ID.
   * 
   * *   If the specified shard does not exist, an empty list is returned.
   * *   If no shard ID is specified, the checkpoints of all shards are returned.
   * 
   * @example
   * 1
   */
  shard?: number;
  static names(): { [key: string]: string } {
    return {
      shard: 'shard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shard: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

