// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript } from "./ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript";


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

