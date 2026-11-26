// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTodosRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If specified, the operation is performed as the user identified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The collaboration workspace ID. This is an optional filter. If not specified, all workspaces are included.
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
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
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
   * The priority filter. Valid values: HIGH, MEDIUM, LOW.
   * 
   * @example
   * ["HIGH","MEDIUM"]
   */
  priorities?: string[];
  /**
   * @remarks
   * The read status filter. Valid values: UNREAD, READ. The status is determined by the readAt time of the assignee.
   * 
   * @example
   * ["UNREAD","READ"]
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
   * The to-do type filter. Valid values: WORKFLOW, OPEN_API.
   * 
   * @example
   * ["WORKFLOW","OPEN_API"]
   */
  sourceTypes?: string[];
  /**
   * @remarks
   * The to-do status filter. Valid values: PENDING, COMPLETED, CANCELLED.
   * 
   * @example
   * ["PENDING","COMPLETED"]
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
      appToken: 'appToken',
      collaborationGroupId: 'collaborationGroupId',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
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
      appToken: 'string',
      collaborationGroupId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
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

