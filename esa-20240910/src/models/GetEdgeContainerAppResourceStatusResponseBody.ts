// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEdgeContainerAppResourceStatusResponseBodyRegions } from "./GetEdgeContainerAppResourceStatusResponseBodyRegions";


export class GetEdgeContainerAppResourceStatusResponseBody extends $dara.Model {
  regions?: GetEdgeContainerAppResourceStatusResponseBodyRegions[];
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
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
      regions: { 'type': 'array', 'itemType': GetEdgeContainerAppResourceStatusResponseBodyRegions },
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

