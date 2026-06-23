// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCommonBandwidthPackageIpRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp-2ze2ic1xd2qeqasdf****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * Generate a unique value for this parameter from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** is different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Performs a dry run without actually executing the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the EIP instance.
   * 
   * You can call the [DescribeEipAddresses](https://help.aliyun.com/document_detail/36018.html) API to query the ID of the EIP instance.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-2zeerraiwb7uqwed****
   */
  ipInstanceId?: string;
  /**
   * @remarks
   * The IP type. Valid value: **EIP**, which indicates that an EIP is added to the Internet Shared Bandwidth instance.
   * 
   * @example
   * EIP
   */
  ipType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Internet Shared Bandwidth instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) API to obtain the region ID.
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
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipInstanceId: 'IpInstanceId',
      ipType: 'IpType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ipInstanceId: 'string',
      ipType: 'string',
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

