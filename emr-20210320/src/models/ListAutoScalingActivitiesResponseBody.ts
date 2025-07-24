// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoScalingActivitiesResponseBodyScalingActivities extends $dara.Model {
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
   * The status of the scaling activity. Valid values:
   * 
   * *   REJECTED
   * *   SUCCESSFUL
   * *   FAILED
   * *   IN_PROGRESS
   * 
   * @example
   * IN_PROGRESS
   */
  activityState?: string;
  /**
   * @remarks
   * The type of the scaling activity. Valid values:
   * 
   * *   SCALE_OUT
   * *   SCALE_IN
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
   * The end time of the scaling. Unit: milliseconds.
   * 
   * @example
   * 1639715634819
   */
  endTime?: number;
  /**
   * @remarks
   * The number of added or removed instances.
   * 
   * @example
   * 10
   */
  expectNum?: number;
  instanceTypeToNum?: { [key: string]: number };
  /**
   * @remarks
   * The ID of the node group.
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
  policyType?: string;
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
   * The start time of the scaling. Unit: milliseconds.
   * 
   * @example
   * 1639714634819
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityState: 'ActivityState',
      activityType: 'ActivityType',
      clusterId: 'ClusterId',
      description: 'Description',
      endTime: 'EndTime',
      expectNum: 'ExpectNum',
      instanceTypeToNum: 'InstanceTypeToNum',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      operationId: 'OperationId',
      policyType: 'PolicyType',
      ruleName: 'RuleName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityState: 'string',
      activityType: 'string',
      clusterId: 'string',
      description: 'string',
      endTime: 'number',
      expectNum: 'number',
      instanceTypeToNum: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      operationId: 'string',
      policyType: 'string',
      ruleName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(this.instanceTypeToNum) {
      $dara.Model.validateMap(this.instanceTypeToNum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingActivitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
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
   * The scaling activities.
   */
  scalingActivities?: ListAutoScalingActivitiesResponseBodyScalingActivities[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      scalingActivities: 'ScalingActivities',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      scalingActivities: { 'type': 'array', 'itemType': ListAutoScalingActivitiesResponseBodyScalingActivities },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingActivities)) {
      $dara.Model.validateArray(this.scalingActivities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

