// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp1uoihlf82e8****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group_01
   */
  groupName?: string;
  /**
   * @example
   * 42.120.XX.XX
   */
  ipList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      groupName: 'GroupName',
      ipList: 'IpList',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      groupName: 'string',
      ipList: 'string',
      ipVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

