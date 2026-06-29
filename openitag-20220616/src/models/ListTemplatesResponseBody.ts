// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleTemplate } from "./SimpleTemplate";


export class ListTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code. The default value is 0, indicating Normal execution.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * error code
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Return message of the request
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1F29E
   */
  requestId?: string;
  /**
   * @remarks
   * is succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Template list
   */
  templates?: SimpleTemplate[];
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 22
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      templates: 'Templates',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      templates: { 'type': 'array', 'itemType': SimpleTemplate },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

