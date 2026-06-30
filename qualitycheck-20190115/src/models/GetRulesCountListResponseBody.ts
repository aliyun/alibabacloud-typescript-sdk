// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRulesCountListResponseBodyData extends $dara.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Business type. This field has no practical meaning and can be ignored.
   * 
   * @example
   * 忽略
   */
  businessType?: number;
  /**
   * @remarks
   * Result code. **200** indicates success. Any other value indicates failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Total number of entries.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  data?: GetRulesCountListResponseBodyData;
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
   * Error details if the request failed. Returns "successful" on success.
   * 
   * @example
   * successful
   */
  message?: string;
  messages?: GetRulesCountListResponseBodyMessages;
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of rows per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Use this field to determine request success: true means success; false or null means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of entries.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: GetRulesCountListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      messages: GetRulesCountListResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

