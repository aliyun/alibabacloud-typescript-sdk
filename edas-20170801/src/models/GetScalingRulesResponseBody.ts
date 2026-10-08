// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScalingRulesResponseBodyDataRuleListRule extends $dara.Model {
  appId?: string;
  cond?: string;
  cpu?: number;
  createTime?: number;
  duration?: number;
  enable?: boolean;
  groupId?: string;
  instNum?: number;
  loadNum?: number;
  metricType?: string;
  mode?: string;
  multiAzPolicy?: string;
  resourceFrom?: string;
  rt?: number;
  specId?: string;
  step?: number;
  templateId?: string;
  templateVersion?: number;
  updateTime?: number;
  vSwitchIds?: string;
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
   * - 0: regular Docker cluster
   * 
   * - 1: Swarm cluster (deprecated)
   * 
   * - 2: Elastic Compute Service (ECS) cluster
   * 
   * - 3: self-managed Kubernetes cluster in EDAS
   * 
   * - 4: cluster in which Pandora automatically registers applications
   * 
   * - 5: Container Service for Kubernetes (ACK) clusters
   * 
   * @example
   * 2
   */
  clusterType?: number;
  /**
   * @remarks
   * The overcommit ratio supported by a Docker cluster. Valid values:
   * 
   * - 1: 1:1, which means that resources are not overcommitted.
   * 
   * - 2: 1:2, which means that resources are overcommitted by 1:2.
   * 
   * - 4: 1:4, which means that resources are overcommitted by 1:4.
   * 
   * - 8: 1:8, which means that resources are overcommitted by 1:8.
   * 
   * @example
   * 1
   */
  oversoldFactor?: number;
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

