// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAutoReleaseTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic release time. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * - If the value of seconds (`ss`) is not `00`, the time is automatically set to the start of the current minute (`mm`).
   * 
   * - The earliest release time must be at least 30 minutes after the current time.
   * 
   * - The latest release time cannot be more than three years from the current time.
   * 
   * If you do not specify the AutoReleaseTime parameter, the automatic release feature is canceled and the ECS instance is no longer automatically released.
   * 
   * @example
   * 2018-01-01T01:02:03Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The instance ID of the ECS instance for which to configure automatic release.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1env7nl3mijm2t****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      instanceId: 'InstanceId',
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
      instanceId: 'string',
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

