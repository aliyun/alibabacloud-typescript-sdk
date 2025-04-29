// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingRulesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the scaling group to which the scaling rules that you want to query belong.
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
   * The unique identifiers of the scaling rules that you want to query.
   */
  scalingRuleAris?: string[];
  /**
   * @remarks
   * The IDs of the scaling rules that you want to query.
   */
  scalingRuleIds?: string[];
  /**
   * @remarks
   * The names of the scaling rules that you want to query.
   */
  scalingRuleNames?: string[];
  /**
   * @remarks
   * The type of the scaling rule. Valid values:
   * 
   * *   SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
   * *   TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
   * *   StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
   * *   PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
   * 
   * @example
   * SimpleScalingRule
   */
  scalingRuleType?: string;
  /**
   * @remarks
   * Specifies whether to return the event-triggered tasks that are associated with the scaling rule. Valid values:
   * 
   * *   true
   * *   false
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

