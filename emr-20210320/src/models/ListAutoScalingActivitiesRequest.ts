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
   * The end timestamp for querying the creation time of scaling activities. The unit is milliseconds.
   * 
   * @example
   * 1639718634819
   */
  endTime?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - ONDEMAND: Pay-as-you-go instance.
   * 
   * - SPOT: Spot instance.The default value is null, which means all billing methods are selected.Example: ["ONDEMAND", "SPOT"]
   * 
   * @example
   * ONDEMAND
   */
  instanceChargeTypes?: string[];
  /**
   * @remarks
   * The maximum number of records to return in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which the query starts.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
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
   * The status of the scaling activity. The number of elements in the array can range from 1 to 20.
   * 
   * @example
   * ["REJECTED","SUCCESSFUL"]
   */
  scalingActivityStates?: string[];
  /**
   * @remarks
   * The type of the scaling activity. Valid values:
   * 
   * - SCALE_OUT: Scale-out.
   * 
   * - SCALE_IN: Scale-in.
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
   * The start timestamp for querying the creation time of scaling activities. The unit is milliseconds.
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

