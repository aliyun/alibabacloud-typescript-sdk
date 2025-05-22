// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters } from "./ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters";
import { ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup } from "./ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup";
import { ListTemplateScratchesResponseBodyTemplateScratchesSourceResources } from "./ListTemplateScratchesResponseBodyTemplateScratchesSourceResources";
import { ListTemplateScratchesResponseBodyTemplateScratchesSourceTag } from "./ListTemplateScratchesResponseBodyTemplateScratchesSourceTag";
import { ListTemplateScratchesResponseBodyTemplateScratchesTags } from "./ListTemplateScratchesResponseBodyTemplateScratchesTags";


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

