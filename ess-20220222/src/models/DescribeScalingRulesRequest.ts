// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingRulesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the scaling rule list. Pages start from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The Settings for the number of entries per page during a paged query. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the scaling group to which the scaling rules belong.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp1ffogfdauy0jw0****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The unique identifiers of the scaling rules to be queried.
   */
  scalingRuleAris?: string[];
  /**
   * @remarks
   * The IDs of the scaling rules to be queried.
   */
  scalingRuleIds?: string[];
  /**
   * @remarks
   * The names of the scaling rules to be queried.
   */
  scalingRuleNames?: string[];
  /**
   * @remarks
   * The type of the scaling rule. Valid values: 
   * 
   * - SimpleScalingRule: simple scaling rule. Adjusts the number of ECS instances based on the adjustment type (AdjustmentType) and adjustment value (AdjustmentValue).
   * - TargetTrackingScalingRule: target tracking scaling rule. Dynamically calculates the number of ECS instances to scale out or scale-in based on a predefined metric (MetricName) and attempts to maintain the metric value near the target value (TargetValue).
   * - StepScalingRule: step scaling rule. Provides a step-by-step extension method based on thresholds and metric values.
   * - PredictiveScalingRule: predictive scaling rule. Analyzes the historical monitoring data of the scaling group based on machine learning capabilities to predict future monitoring metrics, and supports the automatic creation of scheduled tasks to set the boundaries of the scaling group.
   * 
   * @example
   * SimpleScalingRule
   */
  scalingRuleType?: string;
  /**
   * @remarks
   * Specifies whether to return the CloudMonitor event-triggered tasks associated with the scaling rules. Valid values:
   * 
   * - true: returns the CloudMonitor event-triggered tasks associated with the scaling rules.
   * - false: does not return the CloudMonitor event-triggered tasks associated with the scaling rules.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  showAlarmRules?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleAris: 'ScalingRuleAris',
      scalingRuleIds: 'ScalingRuleIds',
      scalingRuleNames: 'ScalingRuleNames',
      scalingRuleType: 'ScalingRuleType',
      showAlarmRules: 'ShowAlarmRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scalingRuleAris: { 'type': 'array', 'itemType': 'string' },
      scalingRuleIds: { 'type': 'array', 'itemType': 'string' },
      scalingRuleNames: { 'type': 'array', 'itemType': 'string' },
      scalingRuleType: 'string',
      showAlarmRules: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.scalingRuleAris)) {
      $dara.Model.validateArray(this.scalingRuleAris);
    }
    if(Array.isArray(this.scalingRuleIds)) {
      $dara.Model.validateArray(this.scalingRuleIds);
    }
    if(Array.isArray(this.scalingRuleNames)) {
      $dara.Model.validateArray(this.scalingRuleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

