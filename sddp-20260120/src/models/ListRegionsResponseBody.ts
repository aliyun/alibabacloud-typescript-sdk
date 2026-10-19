// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsResponseBodyRegionList extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the assets are located.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the assets are located.
   * 
   * @example
   * China (Zhangjiakou)
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of regions where the assets are located.
   */
  regionList?: ListRegionsResponseBodyRegionList[];
  /**
   * @remarks
   * The request ID. You can use this ID to locate the API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionList: 'RegionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionList: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegionList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

