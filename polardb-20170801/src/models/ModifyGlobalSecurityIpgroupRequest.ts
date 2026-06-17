// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalSecurityIPGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas. A maximum of 1,000 IP addresses or CIDR blocks can be added to all IP address whitelists.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.1
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP address whitelist template. The name must meet the following requirements:
   * 
   * - It must consist of lowercase letters, digits, and underscores (_).
   * 
   * - It must start with a letter and end with a letter or a digit.
   * 
   * - It must be 2 to 120 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_123
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP address whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-**********
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

