// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Configuration page to obtain the workspace ID. You can also call the ListProjects operation to query the workspace ID of the current tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec information that describes the workflow. For more information about the specifications, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow).
   * 
   * > How do I quickly obtain a FlowSpec template?
   * > - Open a workflow in DataStudio and click Show Spec in the upper-right corner to obtain the FlowSpec description for the current workflow. You can quickly build a compliant template based on this FlowSpec description.
   * 
   * >Notice: This operation only supports creating workflows. Internal nodes described in the FlowSpec are not created.</notice>
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

