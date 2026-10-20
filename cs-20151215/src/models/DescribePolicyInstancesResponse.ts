// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The UID of the policy instance implementer.
   * 
   * @example
   * 16298168****
   */
  aliUid?: string;
  /**
   * @remarks
   * The ID of the target cluster.
   * 
   * @example
   * c8155823d057948c69a****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the rule instance.
   * 
   * @example
   * no-env-var-secrets-****
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the policy governance rule.
   * 
   * @example
   * ACKPSPCapabilities
   */
  policyName?: string;
  /**
   * @remarks
   * The name of the policy type.
   * 
   * @example
   * k8s-general
   */
  policyCategory?: string;
  /**
   * @remarks
   * The description of the rule template.
   * 
   * @example
   * Restricts secrets used in pod envs
   */
  policyDescription?: string;
  /**
   * @remarks
   * The configuration parameters of the current rule instance.
   * 
   * @example
   * "restrictedNamespaces": [ "test" ]
   */
  policyParameters?: string;
  /**
   * @remarks
   * The governance level of the rule instance.
   * 
   * @example
   * low
   */
  policySeverity?: string;
  /**
   * @remarks
   * The scope of the policy instance.
   * 
   * By default, an asterisk (*) indicates all namespaces in the cluster.
   * 
   * Otherwise, the names of the namespaces to which the policy applies are returned. Multiple namespaces are separated by commas (,).
   * 
   * @example
   * *
   */
  policyScope?: string;
  /**
   * @remarks
   * The governance action of the rule. Valid values:
   * 
   * - `deny`: Blocks non-compliant deployments.
   * 
   * - `warn`: Generates an alert.
   * 
   * @example
   * deny
   */
  policyAction?: string;
  /**
   * @remarks
   * The creation time. This parameter is deprecated. Do not use it.
   * 
   * @example
   * 2024-10-29T18:09:12+08:00
   * 
   * @deprecated
   */
  created?: string;
  /**
   * @remarks
   * The update time. This parameter is deprecated. Do not use it.
   * 
   * @example
   * 2024-10-29T18:09:12+08:00
   * 
   * @deprecated
   */
  updated?: string;
  /**
   * @remarks
   * The resource ID. This parameter is deprecated. Do not use it.
   * 
   * @example
   * 123456***
   * 
   * @deprecated
   */
  resourceId?: string;
  /**
   * @remarks
   * The number of violations processed in the cluster. This parameter is deprecated. Do not use it.
   * 
   * @example
   * 0
   * 
   * @deprecated
   */
  totalViolations?: number;
  /**
   * @remarks
   * The deletion status. This parameter is deprecated. Do not use it.
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

