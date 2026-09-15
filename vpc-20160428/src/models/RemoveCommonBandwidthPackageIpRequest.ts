// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveCommonBandwidthPackageIpRequest extends $dara.Model {
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may vary for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run without performing the actual operation.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the EIP. 
   * 
   * You can call the [DescribeEipAddresses](https://www.alibabacloud.com/help/en/eip/developer-reference/api-vpc-2016-04-28-describeeipaddresses-eips) operation to query the EIP ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-2zeerraiwb7uj6i0d****
   */
  ipInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Internet Shared Bandwidth instance. 
   * 
   * You can call the [DescribeRegions](https://www.alibabacloud.com/help/en/vpc/developer-reference/api-vpc-2016-04-28-describeregions) operation to query the region ID.
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

