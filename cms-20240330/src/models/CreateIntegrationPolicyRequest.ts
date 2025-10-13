// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntegrationPolicyRequestEntityGroup extends $dara.Model {
  /**
   * @example
   * acs.ack.cluster
   */
  clusterEntityType?: string;
  /**
   * @example
   * na61prod3-na61cloudhdfsssd
   */
  clusterId?: string;
  disablePolicyShare?: boolean;
  /**
   * @example
   * eg-b79f65d11fb94e779867cf937c3a3002
   */
  entityGroupId?: string;
  /**
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
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterEntityType: 'string',
      clusterId: 'string',
      disablePolicyShare: 'boolean',
      entityGroupId: 'string',
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
   * @example
   * use
   */
  key?: string;
  /**
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
  entityGroup?: CreateIntegrationPolicyRequestEntityGroup;
  /**
   * @example
   * prod-database
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CS
   */
  policyType?: string;
  /**
   * @example
   * rg-aekz2km4kmhtbii
   */
  resourceGroupId?: string;
  tags?: CreateIntegrationPolicyRequestTags[];
  /**
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

