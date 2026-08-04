// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentMcpRequest extends $dara.Model {
  /**
   * @remarks
   * A compatible pagination parameter. The actual number of records per page is controlled by PageSize.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A compatible pagination token. The actual page sequence is controlled by PageNumber.
   * 
   * @example
   * page-2
   */
  nextToken?: string;
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
   * The number of records per page. Valid values: 1 to 500. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to return only MCP Servers that are enabled and in the ready state. Default value: false.
   */
  readyOnly?: boolean;
  /**
   * @remarks
   * The keyword for name search. The server performs a fuzzy match against MCP Server names.
   * 
   * @example
   * analytics
   */
  searchKey?: string;
  /**
   * @remarks
   * The MCP Server type. Valid values:
   * - system: system MCP.
   * - customer: custom MCP.
   * 
   * @example
   * customer
   */
  type?: string;
  /**
   * @remarks
   * The Data Agent workspace ID. The caller must have at least MEMBER permissions on this workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * atvx***xmz
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      readyOnly: 'ReadyOnly',
      searchKey: 'SearchKey',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      readyOnly: 'boolean',
      searchKey: 'string',
      type: 'string',
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

