// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StopProjectsByLabelResponseBodyData } from "./StopProjectsByLabelResponseBodyData";
import { StopProjectsByLabelResponseBodyErrorDetail } from "./StopProjectsByLabelResponseBodyErrorDetail";


export class StopProjectsByLabelResponseBody extends $dara.Model {
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
   * 1
   */
  cost?: string;
  data?: StopProjectsByLabelResponseBodyData;
  errorDetail?: StopProjectsByLabelResponseBodyErrorDetail;
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
   * A595F34C-XXXX-5D0C-8DA8-B3ED76
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 140
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
      data: StopProjectsByLabelResponseBodyData,
      errorDetail: StopProjectsByLabelResponseBodyErrorDetail,
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

