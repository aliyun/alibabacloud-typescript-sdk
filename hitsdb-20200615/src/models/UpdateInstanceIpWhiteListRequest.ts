// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceIpWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clear the whitelist.
   * 
   * @example
   * false
   */
  delete?: boolean;
  /**
   * @remarks
   * The name of the whitelist group. Default value: user.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The instance ID. You can call the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) operation to obtain the instance ID.
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
   * The IP addresses to add to the whitelist.
   * 
   * > A value of 127.0.0.1 indicates that access from all IP addresses is denied. For example, 192.168.0.0/24 allows access from all IP addresses in the 192.168.0.X CIDR block to the Lindorm instance. Separate multiple IP addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.X/24
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

