// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPoliciesResponseBodyPoliciesBindResource extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * cv68tt87d78vyc89zy9v
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster type.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * VPC CIDR
   * 
   * @example
   * 100.100.0.1/16
   */
  vpcCidr?: string;
  /**
   * @remarks
   * Virtual Private Cloud (VPC).
   * 
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
   * @remarks
   * Operation to be performed.
   * 
   * @example
   * add
   */
  op?: string;
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag values
   */
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
   * @remarks
   * Unique identifier for the field.
   * 
   * @example
   * test
   */
  fieldKey?: string;
  /**
   * @remarks
   * Field content, multiple values separated by English commas.
   */
  fieldValues?: string[];
  /**
   * @remarks
   * Operation to be performed.
   * 
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
   * @remarks
   * IP segment
   * 
   * @example
   * 100.100.1.0/16
   */
  ipCidr?: string;
  /**
   * @remarks
   * Key of the IP field
   * 
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
   * @remarks
   * Operation to be performed.
   * 
   * @example
   * add
   */
  op?: string;
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag values
   */
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
   * @remarks
   * Operation to be performed.
   * 
   * @example
   * add
   */
  op?: string;
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value.
   */
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
  /**
   * @remarks
   * Annotations
   */
  annotations?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesAnnotations[];
  /**
   * @remarks
   * List of entity types
   */
  entityTypes?: string[];
  /**
   * @remarks
   * Field rules
   */
  fieldRules?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesFieldRules[];
  /**
   * @remarks
   * Instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * IP match rule
   */
  ipMatchRule?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesIpMatchRule;
  /**
   * @remarks
   * Labels
   */
  labels?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRulesLabels[];
  /**
   * @remarks
   * List of region IDs.
   */
  regionIds?: string[];
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-5i6dbwxfxuqihk7k
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Instance tag information.
   */
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
   * @remarks
   * Description.
   * 
   * @example
   * xxxx
   */
  description?: string;
  /**
   * @remarks
   * Entity group ID
   * 
   * @example
   * eg-b79f65d11fb94e779867cf937c3a3002
   */
  entityGroupId?: string;
  /**
   * @remarks
   * Entity group name
   * 
   * @example
   * test-eg
   */
  entityGroupName?: string;
  /**
   * @remarks
   * Entity group
   */
  entityRules?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroupEntityRules;
  /**
   * @remarks
   * Search keywords, supporting document library name and description
   * 
   * @example
   * 哈弗
   */
  query?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 1236812738
   */
  userId?: string;
  /**
   * @remarks
   * Workspace.
   * 
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
   * @remarks
   * ENI card ID of the managed probe. For example: eni-xxxx.
   * 
   * @example
   * eni-12345678
   */
  eniId?: string;
  /**
   * @remarks
   * Security group ID
   * 
   * @example
   * sg-xxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * VSwitch ID.
   * 
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
  /**
   * @remarks
   * Number of ready sub-releases
   * 
   * @example
   * 30
   */
  ready?: number;
  /**
   * @remarks
   * Number of rules.
   * 
   * @example
   * 278
   */
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

export class ListIntegrationPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * Bound resource information
   */
  bindResource?: ListIntegrationPoliciesResponseBodyPoliciesBindResource;
  /**
   * @remarks
   * Container environment umodel installation status.
   * 
   * @example
   * true
   */
  csUmodelStatus?: boolean;
  /**
   * @remarks
   * Entity group
   */
  entityGroup?: ListIntegrationPoliciesResponseBodyPoliciesEntityGroup;
  /**
   * @remarks
   * Billing type.
   * 
   * @example
   * CS_Pro
   */
  feePackage?: string;
  /**
   * @remarks
   * Policy network management information.
   */
  managedInfo?: ListIntegrationPoliciesResponseBodyPoliciesManagedInfo;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * policy-ac38a7cb02d14ff48bc9f97d0a75063e
   */
  policyId?: string;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * 6f5HSsg3AP
   */
  policyName?: string;
  /**
   * @remarks
   * Access center policy type
   * 
   * @example
   * ECS
   */
  policyType?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Number of sub-releases
   */
  subAddonRelease?: ListIntegrationPoliciesResponseBodyPoliciesSubAddonRelease;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 128470923
   */
  userId?: string;
  /**
   * @remarks
   * Workspace.
   * 
   * @example
   * test-api
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      bindResource: 'bindResource',
      csUmodelStatus: 'csUmodelStatus',
      entityGroup: 'entityGroup',
      feePackage: 'feePackage',
      managedInfo: 'managedInfo',
      policyId: 'policyId',
      policyName: 'policyName',
      policyType: 'policyType',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      subAddonRelease: 'subAddonRelease',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindResource: ListIntegrationPoliciesResponseBodyPoliciesBindResource,
      csUmodelStatus: 'boolean',
      entityGroup: ListIntegrationPoliciesResponseBodyPoliciesEntityGroup,
      feePackage: 'string',
      managedInfo: ListIntegrationPoliciesResponseBodyPoliciesManagedInfo,
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subAddonRelease: ListIntegrationPoliciesResponseBodyPoliciesSubAddonRelease,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Page size
   * Default value:
   * 	50
   * Maximum value:
   * 	50
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Pagination token
   * 
   * @example
   * 44ANBjKZmQeKnaB1fXRq06w7sFYK3MUcCALMD9qQbmEiE
   */
  nextToken?: string;
  /**
   * @remarks
   * Access policy list
   */
  policies?: ListIntegrationPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of entries
   * 
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

