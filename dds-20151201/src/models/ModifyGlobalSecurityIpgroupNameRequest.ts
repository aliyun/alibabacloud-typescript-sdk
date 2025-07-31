// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalSecurityIPGroupNameRequest extends $dara.Model {
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
   * prod_baoxian_k8s
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * g-xmtncwkrzqqoe59dzljb
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

