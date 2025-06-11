// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StopProjectResponseBodyErrorDetail } from "./StopProjectResponseBodyErrorDetail";


export class StopProjectResponseBody extends $dara.Model {
  /**
   * @example
   * Contact the administrator.
   */
  advice?: string;
  /**
   * @example
   * INNER_ERROR
   */
  code?: string;
  /**
   * @example
   * 27 ms
   */
  cost?: string;
  /**
   * @example
   * null
   */
  data?: string;
  errorDetail?: StopProjectResponseBodyErrorDetail;
  /**
   * @example
   * A system error occurred.
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 473469**-AA6F-4D**-B3DB-A***********
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: StopProjectResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.errorDetail && typeof (this.errorDetail as any).validate === 'function') {
      (this.errorDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

