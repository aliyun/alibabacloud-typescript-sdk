// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPxfsSecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The modification mode of the whitelist.
   * 
   * @example
   * 0
   */
  modifyMode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24,10.0.0.1
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupName: 'GroupName',
      modifyMode: 'ModifyMode',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

