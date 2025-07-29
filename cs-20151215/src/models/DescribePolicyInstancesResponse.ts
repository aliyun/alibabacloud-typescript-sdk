// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that is used to deploy the policy instance.
   * 
   * @example
   * 16298168****
   */
  aliUid?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c8155823d057948c69a****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the policy instance.
   * 
   * @example
   * no-env-var-secrets-****
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * ACKPSPCapabilities
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * k8s-general
   */
  policyCategory?: string;
  /**
   * @remarks
   * The description of the policy template.
   * 
   * @example
   * Restricts secrets used in pod envs
   */
  policyDescription?: string;
  /**
   * @remarks
   * The parameters of the policy instance.
   * 
   * @example
   * "restrictedNamespaces": [ "test" ]
   */
  policyParameters?: string;
  /**
   * @remarks
   * The severity level of the policy instance.
   * 
   * @example
   * low
   */
  policySeverity?: string;
  /**
   * @remarks
   * The applicable scope of the policy instance.
   * 
   * A value of \\* indicates all namespaces in the cluster. This is the default value.
   * 
   * Multiple namespaces are separated by commas (,).
   * 
   * @example
   * *
   */
  policyScope?: string;
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   `deny`: Deployments that match the policy are denied.
   * *   `warn`: Alerts are generated for deployments that match the policy.
   * 
   * @example
   * deny
   */
  policyAction?: string;
  /**
   * @remarks
   * The creation time of the instance. This parameter is deprecated.
   * 
   * @example
   * 2024-10-29T18:09:12+08:00
   * 
   * @deprecated
   */
  created?: string;
  /**
   * @remarks
   * The update time of the instance. This parameter is deprecated.
   * 
   * @example
   * 2024-10-29T18:09:12+08:00
   * 
   * @deprecated
   */
  updated?: string;
  /**
   * @remarks
   * The ID of the resource. This parameter is deprecated.
   * 
   * @example
   * 123456***
   * 
   * @deprecated
   */
  resourceId?: string;
  /**
   * @remarks
   * The number of violations processed in the cluster. This parameter is deprecated.
   * 
   * @example
   * 0
   * 
   * @deprecated
   */
  totalViolations?: number;
  /**
   * @remarks
   * The status of the deletion. This parameter is deprecated.
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

