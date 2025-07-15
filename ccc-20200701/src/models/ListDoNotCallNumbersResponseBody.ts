// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoNotCallNumbersResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1626962425000
   */
  createTime?: number;
  createdTime?: number;
  /**
   * @example
   * agent
   */
  creator?: string;
  /**
   * @example
   * 1900000****
   */
  number?: string;
  remark?: string;
  /**
   * @example
   * INSTANCE
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      creator: 'Creator',
      number: 'Number',
      remark: 'Remark',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createdTime: 'number',
      creator: 'string',
      number: 'string',
      remark: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoNotCallNumbersResponseBodyData extends $dara.Model {
  list?: ListDoNotCallNumbersResponseBodyDataList[];
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
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDoNotCallNumbersResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoNotCallNumbersResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListDoNotCallNumbersResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * BA03159C-E808-4FF1-B27E-A61B6E888D7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDoNotCallNumbersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

