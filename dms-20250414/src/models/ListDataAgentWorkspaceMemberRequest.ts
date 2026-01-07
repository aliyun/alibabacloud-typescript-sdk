// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentWorkspaceMemberRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * NesLoK****
   */
  nextToken?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
  /**
   * @example
   * gmt_create
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 20273
   */
  searchMemberId?: string;
  /**
   * @example
   * yunqi
   */
  searchRoleName?: string;
  /**
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMemberId: 'SearchMemberId',
      searchRoleName: 'SearchRoleName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMemberId: 'string',
      searchRoleName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

