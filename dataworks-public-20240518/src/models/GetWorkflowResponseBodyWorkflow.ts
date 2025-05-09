// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkflowResponseBodyWorkflowDependencies } from "./GetWorkflowResponseBodyWorkflowDependencies";
import { GetWorkflowResponseBodyWorkflowOutputs } from "./GetWorkflowResponseBodyWorkflowOutputs";
import { GetWorkflowResponseBodyWorkflowTags } from "./GetWorkflowResponseBodyWorkflowTags";
import { GetWorkflowResponseBodyWorkflowTasks } from "./GetWorkflowResponseBodyWorkflowTasks";
import { GetWorkflowResponseBodyWorkflowTrigger } from "./GetWorkflowResponseBodyWorkflowTrigger";


export class GetWorkflowResponseBodyWorkflow extends $dara.Model {
  /**
   * @remarks
   * The unique code of the client. This parameter is used to create a workflow asynchronously and implement the idempotence of the workflow. If you do not specify this parameter when you create the workflow, the system automatically generates a unique code. The unique code is uniquely associated with the workflow ID. If you specify this parameter when you update or delete the workflow, the value of this parameter must be the unique code that is used to create the workflow.
   * 
   * @example
   * Workflow_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the creator.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The dependency information.
   */
  dependencies?: GetWorkflowResponseBodyWorkflowDependencies[];
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * Test workflow
   */
  description?: string;
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
   * The workflow ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the modifier.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * Workflow
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputs?: GetWorkflowResponseBodyWorkflowOutputs;
  /**
   * @remarks
   * The account ID of the workflow owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * para1=$bizdate para2=$[yyyymmdd]
   */
  parameters?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetWorkflowResponseBodyWorkflowTags[];
  /**
   * @remarks
   * The tasks.
   */
  tasks?: GetWorkflowResponseBodyWorkflowTasks[];
  /**
   * @remarks
   * The trigger method.
   */
  trigger?: GetWorkflowResponseBodyWorkflowTrigger;
  static names(): { [key: string]: string } {
    return {
      clientUniqueCode: 'ClientUniqueCode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dependencies: 'Dependencies',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      tags: 'Tags',
      tasks: 'Tasks',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUniqueCode: 'string',
      createTime: 'number',
      createUser: 'string',
      dependencies: { 'type': 'array', 'itemType': GetWorkflowResponseBodyWorkflowDependencies },
      description: 'string',
      envType: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      outputs: GetWorkflowResponseBodyWorkflowOutputs,
      owner: 'string',
      parameters: 'string',
      projectId: 'number',
      tags: { 'type': 'array', 'itemType': GetWorkflowResponseBodyWorkflowTags },
      tasks: { 'type': 'array', 'itemType': GetWorkflowResponseBodyWorkflowTasks },
      trigger: GetWorkflowResponseBodyWorkflowTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    if(this.outputs && typeof (this.outputs as any).validate === 'function') {
      (this.outputs as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

