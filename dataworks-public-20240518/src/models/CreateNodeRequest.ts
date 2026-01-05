// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specify this parameter if you want to create the node inside a container. This parameter represents the unique identifier of the container, which can be a workflow or a container node.
   * 
   * >  If this parameter is specified, the path field defined in FlowSpec is ignored.
   * 
   * >  Prior to SDK version 8.0.0, this field is of type Long. In SDK version 8.0.0 and later, it is of type String. This change does not affect the normal use of the SDK. The parameter is returned based on the type defined in the SDK. Compilation failures caused by the type change may occur only when you upgrade the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  containerId?: string;
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
   * The scenario for node creation. This determines whether the node is created in the manual task pane or the Data Studio pane. DataworksManualWorkflow is valid only when ContainerId is specified and the container is a manual workflow.
   * 
   * Valid values:
   * 
   * *   DATAWORKS_PROJECT: Project directory
   * *   DATAWORKS_MANUAL_WORKFLOW: Manual workflow
   * *   DATAWORKS_MANUAL_TASK: Manual task
   * 
   * This parameter is required.
   * 
   * @example
   * DATAWORKS_PROJECT
   */
  scene?: string;
  /**
   * @remarks
   * The FlowSpec information that describes the node. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow).
   * 
   * >  How do I quickly obtain a FlowSpec template?
   * 
   * *   Go to Data Studio, open a node, click Version on the right side, find the latest version, and then click Scheduling Settings to obtain the FlowSpec description of the current node. You can use the FlowSpec description in the version to quickly build a template that meets your requirements.
   * 
   * >  How do I configure the node content?
   * 
   * *   Enter the code for the node in the $.spec.nodes[].script.content field.
   * 
   * >  How do I configure a batch synchronization node?
   * 
   * *   Write the script by referring to Step 4 in [Configure an offline sync task in the code editor](https://help.aliyun.com/zh/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor), and then enter the script content in the $.spec.nodes[\\*].script.content field. Alternatively, you can create a batch synchronization node in the console and view its version information to obtain the script content.
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
      containerId: 'string',
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

