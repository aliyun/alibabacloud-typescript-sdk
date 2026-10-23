// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The dedicated host type. For more information, see [Dedicated host types](https://help.aliyun.com/document_detail/68564.html).
   * 
   * @example
   * ddh.sn1ne
   */
  dedicatedHostType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The ECS instance family supported by the dedicated host type.
   * 
   * @example
   * ecs.sn1ne
   */
  supportedInstanceTypeFamily?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostType: 'DedicatedHostType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      supportedInstanceTypeFamily: 'SupportedInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      supportedInstanceTypeFamily: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

