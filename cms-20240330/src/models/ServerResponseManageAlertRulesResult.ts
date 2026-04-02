// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManageAlertRulesResult } from "./ManageAlertRulesResult";


export class ServerResponseManageAlertRulesResult extends $dara.Model {
  /**
   * @remarks
   * 响应码
   */
  code?: string;
  data?: ManageAlertRulesResult;
  /**
   * @remarks
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * 分页 Token
   */
  nextToken?: string;
  /**
   * @remarks
   * 页码
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页大小
   */
  pageSize?: number;
  /**
   * @remarks
   * 请求 ID
   */
  requestId?: string;
  /**
   * @remarks
   * 是否成功
   */
  success?: boolean;
  /**
   * @remarks
   * 总数
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ManageAlertRulesResult,
      message: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

