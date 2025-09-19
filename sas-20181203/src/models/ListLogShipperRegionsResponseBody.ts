// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogShipperRegionsResponseBodyLogShipperRegionList extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogShipperRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The regions supported by the log delivery feature.
   */
  logShipperRegionList?: ListLogShipperRegionsResponseBodyLogShipperRegionList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F9C4DE22-D242-5ABA-87EC-325ECBDC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logShipperRegionList: 'LogShipperRegionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logShipperRegionList: { 'type': 'array', 'itemType': ListLogShipperRegionsResponseBodyLogShipperRegionList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logShipperRegionList)) {
      $dara.Model.validateArray(this.logShipperRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

