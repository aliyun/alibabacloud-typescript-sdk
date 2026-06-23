// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseEipSegmentAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001sdfg
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the contiguous EIP group. You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance ID of the contiguous EIP group to release.
   * 
   * The system releases all EIPs in the contiguous EIP group.
   * 
   * This parameter is required.
   * 
   * @example
   * eipsg-2zett8ba055tbsxme****
   */
  segmentInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      segmentInstanceId: 'SegmentInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      segmentInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

