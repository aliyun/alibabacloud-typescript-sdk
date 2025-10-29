// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowsRequest extends $dara.Model {
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
   * The IDs of the workflows. You can query multiple workflows at a time by workflow ID.
   */
  ids?: number[];
  /**
   * @remarks
   * The name of the workflow. Fuzzy match is supported.
   * 
   * @example
   * Workflow1
   */
  name?: string;
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
   * The field used for sorting. Fields such as TriggerTime and StartedTime are supported. The value of this parameter is in the Sort field + Sort by (Desc/Asc) format. By default, results are sorted in ascending order. Valid values:
   * 
   * *   ModifyTime (Desc/Asc)
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
   * The trigger type.
   * 
   * *   Scheduler
   * *   Manual
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
      triggerType: 'string',
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

