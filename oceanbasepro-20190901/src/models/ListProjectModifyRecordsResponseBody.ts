// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectModifyRecordsResponseBodyData } from "./ListProjectModifyRecordsResponseBodyData";
import { ListProjectModifyRecordsResponseBodyErrorDetail } from "./ListProjectModifyRecordsResponseBodyErrorDetail";


export class ListProjectModifyRecordsResponseBody extends $dara.Model {
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
   * 30
   */
  cost?: string;
  data?: ListProjectModifyRecordsResponseBodyData[];
  errorDetail?: ListProjectModifyRecordsResponseBodyErrorDetail;
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
      data: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyData },
      errorDetail: ListProjectModifyRecordsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
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

