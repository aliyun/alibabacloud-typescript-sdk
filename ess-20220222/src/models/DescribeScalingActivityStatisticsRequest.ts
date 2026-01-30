// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingActivityStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the statistical interval. The time follows the ISO 8601 standard and uses UTC time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-12-18T08:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the metric on which the scaling activity is counted. Valid values:
   * 
   * *   ScalingActivityStatus: collects statistics on the distribution of scaling activities in different states within a time range.
   * *   ScalingActivityErrorCodes: the distribution of error codes in failed scaling activities within a time range.
   * 
   * Default value: ScalingActivityStatus.
   * 
   * @example
   * ScalingActivityStatus
   */
  metricType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
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
   * @example
   * asg-8vbje5pofxxxxxxxx
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The start time of the statistical interval. The time follows the ISO 8601 standard and uses UTC time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-12-15T08:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricType: 'MetricType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricType: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
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

