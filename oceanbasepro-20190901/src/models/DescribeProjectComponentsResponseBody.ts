// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectComponentsResponseBodyData } from "./DescribeProjectComponentsResponseBodyData";
import { DescribeProjectComponentsResponseBodyErrorDetail } from "./DescribeProjectComponentsResponseBodyErrorDetail";


export class DescribeProjectComponentsResponseBody extends $dara.Model {
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
   * 48
   */
  cost?: string;
  data?: DescribeProjectComponentsResponseBodyData;
  errorDetail?: DescribeProjectComponentsResponseBodyErrorDetail;
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
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 9
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
      data: DescribeProjectComponentsResponseBodyData,
      errorDetail: DescribeProjectComponentsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.errorDetail && typeof (this.errorDetail as any).validate === 'function') {
      (this.errorDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

