// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the vSwitch is the default vSwitch in the zone. Valid values:
   * 
   * - `true`
   * - `false`
   */
  isDefault?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return.
   * 
   * Default value: 1.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the vSwitches are located. To query the latest list of regions, call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch.
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

