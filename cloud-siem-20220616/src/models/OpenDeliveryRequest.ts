// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The log code of the cloud service, such as the code of the process log for Security Center. This parameter is optional. If you leave this parameter empty, operations are performed on all logs of the cloud service.
   * 
   * @example
   * cloud_siem_cfw_flow
   */
  logCode?: string;
  /**
   * @remarks
   * The code of the cloud service. Valid values:
   * 
   * *   qcloud_waf
   * *   qlcoud_cfw
   * *   hcloud_waf
   * *   hcloud_cfw
   * *   ddos
   * *   sas
   * *   cfw
   * *   config
   * *   csk
   * *   fc
   * *   rds
   * *   nas
   * *   apigateway
   * *   cdn
   * *   mongodb
   * *   eip
   * *   slb
   * *   vpc
   * *   actiontrail
   * *   waf
   * *   bastionhost
   * *   oss
   * *   polardb
   * 
   * This parameter is required.
   * 
   * @example
   * cfw
   */
  productCode?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
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

