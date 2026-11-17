// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseBuildTaskRequestInputEntities extends $dara.Model {
  /**
   * @remarks
   * The metadata entity ID returned by Data Map. The client must pass this value as is and must not concatenate database, schema, or table identifiers.
   * 
   * @example
   * maxcompute-table:::project_name:schema_name:table_name
   */
  entityId?: string;
  /**
   * @remarks
   * The entity level, such as DATABASE, SCHEMA, or TABLE. The server validates this value based on the Data Map identity. The presence of an enum value does not guarantee that all engines support it.
   * 
   * @example
   * TABLE
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseBuildTaskRequestInput extends $dara.Model {
  /**
   * @remarks
   * The Data Map entities such as databases, schemas, and tables selected for data asset-scoped builds. The list cannot be empty and must contain unique values.
   */
  entities?: CreateKnowledgeBaseBuildTaskRequestInputEntities[];
  /**
   * @remarks
   * Required when building from document objects in the current knowledge base. The list cannot be empty and must contain unique values. Each item is the KnowledgeObjectId of a DOCUMENT type object in the current knowledge base. This parameter cannot be mixed with SourceIds for external connector synchronization scopes.
   */
  knowledgeObjectIds?: string[];
  /**
   * @remarks
   * The IDs of the DataWorks workspaces selected for workspace-scoped builds. The list cannot be empty and must contain unique values.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The IDs of the registered sources in the current knowledge base. The list must contain unique values. Whether this parameter is required and the allowed source types depend on the task input scenario. For more information, see the following table.
   */
  sourceIds?: string[];
  /**
   * @remarks
   * The YAML upload session ID in the current knowledge base used for SEMANTIC_MODEL import tasks. This ID is bound when the task is created and cannot be mixed with other input scopes.
   * 
   * @example
   * upload-yaml-001
   */
  yamlUploadId?: string;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      knowledgeObjectIds: 'KnowledgeObjectIds',
      projectIds: 'ProjectIds',
      sourceIds: 'SourceIds',
      yamlUploadId: 'YamlUploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': CreateKnowledgeBaseBuildTaskRequestInputEntities },
      knowledgeObjectIds: { 'type': 'array', 'itemType': 'string' },
      projectIds: { 'type': 'array', 'itemType': 'number' },
      sourceIds: { 'type': 'array', 'itemType': 'string' },
      yamlUploadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    if(Array.isArray(this.knowledgeObjectIds)) {
      $dara.Model.validateArray(this.knowledgeObjectIds);
    }
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.sourceIds)) {
      $dara.Model.validateArray(this.sourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseBuildTaskRequestRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The Builder compute specifications. Valid values: 4 to 16. If this parameter is omitted during creation, the default value is 4. The actual valid value is returned in read operations.
   * 
   * @example
   * 4
   */
  cu?: number;
  /**
   * @remarks
   * The ID of the DataWorks resource group used by the actual Builder nodes. The server validates that the resource group is available in the workspace corresponding to the top-level ProjectId of the task.
   * 
   * @example
   * rg-001
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseBuildTaskRequestTrigger extends $dara.Model {
  /**
   * @remarks
   * The DataWorks scheduling cron expression. This parameter is provided only when the mode is set to PERIODIC.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable automatic periodic triggering. This parameter is provided only when the mode is set to PERIODIC and does not indicate the instance status.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The trigger mode. Valid values: MANUAL and PERIODIC. Manual tasks do not create instances automatically.
   * 
   * @example
   * MANUAL
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      enabled: 'Enabled',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      enabled: 'boolean',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseBuildTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token for the creation request.
   * 
   * @example
   * task-create-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the content.
   * 
   * @example
   * zh-CN
   */
  contentLocale?: string;
  /**
   * @remarks
   * The description of the task. The description can be up to 1,024 characters in length. If this parameter is omitted, no description is set.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * Specifies the input scope by selecting projects, entities, sources, or files based on the type.
   * 
   * This parameter is required.
   */
  input?: CreateKnowledgeBaseBuildTaskRequestInput;
  /**
   * @remarks
   * The ID of the knowledge base to which the task belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The specific model ID or AUTO.
   * 
   * @example
   * model-001
   */
  llmModel?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * Project space knowledge building
   */
  name?: string;
  /**
   * @remarks
   * The ID of the workspace where the task runs.
   * 
   * This parameter is required.
   * 
   * @example
   * 67890
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group and Builder compute units (CUs).
   * 
   * This parameter is required.
   */
  runtimeResource?: CreateKnowledgeBaseBuildTaskRequestRuntimeResource;
  /**
   * @remarks
   * The manual or periodic trigger configuration.
   */
  trigger?: CreateKnowledgeBaseBuildTaskRequestTrigger;
  /**
   * @remarks
   * The available build types.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_SPACE_BUILD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contentLocale: 'ContentLocale',
      description: 'Description',
      input: 'Input',
      knowledgeBaseId: 'KnowledgeBaseId',
      llmModel: 'LlmModel',
      name: 'Name',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
      trigger: 'Trigger',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contentLocale: 'string',
      description: 'string',
      input: CreateKnowledgeBaseBuildTaskRequestInput,
      knowledgeBaseId: 'string',
      llmModel: 'string',
      name: 'string',
      projectId: 'number',
      runtimeResource: CreateKnowledgeBaseBuildTaskRequestRuntimeResource,
      trigger: CreateKnowledgeBaseBuildTaskRequestTrigger,
      type: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

