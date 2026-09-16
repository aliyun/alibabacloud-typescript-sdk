// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Namespace } from "./Namespace";


export class ListLumaNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 本次请求实际生效的每页数量。未传 Limit 时为服务端默认值，超出上限时为收敛后的值
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The list of namespaces bound to the Agent.
   * 
   * @example
   * [{"Name":"my_namespace"}]
   */
  namespaces?: Namespace[];
  /**
   * @remarks
   * 下一页起始Token，传入下次请求的 NextToken 可获取下一页；为空表示已无更多数据
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * Agent 绑定的命名空间总数，与本页返回条数无关
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namespaces: 'Namespaces',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      namespaces: { 'type': 'array', 'itemType': Namespace },
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLumaNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful call. A specific error code is returned upon failure.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of namespaces bound to the Agent. All results are returned at once without pagination.
   */
  data?: ListLumaNamespacesResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. The value is Operation success when the call succeeds, or a specific error description when the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting and ticket feedback.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLumaNamespacesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

