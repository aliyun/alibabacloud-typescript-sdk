// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters extends $dara.Model {
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

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup extends $dara.Model {
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
   * The resource type.
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
   * The source tags.
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
   * The time when the resource scenario was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
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
   * The description of the scenario.
   */
  description?: string;
  /**
   * @remarks
   * The status code of the resource scenario that failed to be generated.
   * 
   * >  This parameter is returned only if the value of Status is GENERATE_FAILED.
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
  preferenceParameters?: ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters[];
  /**
   * @remarks
   * The ID of the resource group.
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
   * The state of the resource scenario.
   * 
   * @example
   * GENERATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource scenario failed to be generated.
   * 
   * >  This parameter is returned only if the value of Status is GENERATE_FAILED.
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
   * *   ResourceImport: resource management
   * *   ArchitectureReplication: resource replication
   * 
   * @example
   * ResourceImport
   */
  templateScratchType?: string;
  /**
   * @remarks
   * The time when the resource scenario was updated.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
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
   * The total number of scenarios.
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

