// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCommonBandwidthPackageSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s. 
   * 
   * <props="china">
   * 
   *  - If the billing method of the Internet Shared Bandwidth instance is pay-by-bandwidth, the default value range of **Bandwidth** is **2** to **20000**.
   * -  If the billing method of the Internet Shared Bandwidth instance is pay-by-95th-percentile-bandwidth, the default value range of **Bandwidth** is **200** to **20000**.
   * - If the billing method of the Internet Shared Bandwidth instance is pay-by-traffic, the default value range of **Bandwidth** is **1** to **2000**.
   * 
   * 
   * <props="intl">Valid values: **1** to **1000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  bandwidth?: string;
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp-2ze2ic1xd2qeqk145****
   */
  bandwidthPackageId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Internet Shared Bandwidth instance. 
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the region ID.
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
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      bandwidthPackageId: 'string',
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

