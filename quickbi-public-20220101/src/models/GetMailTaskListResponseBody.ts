// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMailTaskListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The nickname of the owner.
   * 
   * @example
   * test
   */
  bizOwnerName?: string;
  /**
   * @remarks
   * The user ID of the owner.
   * 
   * @example
   * asag****2423
   */
  bizOwnerUserId?: string;
  /**
   * @remarks
   * The mail ID of the tracking task.
   * 
   * @example
   * 2342526
   */
  mailId?: string;
  /**
   * @remarks
   * Indicates whether the task is paused.
   * 
   * - true: The task is paused.
   * 
   * - false: The task is not paused.
   * 
   * @example
   * true
   */
  paused?: boolean;
  /**
   * @remarks
   * The name of the tracking task.
   * 
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
  /**
   * @remarks
   * An array of tracking task models.
   */
  data?: GetMailTaskListResponseBodyResultData[];
  /**
   * @remarks
   * The next page number. A value of null or 0 indicates that there is no next page.
   * 
   * @example
   * null
   */
  next?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page that was set for the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The previous page number. A value of null or 0 indicates that there is no previous page.
   * 
   * @example
   * null
   */
  pre?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0c52************8e1952a3
   */
  requestId?: string;
  /**
   * @remarks
   * The paging information for the tracking tasks.
   */
  result?: GetMailTaskListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
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

