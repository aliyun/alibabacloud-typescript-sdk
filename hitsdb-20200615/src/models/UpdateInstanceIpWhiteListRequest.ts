// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceIpWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clear all IP addresses and CIDR blocks in the whitelist.
   * 
   * @example
   * false
   */
  delete?: boolean;
  /**
   * @remarks
   * The name of the IP whitelist. Default value: user.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to configure a whitelist. You can call the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1z3506imz2f****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP addresses or CIDR blocks that you want to add to the whitelist.
   * 
   * >  If you add 127.0.0.1 to the whitelist, all IP addresses cannot be used to access the Lindorm instance. If you add the CIDR block 192.168.0.0/24 to the whitelist, you can use all IP addresses in the CIDR block to access the Lindorm instance. Separate multiple IP addresses or CIDR blocks with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 106.11.XX.XX/24
   */
  securityIpList?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      delete: 'Delete',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIpList: 'SecurityIpList',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delete: 'boolean',
      groupName: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIpList: 'string',
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

