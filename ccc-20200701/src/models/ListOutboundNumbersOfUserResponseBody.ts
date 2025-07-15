// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutboundNumbersOfUserResponseBodyDataList extends $dara.Model {
  city?: string;
  /**
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
  list?: ListOutboundNumbersOfUserResponseBodyDataList[];
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
   * @example
   * OK
   */
  code?: string;
  data?: ListOutboundNumbersOfUserResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

