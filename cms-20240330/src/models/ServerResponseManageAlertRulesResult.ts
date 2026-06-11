// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManageAlertRulesResult } from "./ManageAlertRulesResult";


export class ServerResponseManageAlertRulesResult extends $dara.Model {
  /**
   * @remarks
   * The operation status code.
   */
  code?: string;
  /**
   * @remarks
   * The result of the operation.
   */
  data?: ManageAlertRulesResult;
  /**
   * @remarks
   * A message detailing the outcome of the request, such as a success message or an error description.
   */
  message?: string;
  /**
   * @remarks
   * The token used to retrieve the next page of results. If the token is not returned, there are no more results.
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
   * The unique ID for the request. Provide this ID when contacting support for assistance.
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded (`true`) or failed (`false`).
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that match the query.
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

