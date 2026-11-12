// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The log code of the cloud service, such as the process log in Security Center. For valid values, refer to the response of the ListDelivery operation.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  logCode?: string;
  /**
   * @remarks
   * The code of the cloud service. Valid values:
   * - qcloud_waf
   * - qlcoud_cfw
   * - hcloud_waf
   * - hcloud_cfw
   * - ddos
   * - sas
   * - cfw
   * - config
   * - csk
   * - fc
   * - rds
   * - nas
   * - apigateway
   * - cdn
   * - mongodb
   * - eip
   * - slb
   * - vpc
   * - actiontrail
   * - waf
   * - bastionhost
   * - oss
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
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Select this value if your assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Select this value if your assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose view the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
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

