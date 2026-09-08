// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoNotCallNumbersResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Creation time of the Do Not Call number configuration, in Unix timestamp format with millisecond precision. (Deprecated)
   * 
   * @example
   * 1626962425000
   */
  createTime?: number;
  /**
   * @remarks
   * Creation time of the prohibited outbound call number configuration, in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1631440860000
   */
  createdTime?: number;
  /**
   * @remarks
   * Creator, which is the agent logon name of the agent who created this record.
   * 
   * @example
   * agent
   */
  creator?: string;
  /**
   * @remarks
   * Phone number.
   * 
   * @example
   * 1900000****
   */
  number?: string;
  /**
   * @remarks
   * Remark.
   * 
   * @example
   * 测试
   */
  remark?: string;
  /**
   * @remarks
   * Scope of application.
   * 
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
  /**
   * @remarks
   * List of prohibited outbound call numbers.
   */
  list?: ListDoNotCallNumbersResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
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
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListDoNotCallNumbersResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * List of response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Request ID.
   * 
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

