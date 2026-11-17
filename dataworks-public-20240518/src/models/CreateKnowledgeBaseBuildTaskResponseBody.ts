// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseBuildTaskResponseBodyDataInputEntities extends $dara.Model {
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

export class CreateKnowledgeBaseBuildTaskResponseBodyDataInput extends $dara.Model {
  /**
   * @remarks
   * The Data Map entities such as databases, schemas, and tables selected for data asset-scoped builds. The list cannot be empty and must contain unique values.
   */
  entities?: CreateKnowledgeBaseBuildTaskResponseBodyDataInputEntities[];
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
      entities: { 'type': 'array', 'itemType': CreateKnowledgeBaseBuildTaskResponseBodyDataInputEntities },
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

export class CreateKnowledgeBaseBuildTaskResponseBodyDataRuntimeResource extends $dara.Model {
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

export class CreateKnowledgeBaseBuildTaskResponseBodyDataTrigger extends $dara.Model {
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

export class CreateKnowledgeBaseBuildTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The language of the content for this task. This parameter is optional and is explicitly selected when the task is created.
   * 
   * @example
   * zh-CN
   */
  contentLocale?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1790200000000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the task. This parameter is optional.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The input scope specified based on the task type.
   */
  input?: CreateKnowledgeBaseBuildTaskResponseBodyDataInput;
  /**
   * @remarks
   * The ID of the knowledge base to which the task belongs.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The specific model ID or AUTO for tasks that require a model. If this parameter is omitted during creation, it is equivalent to AUTO. This parameter is not configured for tasks that do not call a model.
   * 
   * @example
   * model-001
   */
  llmModel?: string;
  /**
   * @remarks
   * The time when the definition was last modified.
   * 
   * @example
   * 1790200300000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Project space knowledge building
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace where the task runs. This is different from the build asset scope specified by Input.ProjectIds.
   * 
   * @example
   * 67890
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group and Builder compute specifications for running the task.
   */
  runtimeResource?: CreateKnowledgeBaseBuildTaskResponseBodyDataRuntimeResource;
  /**
   * @remarks
   * The stable ID of the task.
   * 
   * @example
   * 10001
   */
  taskId?: string;
  /**
   * @remarks
   * The manual or periodic trigger configuration.
   */
  trigger?: CreateKnowledgeBaseBuildTaskResponseBodyDataTrigger;
  /**
   * @remarks
   * The task type. Valid values: PROJECT_SPACE_BUILD, SEMANTIC_GRAPH, DOCUMENT_GRAPH, DOCUMENT_SYNC, DOCUMENT_SYNC_AND_GRAPH, and SEMANTIC_MODEL. SEMANTIC_MODEL is used only for YAML imports.
   * 
   * @example
   * PROJECT_SPACE_BUILD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contentLocale: 'ContentLocale',
      createTime: 'CreateTime',
      description: 'Description',
      input: 'Input',
      knowledgeBaseId: 'KnowledgeBaseId',
      llmModel: 'LlmModel',
      modifyTime: 'ModifyTime',
      name: 'Name',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
      taskId: 'TaskId',
      trigger: 'Trigger',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentLocale: 'string',
      createTime: 'number',
      description: 'string',
      input: CreateKnowledgeBaseBuildTaskResponseBodyDataInput,
      knowledgeBaseId: 'string',
      llmModel: 'string',
      modifyTime: 'number',
      name: 'string',
      projectId: 'number',
      runtimeResource: CreateKnowledgeBaseBuildTaskResponseBodyDataRuntimeResource,
      taskId: 'string',
      trigger: CreateKnowledgeBaseBuildTaskResponseBodyDataTrigger,
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

export class CreateKnowledgeBaseBuildTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code, which is used to determine the error type when the request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: CreateKnowledgeBaseBuildTaskResponseBodyData;
  /**
   * @remarks
   * The secure error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateKnowledgeBaseBuildTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

