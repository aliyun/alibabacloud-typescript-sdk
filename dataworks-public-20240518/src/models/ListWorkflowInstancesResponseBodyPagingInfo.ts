// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstances } from "./ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstances";


export class ListWorkflowInstancesResponseBodyPagingInfo extends $dara.Model {
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
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The workflow instances.
   */
  workflowInstances?: ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstances[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      workflowInstances: 'WorkflowInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      workflowInstances: { 'type': 'array', 'itemType': ListWorkflowInstancesResponseBodyPagingInfoWorkflowInstances },
    };
  }

  validate() {
    if(Array.isArray(this.workflowInstances)) {
      $dara.Model.validateArray(this.workflowInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

