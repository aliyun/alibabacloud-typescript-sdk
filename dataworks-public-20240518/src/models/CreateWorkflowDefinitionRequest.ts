// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec field information about the workflow. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow/).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "kind": "CycleWorkflow",
   *     "version": "1.1.0",
   *     "spec": {
   *         "name": "OpenAPITestWorkflowDemo",
   *         "type": "CycleWorkflow",
   *         "workflows": [
   *             {
   *                 "script": {
   *                     "path": "XX/OpenAPITest/WorkflowTest/OpenAPITestWorkflowDemo",
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
   *                 "name": "OpenAPITestWorkflowDemo",
   *                 "inputs": {},
   *                 "outputs": {
   *                     "nodeOutputs": [
   *                         {
   *                             "data": "workflow_output",
   *                             "artifactType": "NodeOutput",
   *                             "refTableName": "OpenAPITestWorkflowDemo"
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
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

