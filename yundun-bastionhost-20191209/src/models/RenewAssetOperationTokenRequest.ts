// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewAssetOperationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the Bastionhost instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The O&M token to be renewed.
   * 
   * @example
   * NmYyMmEzNmMwYzljNGY******
   */
  token?: string;
  /**
   * @remarks
   * The ID of the O&M token to be renewed.
   * > You can call the [GenerateAssetOperationToken](https://help.aliyun.com/document_detail/2758861.html) operation to obtain this parameter.
   * 
   * @example
   * NmYyMmEzNmMwYzljNGYxMjh******
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      token: 'Token',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      token: 'string',
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

