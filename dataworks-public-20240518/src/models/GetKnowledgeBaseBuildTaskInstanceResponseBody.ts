// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBaseBuildTaskInstanceResponseBodyDataConfigSnapshotRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The Builder compute specifications. Valid values: 4 to 16. If this field is omitted during creation, the valid value is 4. The read operation returns the valid value.
   * 
   * @example
   * 4
   */
  cu?: number;
  /**
   * @remarks
   * The DataWorks resource group ID used by the actual Builder nodes. The server verifies that this resource group is available in the workspace corresponding to the top-level ProjectId of the task.
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

export class GetKnowledgeBaseBuildTaskInstanceResponseBodyDataConfigSnapshot extends $dara.Model {
  /**
   * @remarks
   * The content language used for the current run.
   * 
   * @example
   * zh-CN
   */
  contentLocale?: string;
  /**
   * @remarks
   * The specific model ID actually used and frozen for the current run. The value AUTO is not returned. This field can be empty for tasks that do not call models, such as pure synchronization tasks.
   * 
   * @example
   * model-001
   */
  llmModel?: string;
  /**
   * @remarks
   * The DataWorks workspace ID used for the current run. This ID is frozen from the task definition when the instance is created.
   * 
   * @example
   * 67890
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group and Builder compute units (CUs) actually used for the current run.
   */
  runtimeResource?: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataConfigSnapshotRuntimeResource;
  static names(): { [key: string]: string } {
    return {
      contentLocale: 'ContentLocale',
      llmModel: 'LlmModel',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentLocale: 'string',
      llmModel: 'string',
      projectId: 'number',
      runtimeResource: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataConfigSnapshotRuntimeResource,
    };
  }

  validate() {
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseBuildTaskInstanceResponseBodyDataError extends $dara.Model {
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
   * The secure error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseBuildTaskInstanceResponseBodyDataGeneratedModels extends $dara.Model {
  /**
   * @remarks
   * The stable model ID in the semantic layer, which can be used as a KnowledgeObjectId.
   * 
   * @example
   * 01MODELULID
   */
  modelId?: string;
  /**
   * @remarks
   * The materialization version for the current run. The same version can be edited later and does not represent an immutable file snapshot.
   * 
   * @example
   * 1
   */
  versionNo?: number;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      versionNo: 'VersionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      versionNo: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshotResolvedEntities extends $dara.Model {
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
   * The entity level, such as DATABASE, SCHEMA, or TABLE. The server validates this field based on the Data Map identity. The presence of an enumeration value does not guarantee that all engines support it.
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

export class GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshotSelectedInputEntities extends $dara.Model {
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
   * The entity level, such as DATABASE, SCHEMA, or TABLE. The server validates this field based on the Data Map identity. The presence of an enumeration value does not guarantee that all engines support it.
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

export class GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshotSelectedInput extends $dara.Model {
  /**
   * @remarks
   * The Data Map entities such as databases, schemas, and tables selected for data asset-scoped builds. The values are non-empty and deduplicated.
   */
  entities?: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshotSelectedInputEntities[];
  /**
   * @remarks
   * The knowledge object IDs required when building from document objects in the current knowledge base. The values must be non-empty and deduplicated. Each item is a KnowledgeObjectId with Type=DOCUMENT in the current knowledge base. Do not mix these IDs with the SourceIds used for external connector synchronization scopes.
   */
  knowledgeObjectIds?: string[];
  /**
   * @remarks
   * The DataWorks workspace IDs selected for workspace-scoped builds. The values are non-empty and deduplicated.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The IDs of the registered sources in the current knowledge base. The values are deduplicated. Whether this field is required and the allowed source types depend on the task input scenario. Refer to the following table.
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
      entities: { 'type': 'array', 'itemType': GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshotSelectedInputEntities },
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

export class GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshot extends $dara.Model {
  /**
   * @remarks
   * The number of external document sources selected for the current run. This field is not returned when it is not applicable.
   * 
   * @example
   * 1
   */
  documentSourceCount?: number;
  /**
   * @remarks
   * The relative file paths within the knowledge base processed for the current page upload build. These paths are from the frozen upload list of the instance. OSS addresses or verification information is not returned, and the current task or file list is not re-read.
   */
  filePaths?: string[];
  /**
   * @remarks
   * The actual Data Map entities resolved from the project, database, or schema scope for the current run. This field is not returned when it is not applicable.
   */
  resolvedEntities?: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshotResolvedEntities[];
  /**
   * @remarks
   * The total number of resolved entities. An accurate count is returned even if the array is not returned due to its size.
   * 
   * @example
   * 42
   */
  resolvedEntityCount?: number;
  /**
   * @remarks
   * The snapshot of the selection conditions in the task definition when the instance is created. This snapshot does not change when the task is updated. This field is omitted for page upload builds that do not have fixed object selections.
   */
  selectedInput?: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshotSelectedInput;
  static names(): { [key: string]: string } {
    return {
      documentSourceCount: 'DocumentSourceCount',
      filePaths: 'FilePaths',
      resolvedEntities: 'ResolvedEntities',
      resolvedEntityCount: 'ResolvedEntityCount',
      selectedInput: 'SelectedInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentSourceCount: 'number',
      filePaths: { 'type': 'array', 'itemType': 'string' },
      resolvedEntities: { 'type': 'array', 'itemType': GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshotResolvedEntities },
      resolvedEntityCount: 'number',
      selectedInput: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshotSelectedInput,
    };
  }

  validate() {
    if(Array.isArray(this.filePaths)) {
      $dara.Model.validateArray(this.filePaths);
    }
    if(Array.isArray(this.resolvedEntities)) {
      $dara.Model.validateArray(this.resolvedEntities);
    }
    if(this.selectedInput && typeof (this.selectedInput as any).validate === 'function') {
      (this.selectedInput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseBuildTaskInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The snapshot of the model, content language, and runtime resources for the current run. This snapshot does not change when the task is updated.
   */
  configSnapshot?: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataConfigSnapshot;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1790200400000
   */
  createTime?: number;
  /**
   * @remarks
   * The current business stage. This field is returned when reliable records are available. For common build stages and semantic model import stages, refer to the domain model. This field does not replace the overall status.
   * 
   * @example
   * INITIALIZE
   */
  currentStage?: string;
  /**
   * @remarks
   * The error code and secure error message returned when the request fails.
   */
  error?: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataError;
  /**
   * @remarks
   * The time when the execution finished. This field is optional.
   * 
   * @example
   * 1790200060000
   */
  finishedTime?: number;
  /**
   * @remarks
   * The confirmed materialization results of the semantic model import instance. For the structures of ModelId and VersionNo, refer to the YAML import results section.
   */
  generatedModels?: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataGeneratedModels[];
  /**
   * @remarks
   * The non-sensitive input snapshot after selection and parsing for the current run. This snapshot does not change when the task is updated.
   */
  inputSnapshot?: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshot;
  /**
   * @remarks
   * The ID of the associated knowledge base, which facilitates scope validation and queries.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The time when the execution started. This field is optional.
   * 
   * @example
   * 1790200001000
   */
  startedTime?: number;
  /**
   * @remarks
   * The overall status. Valid values: PENDING, RUNNING, SUCCEEDED, FAILED, and STOPPED. The STOPPED status includes instances that are manually stopped or terminated because they are replaced by subsequent builds. The system no longer waits for these instances to succeed.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The ID of the source task.
   * 
   * @example
   * 10001
   */
  taskId?: string;
  /**
   * @remarks
   * The execution ID.
   * 
   * @example
   * 20001
   */
  taskInstanceId?: string;
  /**
   * @remarks
   * The trigger type of the current run, such as manual, periodic, or a supported event.
   * 
   * @example
   * MANUAL
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      configSnapshot: 'ConfigSnapshot',
      createTime: 'CreateTime',
      currentStage: 'CurrentStage',
      error: 'Error',
      finishedTime: 'FinishedTime',
      generatedModels: 'GeneratedModels',
      inputSnapshot: 'InputSnapshot',
      knowledgeBaseId: 'KnowledgeBaseId',
      startedTime: 'StartedTime',
      status: 'Status',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSnapshot: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataConfigSnapshot,
      createTime: 'number',
      currentStage: 'string',
      error: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataError,
      finishedTime: 'number',
      generatedModels: { 'type': 'array', 'itemType': GetKnowledgeBaseBuildTaskInstanceResponseBodyDataGeneratedModels },
      inputSnapshot: GetKnowledgeBaseBuildTaskInstanceResponseBodyDataInputSnapshot,
      knowledgeBaseId: 'string',
      startedTime: 'number',
      status: 'string',
      taskId: 'string',
      taskInstanceId: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(this.configSnapshot && typeof (this.configSnapshot as any).validate === 'function') {
      (this.configSnapshot as any).validate();
    }
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    if(Array.isArray(this.generatedModels)) {
      $dara.Model.validateArray(this.generatedModels);
    }
    if(this.inputSnapshot && typeof (this.inputSnapshot as any).validate === 'function') {
      (this.inputSnapshot as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseBuildTaskInstanceResponseBody extends $dara.Model {
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
  data?: GetKnowledgeBaseBuildTaskInstanceResponseBodyData;
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetKnowledgeBaseBuildTaskInstanceResponseBodyData,
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

