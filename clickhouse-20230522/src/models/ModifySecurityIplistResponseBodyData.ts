// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIPListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-xxxx
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cc-xxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the whitelist.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The tag of the whitelist.
   * 
   * @example
   * test
   */
  groupTag?: string;
  /**
   * @remarks
   * The IP addresses and CIDR blocks in the whitelist.
   * 
   * @example
   * 192.168.0.0/24,172.16.0.0/24
   */
  securityIPList?: string;
  /**
   * @remarks
   * The IP address type.
   * 
   * @example
   * ipv4
   */
  securityIPType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * The network type of the whitelist.
   * 
   * @example
   * mix
   */
  whitelistNetType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      taskId: 'TaskId',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      groupName: 'string',
      groupTag: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
      taskId: 'number',
      whitelistNetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

