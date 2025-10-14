// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPoliciesResponseBodyPoliciesBindResource extends $dara.Model {
  /**
   * @example
   * cv68tt87d78vyc89zy9v
   */
  clusterId?: string;
  /**
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @example
   * 100.100.0.1/16
   */
  vpcCidr?: string;
  /**
   * @example
   * vpc-uf664nyle5khp5d4d7hdo
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

export class ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesAnnotations extends $dara.Model {
  /**
   * @example
   * add
   */
  op?: string;
  /**
   * @example
   * key
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

export class ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesFieldRules extends $dara.Model {
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

export class ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesIpMatchRule extends $dara.Model {
  /**
   * @example
   * 100.100.1.0/16
   */
  ipCidr?: string;
  /**
   * @example
   * xxxx
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

export class ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesLabels extends $dara.Model {
  /**
   * @example
   * add
   */
  op?: string;
  /**
   * @example
   * test
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

export class ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesTags extends $dara.Model {
  /**
   * @example
   * add
   */
  op?: string;
  /**
   * @example
   * key
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

export class ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRules extends $dara.Model {
  annotations?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesAnnotations[];
  entityTypes?: string[];
  fieldRules?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesFieldRules[];
  instanceIds?: string[];
  ipMatchRule?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesIpMatchRule;
  labels?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesLabels[];
  regionIds?: string[];
  /**
   * @example
   * rg-5i6dbwxfxuqihk7k
   */
  resourceGroupId?: string;
  tags?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesTags[];
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
      annotations: { 'type': 'array', 'itemType': ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesAnnotations },
      entityTypes: { 'type': 'array', 'itemType': 'string' },
      fieldRules: { 'type': 'array', 'itemType': ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesFieldRules },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ipMatchRule: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesIpMatchRule,
      labels: { 'type': 'array', 'itemType': ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesLabels },
      regionIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesTags },
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

export class ListIntegrationPoliciesResponseBodyPoliciesEntityGroup extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  description?: string;
  /**
   * @example
   * eg-b79f65d11fb94e779867cf937c3a3002
   */
  entityGroupId?: string;
  /**
   * @example
   * test-eg
   */
  entityGroupName?: string;
  entityRules?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRules;
  query?: string;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @example
   * 1236812738
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
      entityRules: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRules,
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

export class ListIntegrationPoliciesResponseBodyPoliciesManagedInfo extends $dara.Model {
  /**
   * @example
   * eni-12345678
   */
  eniId?: string;
  /**
   * @example
   * sg-xxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxxxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'eniId',
      securityGroupId: 'securityGroupId',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
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

export class ListIntegrationPoliciesResponseBodyPoliciesSubAddonRelease extends $dara.Model {
  ready?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      ready: 'ready',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ready: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPoliciesResponseBodyPoliciesTags extends $dara.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
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

export class ListIntegrationPoliciesResponseBodyPolicies extends $dara.Model {
  bindResource?: ListIntegrationPoliciesResponseBodyPoliciesBindResource;
  entityGroup?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroup;
  managedInfo?: ListIntegrationPoliciesResponseBodyPoliciesManagedInfo;
  /**
   * @example
   * policy-ac38a7cb02d14ff48bc9f97d0a75063e
   */
  policyId?: string;
  /**
   * @example
   * 6f5HSsg3AP
   */
  policyName?: string;
  /**
   * @example
   * ECS
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
  subAddonRelease?: ListIntegrationPoliciesResponseBodyPoliciesSubAddonRelease;
  tags?: ListIntegrationPoliciesResponseBodyPoliciesTags[];
  /**
   * @example
   * 128470923
   */
  userId?: string;
  /**
   * @example
   * test-api
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
      subAddonRelease: 'subAddonRelease',
      tags: 'tags',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindResource: ListIntegrationPoliciesResponseBodyPoliciesBindResource,
      entityGroup: ListIntegrationPoliciesResponseBodyPoliciesEntityGroup,
      managedInfo: ListIntegrationPoliciesResponseBodyPoliciesManagedInfo,
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subAddonRelease: ListIntegrationPoliciesResponseBodyPoliciesSubAddonRelease,
      tags: { 'type': 'array', 'itemType': ListIntegrationPoliciesResponseBodyPoliciesTags },
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
    if(this.subAddonRelease && typeof (this.subAddonRelease as any).validate === 'function') {
      (this.subAddonRelease as any).validate();
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

export class ListIntegrationPoliciesResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 44ANBjKZmQeKnaB1fXRq06w7sFYK3MUcCALMD9qQbmEiE
   */
  nextToken?: string;
  policies?: ListIntegrationPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      policies: 'policies',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policies: { 'type': 'array', 'itemType': ListIntegrationPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

