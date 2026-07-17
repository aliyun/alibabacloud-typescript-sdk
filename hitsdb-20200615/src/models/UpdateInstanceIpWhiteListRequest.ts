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
   * The name of the whitelist group. If you leave this parameter empty, the default value user is used.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the instance. Call the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) operation to obtain the ID.
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
   * > Set this parameter to 127.0.0.1 to deny access from all IP addresses. For example, 192.168.0.0/24 allows all IP addresses in the 192.168.0.0/24 CIDR block to access the Lindorm instance. Separate multiple IP addresses or CIDR blocks with a comma (,).
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

