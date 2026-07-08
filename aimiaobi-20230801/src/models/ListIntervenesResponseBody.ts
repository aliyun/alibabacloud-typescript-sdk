// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervenesResponseBodyDataInterveneList extends $dara.Model {
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 36559
   */
  id?: string;
  /**
   * @remarks
   * The intervention query.
   * 
   * @example
   * 伊家楼
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesResponseBodyData extends $dara.Model {
  code?: number;
  /**
   * @remarks
   * The list of intervention items.
   */
  interveneList?: ListIntervenesResponseBodyDataInterveneList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      interveneList: 'InterveneList',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      interveneList: { 'type': 'array', 'itemType': ListIntervenesResponseBodyDataInterveneList },
      pageIndex: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.interveneList)) {
      $dara.Model.validateArray(this.interveneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: ListIntervenesResponseBodyData;
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
   * The error description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. True for success, false for failure.
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIntervenesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

