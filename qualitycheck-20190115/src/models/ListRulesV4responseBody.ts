// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RuleCountInfo } from "./RuleCountInfo";


export class ListRulesV4ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Business type. This field has no practical use. Ignore it.
   * 
   * @example
   * 无
   */
  businessType?: number;
  /**
   * @remarks
   * Result code. **200** means success. Any other value means failure. Callers can use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 219
   */
  count?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 10
   */
  currentPage?: number;
  /**
   * @remarks
   * Response data.
   */
  data?: RuleCountInfo[];
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
   * Error details if the request failed. Returns **successful** if the request succeeded.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Error details if the request failed. Use this field when multiple messages are returned.
   */
  messages?: string[];
  /**
   * @remarks
   * Current page number.
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
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Callers can use this field to determine success: true means success. **false** or **null** means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 219
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
      data: { 'type': 'array', 'itemType': RuleCountInfo },
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

