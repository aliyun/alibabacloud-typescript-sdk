// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCorpNumbersResponseBodyDataCorpNumbers extends $dara.Model {
  /**
   * @remarks
   * The list of instance names associated with the number.
   */
  instanceNames?: string[];
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 057100001234
   */
  number?: string;
  /**
   * @remarks
   * The SIP trunk ID.
   * 
   * @example
   * 159d4b8361804ebda21242216a8981c2
   */
  sipTrunkId?: string;
  /**
   * @remarks
   * The SIP trunk name.
   * 
   * @example
   * trunk_1
   */
  sipTrunkName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceNames: 'InstanceNames',
      number: 'Number',
      sipTrunkId: 'SipTrunkId',
      sipTrunkName: 'SipTrunkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNames: { 'type': 'array', 'itemType': 'string' },
      number: 'string',
      sipTrunkId: 'string',
      sipTrunkName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceNames)) {
      $dara.Model.validateArray(this.instanceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpNumbersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of tenant numbers.
   */
  corpNumbers?: ListCorpNumbersResponseBodyDataCorpNumbers[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      corpNumbers: 'CorpNumbers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpNumbers: { 'type': 'array', 'itemType': ListCorpNumbersResponseBodyDataCorpNumbers },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.corpNumbers)) {
      $dara.Model.validateArray(this.corpNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpNumbersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListCorpNumbersResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned by the API.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0956D5DA-0978-5DC9-94B0-C68527DA7475
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCorpNumbersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
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

