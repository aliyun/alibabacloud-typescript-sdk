// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Partition } from "./Partition";


export class ListPartitionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token used to retrieve the next page of data.
   * 
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The list of partitions.
   */
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

