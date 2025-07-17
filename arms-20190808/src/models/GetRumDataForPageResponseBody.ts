// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumDataForPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter. Ignore this parameter.
   * 
   * @example
   * null
   */
  authentication?: string;
  /**
   * @remarks
   * Indicates whether the query ends. Valid values: true and false.
   * 
   * @example
   * true
   */
  completion?: string;
  /**
   * @remarks
   * The queried data.
   */
  items?: { [key: string]: any }[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * A reserved parameter. Ignore this parameter.
   * 
   * @example
   * null
   */
  preference?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      authentication: 'Authentication',
      completion: 'Completion',
      items: 'Items',
      page: 'Page',
      pageSize: 'PageSize',
      preference: 'Preference',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authentication: 'string',
      completion: 'string',
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      page: 'string',
      pageSize: 'string',
      preference: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumDataForPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result of the operation.
   */
  data?: GetRumDataForPageResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * StartTime is mandatory for this action.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: string;
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
      data: GetRumDataForPageResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

