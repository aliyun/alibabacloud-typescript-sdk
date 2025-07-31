// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalSecurityIPGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.
   * 
   * This parameter is required.
   * 
   * @example
   * 27.18.86.18,183.92.40.129
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template. The name must meet the following requirements:
   * 
   * *   It can contain lowercase letters, digits, and underscores (_).
   * *   It must start with a letter and end with a letter or digit.
   * *   It must be 2 to 120 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * aizy
   */
  globalIgName?: string;
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
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

