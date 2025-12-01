// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckProgressListResponseBodyItemsPreCheckProgressDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the check for the item started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1583734969000
   */
  bootTime?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * java.lang.RuntimeException: Could not find any schema ......
   */
  errMsg?: string;
  /**
   * @remarks
   * The time when the check for the item was complete. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1583734969000
   */
  finishTime?: number;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * CHECK_OTHER
   */
  item?: string;
  /**
   * @remarks
   * The ID of the job for the check item.
   * 
   * @example
   * uvk8f6fxnq5s
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the group to which the check item belongs.
   * 
   * @example
   * CHECK_OTHER
   */
  names?: string;
  /**
   * @remarks
   * The sequence number of the check item.
   * 
   * @example
   * 10
   */
  orderNum?: string;
  /**
   * @remarks
   * The state of the check for the item. Valid values:
   * 
   * *   **init**: The check for the item is being initialized.
   * *   **warning**: A warning is reported.
   * *   **catched**: An exception occurs.
   * *   **running**: The check for the item is in progress.
   * *   **failed**: The check for the item fails.
   * *   **finish**: The check for the item is completed.
   * 
   * @example
   * warning
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      errMsg: 'ErrMsg',
      finishTime: 'FinishTime',
      item: 'Item',
      jobId: 'JobId',
      names: 'Names',
      orderNum: 'OrderNum',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'number',
      errMsg: 'string',
      finishTime: 'number',
      item: 'string',
      jobId: 'string',
      names: 'string',
      orderNum: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListResponseBodyItems extends $dara.Model {
  preCheckProgressDetail?: DescribePreCheckProgressListResponseBodyItemsPreCheckProgressDetail[];
  static names(): { [key: string]: string } {
    return {
      preCheckProgressDetail: 'PreCheckProgressDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckProgressDetail: { 'type': 'array', 'itemType': DescribePreCheckProgressListResponseBodyItemsPreCheckProgressDetail },
    };
  }

  validate() {
    if(Array.isArray(this.preCheckProgressDetail)) {
      $dara.Model.validateArray(this.preCheckProgressDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckProgressListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of check items.
   */
  items?: DescribePreCheckProgressListResponseBodyItems;
  /**
   * @remarks
   * The precheck progress. Valid values: 0 to 100.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C4A45FE1-A903-470D-B113-F12A4DF942AB
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the precheck. Valid values:
   * 
   * *   **running**: The precheck is in progress.
   * *   **failed**: The precheck failed.
   * *   **finish**: The precheck is complete.
   * 
   * @example
   * failed
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      progress: 'Progress',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      items: DescribePreCheckProgressListResponseBodyItems,
      progress: 'number',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

