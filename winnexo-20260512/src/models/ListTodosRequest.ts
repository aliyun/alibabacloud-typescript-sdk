// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTodosRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration workspace ID. This is an optional filter. If not specified, items from all workspaces are returned.
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The keyword for fuzzy search in the title or summary.
   * 
   * @example
   * Approval
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. This parameter takes precedence over pageSize if both are specified.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Use the nextToken value returned in the previous response. This parameter takes precedence over page if both are specified.
   * 
   * @example
   * example
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. This parameter is ignored if nextToken is specified.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority filter. Valid values: HIGH, MEDIUM, and LOW.
   * 
   * @example
   * HIGH
   */
  priorities?: string[];
  /**
   * @remarks
   * The read status filter. Valid values: UNREAD and READ. The status is determined by the readAt field of the assignee.
   * 
   * @example
   * UNREAD
   */
  readStatus?: string[];
  /**
   * @remarks
   * The sorting method.
   * 
   * @example
   * DEFAULT
   */
  sortBy?: string;
  /**
   * @remarks
   * The to-do type filter. Valid values: WORKFLOW and OPEN_API.
   * 
   * @example
   * WORKFLOW
   */
  sourceTypes?: string[];
  /**
   * @remarks
   * The to-do status filter. Valid values: PENDING, COMPLETED, and CANCELLED.
   * 
   * @example
   * PENDING
   */
  statuses?: string[];
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      priorities: 'priorities',
      readStatus: 'readStatus',
      sortBy: 'sortBy',
      sourceTypes: 'sourceTypes',
      statuses: 'statuses',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      priorities: { 'type': 'array', 'itemType': 'string' },
      readStatus: { 'type': 'array', 'itemType': 'string' },
      sortBy: 'string',
      sourceTypes: { 'type': 'array', 'itemType': 'string' },
      statuses: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.priorities)) {
      $dara.Model.validateArray(this.priorities);
    }
    if(Array.isArray(this.readStatus)) {
      $dara.Model.validateArray(this.readStatus);
    }
    if(Array.isArray(this.sourceTypes)) {
      $dara.Model.validateArray(this.sourceTypes);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

