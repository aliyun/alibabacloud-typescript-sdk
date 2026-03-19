// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckProgressListResponseBodyItemsPreCheckProgressDetail extends $dara.Model {
  bootTime?: number;
  errMsg?: string;
  finishTime?: number;
  item?: string;
  jobId?: string;
  names?: string;
  orderNum?: string;
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
  items?: DescribePreCheckProgressListResponseBodyItems;
  /**
   * @remarks
   * The precheck progress. The value ranges from 0 to 100.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4A45FE1-A903-470D-B113-F12A4DF942AB
   */
  requestId?: string;
  /**
   * @remarks
   * The precheck status. Valid values:
   * 
   * - **running**: The precheck is in progress.
   * 
   * - **failed**: The precheck failed.
   * 
   * - **finish**: The precheck is complete.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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

