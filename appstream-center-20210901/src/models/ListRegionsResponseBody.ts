// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRegionsResponseBodyRegionModels } from "./ListRegionsResponseBodyRegionModels";


export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region IDs.
   */
  regionModels?: ListRegionsResponseBodyRegionModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionModels: 'RegionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModels: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegionModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionModels)) {
      $dara.Model.validateArray(this.regionModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

