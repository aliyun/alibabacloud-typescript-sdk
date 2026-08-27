// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name. Valid values:
   * 
   * - AlbAddressIpVersion: the IP version of the ALB address.
   * - AlbAddressType: the ALB address type.
   * - AlbLoadBalancerEdition: the ALB load balancing edition.
   * - AlbZoneMappings: the ALB active zone mappings.
   * - RamAttachedPolicyReplication: RAM policy replication.
   * - DeletionPolicy: the delete policy.
   * - DisableNameUnique: specifies whether to disable name uniqueness.
   * - InstanceAmount: the number of instances.
   * - InstanceDataReplication: instance data replication.
   * - InstancePeriod: the instance epoch.
   * - InstancePeriodUnit: the instance epoch unit.
   * - NamePrefix: the name prefix.
   * - RamAttachedPolicyReplication: RAM attached policy replication.
   * - RegionId: the region ID.
   * - RegionIds: the list of region IDs.
   * - ResourceView: the resource view.
   * - ReuseStrategy: the reuse strategy.
   * - SlbListenerProtocols: the SLB listener protocols.
   * - TemplateType: the template type.
   * - VSwitchId: the vSwitch ID.
   * - VpcId: the VPC ID.
   * - ZoneId: the zone ID.
   * 
   * This information is generated based on call logs and may be incomplete. Verify the information.
   * 
   * @example
   * DeletionPolicy
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * Retain
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The source resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type filter.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypeFilter)) {
      $dara.Model.validateArray(this.resourceTypeFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vpc-m5eauuq80anx59v28****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - ALIYUN::ALB::LoadBalancer: Application Load Balancer (ALB) for load balancing.
   * - ALIYUN::ECS::Instance: Elastic Compute Service (ECS) instance.
   * - ALIYUN::RAM::Role: RAM role.
   * 
   * This information is generated based on call logs and may be incomplete. Verify the information.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceTag extends $dara.Model {
  /**
   * @remarks
   * The source tag.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource type filter.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.resourceTags) {
      $dara.Model.validateMap(this.resourceTags);
    }
    if(Array.isArray(this.resourceTypeFilter)) {
      $dara.Model.validateArray(this.resourceTypeFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource scenario.
   * 
   * @example
   * usage1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource scenario.
   * 
   * @example
   * test1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class ListTemplateScratchesResponseBodyTemplateScratches extends $dara.Model {
  /**
   * @remarks
   * The time when the resource scenario was created. The time is displayed in UTC+0 and follows the ISO 8601 standard without the Z suffix. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2021-12-07T08:06:44
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the resource scenario.
   * 
   * @example
   * 纳管VPC资源。
   */
  description?: string;
  /**
   * @remarks
   * The status code that indicates why the resource scenario failed to be generated. Valid values:
   * 
   * - InvalidZoneId: invalid zone ID.
   * - IncorrectInstanceStatus: the instance status does not support this operation.
   * - RecommendEmpty.DiskCategoryNotRecommended: the cloud disk category is unavailable.
   * - Forbidden.RAM: insufficient RAM permissions.
   * 
   * > This parameter is returned only if Status is GENERATE_FAILED.
   * 
   * This information is generated based on call logs and may be incomplete. Verify the information.
   * 
   * @example
   * InvalidZoneId
   */
  failedCode?: string;
  /**
   * @remarks
   * The logical ID generation strategy. Valid values:
   * 
   * - LongTypePrefixAndIndexSuffix (default): long type prefix with index suffix.
   * 
   * - LongTypePrefixAndHashSuffix: long type prefix with hash suffix.
   * 
   * - ShortTypePrefixAndHashSuffix: short type prefix with hash suffix.
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * The configuration parameters of the resource scenario.
   */
  preferenceParameters?: ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm4nxcvht4pmi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source resource group.
   */
  sourceResourceGroup?: ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup;
  /**
   * @remarks
   * The source resources.
   */
  sourceResources?: ListTemplateScratchesResponseBodyTemplateScratchesSourceResources[];
  /**
   * @remarks
   * The source tag.
   */
  sourceTag?: ListTemplateScratchesResponseBodyTemplateScratchesSourceTag;
  /**
   * @remarks
   * The status of the resource scenario.
   * 
   * @example
   * GENERATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource scenario failed to be generated.
   * 
   * > This parameter is returned only if Status is GENERATE_FAILED.
   * 
   * @example
   * Resource ALIYUN::ECS::VPC vpc-m5eauuq80anx59v28**** could not be found for template scratch.
   */
  statusReason?: string;
  /**
   * @remarks
   * The tags of the resource scenario.
   */
  tags?: ListTemplateScratchesResponseBodyTemplateScratchesTags[];
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * @example
   * ts-48ad85d66cca4620****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * - ResourceImport: resource management.
   * 
   * - ArchitectureReplication: resource replication.
   * 
   * @example
   * ResourceImport
   */
  templateScratchType?: string;
  /**
   * @remarks
   * The time when the resource scenario was last updated. The time is displayed in UTC+0 and follows the ISO 8601 standard without the Z suffix. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2021-12-07T08:06:44
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      failedCode: 'FailedCode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      resourceGroupId: 'ResourceGroupId',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      templateScratchId: 'TemplateScratchId',
      templateScratchType: 'TemplateScratchType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      failedCode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters },
      resourceGroupId: 'string',
      sourceResourceGroup: ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratchesSourceResources },
      sourceTag: ListTemplateScratchesResponseBodyTemplateScratchesSourceTag,
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratchesTags },
      templateScratchId: 'string',
      templateScratchType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.preferenceParameters)) {
      $dara.Model.validateArray(this.preferenceParameters);
    }
    if(this.sourceResourceGroup && typeof (this.sourceResourceGroup as any).validate === 'function') {
      (this.sourceResourceGroup as any).validate();
    }
    if(Array.isArray(this.sourceResources)) {
      $dara.Model.validateArray(this.sourceResources);
    }
    if(this.sourceTag && typeof (this.sourceTag as any).validate === 'function') {
      (this.sourceTag as any).validate();
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

export class ListTemplateScratchesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the resource scenario list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Settings for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1C09606-C58B-558F-9B4E-5BF263D17D09
   */
  requestId?: string;
  /**
   * @remarks
   * The resource scenarios.
   */
  templateScratches?: ListTemplateScratchesResponseBodyTemplateScratches[];
  /**
   * @remarks
   * The total number of resource scenarios.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templateScratches: 'TemplateScratches',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templateScratches: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratches },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateScratches)) {
      $dara.Model.validateArray(this.templateScratches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

