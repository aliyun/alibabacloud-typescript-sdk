// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntegrationPolicyRequestEntityGroup extends $dara.Model {
  /**
   * @remarks
   * The cluster entity type. Examples: acs.ack.cluster, acs.one.cluster, and acs.asi.cluster.
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
  clusterNamespace?: string;
  /**
   * @remarks
   * Specifies whether to disable unique policy binding. If this parameter is set to true, you can create multiple policies for a container cluster.
   * 
   * @example
   * ture
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
   * The ID of the user who owns the cluster.
   * 
   * @example
   * 12xxxx
   */
  entityUserId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
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
   * The key of the tag.
   * 
   * @example
   * use
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The entity group used to create the policy. You can quickly create a policy using an entity group. The clusterId and vpcId parameters are independent of each other.
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

