// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateScratchRequestPreferenceParameters } from "./CreateTemplateScratchRequestPreferenceParameters";
import { CreateTemplateScratchRequestSourceResourceGroup } from "./CreateTemplateScratchRequestSourceResourceGroup";
import { CreateTemplateScratchRequestSourceResources } from "./CreateTemplateScratchRequestSourceResources";
import { CreateTemplateScratchRequestSourceTag } from "./CreateTemplateScratchRequestSourceTag";
import { CreateTemplateScratchRequestTags } from "./CreateTemplateScratchRequestTags";


export class CreateTemplateScratchRequest extends $dara.Model {
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
   * The description of the resource scenario.
   * 
   * @example
   * Replicate a VPC.
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
  preferenceParameters?: CreateTemplateScratchRequestPreferenceParameters[];
  /**
   * @remarks
   * The region ID of the resource scenario.
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
   */
  sourceResourceGroup?: CreateTemplateScratchRequestSourceResourceGroup;
  /**
   * @remarks
   * The source resources.
   * 
   * When you set TemplateScratchType to ArchitectureDetection, you can specify SourceResources to detect the architecture data of all resources associated with the specified source resources. For example, if you set SourceResources to the ID of a Classic Load Balancer (CLB) instance, the architecture data of all resources, such as the Elastic Compute Service (ECS) instance, vSwitch, and VPC, associated with the CLB instance is detected.
   * 
   * If you set TemplateScratchType to ArchitectureDetection, you can specify up to 20 source resources. In other cases, you can specify up to 200 source resources.
   */
  sourceResources?: CreateTemplateScratchRequestSourceResources[];
  /**
   * @remarks
   * The source tag.
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
   * *   ArchitectureReplication: resource replication
   * *   ArchitectureDetection: resource detection
   * *   ResourceImport: resource management
   * *   ResourceMigration: resource migration
   * 
   * >  The valid values of the ParameterKey and ParameterValue request parameters vary based on the value of TemplateScratchType. For more information, see the "**Additional information about request parameters**" section of this topic.
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

