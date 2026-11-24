// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWarmPoolInstancesResponseBodyWarmPoolInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the ECS instance was added to the warm pool, accurate to the second. The time is in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2020-05-18T03:11:39Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp1c2hf**********
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the instance launch template.
   * 
   * @example
   * lt-uf64k10pok76*****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version of the instance launch template.
   * 
   * @example
   * 2
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The lifecycle state of the ECS instance in the warm pool. Valid values:
   * 
   * - Pending: The ECS instance is being added to the warm pool.
   * 
   * - Pending:Wait: The addition of the ECS instance is suspended. If a lifecycle hook that applies to scale-out activities for the warm pool is created in the scaling group, the ECS instance is suspended when it is added to the warm pool and waits for the lifecycle hook to time out.
   * 
   * - Removing: The ECS instance is being removed from the warm pool.
   * 
   * - Removing:Wait: The removal of the ECS instance is suspended. If a lifecycle hook that applies to scale-in activities for the warm pool is created in the scaling group, the ECS instance is suspended when it is removed from the warm pool and waits for the lifecycle hook to time out.
   * 
   * - Running: The ECS instance is successfully added to the warm pool and is in the running state.
   * 
   * - Stopped: The ECS instance is successfully added to the warm pool and is in the economical mode.
   * 
   * @example
   * Running
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 1*.1*.1*.2*
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The ID of the scaling activity when the ECS instance was added to the warm pool.
   * 
   * @example
   * asa-2ze87i********
   */
  scalingActivityId?: string;
  /**
   * @remarks
   * The ID of the associated scaling configuration.
   * 
   * @example
   * asc-2ze3j8*********
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The instance identity in the scaling group, which corresponds one-to-one with the ID of the ECS instance.
   * 
   * @example
   * asi-j6cj1gcte640ekhb****
   */
  scalingInstanceId?: string;
  /**
   * @remarks
   * The zone ID of the ECS instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      lifecycleState: 'LifecycleState',
      privateIpAddress: 'PrivateIpAddress',
      scalingActivityId: 'ScalingActivityId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
      scalingInstanceId: 'ScalingInstanceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      instanceId: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      lifecycleState: 'string',
      privateIpAddress: 'string',
      scalingActivityId: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
      scalingInstanceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWarmPoolInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token for the next query. An empty NextToken value indicates that no more results are available.
   * 
   * @example
   * AAAAAcSz4VTb1Nq****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E38EB733-D714-4658-8A5F-0688AB68****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The list of ECS instances in the warm pool.
   */
  warmPoolInstances?: DescribeWarmPoolInstancesResponseBodyWarmPoolInstances[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      scalingGroupId: 'ScalingGroupId',
      warmPoolInstances: 'WarmPoolInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      scalingGroupId: 'string',
      warmPoolInstances: { 'type': 'array', 'itemType': DescribeWarmPoolInstancesResponseBodyWarmPoolInstances },
    };
  }

  validate() {
    if(Array.isArray(this.warmPoolInstances)) {
      $dara.Model.validateArray(this.warmPoolInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

