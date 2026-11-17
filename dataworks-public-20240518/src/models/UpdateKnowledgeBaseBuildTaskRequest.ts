// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseBuildTaskRequestInputEntities extends $dara.Model {
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

export class UpdateKnowledgeBaseBuildTaskRequestInput extends $dara.Model {
  /**
   * @remarks
   * The Data Map entities such as databases, schemas, and tables selected for data asset-scoped builds. The list cannot be empty and must contain unique values.
   */
  entities?: UpdateKnowledgeBaseBuildTaskRequestInputEntities[];
  /**
   * @remarks
   * Required when building from document objects in this knowledge base. The list cannot be empty and must contain unique values. Each item is a KnowledgeObjectId with Type=DOCUMENT in this knowledge base. Do not mix this with SourceIds for external connector synchronization scopes.
   */
  knowledgeObjectIds?: string[];
  /**
   * @remarks
   * The DataWorks workspace IDs selected for workspace-scoped builds. The list cannot be empty and must contain unique values.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The IDs of registered sources in this knowledge base. The list must contain unique values. Whether this parameter is required and the allowed source types depend on the task input scenario. See the following table.
   */
  sourceIds?: string[];
  /**
   * @remarks
   * The YAML upload session ID in this knowledge base used for SEMANTIC_MODEL import tasks. This ID is bound when the task is created and cannot be mixed with other input scopes.
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
      entities: { 'type': 'array', 'itemType': UpdateKnowledgeBaseBuildTaskRequestInputEntities },
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

export class UpdateKnowledgeBaseBuildTaskRequestRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The compute specifications of the Builder. Valid values: 4 to 16. If this parameter is omitted during creation, the valid value is 4. The read operation returns the valid value.
   * 
   * @example
   * 4
   */
  cu?: number;
  /**
   * @remarks
   * The DataWorks resource group ID used by the actual Builder node. The server validates that it is available in the workspace corresponding to the top-level ProjectId of the task.
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

export class UpdateKnowledgeBaseBuildTaskRequestTrigger extends $dara.Model {
  /**
   * @remarks
   * The DataWorks scheduling cron expression. This parameter is provided only when Mode is set to PERIODIC.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * Specifies whether periodic automatic triggering is enabled. This parameter is provided only when Mode is set to PERIODIC. This parameter does not indicate the instance status.
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

export class UpdateKnowledgeBaseBuildTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The content language.
   * 
   * @example
   * zh-CN
   */
  contentLocale?: string;
  /**
   * @remarks
   * The new description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The input configuration that completely replaces the original input.
   */
  input?: UpdateKnowledgeBaseBuildTaskRequestInput;
  /**
   * @remarks
   * The associated knowledge base.
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
   * AUTO
   */
  llmModel?: string;
  /**
   * @remarks
   * The new task name.
   * 
   * @example
   * Sales Project Knowledge Building
   */
  name?: string;
  /**
   * @remarks
   * The workspace used for future runs.
   * 
   * @example
   * 67890
   */
  projectId?: number;
  /**
   * @remarks
   * Updates the runtime resources based on the submitted fields. If ResourceGroupId or Cu is not provided, the original value is retained.
   */
  runtimeResource?: UpdateKnowledgeBaseBuildTaskRequestRuntimeResource;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: string;
  /**
   * @remarks
   * The trigger configuration that completely replaces the original trigger.
   */
  trigger?: UpdateKnowledgeBaseBuildTaskRequestTrigger;
  static names(): { [key: string]: string } {
    return {
      contentLocale: 'ContentLocale',
      description: 'Description',
      input: 'Input',
      knowledgeBaseId: 'KnowledgeBaseId',
      llmModel: 'LlmModel',
      name: 'Name',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
      taskId: 'TaskId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentLocale: 'string',
      description: 'string',
      input: UpdateKnowledgeBaseBuildTaskRequestInput,
      knowledgeBaseId: 'string',
      llmModel: 'string',
      name: 'string',
      projectId: 'number',
      runtimeResource: UpdateKnowledgeBaseBuildTaskRequestRuntimeResource,
      taskId: 'string',
      trigger: UpdateKnowledgeBaseBuildTaskRequestTrigger,
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

