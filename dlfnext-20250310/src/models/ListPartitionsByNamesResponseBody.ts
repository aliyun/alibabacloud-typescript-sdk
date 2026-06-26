// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Partition } from "./Partition";


export class ListPartitionsByNamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 分区。
   */
  partitions?: Partition[];
  static names(): { [key: string]: string } {
    return {
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'array', 'itemType': Partition },
    };
  }

  validate() {
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

