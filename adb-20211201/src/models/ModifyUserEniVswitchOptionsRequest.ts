// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserEniVswitchOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The vSwitches that you want to use. The vSwitches must reside in the same virtual private cloud (VPC) and zone as ENIs. You can specify up to three vSwitches. Separate multiple vSwitches with commas (,).
   * 
   * > 
   * 
   * *   The vSwitches that you specify overwrite the existing vSwitches that are connected to ENIs.
   * 
   * *   You can call the [DescribeDBClusterAttribute](https://help.aliyun.com/document_detail/612399.html) operation to query the network information about ENIs in a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-rj9ixufmywqq98z******,vsw-rj95ij6wcz656v7******
   */
  vSwitchOptions?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchOptions: 'VSwitchOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchOptions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

