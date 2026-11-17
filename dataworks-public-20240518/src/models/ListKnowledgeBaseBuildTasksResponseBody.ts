// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseBuildTasksResponseBodyDataTasksInputEntities extends $dara.Model {
  /**
   * @remarks
   * The metadata entity ID returned by Data Map. The client passes this ID as is and does not concatenate database, schema, or table identifiers.
   * 
   * @example
   * maxcompute-table:::project_name:schema_name:table_name
   */
  entityId?: string;
  /**
   * @remarks
   * The entity level, such as DATABASE, SCHEMA, or TABLE. The server verifies this against Data Map identities. The presence of an enum value does not guarantee that all engines support it.
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

export class ListKnowledgeBaseBuildTasksResponseBodyDataTasksInput extends $dara.Model {
  /**
   * @remarks
   * The Data Map entities such as databases, schemas, and tables selected for data asset-scoped builds. The values must be non-empty and deduplicated.
   */
  entities?: ListKnowledgeBaseBuildTasksResponseBodyDataTasksInputEntities[];
  /**
   * @remarks
   * The IDs of the knowledge objects. This field is required, non-empty, and deduplicated when building from document objects in the knowledge base. Each item is a KnowledgeObjectId with Type=DOCUMENT in the knowledge base. Do not mix this field with SourceIds for external connector synchronization scopes.
   */
  knowledgeObjectIds?: string[];
  /**
   * @remarks
   * The IDs of the DataWorks workspaces selected for workspace-scoped builds. The values must be non-empty and deduplicated.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The IDs of the registered sources in the knowledge base. The values are deduplicated. Whether this field is required and the allowed source types depend on the task input scenario. For more information, see the following table.
   */
  sourceIds?: string[];
  /**
   * @remarks
   * The YAML upload session ID in the knowledge base used for SEMANTIC_MODEL import tasks. This ID is bound when the task is created and cannot be mixed with other input scopes.
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
      entities: { 'type': 'array', 'itemType': ListKnowledgeBaseBuildTasksResponseBodyDataTasksInputEntities },
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

export class ListKnowledgeBaseBuildTasksResponseBodyDataTasksRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The Builder compute specifications. Valid values: 4 to 16. If this parameter is omitted during creation, the default value 4 is used. The actual value is returned when reading.
   * 
   * @example
   * 4
   */
  cu?: number;
  /**
   * @remarks
   * The ID of the DataWorks resource group used by the actual Builder nodes. The server verifies that the resource group is available in the workspace corresponding to the top-level ProjectId of the task.
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

export class ListKnowledgeBaseBuildTasksResponseBodyDataTasksTrigger extends $dara.Model {
  /**
   * @remarks
   * The DataWorks scheduling cron expression. This field is provided only when the trigger mode is PERIODIC.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * Specifies whether periodic automatic triggering is enabled. This field is provided only when the trigger mode is PERIODIC and does not indicate the instance status.
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

export class ListKnowledgeBaseBuildTasksResponseBodyDataTasks extends $dara.Model {
  /**
   * @remarks
   * The content language of the task. This field is optional and is explicitly selected when the task is created.
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
   * 1790200400000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the task. This field is optional.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The typed input scope selected for the task. System-managed upload build tasks do not have fixed inputs, and this field is omitted when reading.
   */
  input?: ListKnowledgeBaseBuildTasksResponseBodyDataTasksInput;
  /**
   * @remarks
   * The knowledge base to which the task belongs.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The model configured for tasks that require a model. You can specify a model ID or set this parameter to AUTO. If this parameter is omitted during creation, the default value AUTO is used. Do not configure this parameter for tasks that do not call a model.
   * 
   * @example
   * AUTO
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
   * Project workspace knowledge build
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
  runtimeResource?: ListKnowledgeBaseBuildTasksResponseBodyDataTasksRuntimeResource;
  /**
   * @remarks
   * The stable task ID.
   * 
   * @example
   * 10001
   */
  taskId?: string;
  /**
   * @remarks
   * The manual or periodic trigger configuration.
   */
  trigger?: ListKnowledgeBaseBuildTasksResponseBodyDataTasksTrigger;
  /**
   * @remarks
   * The task type. Valid values: PROJECT_SPACE_BUILD, SEMANTIC_GRAPH, DOCUMENT_GRAPH, DOCUMENT_SYNC, DOCUMENT_SYNC_AND_GRAPH, and SEMANTIC_MODEL. The SEMANTIC_MODEL value is used only for YAML import.
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
      input: ListKnowledgeBaseBuildTasksResponseBodyDataTasksInput,
      knowledgeBaseId: 'string',
      llmModel: 'string',
      modifyTime: 'number',
      name: 'string',
      projectId: 'number',
      runtimeResource: ListKnowledgeBaseBuildTasksResponseBodyDataTasksRuntimeResource,
      taskId: 'string',
      trigger: ListKnowledgeBaseBuildTasksResponseBodyDataTasksTrigger,
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

export class ListKnowledgeBaseBuildTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cursor for the next page. If there is no next page, the value is null.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The knowledge objects that you have permission to read on the current page.
   */
  tasks?: ListKnowledgeBaseBuildTasksResponseBodyDataTasks[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      tasks: { 'type': 'array', 'itemType': ListKnowledgeBaseBuildTasksResponseBodyDataTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeBaseBuildTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. You can use this code to determine the error type when a request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: ListKnowledgeBaseBuildTasksResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can use this ID to troubleshoot issues.
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
      maxResults: 'MaxResults',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListKnowledgeBaseBuildTasksResponseBodyData,
      maxResults: 'number',
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

