// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneCntResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of count information
   */
  cntList?: any[];
  /**
   * @remarks
   * Intervention service status code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 10
   */
  pageCnt?: number;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cntList: 'CntList',
      code: 'Code',
      pageCnt: 'PageCnt',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cntList: { 'type': 'array', 'itemType': 'any' },
      code: 'number',
      pageCnt: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cntList)) {
      $dara.Model.validateArray(this.cntList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneCntResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: ListInterveneCntResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates success: true for success, false for failure
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
      data: ListInterveneCntResponseBodyData,
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

