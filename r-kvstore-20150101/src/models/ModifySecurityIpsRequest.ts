// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The modification method. Valid values:
   * 
   * * **Cover** (default): overwrites the original whitelist.
   * * **Append**: appends IP addresses to the whitelist.
   * * **Delete**: deletes the whitelist.
   * 
   * @example
   * Append
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The attribute of the IP whitelist group. This parameter is empty by default. The console does not display the whitelist group if the value is set to **hidden**.
   * 
   * @example
   * hidden
   */
  securityIpGroupAttribute?: string;
  /**
   * @remarks
   * The name of the IP whitelist group.
   * <warning>You cannot modify a system-generated whitelist group. If you do not specify this parameter, the whitelist of the default group is modified.</warning>
   * 
   * @example
   * default
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The IP addresses in the IP whitelist group. You can add up to 1,000 IP addresses. Separate multiple IP addresses with commas (,). The following formats are supported: 0.0.0.0/0,10.23.12.24 or 10.23.12.24/24 (CIDR notation, where /24 specifies the prefix length, which ranges from 1 to 32).
   * 
   * This parameter is required.
   * 
   * @example
   * 100.64.***.0/24,10.101.11.***
   */
  securityIps?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIpGroupAttribute: 'SecurityIpGroupAttribute',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIpGroupAttribute: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
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

