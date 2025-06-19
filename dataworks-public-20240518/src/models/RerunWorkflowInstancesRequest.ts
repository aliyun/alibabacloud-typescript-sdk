// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RerunWorkflowInstancesRequestFilter } from "./RerunWorkflowInstancesRequestFilter";


export class RerunWorkflowInstancesRequest extends $dara.Model {
  /**
   * @example
   * 1710239005403
   */
  bizdate?: number;
  /**
   * @example
   * 1710239005403
   */
  endTriggerTime?: number;
  /**
   * @example
   * Prod
   */
  envType?: string;
  filter?: RerunWorkflowInstancesRequestFilter;
  ids?: number[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: number;
  /**
   * @example
   * 1710239005403
   */
  startTriggerTime?: number;
  /**
   * @example
   * Failure
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ManualWorkflow
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      endTriggerTime: 'EndTriggerTime',
      envType: 'EnvType',
      filter: 'Filter',
      ids: 'Ids',
      name: 'Name',
      projectId: 'ProjectId',
      startTriggerTime: 'StartTriggerTime',
      status: 'Status',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      endTriggerTime: 'number',
      envType: 'string',
      filter: RerunWorkflowInstancesRequestFilter,
      ids: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      projectId: 'number',
      startTriggerTime: 'number',
      status: 'string',
      type: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

