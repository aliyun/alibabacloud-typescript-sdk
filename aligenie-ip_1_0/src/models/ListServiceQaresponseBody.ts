// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceQAResponseBodyPage extends $dara.Model {
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
   * 12
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

export class ListServiceQAResponseBodyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @example
   * ***
   */
  answer?: string;
  /**
   * @example
   * 2022-07-27 14:06:27
   */
  gmtModified?: string;
  question?: string;
  /**
   * @example
   * 1
   */
  serviceQAId?: number;
  templates?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      answer: 'Answer',
      gmtModified: 'GmtModified',
      question: 'Question',
      serviceQAId: 'ServiceQAId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      answer: 'string',
      gmtModified: 'string',
      question: 'string',
      serviceQAId: 'number',
      templates: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListServiceQAResponseBodyPage;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ListServiceQAResponseBodyResult[];
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
      page: ListServiceQAResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListServiceQAResponseBodyResult },
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

