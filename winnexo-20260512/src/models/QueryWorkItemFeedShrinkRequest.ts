// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkItemFeedShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business status filter (seven states).
   * 
   * @example
   * example
   */
  businessStatusesShrink?: string;
  /**
   * @remarks
   * The ID of the collaboration workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The pagination cursor. Use the nextCursor value from the previous response.
   * 
   * @example
   * example
   */
  cursor?: string;
  /**
   * @remarks
   * The work item type filter.
   * 
   * @example
   * example
   */
  itemTypesShrink?: string;
  /**
   * @remarks
   * The keyword for fuzzy search in the title or description.
   * 
   * @example
   * example
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority filter.
   * 
   * @example
   * example
   */
  prioritiesShrink?: string;
  /**
   * @remarks
   * The personal scope filter.
   * 
   * @example
   * ASSIGNED_TO_ME
   */
  scope?: string;
  /**
   * @remarks
   * The ID of the source task. If specified, the flat sub-items of the task are returned.
   * 
   * @example
   * example
   */
  sourceTaskId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The view type. Valid values: FLAT (flat view) and TREE (task grouping).
   * 
   * @example
   * FLAT
   */
  view?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatusesShrink: 'businessStatuses',
      collaborationGroupId: 'collaborationGroupId',
      cursor: 'cursor',
      itemTypesShrink: 'itemTypes',
      keyword: 'keyword',
      pageSize: 'pageSize',
      prioritiesShrink: 'priorities',
      scope: 'scope',
      sourceTaskId: 'sourceTaskId',
      tenantId: 'tenantId',
      view: 'view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatusesShrink: 'string',
      collaborationGroupId: 'string',
      cursor: 'string',
      itemTypesShrink: 'string',
      keyword: 'string',
      pageSize: 'number',
      prioritiesShrink: 'string',
      scope: 'string',
      sourceTaskId: 'string',
      tenantId: 'string',
      view: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

