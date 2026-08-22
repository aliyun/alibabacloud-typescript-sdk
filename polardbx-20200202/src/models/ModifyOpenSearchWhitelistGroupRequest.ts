// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOpenSearchWhitelistGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_y6sqhtr6jyu52w4oublg3674du
   */
  groupId?: string;
  /**
   * @remarks
   * The list of source IP address restrictions.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  IPs?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 000G2DJ1YGee321432
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupId: 'GroupId',
      IPs: 'IPs',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupId: 'string',
      IPs: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

