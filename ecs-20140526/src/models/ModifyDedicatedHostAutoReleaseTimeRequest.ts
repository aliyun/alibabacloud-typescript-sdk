// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedHostAutoReleaseTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic release time of the dedicated host. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * - The release time must be at least 30 minutes from the current time.
   * - The release time must be at most 3 years from the current time.
   * - If the value of seconds (ss) is not 00, it is automatically set to 00.
   * - If you do not specify the AutoReleaseTime parameter, automatic release is canceled and the dedicated host is no longer automatically released at the scheduled time.
   * 
   * @example
   * 2019-06-04T13:35:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The ID of the dedicated host for which to set automatic release.
   * 
   * This parameter is required.
   * 
   * @example
   * dh-bp165p6xk2tlw61e****
   */
  dedicatedHostId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the dedicated host. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      autoReleaseTime: 'AutoReleaseTime',
      dedicatedHostId: 'DedicatedHostId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReleaseTime: 'string',
      dedicatedHostId: 'string',
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

