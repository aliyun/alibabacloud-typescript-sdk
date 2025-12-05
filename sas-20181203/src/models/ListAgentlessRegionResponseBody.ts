// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessRegionResponseBodyVendorRegionList extends $dara.Model {
  regionId?: string;
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentlessRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the regions.
   */
  regionList?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92****
   */
  requestId?: string;
  vendorRegionList?: ListAgentlessRegionResponseBodyVendorRegionList[];
  static names(): { [key: string]: string } {
    return {
      regionList: 'RegionList',
      requestId: 'RequestId',
      vendorRegionList: 'VendorRegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      vendorRegionList: { 'type': 'array', 'itemType': ListAgentlessRegionResponseBodyVendorRegionList },
    };
  }

  validate() {
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    if(Array.isArray(this.vendorRegionList)) {
      $dara.Model.validateArray(this.vendorRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

