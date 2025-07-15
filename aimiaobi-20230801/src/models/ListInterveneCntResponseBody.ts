// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneCntResponseBodyData extends $dara.Model {
  cntList?: any[];
  code?: number;
  /**
   * @example
   * 10
   */
  pageCnt?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
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
   * @example
   * 0
   */
  code?: string;
  data?: ListInterveneCntResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
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

