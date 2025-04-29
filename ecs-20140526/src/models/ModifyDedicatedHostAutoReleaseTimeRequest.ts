// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedHostAutoReleaseTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic release time of the dedicated host. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * *   The automatic release time must be at least 30 minutes later than the current time.
   * *   The automatic release time can be up to 3 years earlier than the current time.
   * *   If the value of the seconds (ss) is not 00, it is automatically set to 00.
   * *   If `AutoReleaseTime` is not configured, the automatic release feature is disabled, and the dedicated host will not be automatically released.
   * 
   * @example
   * 2019-06-04T13:35:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The ID of the dedicated host.
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
   * The region ID of the dedicated host. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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

