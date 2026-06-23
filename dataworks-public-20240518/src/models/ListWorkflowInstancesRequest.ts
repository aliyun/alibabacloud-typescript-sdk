// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The business date. This is generally 00:00:00 of the day before the scheduled instance trigger time, in millisecond-level timestamp format, such as 1743350400000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710239005403
   */
  bizDate?: number;
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The filter. In JSON format, multiple filter conditions have an AND relationship. Currently supported fields are: `status, executionDate`.
   * 
   * @example
   * {   
   *     "status": "Success",
   *     "executionDate": "1763481600000"
   * }
   */
  filter?: string;
  /**
   * @remarks
   * The list of workflow instance IDs. You can use this parameter to query multiple workflow instances at a time.
   */
  ids?: number[];
  /**
   * @remarks
   * The name. Fuzzy match is supported.
   * 
   * @example
   * WorkflowInstance1
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
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
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The list of sort fields. Sorting by trigger time, start time, and other fields is supported. The format is "sort field + sort order (Desc/Asc)" (Asc can be omitted). Valid values of the sort field:
   * 
   * - TriggerTime (Desc/Asc)
   * 
   * - StartedTime (Desc/Asc)
   * 
   * - FinishedTime (Desc/Asc)
   * 
   * - CreateTime (Desc/Asc)
   * 
   * - Id (Desc/Asc)
   * 
   * Default value: Id Desc
   * 
   * @example
   * Id Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of tags. Results are returned if any one of the specified tags is matched.
   */
  tags?: string[];
  /**
   * @remarks
   * The type of the workflow instance.
   * 
   * - Normal: Periodic scheduling
   * 
   * - Manual: Manual task
   * 
   * - SmokeTest: Testing
   * 
   * - SupplementData: Backfill data
   * 
   * - ManualWorkflow: Manual workflow
   * 
   * - TriggerWorkflow: Trigger-based workflow
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The unified workflow instance ID. All workflow instances within the same business date of a single trigger share the same value for this field.
   * 
   * @example
   * 1234
   */
  unifiedWorkflowInstanceId?: number;
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
      envType: 'EnvType',
      filter: 'Filter',
      ids: 'Ids',
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tags: 'Tags',
      type: 'Type',
      unifiedWorkflowInstanceId: 'UnifiedWorkflowInstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      envType: 'string',
      filter: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      unifiedWorkflowInstanceId: 'number',
      workflowId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

