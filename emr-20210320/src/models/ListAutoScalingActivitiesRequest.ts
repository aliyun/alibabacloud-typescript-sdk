// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoScalingActivitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1639718634819
   */
  endTime?: number;
  /**
   * @remarks
   * 实例付费类型枚举值：
   * - ONDEMAND: 按量付费实例
   * - SPOT: 竞价实例
   * 默认为null代表全选
   * 举例: ["ONDEMAND", "SPOT"]
   * 
   * @example
   * ONDEMAND
   */
  instanceChargeTypes?: string[];
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
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
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the scaling activity. Number of elements in the array: 1-20.
   * 
   * @example
   * ["REJECTED","SUCCESSFUL"]
   */
  scalingActivityStates?: string[];
  /**
   * @remarks
   * The type of the scaling activity. Valid values:
   * 
   * *   SCALE_OUT
   * *   SCALE_IN
   * 
   * @example
   * SCALE_IN
   */
  scalingActivityType?: string;
  /**
   * @example
   * MANAGED
   */
  scalingPolicyType?: string;
  /**
   * @remarks
   * The name of the scaling rule.
   * 
   * @example
   * scale-out-by-memroy
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1639714634819
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceChargeTypes: 'InstanceChargeTypes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      regionId: 'RegionId',
      scalingActivityStates: 'ScalingActivityStates',
      scalingActivityType: 'ScalingActivityType',
      scalingPolicyType: 'ScalingPolicyType',
      scalingRuleName: 'ScalingRuleName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      instanceChargeTypes: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
      regionId: 'string',
      scalingActivityStates: { 'type': 'array', 'itemType': 'string' },
      scalingActivityType: 'string',
      scalingPolicyType: 'string',
      scalingRuleName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceChargeTypes)) {
      $dara.Model.validateArray(this.instanceChargeTypes);
    }
    if(Array.isArray(this.scalingActivityStates)) {
      $dara.Model.validateArray(this.scalingActivityStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

