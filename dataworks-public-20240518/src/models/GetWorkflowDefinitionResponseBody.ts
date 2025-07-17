// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowDefinitionResponseBodyWorkflowDefinition extends $dara.Model {
  /**
   * @remarks
   * The time when the workflow was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1708481905000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: number;
  /**
   * @remarks
   * The time when the workflow was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1708481905000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * OpenAPI test workflow Demo
   */
  name?: string;
  /**
   * @remarks
   * The owner of the workflow.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the workflow belongs.
   * 
   * @example
   * 307XXX
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec field information about the workflow. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow/).
   * 
   * @example
   * {
   *     "metadata": {
   *         "tenantId": "52425742456XXXX",
   *         "projectId": "307XXXX",
   *         "uuid": "463497880880954XXXX"
   *     },
   *     "kind": "CycleWorkflow",
   *     "version": "1.1.0",
   *     "spec": {
   *         "name": "OpenAPI_Test_Workflow_Demo",
   *         "id": "463497880880954XXXX",
   *         "type": "CycleWorkflow",
   *         "owner": "110755000425XXXX",
   *         "workflows": [
   *             {
   *                 "script": {
   *                     "path": "XX/OpenAPI_Test/Workflow_Test/OpenAPI_Test_Workflow_Demo",
   *                     "runtime": {
   *                         "command": "WORKFLOW"
   *                     },
   *                     "id": "698002781368644XXXX"
   *                 },
   *                 "id": "463497880880954XXXX",
   *                 "trigger": {
   *                     "type": "Scheduler",
   *                     "id": "652567824470354XXXX",
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
   *                 "name": "OpenAPI_Test_Workflow_Demo",
   *                 "owner": "110755000425XXXX",
   *                 "metadata": {
   *                     "owner": "110755000425XXXX",
   *                     "ownerName": "XXXX@test.XXXX.com",
   *                     "tenantId": "52425742456XXXX",
   *                     "project": {
   *                         "mode": "STANDARD",
   *                         "projectId": "307303",
   *                         "projectIdentifier": "lwttest_standard",
   *                         "projectName": "XXXX",
   *                         "projectOwnerId": "110755000425XXXX",
   *                         "simple": false,
   *                         "tenantId": "52425742456XXXX"
   *                     },
   *                     "projectId": "307XXXX"
   *                 },
   *                 "inputs": {},
   *                 "outputs": {
   *                     "nodeOutputs": [
   *                         {
   *                             "data": "463497880880954XXXX",
   *                             "artifactType": "NodeOutput",
   *                             "refTableName": "OpenAPI_Test_Workflow_Demo",
   *                             "isDefault": true
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
  /**
   * @remarks
   * The ID of the workflow on the scheduling side after publishing.
   * 
   * @example
   * 700006657495
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'number',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      spec: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2BDD628-8A21-5BD1-B930-1A2D5989XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the workflow.
   */
  workflowDefinition?: GetWorkflowDefinitionResponseBodyWorkflowDefinition;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowDefinition: 'WorkflowDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowDefinition: GetWorkflowDefinitionResponseBodyWorkflowDefinition,
    };
  }

  validate() {
    if(this.workflowDefinition && typeof (this.workflowDefinition as any).validate === 'function') {
      (this.workflowDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

