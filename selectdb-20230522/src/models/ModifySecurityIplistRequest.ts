// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIPListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the whitelist. Default value: **Default**.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The mode in which you want to modify the whitelist. Valid values:
   * 
   * *   **0**: overwrites the IP addresses in the whitelist.
   * *   **1**: adds IP addresses to the whitelist.
   * *   **2**: removes IP addresses from the whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  modifyMode?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP addresses in the whitelist of the instance. Separate multiple IP addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.XX.XX,127.2.XX.XX
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      groupName: 'GroupName',
      modifyMode: 'ModifyMode',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      groupName: 'string',
      modifyMode: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
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

