// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowsRequest extends $dara.Model {
  /**
   * @remarks
   * The project environment.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The list of workflow IDs. You can specify multiple workflow IDs to query multiple workflows at a time.
   */
  ids?: number[];
  /**
   * @remarks
   * The name. Fuzzy match is supported.
   * 
   * @example
   * Workflow1
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
   * The sort field. You can sort by fields such as modification time and creation time. The format is \\"SortField+SortOrder(Desc/Asc)\\", where Asc can be omitted. Valid values for the sort field:
   * - ModifyTime (Desc/Asc)
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
   * The list of tags. If a workflow matches any of the specified tags, it is returned in the result.
   */
  tags?: string[];
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler
   * - Manual
   * - TriggerWorkflow
   * 
   * @example
   * Scheduler
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      ids: 'Ids',
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tags: 'Tags',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
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

