// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsResponseBodyData } from "./ListApplicationsResponseBodyData";


export class ListApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Queries applications.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 20
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The queried applications.
   */
  data?: ListApplicationsResponseBodyData;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * The ID of the request.
   */
  errorCode?: string;
  /**
   * @remarks
   * 20
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * cn-beijing:demo
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * B4D805CA-926D-41B1-8E63-7AD0C1ED****
   */
  requestId?: string;
  /**
   * @remarks
   * 1
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * demo-app
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: ListApplicationsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
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

