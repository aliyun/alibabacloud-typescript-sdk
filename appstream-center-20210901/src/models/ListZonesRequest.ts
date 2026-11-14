// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. Required. Specifies the region for which you want to query available zones. All returned zones are located in this region.
   * 
   * The value must be a region ID supported by App Streaming. You can call [ListRegions](~~ListRegions~~) to query the supported region IDs. If you specify an unsupported region, the error code InvalidParameter.ValueInvalid is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The operating system type. Required. Specifies the operating system used by the resource. This parameter and ProductType together determine the available zones. The value is case-insensitive. Use one of the following values:
   * 
   * Valid values:
   * 
   * - Windows: Windows operating system
   * - Linux: Linux operating system
   * - Android: Android operating system
   * 
   * This parameter is required.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The product type. Required. Specifies the product for which you want to query available zones. The list of available zones is returned based on the available resources of the product in the specified region. The value is case-insensitive. Use one of the following values:
   * 
   * Valid values:
   * 
   * - CloudApp: App Streaming
   * - CloudBrowser: Cloud Browser
   * - WuyingServer: Enterprise Edition workstation
   * - WuyingWorkstation: Personal Edition Linggou container workstation
   * - WuyingWorkstationTeam: Team Edition Linggou container workstation
   * - WuyingWorkstationBusiness: Dedicated Edition Linggou container workstation
   * - AndroidCloud: Cloud Phone
   * - AIAgent: AgentBay (AI agent)
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

