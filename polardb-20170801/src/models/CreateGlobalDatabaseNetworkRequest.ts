// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalDatabaseNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the primary cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1q76364ird*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to create a global domain name.
   * 
   * @example
   * false
   */
  enableGlobalDomainName?: boolean;
  /**
   * @remarks
   * The description of the GDN. The description must meet the following requirements:
   * 
   * *   It cannot start with [http:// or https://.](http://https://。)
   * *   It must start with a letter.
   * *   It can contain letters, digits, underscores (_), and hyphens (-).
   * *   It must be 2 to 126 characters in length.
   * 
   * @example
   * GDN-fortest
   */
  GDNDescription?: string;
  GDNVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enableGlobalDomainName: 'EnableGlobalDomainName',
      GDNDescription: 'GDNDescription',
      GDNVersion: 'GDNVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enableGlobalDomainName: 'boolean',
      GDNDescription: 'string',
      GDNVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

