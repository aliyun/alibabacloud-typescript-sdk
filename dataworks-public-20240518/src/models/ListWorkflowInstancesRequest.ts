// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp. The value of this parameter is 00:00:00 of the day before the scheduling time of the instance. The value is a UNIX timestamp. Unit: milliseconds. Example: 1743350400000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710239005403
   */
  bizDate?: number;
  /**
   * @remarks
   * The IDs of the workflow instances. You can query multiple instances at a time by instance ID.
   */
  ids?: number[];
  /**
   * @remarks
   * The instance name. Fuzzy match is supported.
   * 
   * @example
   * WorkflowInstance1
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the workflow instance owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The fields used for sorting. Fields such as TriggerTime and StartedTime are supported. The value of this parameter is in the Sort field + Sort by (Desc/Asc) format. By default, results are sorted in ascending order. Valid values:
   * 
   * *   TriggerTime (Desc/Asc)
   * *   StartedTime (Desc/Asc)
   * *   FinishedTime (Desc/Asc)
   * *   CreateTime (Desc/Asc)
   * *   Id (Desc/Asc)
   * 
   * Default value: Id Desc.
   * 
   * @example
   * Id Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the workflow instance. Valid values:
   * 
   * *   Normal: Scheduled execution
   * *   Manual: Manually triggered node
   * *   SmokeTest: Smoke test
   * *   SupplementData: Data backfill
   * *   ManualWorkflow: Manually triggered workflow
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the instance belongs.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      ids: 'Ids',
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      ids: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      type: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

