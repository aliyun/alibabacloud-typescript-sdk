// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntegrationPolicyResponseBodyPolicyBindResource extends $dara.Model {
  /**
   * @example
   * 00b1630f02814f95a9bce717d8d56bb2
   */
  clusterId?: string;
  /**
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @example
   * 10.12.0.1/16
   */
  vpcCidr?: string;
  /**
   * @example
   * vpc-2zegqpeyxplhtmdg70xnr
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      clusterType: 'clusterType',
      vpcCidr: 'vpcCidr',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      vpcCidr: 'string',
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

export class GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesAnnotations extends $dara.Model {
  /**
   * @example
   * add
   */
  op?: string;
  /**
   * @example
   * use
   */
  tagKey?: string;
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tagKey: 'tagKey',
      tagValues: 'tagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesFieldRules extends $dara.Model {
  /**
   * @example
   * test
   */
  fieldKey?: string;
  fieldValues?: string[];
  /**
   * @example
   * add
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      fieldValues: 'fieldValues',
      op: 'op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      fieldValues: { 'type': 'array', 'itemType': 'string' },
      op: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldValues)) {
      $dara.Model.validateArray(this.fieldValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesIpMatchRule extends $dara.Model {
  /**
   * @example
   * 10.10.0.1/16
   */
  ipCidr?: string;
  /**
   * @example
   * test-key
   */
  ipFieldKey?: string;
  static names(): { [key: string]: string } {
    return {
      ipCidr: 'ipCidr',
      ipFieldKey: 'ipFieldKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipCidr: 'string',
      ipFieldKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesLabels extends $dara.Model {
  /**
   * @example
   * add
   */
  op?: string;
  /**
   * @example
   * key1
   */
  tagKey?: string;
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tagKey: 'tagKey',
      tagValues: 'tagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesTags extends $dara.Model {
  /**
   * @example
   * add
   */
  op?: string;
  /**
   * @example
   * key2
   */
  tagKey?: string;
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tagKey: 'tagKey',
      tagValues: 'tagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRules extends $dara.Model {
  annotations?: GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesAnnotations[];
  entityTypes?: string[];
  fieldRules?: GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesFieldRules[];
  instanceIds?: string[];
  ipMatchRule?: GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesIpMatchRule;
  labels?: GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesLabels[];
  regionIds?: string[];
  /**
   * @example
   * rg-aek3aqsuvlv3yyq
   */
  resourceGroupId?: string;
  tags?: GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesTags[];
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      entityTypes: 'entityTypes',
      fieldRules: 'fieldRules',
      instanceIds: 'instanceIds',
      ipMatchRule: 'ipMatchRule',
      labels: 'labels',
      regionIds: 'regionIds',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesAnnotations },
      entityTypes: { 'type': 'array', 'itemType': 'string' },
      fieldRules: { 'type': 'array', 'itemType': GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesFieldRules },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ipMatchRule: GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesIpMatchRule,
      labels: { 'type': 'array', 'itemType': GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesLabels },
      regionIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRulesTags },
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(Array.isArray(this.entityTypes)) {
      $dara.Model.validateArray(this.entityTypes);
    }
    if(Array.isArray(this.fieldRules)) {
      $dara.Model.validateArray(this.fieldRules);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(this.ipMatchRule && typeof (this.ipMatchRule as any).validate === 'function') {
      (this.ipMatchRule as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
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

export class GetIntegrationPolicyResponseBodyPolicyEntityGroup extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  description?: string;
  /**
   * @example
   * eg-b79f65d11fb94e779867cf937c3a3002
   */
  entityGroupId?: string;
  /**
   * @example
   * prod-database
   */
  entityGroupName?: string;
  entityRules?: GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRules;
  /**
   * @example
   * status: 200 AND totalTime > 0.5
   */
  query?: string;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @example
   * u123456
   */
  userId?: string;
  /**
   * @example
   * test-api
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      entityGroupId: 'entityGroupId',
      entityGroupName: 'entityGroupName',
      entityRules: 'entityRules',
      query: 'query',
      regionId: 'regionId',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entityGroupId: 'string',
      entityGroupName: 'string',
      entityRules: GetIntegrationPolicyResponseBodyPolicyEntityGroupEntityRules,
      query: 'string',
      regionId: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.entityRules && typeof (this.entityRules as any).validate === 'function') {
      (this.entityRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationPolicyResponseBodyPolicyManagedInfo extends $dara.Model {
  /**
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxxxxxxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationPolicyResponseBodyPolicyTags extends $dara.Model {
  /**
   * @example
   * use
   */
  key?: string;
  /**
   * @example
   * db
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

export class GetIntegrationPolicyResponseBodyPolicy extends $dara.Model {
  bindResource?: GetIntegrationPolicyResponseBodyPolicyBindResource;
  entityGroup?: GetIntegrationPolicyResponseBodyPolicyEntityGroup;
  managedInfo?: GetIntegrationPolicyResponseBodyPolicyManagedInfo;
  /**
   * @example
   * policy-c9efed2b99c348d49e589c5f780fc074
   */
  policyId?: string;
  /**
   * @example
   * ControlPolicy4DetailVportInfo
   */
  policyName?: string;
  /**
   * @example
   * CS
   */
  policyType?: string;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  tags?: GetIntegrationPolicyResponseBodyPolicyTags[];
  /**
   * @example
   * u123456
   */
  userId?: string;
  /**
   * @example
   * prometheus
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      bindResource: 'bindResource',
      entityGroup: 'entityGroup',
      managedInfo: 'managedInfo',
      policyId: 'policyId',
      policyName: 'policyName',
      policyType: 'policyType',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindResource: GetIntegrationPolicyResponseBodyPolicyBindResource,
      entityGroup: GetIntegrationPolicyResponseBodyPolicyEntityGroup,
      managedInfo: GetIntegrationPolicyResponseBodyPolicyManagedInfo,
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetIntegrationPolicyResponseBodyPolicyTags },
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.bindResource && typeof (this.bindResource as any).validate === 'function') {
      (this.bindResource as any).validate();
    }
    if(this.entityGroup && typeof (this.entityGroup as any).validate === 'function') {
      (this.entityGroup as any).validate();
    }
    if(this.managedInfo && typeof (this.managedInfo as any).validate === 'function') {
      (this.managedInfo as any).validate();
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

export class GetIntegrationPolicyResponseBody extends $dara.Model {
  policy?: GetIntegrationPolicyResponseBodyPolicy;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'policy',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetIntegrationPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

