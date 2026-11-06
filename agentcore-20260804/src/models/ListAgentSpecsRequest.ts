// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpec, used as a search keyword in combination with the search parameter.
   * 
   * @example
   * my-worker
   */
  agentSpecName?: string;
  /**
   * @remarks
   * The business tag used for fuzzy filtering.
   * 
   * @example
   * ai
   */
  bizTag?: string;
  /**
   * @remarks
   * The field by which to sort the results. Supports download_count. By default, the results are sorted by update time.
   * 
   * @example
   * download_count
   */
  orderBy?: string;
  /**
   * @remarks
   * The owner filter.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The visibility scope filter. Valid values: PUBLIC and PRIVATE.
   * 
   * @example
   * PUBLIC
   */
  scope?: string;
  /**
   * @remarks
   * The search mode. Valid values: accurate (exact match) and blur (fuzzy match). Default value: blur.
   * 
   * @example
   * blur
   */
  search?: string;
  /**
   * @remarks
   * Specifies whether to return the lists of skills and MCP servers. Default value: false.
   * 
   * @example
   * true
   */
  withCapabilities?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentSpecName: 'agentSpecName',
      bizTag: 'bizTag',
      orderBy: 'orderBy',
      owner: 'owner',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      scope: 'scope',
      search: 'search',
      withCapabilities: 'withCapabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpecName: 'string',
      bizTag: 'string',
      orderBy: 'string',
      owner: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scope: 'string',
      search: 'string',
      withCapabilities: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

