// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSandboxesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor for querying the next page. When paginating, keep `workspaceId`, `agentId`, `searchText`, `sessionId`, and `maxResults` unchanged.
   * 
   * @example
   * next-token-1
   */
  nextToken?: string;
  /**
   * @remarks
   * The fragment of the Sandbox ID for a case-insensitive fuzzy search.
   * 
   * @example
   * 2f360
   */
  searchText?: string;
  /**
   * @remarks
   * 省略或传空白时查询智能体 latest 运行单元；传入时该服务端点必须属于本智能体且目标类型为 AGENT_VERSION，否则返回 Resource.NotFound。独立运行的服务端点只返回其自身运行单元的 Sandbox；DEFAULT 服务端点尚未接管独立运行时回落到 latest 运行单元；非 DEFAULT 且未独立运行时返回 ServiceEndpointTargetNotReady。运行单元尚未创建时返回空列表且 totalCount 为 0，不报错。
   * 
   * @example
   * se-7f3a92c1
   */
  serviceEndpointId?: string;
  /**
   * @remarks
   * The fragment of the current valid session ID for a case-insensitive fuzzy search.
   * 
   * @example
   * session-a
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchText: 'searchText',
      serviceEndpointId: 'serviceEndpointId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      searchText: 'string',
      serviceEndpointId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

