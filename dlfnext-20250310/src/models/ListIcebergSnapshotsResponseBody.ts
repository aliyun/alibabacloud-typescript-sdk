// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IcebergSnapshot } from "./IcebergSnapshot";


export class ListIcebergSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token for the next page of results. If this parameter is null, all results have been returned.
   * 
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The list of snapshots.
   */
  snapshots?: IcebergSnapshot[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      snapshots: 'snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      snapshots: { 'type': 'array', 'itemType': IcebergSnapshot },
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

