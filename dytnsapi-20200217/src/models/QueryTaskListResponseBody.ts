// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the tasks.
   */
  data?: string[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 62
   */
  pageNo?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNo: 'PageNo',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      totalCount: 'number',
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

export class QueryTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. Valid values:
   * 
   * - **OK**: The request was successful.
   * 
   * - **isv.INVALID_PARAMETERS**: The specified parameter is invalid.
   * 
   * - **isp.SYSTEM_ERROR**: A system error occurred.
   * 
   * > For more information, see the "Error codes" section of this topic.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: QueryTaskListResponseBodyData;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD******177
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTaskListResponseBodyData,
      message: 'string',
      requestId: 'string',
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

