// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManageAlertRulesResult } from "./ManageAlertRulesResult";


export class ServerResponseManageAlertRulesResult extends $dara.Model {
  /**
   * @remarks
   * The response code.
   */
  code?: string;
  data?: ManageAlertRulesResult;
  /**
   * @remarks
   * The error message.
   */
  message?: string;
  /**
   * @remarks
   * The pagination token.
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
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

