// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. Required. Specifies the region for which to query available zones. All returned zones are within this region.
   * 
   * The value must be a region ID supported by WUYING Cloud Application. Call [ListRegions](~~ListRegions~~) to obtain the supported region IDs. If an unsupported region is specified, the error code `InvalidParameter.ValueInvalid` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The operating system type. Required. Specifies the operating system used by the resource. This parameter, together with `ProductType`, determines the available zones. The value is case-insensitive. Use the following recommended values.
   * 
   * Valid values:
   * 
   * - `Windows`: Windows operating system.
   * - `Linux`: Linux operating system.
   * - `Android`: Android operating system.
   * 
   * This parameter is required.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The product type. Required. Specifies the product for which to query available zones. The zone list is returned based on the available resources of this product in the specified region. The value is case-insensitive. Use the following recommended values.
   * 
   * Valid values:
   * 
   * - `CloudApp`: WUYING Cloud Application.
   * - `CloudBrowser`: Cloud Browser.
   * - `WuyingServer`: Enterprise Edition Workstation.
   * - `WuyingWorkstation`: Personal Edition Lingou Container Workstation.
   * - `WuyingWorkstationTeam`: Lingou Team Edition Container Workstation.
   * - `WuyingWorkstationBusiness`: Lingou Dedicated Edition Container Workstation.
   * - `AndroidCloud`: Cloud Phone.
   * - `AIAgent`: AgentBay (AI agent).
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      osType: 'OsType',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      osType: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

