// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleTenant } from "./SimpleTenant";


export class ListTenantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code. The default value is 0, indicating normal execution.
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
   * -
   */
  details?: string;
  /**
   * @remarks
   * Returned error code.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Response message of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Page number of the returned tenant list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of tenants displayed per page in the response.
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
   * Indicates whether the request succeeded. Valid values:
   * - true: The request succeeded.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * List of tenants.
   */
  tenants?: SimpleTenant[];
  /**
   * @remarks
   * Total number of tenants.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages in the tenant list.
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
      tenants: 'Tenants',
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
      tenants: { 'type': 'array', 'itemType': SimpleTenant },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tenants)) {
      $dara.Model.validateArray(this.tenants);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

