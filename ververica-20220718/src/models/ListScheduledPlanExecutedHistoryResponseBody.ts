// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledPlanExecutedInfo } from "./ScheduledPlanExecutedInfo";


export class ListScheduledPlanExecutedHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of jobs that meet the filter criteria. This parameter is returned only when the request is successful.
   */
  data?: ScheduledPlanExecutedInfo[];
  /**
   * @remarks
   * The error code that is returned if the request fails.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request fails.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code. The value is always 200. Use the \\`success\\` parameter to determine whether the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries on the returned page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that meet the filter criteria.
   * 
   * @example
   * 4
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ScheduledPlanExecutedInfo },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

