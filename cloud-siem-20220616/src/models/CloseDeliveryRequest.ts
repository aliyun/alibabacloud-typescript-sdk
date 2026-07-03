// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the log within the cloud service. For example, the process log of Security Center. For valid values, see the return value of the ListDelivery operation.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  logCode?: string;
  /**
   * @remarks
   * The code of the cloud service. Valid values:
   * 
   * - qcloud_waf
   * 
   * - qlcoud_cfw
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
   * sas
   */
  productCode?: string;
  /**
   * @remarks
   * The region where the data management center of threat analysis is located. Select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Select this region if your assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - ap-southeast-1: Select this region if your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this parameter to switch to the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts in your enterprise.
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

