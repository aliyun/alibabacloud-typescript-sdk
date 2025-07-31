// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalSecurityIPGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.
   * 
   * This parameter is required.
   * 
   * @example
   * 27.16.214.10,111.60.117.181
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * dps
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * g-fwjk62egbsrp4sftxmmr
   */
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

