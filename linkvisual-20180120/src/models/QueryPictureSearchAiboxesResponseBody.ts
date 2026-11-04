// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPictureSearchAiboxesResponseBodyDataPageData extends $dara.Model {
  /**
   * @remarks
   * The device ID of the V-series edge all-in-one machine.
   * 
   * @example
   * VrJwPGjC1sJlqPjZA3cxg4****
   */
  iotId?: string;
  /**
   * @remarks
   * The device alias of the V-series edge all-in-one machine.
   * 
   * @example
   * box015
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      nickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * The list of V-series edge all-in-one machines.
   */
  pageData?: QueryPictureSearchAiboxesResponseBodyDataPageData[];
  /**
   * @remarks
   * The number of entries returned on each page.
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
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': QueryPictureSearchAiboxesResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * - **200**: The call was successful.
   * - Other values: an error code. For more information, see [Error codes](https://help.aliyun.com/document_detail/288314.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned when the call is successful.
   */
  data?: QueryPictureSearchAiboxesResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Specified parameter CurrentPage is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DF7DC571-FE48-4C25-8BE0-B13C3038C85B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPictureSearchAiboxesResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

