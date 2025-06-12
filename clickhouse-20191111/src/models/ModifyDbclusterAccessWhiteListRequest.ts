// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterAccessWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is **empty**.
   * 
   * @example
   * NULL
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist that you want to modify.
   * 
   * >  If you do not specify this parameter, the default IP address whitelist is modified.
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
   * The method that is used to modify the IP address whitelist. Valid values:
   * 
   * *   **Cover**: overwrites the original IP address whitelist.
   * *   **Append**: appends the specified IP addresses to the original IP address whitelist.
   * *   **Delete**: deletes the original IP address whitelist.
   * 
   * >  If you do not specify this parameter, the default value of Cover is used.
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
   * The IP addresses in the IP address whitelist. You can specify IP addresses in the following formats:
   * 
   * *   IP address. For example, you can set SecurityIps to 192.168.0.1. This allows you to use this IP address to access your ApsaraDB for ClickHouse cluster.
   * *   CIDR block. For example, you can set SecurityIps to 192.168.0.0/24. This allows you to use the IP addresses from 192.168.0.1 to 192.168.0.255 to access your ApsaraDB for ClickHouse cluster.
   * 
   * > 
   * 
   * *   Do not set SecurityIps to 0.0.0.0.
   * 
   * *   If you set SecurityIps to 127.0.0.1, all IP addresses are blocked from accessing your ApsaraDB for ClickHouse cluster.
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

