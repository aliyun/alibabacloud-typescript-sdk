// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without actually deleting the VPC. The system checks whether the required parameters are set, the request format is valid, and business restrictions are met. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, an HTTP 2xx status code is returned, and the VPC is directly deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully delete the VPC. Valid values:
   * 
   * - **true**: forcefully deletes the VPC.
   * - **false** (default): does not forcefully delete the VPC.
   * 
   * The VPC can be forcefully deleted only when the following resources exist in the VPC:
   * - The VPC contains only an IPv4 gateway and routes pointing to the IPv4 gateway.
   * - The VPC contains only an IPv6 gateway and routes pointing to the IPv6 gateway.
   * 
   * @example
   * false
   */
  forceDelete?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC to be deleted.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1m7v25emi1h5mtc****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      forceDelete: 'ForceDelete',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      forceDelete: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

