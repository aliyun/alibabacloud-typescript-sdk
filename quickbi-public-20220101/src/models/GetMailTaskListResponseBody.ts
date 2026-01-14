// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMailTaskListResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * test
   */
  bizOwnerName?: string;
  /**
   * @example
   * asag****2423
   */
  bizOwnerUserId?: string;
  /**
   * @example
   * 2342526
   */
  mailId?: string;
  /**
   * @example
   * true
   */
  paused?: boolean;
  /**
   * @example
   * test
   */
  subscribeName?: string;
  static names(): { [key: string]: string } {
    return {
      bizOwnerName: 'BizOwnerName',
      bizOwnerUserId: 'BizOwnerUserId',
      mailId: 'MailId',
      paused: 'Paused',
      subscribeName: 'SubscribeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizOwnerName: 'string',
      bizOwnerUserId: 'string',
      mailId: 'string',
      paused: 'boolean',
      subscribeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailTaskListResponseBodyResult extends $dara.Model {
  data?: GetMailTaskListResponseBodyResultData[];
  /**
   * @example
   * null
   */
  next?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * null
   */
  pre?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      next: 'Next',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pre: 'Pre',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetMailTaskListResponseBodyResultData },
      next: 'number',
      pageNum: 'number',
      pageSize: 'number',
      pre: 'number',
      totalNum: 'number',
      totalPages: 'number',
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

export class GetMailTaskListResponseBody extends $dara.Model {
  /**
   * @example
   * 0c52************8e1952a3
   */
  requestId?: string;
  result?: GetMailTaskListResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetMailTaskListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

