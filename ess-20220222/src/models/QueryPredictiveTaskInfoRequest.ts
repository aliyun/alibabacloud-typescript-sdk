// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPredictiveTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the prediction task. The time follows the ISO8601 standard and uses UTC time.
   * 
   * Format: yyyy-MM-ddTHH:mmZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-12-18T08:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID
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
   * The ID of the prediction scaling rule.
   * 
   * This parameter is required.
   * 
   * @example
   * asr-bp1dp8yd9f8xxxxx
   */
  scalingRuleId?: string;
  /**
   * @remarks
   * The start time of the prediction task. The time follows the ISO8601 standard and uses UTC time.
   * 
   * Format: yyyy-MM-ddTHH:mmZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-12-17T08:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRuleId: 'ScalingRuleId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingRuleId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

