// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalDatabaseNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * Create a global domain
   * 
   * @example
   * false
   */
  enableGlobalDomainName?: boolean;
  /**
   * @remarks
   * The description of the GDN. The description must meet the following requirements:
   * 
   * *   The description cannot start with http:// or https://.
   * *   The description must start with a letter.
   * *   The description can contain letters, digits, underscores (_), and hyphens (-).
   * *   The description must be 2 to 126 characters in length.
   * 
   * @example
   * GDN-fortest
   */
  GDNDescription?: string;
  /**
   * @remarks
   * The GDN ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gdn-bp1fttxsrmv*****
   */
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
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
      enableGlobalDomainName: 'EnableGlobalDomainName',
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
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
      enableGlobalDomainName: 'boolean',
      GDNDescription: 'string',
      GDNId: 'string',
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

