// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPredictiveValueRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the predicted number of instances in the scaling group. The time follows the ISO8601 standard and uses UTC time.
   * 
   * Format: yyyy-MM-ddTHH:mmZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-12-18T08:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the monitoring metric of the prediction rule. Valid values:
   * 
   * *   CpuUtilization: the average CPU utilization.
   * *   IntranetRx: the inbound traffic over an internal network.
   * *   IntranetTx: the outbound traffic over an internal network.
   * 
   * This parameter is required.
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
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
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-2zee0wsy0zkdxxxxx
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The start time of the predicted number of instances in the scaling group. The time follows the ISO8601 standard and uses UTC time.
   * 
   * Format: yyyy-MM-ddTHH:mmZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-12-17T08:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The current value of the monitoring metric of the prediction rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  targetValue?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricName: 'MetricName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      startTime: 'StartTime',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricName: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      startTime: 'string',
      targetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

