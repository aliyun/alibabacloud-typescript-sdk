// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogFieldsRequest extends $dara.Model {
  /**
   * @remarks
   * The log source for the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The log source for the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logType?: string;
  /**
   * @remarks
   * The region where the threat analysis Management Hub is located. Select the region of the Management Hub based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose view the administrator switches to.
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
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      logSource: 'LogSource',
      logType: 'LogType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logSource: 'string',
      logType: 'string',
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

