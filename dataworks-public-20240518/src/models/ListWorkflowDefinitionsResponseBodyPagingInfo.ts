// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions } from "./ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions";


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

