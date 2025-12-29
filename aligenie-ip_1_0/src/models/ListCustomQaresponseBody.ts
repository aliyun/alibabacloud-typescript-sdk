// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomQAResponseBodyPage extends $dara.Model {
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
   * 21
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 22;11
   */
  answers?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  createTime?: string;
  /**
   * @example
   * 111
   */
  customQAId?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * 22;11
   */
  keyWords?: string;
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 22;11
   */
  supplementaryQuestion?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      createTime: 'CreateTime',
      customQAId: 'CustomQAId',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      status: 'Status',
      supplementaryQuestion: 'SupplementaryQuestion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      createTime: 'string',
      customQAId: 'string',
      hotelId: 'string',
      keyWords: 'string',
      majorQuestion: 'string',
      status: 'number',
      supplementaryQuestion: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListCustomQAResponseBodyPage;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ListCustomQAResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      page: ListCustomQAResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCustomQAResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

