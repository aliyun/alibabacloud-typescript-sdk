// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateScratchRequestPreferenceParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter key.
   * 
   * For more information about the valid values, refer to **Supplementary description of request parameters** section in this topic.
   * 
   * > - PreferenceParameters is optional. If you specify PreferenceParameters, you must specify ParameterKey and ParameterValue.
   * >
   * > - You must set ParameterKey to DeletionPolicy when TemplateScratchType is set to ResourceImport.
   * 
   * This parameter is required.
   * 
   * @example
   * DeletionPolicy
   */
  parameterKey?: string;
  /**
   * @remarks
   * Parameter value. The value is an assignment to the ParameterKey.
   * 
   * For more information about the valid values, refer to **Supplementary description of request parameters** section in this topic.
   * 
   * > PreferenceParameters is optional. If you specify PreferenceParameters, you must specify ParameterKey and ParameterValue.
   * 
   * This parameter is required.
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

export class CreateTemplateScratchRequestSourceResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the source resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource types for filtering resources.
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

export class CreateTemplateScratchRequestSourceResources extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query the most recent region list.
   * 
   * > - This parameter takes effect only when TemplateScratchType is set to ArchitectureDetection.
   * >
   * > - The region ID of a global resource is `global`. For example, ALIYUN::CDN::Domain is a global resource, and its region ID is `global`.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The related resource type filters.
   */
  relatedResourceTypeFilter?: string[];
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1m6fww66xbntjyc****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      relatedResourceTypeFilter: 'RelatedResourceTypeFilter',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      relatedResourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedResourceTypeFilter)) {
      $dara.Model.validateArray(this.relatedResourceTypeFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchRequestSourceTag extends $dara.Model {
  /**
   * @remarks
   * The source tags that consist of key-value pairs. If you want to specify only a tag key, set the tag value to an empty string, for example: `{"TagKey": ""}`.
   * 
   * You can add up to 10 source tags. If you set TemplateScratchType to ArchitectureDetection, you can add up to 5 source tags.
   * 
   * This parameter is required.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource types filter.
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

export class CreateTemplateScratchRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that you want to add to the resource scenario.
   * 
   * > Tags is optional. If you specify Tags, you must specify Tags.N.Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that you want to add to the resource scenario.
   * 
   * @example
   * test
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

export class CreateTemplateScratchRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotency of the request. This value must be generated by the client and must be globally unique.
   * 
   * It must be no more than 64 characters in length and can contain letters, digits, hyphens (**-**), and underscores (**_**).
   * 
   * For more information, refer to [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the resource scenario.
   * 
   * @example
   * Copy VPC resources.
   */
  description?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * - Async (default): asynchronous mode
   * 
   * - Sync: synchronous mode
   * 
   * > If the resource scope is large, the synchronous execution takes a long time. We recommend that you specify ClientToken to avoid timeout issues.
   * 
   * @example
   * Sync
   */
  executionMode?: string;
  /**
   * @remarks
   * Logical ID generation strategy. Valid values:
   * 
   * - LongTypePrefixAndIndexSuffix: long-type prefix + index-type suffix
   * 
   * - LongTypePrefixAndHashSuffix: long-type prefix + hash-type suffix
   * 
   * - ShortTypePrefixAndHashSuffix: short-type prefix + hash-type suffix
   * 
   * > Default value: LongTypePrefixAndIndexSuffix. If TemplateScratchType is set to ArchitectureDetection, the default value is LongTypePrefixAndHashSuffix.
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * Configuration parameters for resource scenario
   */
  preferenceParameters?: CreateTemplateScratchRequestPreferenceParameters[];
  /**
   * @remarks
   * The region ID of the resource scenario.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which you want to assign the snapshot policy. If you leave this parameter empty, the resource scenario is added to the default resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source resource group.
   */
  sourceResourceGroup?: CreateTemplateScratchRequestSourceResourceGroup;
  /**
   * @remarks
   * The source resources.
   * 
   * When you set TemplateScratchType to ArchitectureDetection, you can specify SourceResources to detect the architecture data of all resources associated with the specified source resources. For example, if you specify a CLB instance ID, the system will detect and identify its associated resources such as ECS instances, vSwitches, and VPCs.
   * 
   * If TemplateScratchType is set to ArchitectureDetection, you can specify up to **20 source resources**.
   * 
   * In other cases, up to **200 source resources** are supported.
   */
  sourceResources?: CreateTemplateScratchRequestSourceResources[];
  /**
   * @remarks
   * The source tags.
   */
  sourceTag?: CreateTemplateScratchRequestSourceTag;
  /**
   * @remarks
   * The tags of the resource scenario.
   */
  tags?: CreateTemplateScratchRequestTags[];
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * - ArchitectureReplication: resource replication
   * 
   * - ArchitectureDetection: resource profiling
   * 
   * - ResourceImport: resource management
   * 
   * - ResourceMigration: resource migration
   * 
   * > When you specify different values for the TemplateScratchType parameter, the optional parameters in the supplementary description of request parameters are also different. For more information, refer to **Supplementary description of request parameters** section below.
   * 
   * This parameter is required.
   * 
   * @example
   * ArchitectureReplication
   */
  templateScratchType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionMode: 'ExecutionMode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      tags: 'Tags',
      templateScratchType: 'TemplateScratchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': CreateTemplateScratchRequestPreferenceParameters },
      regionId: 'string',
      resourceGroupId: 'string',
      sourceResourceGroup: CreateTemplateScratchRequestSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': CreateTemplateScratchRequestSourceResources },
      sourceTag: CreateTemplateScratchRequestSourceTag,
      tags: { 'type': 'array', 'itemType': CreateTemplateScratchRequestTags },
      templateScratchType: 'string',
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

