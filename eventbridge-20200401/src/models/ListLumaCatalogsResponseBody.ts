// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Catalog } from "./Catalog";


export class ListLumaCatalogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of data catalogs bound to the Agent.
   * 
   * @example
   * [{"Name":"my_catalog"}]
   */
  catalogs?: Catalog[];
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
   * 下一页起始Token，传入下次请求的 NextToken 可获取下一页；为空表示已无更多数据
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * Agent 绑定的数据目录总数，与本页返回条数无关
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      catalogs: 'Catalogs',
      limit: 'Limit',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogs: { 'type': 'array', 'itemType': Catalog },
      limit: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.catalogs)) {
      $dara.Model.validateArray(this.catalogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLumaCatalogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful call. A specific error code is returned when the call fails.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of data catalogs bound to the Agent. All results are returned at once without pagination.
   */
  data?: ListLumaCatalogsResponseBodyData;
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
   * The unique identifier of the request, used for troubleshooting and ticket submission.
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
      data: ListLumaCatalogsResponseBodyData,
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

