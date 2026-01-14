// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableBusiRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the region is in the Chinese mainland. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  chinaMainland?: boolean;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Qingdao)
   */
  localName?: string;
  /**
   * @remarks
   * Indicates whether it is a point of presence (PoP) of Alibaba Cloud. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  pop?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chinaMainland: 'ChinaMainland',
      localName: 'LocalName',
      pop: 'Pop',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chinaMainland: 'boolean',
      localName: 'string',
      pop: 'boolean',
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

export class ListAvailableBusiRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the regions.
   */
  regions?: ListAvailableBusiRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
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
      regions: { 'type': 'array', 'itemType': ListAvailableBusiRegionsResponseBodyRegions },
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

