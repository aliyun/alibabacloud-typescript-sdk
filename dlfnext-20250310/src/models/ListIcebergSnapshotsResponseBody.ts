// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IcebergSnapshot } from "./IcebergSnapshot";


export class ListIcebergSnapshotsResponseBody extends $dara.Model {
  /**
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
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

