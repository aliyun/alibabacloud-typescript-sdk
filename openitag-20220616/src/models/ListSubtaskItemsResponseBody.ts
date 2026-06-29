// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubtaskItemDetail } from "./SubtaskItemDetail";


export class ListSubtaskItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return encoding. The default value is 0, indicating normal execution.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details.
   * 
   * @example
   * ""
   */
  details?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * List of data items.
   */
  items?: SubtaskItemDetail[];
  /**
   * @remarks
   * Return message of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Page number of the queried task package annotation data returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Quantity of annotated task package data entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Possible values:  
   * - true: The request succeeded.  
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total quantity of annotated data in the task package.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
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
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      items: { 'type': 'array', 'itemType': SubtaskItemDetail },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
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

