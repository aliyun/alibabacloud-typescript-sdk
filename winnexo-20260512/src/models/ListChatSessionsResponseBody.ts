// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 是否有更多数据
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  page?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 响应数据负载
   * 
   * @example
   * {}
   */
  sessions?: any[];
  /**
   * @remarks
   * 租户ID
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      sessions: 'sessions',
      tenantId: 'tenantId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      message: 'string',
      page: 'number',
      pageSize: 'string',
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': 'any' },
      tenantId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

