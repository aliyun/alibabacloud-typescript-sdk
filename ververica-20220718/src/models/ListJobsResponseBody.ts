// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Job } from "./Job";


export class ListJobsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * - An array of job instances for a successful request (when `success` is `true`).
   * 
   * - An empty array for a failed request (when `success` is `false`).
   */
  data?: Job[];
  /**
   * @remarks
   * - The error code for a failed request (when `success` is `false`).
   * 
   * - An empty string if the request is successful (when `success` is `true`).
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * - The error message for a failed request (when `success` is `false`).
   * 
   * - An empty string if the request is successful (when `success` is `true`).
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * A fixed value of 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The page number of the returned results.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique request ID.
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
   * The total number of entries that match the query.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': Job },
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

