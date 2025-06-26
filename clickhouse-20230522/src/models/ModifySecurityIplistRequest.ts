// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIPListRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the whitelist whose settings you want to modify.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The modification mode.
   * 
   * *   0: overwrites the original IP addresses and CIDR blocks in the whitelist.
   * *   1: adds the IP addresses and CIDR blocks to the whitelist.
   * *   2: removes the IP addresses and CIDR blocks from the whitelist.
   * 
   * >  We recommend that you set the value to 0.
   * 
   * @example
   * 0
   */
  modifyMode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The IP addresses and CIDR blocks in the whitelist.
   * 
   * @example
   * 192.168.0.0/24,172.16.0.0/24
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      groupName: 'GroupName',
      modifyMode: 'ModifyMode',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      groupName: 'string',
      modifyMode: 'string',
      regionId: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

