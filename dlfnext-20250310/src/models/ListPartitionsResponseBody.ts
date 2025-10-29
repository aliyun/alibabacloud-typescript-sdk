// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Partition } from "./Partition";


export class ListPartitionsResponseBody extends $dara.Model {
  /**
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  partitions?: Partition[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
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

