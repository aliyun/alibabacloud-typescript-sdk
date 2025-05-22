// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters } from "./GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters";
import { GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup } from "./GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup";
import { GetTemplateScratchResponseBodyTemplateScratchSourceResources } from "./GetTemplateScratchResponseBodyTemplateScratchSourceResources";
import { GetTemplateScratchResponseBodyTemplateScratchSourceTag } from "./GetTemplateScratchResponseBodyTemplateScratchSourceTag";
import { GetTemplateScratchResponseBodyTemplateScratchStackProvision } from "./GetTemplateScratchResponseBodyTemplateScratchStackProvision";
import { GetTemplateScratchResponseBodyTemplateScratchStacks } from "./GetTemplateScratchResponseBodyTemplateScratchStacks";


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

