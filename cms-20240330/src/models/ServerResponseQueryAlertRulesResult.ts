// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAlertRulesResult } from "./QueryAlertRulesResult";


export class ServerResponseQueryAlertRulesResult extends $dara.Model {
  /**
   * @remarks
   * The status code of the API response. A value of 200 indicates a successful request. Other values indicate an exception.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The business data returned by the API, including the list of alert rule query results and pagination information.
   * 
   * @example
   * {"alertRules":[],"totalCount":0}
   */
  data?: QueryAlertRulesResult;
  /**
   * @remarks
   * The detailed error description returned when the request fails. This parameter is empty when the request succeeds.
   * 
   * @example
   * The request is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page. A value of null indicates that no more pages are available.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the current response.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page in the current response.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the API request, used for troubleshooting and server-side log tracing.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of alert rules that match the query conditions.
   * 
   * @example
   * 1
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

