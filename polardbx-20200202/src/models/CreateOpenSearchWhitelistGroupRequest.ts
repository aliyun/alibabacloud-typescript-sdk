// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenSearchWhitelistGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzravgpt8q****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The list of allowed source IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  IPs?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides. > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to query the regions supported by PolarDB-X, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the group ID.
   * 
   * @example
   * MAIN
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupName: 'GroupName',
      IPs: 'IPs',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupName: 'string',
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

