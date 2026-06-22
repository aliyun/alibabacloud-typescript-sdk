// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessRegionResponseBodyVendorRegionList extends $dara.Model {
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The server vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud.
   * - **3**: Tencent Cloud.
   * - **4**: Huawei Cloud.
   * - **5**: Azure.
   * - **7**: AWS.
   * 
   * @example
   * 0
   */
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
   * The region list information.
   */
  regionList?: string[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92****
   */
  requestId?: string;
  /**
   * @remarks
   * The region list information.
   */
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

