// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
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

export class GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the source resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type filters.
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

export class GetTemplateScratchResponseBodyTemplateScratchSourceResources extends $dara.Model {
  /**
   * @remarks
   * The related resource type filters.
   */
  relatedResourceTypeFilter?: string[];
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vpc-m5e7cv7e9mz69sszb****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      relatedResourceTypeFilter: 'RelatedResourceTypeFilter',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetTemplateScratchResponseBodyTemplateScratchSourceTag extends $dara.Model {
  /**
   * @remarks
   * The source tags.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource type filters.
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

export class GetTemplateScratchResponseBodyTemplateScratchStackProvision extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the resource is replicated by calling the [CreateStack](https://help.aliyun.com/document_detail/132086.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  creatable?: boolean;
  /**
   * @remarks
   * Indicates whether the resource is managed by calling the [CreateChangeSet](https://help.aliyun.com/document_detail/131051.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  importable?: boolean;
  static names(): { [key: string]: string } {
    return {
      creatable: 'Creatable',
      importable: 'Importable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatable: 'boolean',
      importable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchStacks extends $dara.Model {
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 3708bf6a-3a67-44d4-9eb1-c56704b9****
   */
  stackId?: string;
  /**
   * @remarks
   * The purpose of the stack. Valid values:
   * 
   * *   ResourceImport: resource management
   * *   ArchitectureReplication: resource replication
   * 
   * @example
   * ArchitectureReplication
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
      usageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratch extends $dara.Model {
  /**
   * @remarks
   * The time at which the resource scenario was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-22T01:49:22
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the resource scenario.
   * 
   * @example
   * The description of the resource scenario.
   */
  description?: string;
  /**
   * @remarks
   * The status code of the resource scenario that fails to be created.
   * 
   * > This parameter is returned only if you set Status to GENERATE_FAILED.
   * 
   * @example
   * InvalidZoneId
   */
  failedCode?: string;
  /**
   * @remarks
   * The policy based on which the logical ID is generated. Valid values:
   * 
   * *   LongTypePrefixAndIndexSuffix (default): long-type prefix + index-type suffix
   * *   LongTypePrefixAndHashSuffix: long-type prefix + hash-type suffix
   * *   ShortTypePrefixAndHashSuffix: short-type prefix + hash-type suffix
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * The preference parameters of the resource scenario.
   */
  preferenceParameters?: GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzmhzoaad5oq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source resource group.
   */
  sourceResourceGroup?: GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup;
  /**
   * @remarks
   * The source resources.
   */
  sourceResources?: GetTemplateScratchResponseBodyTemplateScratchSourceResources[];
  /**
   * @remarks
   * The source tag.
   */
  sourceTag?: GetTemplateScratchResponseBodyTemplateScratchSourceTag;
  /**
   * @remarks
   * The preset information of the stack.
   */
  stackProvision?: GetTemplateScratchResponseBodyTemplateScratchStackProvision;
  /**
   * @remarks
   * The stacks that are associated with the resource scenario.
   */
  stacks?: GetTemplateScratchResponseBodyTemplateScratchStacks[];
  /**
   * @remarks
   * The state of the resource scenario. Valid values:
   * 
   * *   GENERATE_IN_PROGRESS: The resource scenario is being created.
   * *   GENERATE_COMPLETE: The resource scenario is created.
   * *   GENERATE_FAILED: The resource scenario fails to be created.
   * 
   * @example
   * GENERATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource scenario fails to be created.
   * 
   * > This parameter is returned only if you set Status to GENERATE_FAILED.
   * 
   * @example
   * Resource ALIYUN::ECS::VPC vpc-m5eauuq80anx59v28**** could not be found for template scratch.
   */
  statusReason?: string;
  /**
   * @remarks
   * The resource scenario data.
   */
  templateScratchData?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * *   ResourceImport: resource management
   * *   ArchitectureReplication: resource replication
   * 
   * @example
   * ArchitectureReplication
   */
  templateScratchType?: string;
  /**
   * @remarks
   * The time at which the resource scenario was updated.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-22T01:49:23
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
      stackProvision: 'StackProvision',
      stacks: 'Stacks',
      status: 'Status',
      statusReason: 'StatusReason',
      templateScratchData: 'TemplateScratchData',
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
      preferenceParameters: { 'type': 'array', 'itemType': GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters },
      resourceGroupId: 'string',
      sourceResourceGroup: GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': GetTemplateScratchResponseBodyTemplateScratchSourceResources },
      sourceTag: GetTemplateScratchResponseBodyTemplateScratchSourceTag,
      stackProvision: GetTemplateScratchResponseBodyTemplateScratchStackProvision,
      stacks: { 'type': 'array', 'itemType': GetTemplateScratchResponseBodyTemplateScratchStacks },
      status: 'string',
      statusReason: 'string',
      templateScratchData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
    if(this.stackProvision && typeof (this.stackProvision as any).validate === 'function') {
      (this.stackProvision as any).validate();
    }
    if(Array.isArray(this.stacks)) {
      $dara.Model.validateArray(this.stacks);
    }
    if(this.templateScratchData) {
      $dara.Model.validateMap(this.templateScratchData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A8E0EF98-6FBD-5656-8298-FC8194F0F7B7
   */
  requestId?: string;
  /**
   * @remarks
   * The resource scenario.
   */
  templateScratch?: GetTemplateScratchResponseBodyTemplateScratch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateScratch: 'TemplateScratch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateScratch: GetTemplateScratchResponseBodyTemplateScratch,
    };
  }

  validate() {
    if(this.templateScratch && typeof (this.templateScratch as any).validate === 'function') {
      (this.templateScratch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

