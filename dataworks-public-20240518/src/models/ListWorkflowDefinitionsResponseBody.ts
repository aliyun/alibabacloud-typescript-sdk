// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime extends $dara.Model {
  /**
   * @remarks
   * The command.
   * 
   * @example
   * WORKFLOW
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript extends $dara.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 698002781368644XXXX
   */
  id?: number;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * XX/OpenAPI_test/workflow_test/OpenAPI_test_workflow_Demo
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      path: 'string',
      runtime: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime,
    };
  }

  validate() {
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions extends $dara.Model {
  /**
   * @remarks
   * The time when the workflow was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1698057323000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * Workflow description
   */
  description?: string;
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
   * 1698057323000
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
   * The owner.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the workflow belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 4710
   */
  projectId?: number;
  /**
   * @remarks
   * The script information.
   */
  script?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript;
  /**
   * @remarks
   * The type of the workflow.
   * 
   * Valid values:
   * 
   * *   CycleWorkflow
   * *   ManualWorkflow
   * 
   * @example
   * CycleWorkflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      script: 'Script',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      script: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript,
      type: 'string',
    };
  }

  validate() {
    if(this.script && typeof (this.script as any).validate === 'function') {
      (this.script as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 227
   */
  totalCount?: number;
  /**
   * @remarks
   * The workflows.
   */
  workflowDefinitions?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      workflowDefinitions: 'WorkflowDefinitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      workflowDefinitions: { 'type': 'array', 'itemType': ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions },
    };
  }

  validate() {
    if(Array.isArray(this.workflowDefinitions)) {
      $dara.Model.validateArray(this.workflowDefinitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListWorkflowDefinitionsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C3ED0C5-ABAB-55E1-854B-DAC02B11XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListWorkflowDefinitionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

