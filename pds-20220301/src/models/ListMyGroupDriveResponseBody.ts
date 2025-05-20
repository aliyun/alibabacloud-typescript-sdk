// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Drive } from "./Drive";


export class ListMyGroupDriveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the team drives.
   */
  items?: Drive[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  rootGroupDrive?: Drive;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
      rootGroupDrive: 'root_group_drive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Drive },
      nextMarker: 'string',
      rootGroupDrive: Drive,
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.rootGroupDrive && typeof (this.rootGroupDrive as any).validate === 'function') {
      (this.rootGroupDrive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

