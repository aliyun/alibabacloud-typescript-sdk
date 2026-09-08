// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableCenVbrHealthCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-sjfoejfghhjgghjghkg****
   */
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The VBR instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-wz95o9aylj181n5****
   */
  vbrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VBR instance.
   * 
   * > This parameter is required if the VBR instance and the CEN instance belong to different accounts.
   * 
   * @example
   * 1250123456123456
   */
  vbrInstanceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the VBR instance.
   * 
   * You can call [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vbrInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceOwnerId: 'VbrInstanceOwnerId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrInstanceId: 'string',
      vbrInstanceOwnerId: 'number',
      vbrInstanceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

