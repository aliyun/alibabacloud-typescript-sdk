// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 策略实例实施者UID。
   * 
   * @example
   * 16298168****
   */
  aliUid?: string;
  /**
   * @remarks
   * 目标集群ID。
   * 
   * @example
   * c8155823d057948c69a****
   */
  clusterId?: string;
  /**
   * @remarks
   * 规则实例名称。
   * 
   * @example
   * no-env-var-secrets-****
   */
  instanceName?: string;
  /**
   * @remarks
   * 策略治理规则名称。
   * 
   * @example
   * ACKPSPCapabilities
   */
  policyName?: string;
  /**
   * @remarks
   * 策略类型名称。
   * 
   * @example
   * k8s-general
   */
  policyCategory?: string;
  /**
   * @remarks
   * 规则模板描述。
   * 
   * @example
   * Restricts secrets used in pod envs
   */
  policyDescription?: string;
  /**
   * @remarks
   * 当前规则实例的配置参数。
   * 
   * @example
   * "restrictedNamespaces": [ "test" ]
   */
  policyParameters?: string;
  /**
   * @remarks
   * 规则实例治理等级。
   * 
   * @example
   * low
   */
  policySeverity?: string;
  /**
   * @remarks
   * 策略实例实施范围：
   * 
   * 默认"*"代表集群所有命名空间。
   * 
   * 否则返回作用Namespaces名称，多个Namespaces以逗号（,）分隔。
   * 
   * @example
   * *
   */
  policyScope?: string;
  /**
   * @remarks
   * 规则治理动作，取值：
   * 
   * - `deny`：拦截违规部署。
   * 
   * - `warn`：告警。
   * 
   * @example
   * deny
   */
  policyAction?: string;
  /**
   * @remarks
   * 创建时间（已废弃，请勿使用）。
   * 
   * @example
   * 2024-10-29T18:09:12+08:00
   * 
   * @deprecated
   */
  created?: string;
  /**
   * @remarks
   * 更新时间（已废弃，请勿使用）。
   * 
   * @example
   * 2024-10-29T18:09:12+08:00
   * 
   * @deprecated
   */
  updated?: string;
  /**
   * @remarks
   * 资源ID（已废弃，请勿使用）。
   * 
   * @example
   * 123456***
   * 
   * @deprecated
   */
  resourceId?: string;
  /**
   * @remarks
   * 集群中处理违规计数（已废弃，请勿使用）。
   * 
   * @example
   * 0
   * 
   * @deprecated
   */
  totalViolations?: number;
  /**
   * @remarks
   * 删除状态（已废弃，请勿使用）。
   * 
   * @example
   * 0
   * 
   * @deprecated
   */
  isDeleted?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'ali_uid',
      clusterId: 'cluster_id',
      instanceName: 'instance_name',
      policyName: 'policy_name',
      policyCategory: 'policy_category',
      policyDescription: 'policy_description',
      policyParameters: 'policy_parameters',
      policySeverity: 'policy_severity',
      policyScope: 'policy_scope',
      policyAction: 'policy_action',
      created: 'Created',
      updated: 'Updated',
      resourceId: 'resource_id',
      totalViolations: 'total_violations',
      isDeleted: 'is_deleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      clusterId: 'string',
      instanceName: 'string',
      policyName: 'string',
      policyCategory: 'string',
      policyDescription: 'string',
      policyParameters: 'string',
      policySeverity: 'string',
      policyScope: 'string',
      policyAction: 'string',
      created: 'string',
      updated: 'string',
      resourceId: 'string',
      totalViolations: 'number',
      isDeleted: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyInstancesResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribePolicyInstancesResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

