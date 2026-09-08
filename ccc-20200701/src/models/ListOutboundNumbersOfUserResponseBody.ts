// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutboundNumbersOfUserResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The city where the phone number is located.
   * 
   * @example
   * 乐山
   */
  city?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 0830019****
   */
  number?: string;
  provider?: string;
  /**
   * @deprecated
   */
  providerCode?: string;
  /**
   * @deprecated
   */
  providerDisplayName?: string;
  providerShortName?: string;
  providerType?: string;
  /**
   * @remarks
   * The province where the phone number is located.
   * 
   * @example
   * 四川
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      provider: 'Provider',
      providerCode: 'ProviderCode',
      providerDisplayName: 'ProviderDisplayName',
      providerShortName: 'ProviderShortName',
      providerType: 'ProviderType',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      provider: 'string',
      providerCode: 'string',
      providerDisplayName: 'string',
      providerShortName: 'string',
      providerType: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundNumbersOfUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of phone numbers.
   */
  list?: ListOutboundNumbersOfUserResponseBodyDataList[];
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
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
      list: { 'type': 'array', 'itemType': ListOutboundNumbersOfUserResponseBodyDataList },
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

export class ListOutboundNumbersOfUserResponseBody extends $dara.Model {
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
   * The data.
   */
  data?: ListOutboundNumbersOfUserResponseBodyData;
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
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListOutboundNumbersOfUserResponseBodyData,
      httpStatusCode: 'number',
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

