// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalDatabaseNetworkRequest extends $dara.Model {
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
   * The description of the GDN. It must meet the following requirements:
   * 
   * - Cannot start with http\\:// or https\\://.
   * 
   * - Must start with a letter or a Chinese character.
   * 
   * - Can contain letters, Chinese characters, digits, underscores (_), and hyphens (-).
   * 
   * - Must be 2 to 126 characters in length.
   * 
   * @example
   * GDN-fortest
   */
  GDNDescription?: string;
  /**
   * @remarks
   * The ID of the GDN.
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

