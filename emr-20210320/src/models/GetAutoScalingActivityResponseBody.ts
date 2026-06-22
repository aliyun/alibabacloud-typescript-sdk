// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingActivityResult } from "./ScalingActivityResult";
import { ScalingRule } from "./ScalingRule";


export class GetAutoScalingActivityResponseBodyScalingActivity extends $dara.Model {
  /**
   * @remarks
   * The ID of the scaling activity.
   * 
   * @example
   * asa-36373b084d6b4b13aa50f4129a9e****
   */
  activityId?: string;
  /**
   * @remarks
   * The list of instances involved in the scaling activity.
   */
  activityResults?: ScalingActivityResult[];
  /**
   * @remarks
   * The state of the scaling activity. Valid values:
   * 
   * - REJECTED: rejected.
   * 
   * - SUCCESSFUL: successful.
   * 
   * - FAILED: failed.
   * 
   * - IN_PROGRESS: in progress.
   * 
   * @example
   * IN_PROGRESS
   */
  activityState?: string;
  /**
   * @remarks
   * The type of the scaling activity. Valid values:
   * 
   * - SCALE_OUT: scale-out.
   * 
   * - SCALE_IN: scale-in.
   * 
   * @example
   * SCALE_OUT
   */
  activityType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the scaling activity.
   * 
   * @example
   * clusterId not exist
   */
  description?: string;
  /**
   * @remarks
   * The end time of the scaling activity.
   * 
   * @example
   * 1639715634819
   */
  endTime?: number;
  /**
   * @remarks
   * The number of instances that are added or removed.
   * 
   * @example
   * 10
   */
  expectNum?: number;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * task-01
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * op-13c37a77c505****
   */
  operationId?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * AUTO
   */
  policyType?: string;
  /**
   * @remarks
   * The details of the scaling rule.
   */
  ruleDetail?: ScalingRule;
  /**
   * @remarks
   * The name of the scaling rule.
   * 
   * @example
   * scaling-out-memory
   */
  ruleName?: string;
  /**
   * @remarks
   * The start time of the scaling activity.
   * 
   * @example
   * 1639714634819
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityResults: 'ActivityResults',
      activityState: 'ActivityState',
      activityType: 'ActivityType',
      clusterId: 'ClusterId',
      description: 'Description',
      endTime: 'EndTime',
      expectNum: 'ExpectNum',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      operationId: 'OperationId',
      policyType: 'PolicyType',
      ruleDetail: 'RuleDetail',
      ruleName: 'RuleName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityResults: { 'type': 'array', 'itemType': ScalingActivityResult },
      activityState: 'string',
      activityType: 'string',
      clusterId: 'string',
      description: 'string',
      endTime: 'number',
      expectNum: 'number',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      operationId: 'string',
      policyType: 'string',
      ruleDetail: ScalingRule,
      ruleName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.activityResults)) {
      $dara.Model.validateArray(this.activityResults);
    }
    if(this.ruleDetail && typeof (this.ruleDetail as any).validate === 'function') {
      (this.ruleDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingActivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the scaling activity.
   */
  scalingActivity?: GetAutoScalingActivityResponseBodyScalingActivity;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivity: 'ScalingActivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivity: GetAutoScalingActivityResponseBodyScalingActivity,
    };
  }

  validate() {
    if(this.scalingActivity && typeof (this.scalingActivity as any).validate === 'function') {
      (this.scalingActivity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

