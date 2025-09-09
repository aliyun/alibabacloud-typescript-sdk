// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDrdsIpWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache Kafka instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds****c6vxxyzd
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The attribute of the IP address whitelist group.
   */
  groupAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist group.
   * 
   * @example
   * drds_******
   */
  groupName?: string;
  /**
   * @remarks
   * The modified whitelist. Separate multiple IP addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 127.***.***.***,10.***.***.***
   */
  ipWhiteList?: string;
  /**
   * @remarks
   * Specifies the mode. Valid values:
   * 
   * *   `True`: append modifications
   * *   `False`: overwrite modification
   * 
   * @example
   * false
   */
  mode?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      groupAttribute: 'GroupAttribute',
      groupName: 'GroupName',
      ipWhiteList: 'IpWhiteList',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      groupAttribute: 'string',
      groupName: 'string',
      ipWhiteList: 'string',
      mode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

