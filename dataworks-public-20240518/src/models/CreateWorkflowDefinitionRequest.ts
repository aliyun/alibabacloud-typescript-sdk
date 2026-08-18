// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace settings page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec information that describes the workflow. For more information about the specification, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow).
   * 
   * > How to quickly obtain a FlowSpec template?
   * > - Open a workflow in DataStudio, and then click "Show Spec" in the upper-right corner to obtain the FlowSpec description of the current workflow. You can use this FlowSpec description to quickly build a template that meets your requirements.
   * 
   * >Notice: This operation only supports creating a workflow. Internal nodes described in FlowSpec are not created.
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
   *                 "outputs": {
   *                     "nodeOutputs": [
   *                         {
   *                             "data": "workflow_output",
   *                             "artifactType": "NodeOutput",
   *                             "refTableName": "OpenAPITestWorkflowDemo"
   *                         }
   *                     ]
   *                 },
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

