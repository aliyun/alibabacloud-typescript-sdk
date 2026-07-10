// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSubmitPreBillResponseBodyModuleForbidUpdateDetail extends $dara.Model {
  /**
   * @remarks
   * The number of records that cannot be updated.
   * 
   * @example
   * 10
   */
  canNotUpdateCount?: number;
  /**
   * @remarks
   * The number of records that can be updated.
   * 
   * @example
   * 10
   */
  canUpdateCount?: number;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * "9999"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      canNotUpdateCount: 'can_not_update_count',
      canUpdateCount: 'can_update_count',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canNotUpdateCount: 'number',
      canUpdateCount: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitPreBillResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The batch ID. This value may be null if no actionable bills exist.
   * 
   * @example
   * 999
   */
  batchId?: number;
  /**
   * @remarks
   * The number of bills that cannot be updated.
   * 
   * @example
   * 20
   */
  forbidUpdateBillCount?: number;
  /**
   * @remarks
   * The details of bills that cannot be updated.
   */
  forbidUpdateDetail?: BatchSubmitPreBillResponseBodyModuleForbidUpdateDetail[];
  /**
   * @remarks
   * The number of matched records.
   * 
   * @example
   * 10
   */
  matchCount?: number;
  /**
   * @remarks
   * The number of unmatched records.
   * 
   * @example
   * 10
   */
  notMatchCount?: number;
  /**
   * @remarks
   * The unmatched details.
   */
  notMatchDetail?: string[];
  static names(): { [key: string]: string } {
    return {
      batchId: 'batch_id',
      forbidUpdateBillCount: 'forbid_update_bill_count',
      forbidUpdateDetail: 'forbid_update_detail',
      matchCount: 'match_count',
      notMatchCount: 'not_match_count',
      notMatchDetail: 'not_match_detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      forbidUpdateBillCount: 'number',
      forbidUpdateDetail: { 'type': 'array', 'itemType': BatchSubmitPreBillResponseBodyModuleForbidUpdateDetail },
      matchCount: 'number',
      notMatchCount: 'number',
      notMatchDetail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.forbidUpdateDetail)) {
      $dara.Model.validateArray(this.forbidUpdateDetail);
    }
    if(Array.isArray(this.notMatchDetail)) {
      $dara.Model.validateArray(this.notMatchDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitPreBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data.
   */
  module?: BatchSubmitPreBillResponseBodyModule;
  /**
   * @remarks
   * The pagination token set by the server. Indicates whether more data exists on the next page during pagination.
   * 
   * @example
   * true
   */
  morePage?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  resultCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 成功
   */
  resultMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 21041ce********056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      resultCode: 'result_code',
      resultMsg: 'result_msg',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: BatchSubmitPreBillResponseBodyModule,
      morePage: 'boolean',
      requestId: 'string',
      resultCode: 'number',
      resultMsg: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

