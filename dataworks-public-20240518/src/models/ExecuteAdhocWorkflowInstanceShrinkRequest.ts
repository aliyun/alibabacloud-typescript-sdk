// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAdhocWorkflowInstanceShrinkRequest extends $dara.Model {
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
  tasksShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      envType: 'EnvType',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      tasksShrink: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      envType: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      tasksShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

