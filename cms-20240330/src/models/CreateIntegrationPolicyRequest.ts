// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntegrationPolicyRequestEntityGroup extends $dara.Model {
  /**
   * @remarks
   * Cluster entity type, such as acs.ack.cluster/acs.one.cluster/acs.asi.cluster or others.
   * 
   * @example
   * acs.ack.cluster
   */
  clusterEntityType?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * na61prod3-na61cloudhdfsssd
   */
  clusterId?: string;
  /**
   * @remarks
   * Whether to disable unique binding of the Policy. If enabled, multiple Policies can be created for a single container cluster.
   * 
   * @example
   * ture
   */
  disablePolicyShare?: boolean;
  /**
   * @remarks
   * Entity group ID.
   * 
   * @example
   * eg-b79f65d11fb94e779867cf937c3a3002
   */
  entityGroupId?: string;
  entityUserId?: string;
  /**
   * @remarks
   * VPC (Virtual Private Cloud) ID.
   * 
   * @example
   * vpc-bp18fgg3ffxa9czna40xt
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterEntityType: 'clusterEntityType',
      clusterId: 'clusterId',
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
   * Tag `key` value.
   * 
   * @example
   * use
   */
  key?: string;
  /**
   * @remarks
   * Tag `value` value.
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
   * Entity group for creating the policy. Policies can be quickly created using the entity group, and `clusterId` and `vpcId` are independent of each other.
   */
  entityGroup?: CreateIntegrationPolicyRequestEntityGroup;
  /**
   * @remarks
   * Policy name
   * 
   * @example
   * prod-database
   */
  policyName?: string;
  /**
   * @remarks
   * Policy type: CS/ECS/Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * CS
   */
  policyType?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aekz2km4kmhtbii
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource tags.
   */
  tags?: CreateIntegrationPolicyRequestTags[];
  /**
   * @remarks
   * Workspace.
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

