// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business date. This is typically 00:00:00 of the day before the scheduled time of the periodic instance. The value is a millisecond-level timestamp, such as 1743350400000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710239005403
   */
  bizDate?: number;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: production
   * - Dev: development
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The filter. The value is in JSON format. Multiple filter conditions have an AND relationship. Currently supported fields: `status, executionDate`.
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
   * The list of workflow instance IDs. You can use this parameter to query information about multiple workflow instances in a batch.
   */
  idsShrink?: string;
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
   * The page number. Pages start from 1. Default value: 1.
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
   * The list of sort fields. Sorting by scheduled time, start time, and other fields is supported. The format is "sort field + sort order (Desc/Asc)". Asc is the default if omitted. Valid values for the sort field:
   * - TriggerTime (Desc/Asc)
   * - StartedTime (Desc/Asc)
   * - FinishedTime (Desc/Asc)
   * - CreateTime (Desc/Asc)
   * - Id (Desc/Asc)
   * 
   * Default value: Id Desc.
   * 
   * @example
   * Id Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of tags. Results are returned if any one of the specified tags matches.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The type of the workflow instance. Valid values:
   * - Normal: periodic scheduling
   * - Manual: manual task
   * - SmokeTest: test
   * - SupplementData: data backfill
   * - ManualWorkflow: manual workflow
   * - TriggerWorkflow: trigger-based workflow
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The unified workflow instance ID. All workflow instances within the same business date under a specific trigger share the same value for this field.
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
      idsShrink: 'Ids',
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tagsShrink: 'Tags',
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
      idsShrink: 'string',
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      tagsShrink: 'string',
      type: 'string',
      unifiedWorkflowInstanceId: 'number',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

