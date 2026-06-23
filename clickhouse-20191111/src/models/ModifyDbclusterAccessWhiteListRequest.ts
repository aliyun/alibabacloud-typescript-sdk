// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterAccessWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the whitelist group. The default value is **empty**.
   * 
   * @example
   * NULL
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the whitelist group to modify.
   * 
   * > If you do not specify this parameter, the whitelist of the default group is modified.
   * 
   * @example
   * default
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The modification method. Valid values:
   * 
   * - **Cover**: Overwrites the whitelist.
   * 
   * - **Append**: Adds IP addresses to the whitelist.
   * 
   * - **Delete**: Removes IP addresses from the whitelist.
   * 
   * > If you do not specify this parameter, the Cover method is used by default.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address whitelist. The following formats are supported:
   * 
   * - IP address: For example, 192.168.0.1. This allows the specified IP address to access the ApsaraDB for ClickHouse cluster.
   * 
   * - CIDR block: For example, 192.168.0.0/24. This allows IP addresses from 192.168.0.1 to 192.168.0.255 to access the ApsaraDB for ClickHouse cluster.
   * 
   * > * Do not enter 0.0.0.0.
   * 
   * - Set this parameter to 127.0.0.1 to block access from all IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.xx.xx
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      DBClusterId: 'DBClusterId',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
      DBClusterId: 'string',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

