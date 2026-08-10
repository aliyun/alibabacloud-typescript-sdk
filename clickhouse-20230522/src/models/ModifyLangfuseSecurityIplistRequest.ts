// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLangfuseSecurityIPListRequest extends $dara.Model {
  /**
   * @remarks
   * The Langfuse instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lfs-bp1*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The modification mode. Valid values:
   * 
   * - 0: overwrite
   * - 1: increase
   * - 2: delete
   * 
   * > Specify 0 to use the overwrite mode.
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
   * The IP addresses to add to the instance whitelist. Separate multiple IP addresses with commas (,). For example, 192.168.0.0/24 indicates that all IP addresses in the 192.168.0.XX range are allowed to access the instance.
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

