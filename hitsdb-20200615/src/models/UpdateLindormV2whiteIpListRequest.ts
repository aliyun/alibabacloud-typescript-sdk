// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLindormV2WhiteIpListRequestWhiteIpGroupList extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * This parameter is required.
   * 
   * @example
   * user001
   */
  groupName?: string;
  /**
   * @remarks
   * The IP addresses to be added to the whitelist.
   * > 127.0.0.1 indicates that access from all IP addresses is denied. For example, 192.168.0.0/24 indicates that access from all IP addresses in the 192.168.0.X CIDR block is allowed to the Lindorm instance. Separate multiple IP addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.X/24
   */
  whiteIpList?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      whiteIpList: 'WhiteIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      whiteIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLindormV2WhiteIpListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the GetLindormV2InstanceList operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-2ze5ipz9zx1e4****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The list of whitelist groups.
   * 
   * This parameter is required.
   */
  whiteIpGroupList?: UpdateLindormV2WhiteIpListRequestWhiteIpGroupList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      whiteIpGroupList: 'WhiteIpGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      whiteIpGroupList: { 'type': 'array', 'itemType': UpdateLindormV2WhiteIpListRequestWhiteIpGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroupList)) {
      $dara.Model.validateArray(this.whiteIpGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

