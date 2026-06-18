// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMem0SecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the whitelist group for the instance.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The modification mode of the whitelist. Valid values:
   * 
   * - 0: overwrites the whitelist group.
   * - 1: adds a whitelist group.
   * - 2: deletes a whitelist group.
   * 
   * @example
   * 1
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
   * The IP addresses in the whitelist group. Separate multiple IP addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1,192.168.0.0
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

