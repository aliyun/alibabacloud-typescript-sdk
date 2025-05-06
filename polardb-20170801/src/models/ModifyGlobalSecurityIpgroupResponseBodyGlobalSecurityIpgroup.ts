// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $dara.Model {
  /**
   * @remarks
   * The clusters that are associated with the IP address whitelist template.
   */
  DBInstances?: string[];
  /**
   * @remarks
   * The IP address in the whitelist template.
   * 
   * >  Separate multiple IP addresses with commas (,). You can add up to 1,000 IP addresses or CIDR blocks to all IP whitelists.
   * 
   * @example
   * 192.168.0.1
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template. The name must meet the following requirements:
   * 
   * *   The name can contain lowercase letters, digits, and underscores (_).
   * *   The name must start with a letter and end with a letter or a digit.
   * *   The name must be 2 to 120 characters in length.
   * 
   * @example
   * test_123
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

