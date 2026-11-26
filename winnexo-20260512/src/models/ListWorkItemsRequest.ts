// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If specified, the operation is executed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The business status filter, which supports seven states.
   * 
   * @example
   * ["PROCESSING"]
   */
  businessStatuses?: string[];
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The work item type filter.
   * 
   * @example
   * ["WORKFLOW"]
   */
  itemTypes?: string[];
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
   * The maximum number of entries to return per page. Valid values: 1 to 100. This parameter takes precedence over pageSize if both are specified.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token, which is obtained from the nextToken value returned in the previous response. This parameter takes precedence over page if both are specified.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority filter.
   * 
   * @example
   * ["HIGH"]
   */
  priorities?: string[];
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
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      businessStatuses: 'businessStatuses',
      collaborationGroupId: 'collaborationGroupId',
      itemTypes: 'itemTypes',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      page: 'page',
      pageSize: 'pageSize',
      priorities: 'priorities',
      scope: 'scope',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      businessStatuses: { 'type': 'array', 'itemType': 'string' },
      collaborationGroupId: 'string',
      itemTypes: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      page: 'number',
      pageSize: 'number',
      priorities: { 'type': 'array', 'itemType': 'string' },
      scope: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessStatuses)) {
      $dara.Model.validateArray(this.businessStatuses);
    }
    if(Array.isArray(this.itemTypes)) {
      $dara.Model.validateArray(this.itemTypes);
    }
    if(Array.isArray(this.priorities)) {
      $dara.Model.validateArray(this.priorities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

