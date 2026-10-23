// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The business statuses used for filtering.
   * 
   * @example
   * example
   */
  businessStatuses?: string[];
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
   * The work item types used for filtering.
   * 
   * @example
   * example
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
   * The pagination token. Obtain the token from the nextToken parameter in the previous response. This parameter takes precedence over page if both are specified.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priorities used for filtering.
   * 
   * @example
   * example
   */
  priorities?: string[];
  /**
   * @remarks
   * The personal scope used for filtering.
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
      businessStatuses: 'businessStatuses',
      collaborationGroupId: 'collaborationGroupId',
      itemTypes: 'itemTypes',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      priorities: 'priorities',
      scope: 'scope',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatuses: { 'type': 'array', 'itemType': 'string' },
      collaborationGroupId: 'string',
      itemTypes: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

