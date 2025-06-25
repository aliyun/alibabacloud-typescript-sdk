// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewAssetOperationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The bastion host ID.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the O\\&M token that you want to renew.
   * 
   * >  You can call the [GenerateAssetOperationToken](https://help.aliyun.com/document_detail/2758861.html) operation to query the O\\&M token ID.
   * 
   * @example
   * NmYyMmEzNmMwYzljNGYxMjh******
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      tokenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

