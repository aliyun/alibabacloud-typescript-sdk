// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPagedInstanceResponseBodyData } from "./GetPagedInstanceResponseBodyData";


export class GetPagedInstanceResponseBody extends $dara.Model {
  data?: GetPagedInstanceResponseBodyData;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0a06e1e316757357507896067d3780
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPagedInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
      traceId: 'string',
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

