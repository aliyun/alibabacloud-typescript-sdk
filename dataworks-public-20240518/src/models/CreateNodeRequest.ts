// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The container ID. If you want to create a node in a container, you must configure this parameter to specify the container. The container can be a workflow or a node in a container.
   * 
   * >  If you configure this parameter, the path field defined in FlowSpec becomes invalid.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  containerId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The scene of the node. This parameter determines the location (the DataStudio pane or the Manual pane) of the node. You can set this parameter to DataworksManualWorkflow only if the ContainerId parameter is configured and the container specified by ContainerId is a manually triggered workflow.
   * 
   * Valid values:
   * 
   * *   DataworksProject
   * *   DataworksManualWorkflow
   * *   DataworksManualTask
   * 
   * This parameter is required.
   * 
   * @example
   * DATAWORKS_PROJECT
   */
  scene?: string;
  /**
   * @remarks
   * { "type": "object", "description": "CycleWorkflow the structure of the workflow configurations", "properties": { "version": { "type": "string", "description": "the version ID of the workflow configuration files" }, "kind": { "type": "string", "description": "the category ID of the workflow", "enum": [ "CycleWorkflow", "ManualWorkflow", "ManualNode", "TemporaryWorkflow", "PaiFlow", "BatchDeployment", "DataSource", "DataQuality", "DataService", "DataCatalog", "Table", "Node", "Component", "Resource", "Function", "Workflow" ] }, "spec": { "type": "object", "description": "the key configurations of the workflow", "properties": { "name": { "type": "string", "description": "the readable name identifier of the workflow" }, "id": { "type": "string", "description": "the UUID of the workflow" }, "type": { "type": "string", "description": "the type of the workflow instance", "enum": [ "CycleWorkflow", "ManualWorkflow" ] }, "owner": { "type": "string", "description": "the system user ID of the workflow owner" }, "description": { "type": "string", "description": "the detailed description of the features and usage of the workflow" }, "workflows": { "type": "array", "description": an array of node configurations in the workflow. The workflows can be run at the same time", "items": { "type": "object", "properties": { "script": { "type": "object", "description": "the script parameters", "properties": { "path": { "type": "string", "description": "the storage path of the script file. Example: HDFS/S3" }, "runtime": { "type": "object", "description": "the parameter settings for the runtime environment, such as the specifications of computing resources" }, "id": { "type": "string", "description": "the unique identifiers of the script parameters" } } }, "id": { "type": "string", "description": "the ID of the node in the workflow" }, "trigger": { "type": "object", "description": "the rule configurations to trigger the node“, "properties": { "type": { "type": "string", "enum": [ "Scheduler", "Manual", "Streaming", "None" ], "description": "the trigger type. Valid values: Scheduler, Manual, Streaming, and None" }, "id": { "type": "string", "description": "the trigger ID" }, "cron": { "type": "string", "description": "the scheduling rule of the node. The rule is in the cron expression format" }, "startTime": { "type": "string", "description": "the start time for scheduling. The value is in the ISO 8601 format" }, "endTime": { "type": "string", "description": "the end time for scheduling. The value is in the ISO 8601 format" }, "timezone": { "type": "string", "description": "the time zone. Example: UTC+8" }, "delaySeconds": { "type": "number", "description": "the delayed execution time. Unit: seconds" } } }, "strategy": { "type": "object", "description": "the execution policy parameters", "properties": { "timeout": { "type": "number", "description": "the timeout period. Unit: seconds" }, "instanceMode": { "type": "string", "enum": [ "T+1", "Immediately" ], "description": "the instance scheduling mode. Valid values: T+1 and Immediately" }, "rerunMode": { "type": "string", "enum": [ "Allowed", "Denied", "FailureAllowed" ], "description": "the rerun mode. Valid values: Allowed, Denied, and FailureAllowed" }, "rerunTimes": { "type": "number", "description": "the maximum number of reruns allowed after a failure" }, "rerunInterval": { "type": "number", "description": "the rerun interval. Unit: seconds" }, "failureStrategy": { "type": "string", "enum": [ "Continue", "Break" ], "description": "the failure handling policy. Valid values: Continue and Break" }, "recurrenceType": { "type": "string", "enum": [ "Normal", "Pause", "Skip", "NoneAuto" ], "description": "the running mode of the auto triggered node. Valid values: Normal, Pause, Skip, and NoneAuto" } } }, "name": { "type": "string", "description": "the readable name of the node" }, "owner": { "type": "string", "description": "the system ID of the node owner" }, "description": { "type": "string", "description": "the feature description of the node" }, "citable": { "type": "boolean", "description": "specifies whether the node can be referenced by other workflows. Valid values: true and false" }, "metadata": { "type": "object", "description": "the container that stores the metadata information", "properties": { "owner": { "type": "string", "description": "the metadata owner ID" }, "project": { "type": "object", "properties": { "projectIdentifier": { "type": "string", "description": "the unique code of the project" }, "projectName": { "type": "string", "description": "the project name" }, "projectId": { "type": "string", "Description": "the project ID" } } }, "ownerName": { "type": "string", "description": "the name of the project owner" }, "projectId": { "type": "string", "description": "the ID of the associated project" } } }, "inputs": { "type": "object", "description": "the structure of the node input", "properties": { "nodeOutputs": { "type": "array", "description": "the configuration items for node input", "items": { "type": "object", "properties": { "data": { "type": "string", "description": "the content of the node input" }, "artifactType": { "type": "string", "enum": [ "Table", "File", "NodeOutput", "Variable" ], "description": "the type of the node input. Valid values: Table, File, NodeOutput, and Variable" }, "refTableName": { "type": "string", "description": "the name of the referenced table" }, "isDefault": { "type": "boolean", "description": "specifies whether the table is the default output“ } } } }, "tables": { "type": "array", "description": "the metadata collection in the input table", "items": { "type": "object", "properties": { "artifactType": { "type": "string", "enum": [ "Table", "File", "NodeOutput", "Variable" ], "description": "the type of the table" }, "guid": { "type": "string", "description": "the GUID of the table" } } } } } }, "outputs": { "type": "object", "description": "the structure of the node output", "properties": { "nodeOutputs": { "type": "array", "description": "the configuration items for node output", "items": { "type": "object", "properties": { "data": { "type": "string", "description": "the content of the node output" }, "artifactType": { "type": "string", "enum": [ "Table", "File", "NodeOutput", "Variable" ], "description": "the type of the node output. Valid values: Table, File, NodeOutput, and Variable" }, "refTableName": { "type": "string", "description": "the name of the referenced table" }, "isDefault": { "type": "boolean", "description": "specifies whether the table is the default output“ } } } }, "tables": { "type": "array", "description": "the metadata collection in the output table", "items": { "type": "object", "properties": { "artifactType": { "type": "string", "enum": [ "Table", "File", "NodeOutput", "Variable" ], "description": "the type of the table" }, "guid": { "type": "string", "description": "the GUID of the table" } } } } } }, "nodes": { "type": "array", "description": "the configuration items for descendant nodes that are used for workflow nesting", "items": { "type": "object", "properties": { "recurrence": { "type": "string", "enum": [ "Normal", "Pause", "Skip", "NoneAuto" ], "description": "the running mode of the descendant node" }, "id": { "type": "string", "description": "the descendant node ID" }, "timeout": { "type": "number", "description": "the timeout period of the descendant node. Unit: seconds" }, "instanceMode": { "type": "string", "enum": [ "T+1", "Immediately" ], "description": "the instance scheduling mode of the descendant node. Valid values: T+1 and Immediately" }, "rerunMode": { "type": "string", "enum": [ "Allowed", "Denied", "FailureAllowed" ], "description": "the rerun mode of the descendant node" }, "rerunTimes": { "type": "number", "description": "the maximum number of reruns allowed after a failure for the descendant node" }, "rerunInterval": { "type": "number", "description": "the rerun interval" }, "datasource": { "type": "object", "description": "the parameters of the associated data source", "properties": { "name": { "type": "string", "description": "the name of the data source" }, "type": { "type": "string", "description": "the type of the data source. Examples: MySQL and Oracle" } } }, "script": { "type": "object", "description": "the script configurations of the node", "properties": { "language": { "type": "string", "enum": [ "python2", "python3", "java8", "java11", "java17" ], "description": "the programming language of the script" }, "path": { "type": "string", "description": "the storage path of the code" }, "runtime": { "type": "object", "description": "the configurations of the runtime environment" }, "content": { "type": "string", "description": "the content of the inline script" }, "id": { "type": "string", "description": "the identifier of the script content" }, "parameters": { "type": "array", "description": "the parameters for initialization", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "the identifier of the parameter name" }, "artifactType": { "type": "string", "enum": [ "Table", "File", "NodeOutput", "Variable" ], "description": "the identifier of the data type" }, "scope": { "type": "string", "enum": [ "Tenant", "Workspace", "Workflow", "NodeParameter", "NodeContext" ], "description": "the application scope of the parameter" }, "type": { "type": "string", "enum": [ "NoKvVariableExpression", "System", "Constant", "NodeOutput", "PaiOutput", "PassThrough" ], "description": "the type of the parameter" }, "value": { "type": "string", "description": "the default value of the parameter" }, "id": { "type": "string", "description": "the parameter ID" } } } } } }, "trigger": { "type": "object", "description": "the configurations of the trigger at the node level. You can overwrite or inherit the configurations" }, "runtimeResource": { "type": "object", "description": "the configurations of computing resources, such as CPU and memory" }, "name": { "type": "string", "description": "the readable name of the descendant node" }, "owner": { "type": "string", "description": "the ID of the descendant node owner" }, "metadata": { "type": "object", "description": "the extended metadata of the descendant node" }, "inputs": { "type": "object", "description": "the parameter definitions of the node input" }, "outputs": { "type": "object", "description": "the parameter definitions of the node output" } } } }, "dependencies": { "type": "array", "description": "the node dependencies", "items": { "type": "object", "properties": { "nodeId": { "type": "string", "description": "the ID of the current node" }, "depends": { "type": "array", "description": "the ancestor node output", "items": { "type": "object", "properties": { "type": { "type": "string", "enum": [ "Normal", "CrossCycleDependsOnSelf", "CrossCycleDependsOnChildren", "CrossCycleDependsOnOtherNode" ], "description": "the dependency type. Valid values: Normal, CrossCycleDependsOnSelf, CrossCycleDependsOnChildren, and CrossCycleDependsOnOtherNode" }, "output": { "type": "string", "description": "the unique identifier of the ancestor node output" }, "refTableName": { "type": "string", "description": "the identifier of the referenced table name" } } } } } } } } } }, "metadata": { "type": "object", "description": "the high-level metadata of the workflow", "properties": { "innerVersion": { "type": "object", "description": "the mappings between the versions of components", "additionalProperties": { "type": "number" } }, "gmtModified": { "type": "number", "description": "the last modification time. The value is a UNIX timestamp" }, "projectId": { "type": "string", "description": "the ID of the associated project" }, "uuid": { "type": "string", "description": "the GUID of the instance" } } } } } }, "required": [ "version", "kind", "spec" ] }
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "version": "1.1.0",
   *   "kind": "Node",
   *   "spec": {
   *     "nodes": [
   *       {
   *         "id": "860438872620113XXXX",
   *         "recurrence": "Normal",
   *         "timeout": 0,
   *         "instanceMode": "T+1",
   *         "rerunMode": "Allowed",
   *         "rerunTimes": 3,
   *         "rerunInterval": 180000,
   *         "datasource": {
   *           "name": "ODPS_test",
   *           "type": "ODPS"
   *         },
   *         "script": {
   *           "path": "XX/OpenAPI test/odpsSQL test",
   *           "runtime": {
   *             "command": "ODPS_SQL"
   *           },
   *           "content": "select now();"
   *         },
   *         "trigger": {
   *           "type": "Scheduler",
   *           "cron": "00 00 00 * * ?",
   *           "startTime": "1970-01-01 00:00:00",
   *           "endTime": "9999-01-01 00:00:00",
   *           "timezone": "Asia/Shanghai",
   *           "delaySeconds": 0
   *         },
   *         "runtimeResource": {
   *           "resourceGroup": "S_res_group_XXXX_XXXX"
   *         },
   *         "name": "odpsSQL test",
   *         "inputs": {
   *           "nodeOutputs": [
   *             {
   *               "data": "lwttest_standard_root",
   *               "artifactType": "NodeOutput"
   *             }
   *           ]
   *         },
   *         "outputs": {
   *           "nodeOutputs": [
   *             {
   *               "data": "output_data",
   *               "artifactType": "NodeOutput",
   *               "refTableName": "odpsSQL test"
   *             }
   *           ]
   *         }
   *       }
   *     ],
   *     "flow": [
   *       {
   *         "nodeId": "860438872620113XXXX",
   *         "depends": [
   *           {
   *             "type": "Normal",
   *             "output": "project_root"
   *           }
   *         ]
   *       }
   *     ]
   *   }
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      projectId: 'ProjectId',
      scene: 'Scene',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'number',
      projectId: 'number',
      scene: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

