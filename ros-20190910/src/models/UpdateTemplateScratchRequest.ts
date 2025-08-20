// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateScratchRequestPreferenceParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * For more information about the valid values of ParameterKey, see the "**Additional information about request parameters**" section of this topic.
   * 
   * >- PreferenceParameters is optional. If you specify PreferenceParameters, you must specify both ParameterKey and ParameterValue.
   * > - If you set TemplateScratchType to ResourceImport, you must set ParameterKey to DeletionPolicy.
   * 
   * This parameter is required.
   * 
   * @example
   * DeletionPolicy
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value. The value of ParameterValue varies based on the value of ParameterKey.
   * 
   * For more information about the valid values of ParameterKey, see the "**Additional information about request parameters**" section of this topic.
   * 
   * >  PreferenceParameters is optional. If you specify PreferenceParameters, you must specify both ParameterKey and ParameterValue.
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

export class UpdateTemplateScratchRequestSourceResourceGroup extends $dara.Model {
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

export class UpdateTemplateScratchRequestSourceResources extends $dara.Model {
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

export class UpdateTemplateScratchRequestSourceTag extends $dara.Model {
  /**
   * @remarks
   * The source tags. A tag contains a tag key and a tag value.
   * 
   * If you want to specify only the tag key, you must leave the tag value empty. Example: {"TagKey": ""}.
   * 
   * If you set TemplateScratchType to ArchitectureDetection, you can add up to 5 source tags. In other cases, you can add up to 10 source tags.
   * 
   * This parameter is required.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource types for filtering resources.
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

export class UpdateTemplateScratchRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the scenario.
   * 
   * @example
   * The description of the scenario.
   */
  description?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   Async (default)
   * *   Sync
   * 
   * > If you have a wide scope of resources, Sync takes longer. If you set ExecutionMode to Sync, we recommend that you specify ClientToken to prevent the execution timeout.
   * 
   * @example
   * Sync
   */
  executionMode?: string;
  /**
   * @remarks
   * The policy based on which the logical ID is generated. Valid values:
   * 
   * *   LongTypePrefixAndIndexSuffix: long-type prefix + index-type suffix
   * *   LongTypePrefixAndHashSuffix: long-type prefix + hash-type suffix
   * *   ShortTypePrefixAndHashSuffix: short-type prefix + hash-type suffix
   * 
   * >  If you set TemplateScratchType to ArchitectureDetection, the default value of LogicalIdStrategy is LongTypePrefixAndHashSuffix. In other cases, the default value of LogicalIdStrategy is LongTypePrefixAndIndexSuffix.
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * The preference parameters of the resource scenario.
   */
  preferenceParameters?: UpdateTemplateScratchRequestPreferenceParameters[];
  /**
   * @remarks
   * The region ID of the scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source resource group.
   * 
   * >  You must specify only one of the following parameters: SourceResources, SourceTag, and SourceResourceGroup.
   */
  sourceResourceGroup?: UpdateTemplateScratchRequestSourceResourceGroup;
  /**
   * @remarks
   * The source resources.
   * 
   * >  You must specify only one of the following parameters: SourceResources, SourceTag, and SourceResourceGroup.
   */
  sourceResources?: UpdateTemplateScratchRequestSourceResources[];
  /**
   * @remarks
   * The source tag.
   * 
   * >  You must specify only one of the following parameters: SourceResources, SourceTag, and SourceResourceGroup.
   */
  sourceTag?: UpdateTemplateScratchRequestSourceTag;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * The valid values of the ParameterKey and ParameterValue request parameters vary based on the IDs of different types of resource scenarios. For more information, see the "Additional information about request parameters" section of this topic.
   * 
   * >  You can call the [ListTemplateScratches](https://help.aliyun.com/document_detail/610832.html) operation to query the ID of a resource scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
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
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': UpdateTemplateScratchRequestPreferenceParameters },
      regionId: 'string',
      resourceGroupId: 'string',
      sourceResourceGroup: UpdateTemplateScratchRequestSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': UpdateTemplateScratchRequestSourceResources },
      sourceTag: UpdateTemplateScratchRequestSourceTag,
      templateScratchId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

