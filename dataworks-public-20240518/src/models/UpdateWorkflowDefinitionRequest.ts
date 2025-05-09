// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec field information about the workflow. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "kind": "CycleWorkflow",
   *     "version": "1.1.0",
   *     "spec": {
   *         "name": "OpenAPI Test Workflow Demo",
   *         "type": "CycleWorkflow",
   *         "id": "652567824470354XXXX",
   *         "workflows": [
   *             {
   *                 "id": "652567824470354XXXX",
   *                 "script": {
   *                     "path": "XX/OpenAPI_Test/Workflow_Test/OpenAPI_Test_Workflow_Demo",
   *                     "runtime": {
   *                         "command": "WORKFLOW"
   *                     }
   *                 },
   *                 "trigger": {
   *                     "type": "Scheduler",
   *                     "cron": "00 02 00 * * ?",
   *                     "startTime": "1970-01-01 00:00:00",
   *                     "endTime": "9999-01-01 00:00:00",
   *                     "timezone": "Asia/Shanghai",
   *                     "delaySeconds": 0
   *                 },
   *                 "strategy": {
   *                     "timeout": 0,
   *                     "instanceMode": "T+1",
   *                     "rerunMode": "Allowed",
   *                     "rerunTimes": 3,
   *                     "rerunInterval": 180000,
   *                     "failureStrategy": "Break"
   *                 },
   *                 "name": "OpenAPI Test Workflow Demo",
   *                 "inputs": {},
   *                 "outputs": {
   *                     "nodeOutputs": [
   *                         {
   *                             "data": "workflow_output",
   *                             "artifactType": "NodeOutput",
   *                             "refTableName": "OpenAPI_Test_Workflow_Demo"
   *                         }
   *                     ]
   *                 },
   *                 "nodes": [],
   *                 "dependencies": []
   *             }
   *         ]
   *     }
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectId: 'number',
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

