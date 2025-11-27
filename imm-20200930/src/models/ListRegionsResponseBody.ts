// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RegionType } from "./RegionType";


export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of Regions.
   */
  regions?: RegionType[];
  /**
   * @remarks
   * Request ID for the interface.
   * 
   * @example
   * 7F7D235C-76FF-4B65-800C-8238AE3F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': RegionType },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

