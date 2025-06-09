// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PartitionSummary } from "./PartitionSummary";


export class PartitionSummaries extends $dara.Model {
  nextPageToken?: string;
  /**
   * @remarks
   * Current page of partition profiles
   */
  partitions?: PartitionSummary[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      partitions: { 'type': 'array', 'itemType': PartitionSummary },
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

