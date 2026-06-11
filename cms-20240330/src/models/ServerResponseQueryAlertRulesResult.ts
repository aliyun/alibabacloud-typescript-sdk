// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAlertRulesResult } from "./QueryAlertRulesResult";


export class ServerResponseQueryAlertRulesResult extends $dara.Model {
  /**
   * @remarks
   * The status code of the response. A status code of `200` indicates a successful request.
   */
  code?: string;
  /**
   * @remarks
   * The response payload.
   */
  data?: QueryAlertRulesResult;
  /**
   * @remarks
   * The response message. If the request fails, this field contains details about the error.
   */
  message?: string;
  /**
   * @remarks
   * The token to retrieve the next page of results. A null value indicates that no more results are available.
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique request ID, used for troubleshooting.
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: `true` and `false`.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of alert rules that match the query.
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
      data: QueryAlertRulesResult,
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

