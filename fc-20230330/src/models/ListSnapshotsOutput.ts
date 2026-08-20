// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Snapshot } from "./Snapshot";


export class ListSnapshotsOutput extends $dara.Model {
  /**
   * @remarks
   * The token used to retrieve the next page of results. This parameter is not returned if no more results are available.
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of snapshots.
   * 
   * This parameter is required.
   */
  snapshots?: Snapshot[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      snapshots: 'snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      snapshots: { 'type': 'array', 'itemType': Snapshot },
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

