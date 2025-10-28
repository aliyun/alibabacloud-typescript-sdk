// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScalingRulesResponseBodyDataRuleListRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 33e39be9-3e5f-*********
   */
  appId?: string;
  /**
   * @remarks
   * The relationship among the conditions that trigger the scaling rule.
   * 
   * *   OR: one of the conditions
   * *   AND: all conditions
   * 
   * @example
   * OR
   */
  cond?: string;
  /**
   * @remarks
   * The minimum CPU utilization that triggers the scaling rule.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the scaling rule was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1574251601801
   */
  createTime?: number;
  /**
   * @remarks
   * The duration of the scaling rule. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1574251601
   */
  duration?: number;
  /**
   * @remarks
   * Indicates whether scale-ins or scale-outs are allowed. Valid values:
   * 
   * *   true: Scale-ins or scale-outs are allowed.
   * *   false: Scale-ins or scale-outs are disallowed.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the instance group to which the application is deployed.
   * 
   * @example
   * d8bb9d60-91b5-4cdf-****-************
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of instances in the group when a scale-out is performed, or the minimum number of instances in the group when a scale-in is performed.
   * 
   * @example
   * 2
   */
  instNum?: number;
  /**
   * @remarks
   * The system load that triggers the scaling rule. The system load is evaluated based on the number of processes that are being executed by CPUs and the number of processes that wait to be executed by CPUs.
   * 
   * @example
   * 1
   */
  loadNum?: number;
  /**
   * @remarks
   * The type of the metric.
   * 
   * @example
   * HSF
   */
  metricType?: string;
  /**
   * @remarks
   * The type of the scaling rule. Valid values:
   * 
   * *   SCALE_IN: scale-in rules
   * *   SCALE_OUT: scale-out rules
   * 
   * @example
   * SCALE_OUT
   */
  mode?: string;
  /**
   * @remarks
   * The policy of auto scaling across multiple zones. Valid values:
   * 
   * *   PRIORITY: The vSwitch that is first selected has the highest priority.
   * *   BALANCE: This policy evenly distributes instances across zones in which the vSwitches reside.
   * 
   * @example
   * PRIORITY
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The source of the instance that you want to add during a scale-out. Valid values:
   * 
   * *   NEW: Elastic resources are used.
   * *   AVAILABLE: The existing resources are used.
   * *   AVAILABLE_FIRST: The existing resources are used first.
   * 
   * @example
   * AVAILABLE
   */
  resourceFrom?: string;
  /**
   * @remarks
   * The service latency that triggers the scaling rule. Unit: milliseconds.
   * 
   * @example
   * 1
   */
  rt?: number;
  /**
   * @remarks
   * The ID of the specification.
   * 
   * @example
   * 03f493c0-xxxx-xxxx-xxxx-12e85cadeb41
   */
  specId?: string;
  /**
   * @remarks
   * The number of instances that are added during each scale-out or removed during each scale-in.
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * The ID of the launch template.
   * 
   * @example
   * lt-bp1xxxxn73pxxxxf83l
   */
  templateId?: string;
  /**
   * @remarks
   * The version of the launch template.
   * 
   * @example
   * 1143542
   */
  templateVersion?: number;
  /**
   * @remarks
   * The time when the scaling rule was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1574251601785
   */
  updateTime?: number;
  /**
   * @remarks
   * The IDs of the vSwitches. The IDs of multiple vSwitches are separated by commas (,).
   * 
   * @example
   * vsw-mxxxxkxxxx4xxxxwbionj
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz9b246z******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cond: 'Cond',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      duration: 'Duration',
      enable: 'Enable',
      groupId: 'GroupId',
      instNum: 'InstNum',
      loadNum: 'LoadNum',
      metricType: 'MetricType',
      mode: 'Mode',
      multiAzPolicy: 'MultiAzPolicy',
      resourceFrom: 'ResourceFrom',
      rt: 'Rt',
      specId: 'SpecId',
      step: 'Step',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cond: 'string',
      cpu: 'number',
      createTime: 'number',
      duration: 'number',
      enable: 'boolean',
      groupId: 'string',
      instNum: 'number',
      loadNum: 'number',
      metricType: 'string',
      mode: 'string',
      multiAzPolicy: 'string',
      resourceFrom: 'string',
      rt: 'number',
      specId: 'string',
      step: 'number',
      templateId: 'string',
      templateVersion: 'number',
      updateTime: 'number',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesResponseBodyDataRuleList extends $dara.Model {
  rule?: GetScalingRulesResponseBodyDataRuleListRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': GetScalingRulesResponseBodyDataRuleListRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   0: regular Docker cluster
   * *   1: Swarm cluster (deprecated)
   * *   2: Elastic Compute Service (ECS) cluster
   * *   3: self-managed Kubernetes cluster in EDAS
   * *   4: cluster in which Pandora automatically registers applications
   * *   5: Container Service for Kubernetes (ACK) clusters
   * 
   * @example
   * 2
   */
  clusterType?: number;
  /**
   * @remarks
   * The overcommit ratio supported by a Docker cluster. Valid values:
   * 
   * *   1: 1:1, which means that resources are not overcommitted.
   * *   2: 1:2, which means that resources are overcommitted by 1:2.
   * *   4: 1:4, which means that resources are overcommitted by 1:4.
   * *   8: 1:8, which means that resources are overcommitted by 1:8.
   * 
   * @example
   * 1
   */
  oversoldFactor?: number;
  /**
   * @remarks
   * The array data of the scaling rule.
   */
  ruleList?: GetScalingRulesResponseBodyDataRuleList;
  /**
   * @remarks
   * The time when the scaling rule was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1574251601785
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-wz9b246z******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      oversoldFactor: 'OversoldFactor',
      ruleList: 'RuleList',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'number',
      oversoldFactor: 'number',
      ruleList: GetScalingRulesResponseBodyDataRuleList,
      updateTime: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.ruleList && typeof (this.ruleList as any).validate === 'function') {
      (this.ruleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScalingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: GetScalingRulesResponseBodyData;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-***********
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the scaling rule was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1574251601785
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetScalingRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

