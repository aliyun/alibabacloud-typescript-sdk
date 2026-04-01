// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The dedicated cluster ID.
   * 
   * @example
   * dhg-7a9xxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The image based on which the hosts in the dedicated clusters are created. Valid values:
   * 
   * *   **WindowsWithMssqlStdLicense**: a Windows image that contains the licenses of SQL Server Standard Edition
   * *   **WindowsWithMssqlEntLisence**: a Windows image that contains the licenses of SQL Server Enterprise Edition
   * *   **WindowsWithMssqlWebLisence**: a Windows image that contains the licenses of SQL Server Web Edition
   * *   **AliLinux**: a Linux image
   * 
   * @example
   * WindowsWithMssqlStdLicense
   */
  imageCategory?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
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
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      imageCategory: 'ImageCategory',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      imageCategory: 'string',
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

