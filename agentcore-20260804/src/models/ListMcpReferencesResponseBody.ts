// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpReferencesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 引用对象名称。
   * 
   * @example
   * my-virtual-mcp
   */
  name?: string;
  /**
   * @remarks
   * 引用对象 ID。
   * 
   * @example
   * mcp-server-virtual-1
   */
  resourceId?: string;
  /**
   * @remarks
   * 引用状态：ACTIVE、PENDING、REMOVING 或 UNKNOWN。
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * 引用对象类型：VIRTUAL_MCP 或 AGENT。
   * 
   * @example
   * VIRTUAL_MCP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      resourceId: 'resourceId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcpReferencesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码。
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * HTTP 状态码。
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 引用列表。
   */
  items?: ListMcpReferencesResponseBodyItems[];
  /**
   * @remarks
   * 单页数量。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 响应消息。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 下一页令牌。
   * 
   * @example
   * next-token-123
   */
  nextToken?: string;
  /**
   * @remarks
   * 请求 ID
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否成功。
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * 引用总数。
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListMcpReferencesResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

