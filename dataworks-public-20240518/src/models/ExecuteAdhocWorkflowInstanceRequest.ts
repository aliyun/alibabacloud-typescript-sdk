// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteAdhocWorkflowInstanceRequestTasks } from "./ExecuteAdhocWorkflowInstanceRequestTasks";


export class ExecuteAdhocWorkflowInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp.
   * 
   * @example
   * 1710239005403
   */
  bizDate?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The name of the workflow instance.
   * 
   * This parameter is required.
   * 
   * @example
   * WorkflowInstance1
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The tasks.
   * 
   * This parameter is required.
   */
  tasks?: ExecuteAdhocWorkflowInstanceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      envType: 'EnvType',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      envType: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      tasks: { 'type': 'array', 'itemType': ExecuteAdhocWorkflowInstanceRequestTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

