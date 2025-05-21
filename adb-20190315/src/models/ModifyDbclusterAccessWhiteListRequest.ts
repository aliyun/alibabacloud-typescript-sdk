// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterAccessWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is empty. The IP address whitelists that have the **hidden** attribute are not displayed in the console. These IP address whitelists are used to access services such as Data Transmission Service (DTS) and PolarDB-X.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist that you want to modify. Default value: **Default**. The name of an IP address whitelist must be 2 to 32 characters in length. The name can contain lowercase letters, digits, and underscores (_). The name must start with a lowercase letter and end with a lowercase letter or digit.
   * 
   * Each cluster supports up to 50 IP address whitelists.
   * 
   * @example
   * test
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The method that you want to use to modify the IP address whitelist. Valid values:
   * 
   * *   Cover: overwrites the IP address whitelist.
   * *   Append: adds IP addresses to the IP address whitelist.
   * *   Delete: removes IP addresses from the IP address whitelist.
   * 
   * Default value: Cover.
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
   * The IP addresses that you want to use to modify the IP address whitelist of the cluster. Separate multiple IP addresses with commas (,). You can specify up to 500 distinct IP addresses. The following formats are supported:
   * 
   * *   IP address. Example: 10.23.12.24.
   * *   CIDR block. Example: 10.23.12.24/24. In this example, 24 indicates that the prefix of the CIDR block is 24 bits in length. You can replace 24 with a value that ranges from 1 to 32.
   * 
   * >  This parameter must be specified unless ModifyMode is set to Delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.23.12.24
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

