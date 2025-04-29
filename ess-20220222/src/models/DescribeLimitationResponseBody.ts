// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLimitationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of Application Load Balancer (ALB) server groups that can be attached to a scaling group.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 30
   */
  maxNumberOfAlbServerGroup?: number;
  /**
   * @remarks
   * The maximum number of ApsaraDB RDS instances that can be associated with a scaling group.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 30
   */
  maxNumberOfDBInstances?: number;
  /**
   * @remarks
   * The maximum number of lifecycle hooks that can be created in a scaling group.
   * 
   * @example
   * 10
   */
  maxNumberOfLifecycleHooks?: number;
  /**
   * @remarks
   * The maximum number of Classic Load Balancer (CLB, formerly known as SLB) instances that can be associated with a scaling group.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 30
   */
  maxNumberOfLoadBalancers?: number;
  /**
   * @remarks
   * The maximum number of instances that can be contained in a scaling group.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 2000
   */
  maxNumberOfMaxSize?: number;
  /**
   * @remarks
   * The minimum number of instances that must be contained in a scaling group. The value of `MaxNumberOfMinSize` must be consistent with the value of `MaxNumberOfMaxSize`.
   * 
   * @example
   * 2000
   */
  maxNumberOfMinSize?: number;
  /**
   * @remarks
   * The maximum number of Network Load Balancer (NLB) server groups that can be attached to a scaling group.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 30
   */
  maxNumberOfNlbServerGroup?: number;
  /**
   * @remarks
   * The maximum number of notification rules that can be created in a scaling group.
   * 
   * @example
   * 6
   */
  maxNumberOfNotificationConfigurations?: number;
  /**
   * @remarks
   * The maximum number of scaling configurations that can be created in a scaling group.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 70
   */
  maxNumberOfScalingConfigurations?: number;
  /**
   * @remarks
   * The maximum number of scaling groups that can be created in a region by using an Alibaba Cloud account.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 200
   */
  maxNumberOfScalingGroups?: number;
  /**
   * @remarks
   * The maximum number of Elastic Compute Service (ECS) instances or elastic container instances that can be automatically scaled in a scaling group at the same time.
   * 
   * @example
   * 500
   */
  maxNumberOfScalingInstances?: number;
  /**
   * @remarks
   * The maximum number of scaling rules that can be created in a scaling group.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 70
   */
  maxNumberOfScalingRules?: number;
  /**
   * @remarks
   * The maximum number of scheduled tasks that can be created in a region by using an Alibaba Cloud account.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 70
   */
  maxNumberOfScheduledTasks?: number;
  /**
   * @remarks
   * The maximum number of CLB vServer groups that can be attached to a scaling group.
   * 
   * >  To view the quota or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * 5
   */
  maxNumberOfVServerGroups?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BE9BEB41-E7B8-4C7D-A3CF-2DCB1066****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxNumberOfAlbServerGroup: 'MaxNumberOfAlbServerGroup',
      maxNumberOfDBInstances: 'MaxNumberOfDBInstances',
      maxNumberOfLifecycleHooks: 'MaxNumberOfLifecycleHooks',
      maxNumberOfLoadBalancers: 'MaxNumberOfLoadBalancers',
      maxNumberOfMaxSize: 'MaxNumberOfMaxSize',
      maxNumberOfMinSize: 'MaxNumberOfMinSize',
      maxNumberOfNlbServerGroup: 'MaxNumberOfNlbServerGroup',
      maxNumberOfNotificationConfigurations: 'MaxNumberOfNotificationConfigurations',
      maxNumberOfScalingConfigurations: 'MaxNumberOfScalingConfigurations',
      maxNumberOfScalingGroups: 'MaxNumberOfScalingGroups',
      maxNumberOfScalingInstances: 'MaxNumberOfScalingInstances',
      maxNumberOfScalingRules: 'MaxNumberOfScalingRules',
      maxNumberOfScheduledTasks: 'MaxNumberOfScheduledTasks',
      maxNumberOfVServerGroups: 'MaxNumberOfVServerGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNumberOfAlbServerGroup: 'number',
      maxNumberOfDBInstances: 'number',
      maxNumberOfLifecycleHooks: 'number',
      maxNumberOfLoadBalancers: 'number',
      maxNumberOfMaxSize: 'number',
      maxNumberOfMinSize: 'number',
      maxNumberOfNlbServerGroup: 'number',
      maxNumberOfNotificationConfigurations: 'number',
      maxNumberOfScalingConfigurations: 'number',
      maxNumberOfScalingGroups: 'number',
      maxNumberOfScalingInstances: 'number',
      maxNumberOfScalingRules: 'number',
      maxNumberOfScheduledTasks: 'number',
      maxNumberOfVServerGroups: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

