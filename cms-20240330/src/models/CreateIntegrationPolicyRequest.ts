// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntegrationPolicyRequestEntityGroup extends $dara.Model {
  /**
   * @remarks
   * The cluster entity type, such as acs.ack.cluster, acs.one.cluster, acs.asi.cluster, or others.
   * 
   * @example
   * acs.ack.cluster
   */
  clusterEntityType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * na61prod3-na61cloudhdfsssd
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespace where the probe is deployed.
   * 
   * @example
   * arms-prom
   */
  clusterNamespace?: string;
  /**
   * @remarks
   * Specifies whether to disable the unique binding of the policy. If this parameter is set to true, you can create multiple policies for a single container cluster.
   * 
   * @example
   * true
   */
  disablePolicyShare?: boolean;
  /**
   * @remarks
   * The entity group ID.
   * 
   * @example
   * eg-b79f65d11fb94e779867cf937c3a3002
   */
  entityGroupId?: string;
  /**
   * @remarks
   * The ID of the user to which the cluster belongs.
   * 
   * @example
   * 12xxxx
   */
  entityUserId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp18fgg3ffxa9czna40xt
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterEntityType: 'clusterEntityType',
      clusterId: 'clusterId',
      clusterNamespace: 'clusterNamespace',
      disablePolicyShare: 'disablePolicyShare',
      entityGroupId: 'entityGroupId',
      entityUserId: 'entityUserId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterEntityType: 'string',
      clusterId: 'string',
      clusterNamespace: 'string',
      disablePolicyShare: 'boolean',
      entityGroupId: 'string',
      entityUserId: 'string',
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

export class CreateIntegrationPolicyRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * use
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * database
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegrationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy creation version. Valid values: v1 and v2. If this parameter is not specified or is left empty, v2 is used. If v1 is specified, a v1-compatible environment is created for ECS and Cloud.
   * 
   * @example
   * v2
   */
  apiVersion?: string;
  /**
   * @remarks
   * The entity group used to create the policy. You can use the entity group for quick creation. The clusterId and vpcId parameters are independent of each other.
   */
  entityGroup?: CreateIntegrationPolicyRequestEntityGroup;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * prod-database
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values: CS, ECS, and Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * CS
   */
  policyType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz2km4kmhtbii
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tags?: CreateIntegrationPolicyRequestTags[];
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * prometheus
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'apiVersion',
      entityGroup: 'entityGroup',
      policyName: 'policyName',
      policyType: 'policyType',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      entityGroup: CreateIntegrationPolicyRequestEntityGroup,
      policyName: 'string',
      policyType: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateIntegrationPolicyRequestTags },
      workspace: 'string',
    };
  }

  validate() {
    if(this.entityGroup && typeof (this.entityGroup as any).validate === 'function') {
      (this.entityGroup as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

