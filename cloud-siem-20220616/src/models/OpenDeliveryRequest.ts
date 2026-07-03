// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The code for a specific log of the cloud service, such as the process log of Security Center. This parameter is optional. If you do not specify this parameter, the operation applies to all logs of the service.
   * 
   * @example
   * cloud_siem_cfw_flow
   */
  logCode?: string;
  /**
   * @remarks
   * The code of the cloud service. Valid values:
   * 
   * - qcloud_waf
   * 
   * - qcloud_cfw
   * 
   * - hcloud_waf
   * 
   * - hcloud_cfw
   * 
   * - ddos
   * 
   * - sas
   * 
   * - cfw
   * 
   * - config
   * 
   * - csk
   * 
   * - fc
   * 
   * - rds
   * 
   * - nas
   * 
   * - apigateway
   * 
   * - cdn
   * 
   * - mongodb
   * 
   * - eip
   * 
   * - slb
   * 
   * - vpc
   * 
   * - actiontrail
   * 
   * - waf
   * 
   * - bastionhost
   * 
   * - oss
   * 
   * - polardb
   * 
   * This parameter is required.
   * 
   * @example
   * cfw
   */
  productCode?: string;
  /**
   * @remarks
   * The region where the Data Management center of threat analysis is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Select this value if your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Select this value if your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member account that the administrator wants to access.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts within the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      logCode: 'LogCode',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCode: 'string',
      productCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

