// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVSwitchCidrReservationAttributeRequest extends $dara.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the vSwitch is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The new description of the reserved CIDR block. The default value is empty.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * ReservationDescription
   */
  vSwitchCidrReservationDescription?: string;
  /**
   * @remarks
   * The ID of the reserved CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vcr-bp1m12saqteraw3rp****
   */
  vSwitchCidrReservationId?: string;
  /**
   * @remarks
   * The new name of the reserved CIDR block.
   * 
   * The name must be 2 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * ReservationName
   */
  vSwitchCidrReservationName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchCidrReservationDescription: 'VSwitchCidrReservationDescription',
      vSwitchCidrReservationId: 'VSwitchCidrReservationId',
      vSwitchCidrReservationName: 'VSwitchCidrReservationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchCidrReservationDescription: 'string',
      vSwitchCidrReservationId: 'string',
      vSwitchCidrReservationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

