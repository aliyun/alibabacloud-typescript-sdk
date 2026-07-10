// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmPreBillResponseBodyModuleForbidUpdateDetail extends $dara.Model {
  /**
   * @remarks
   * The number of items that cannot be updated.
   * 
   * @example
   * 10
   */
  canNotUpdateCount?: number;
  /**
   * @remarks
   * The number of items that can be updated.
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
   * []
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

export class ConfirmPreBillResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 9999
   */
  batchId?: number;
  /**
   * @remarks
   * The number of bills that cannot be updated.
   * 
   * @example
   * 10
   */
  forbidUpdateBillCount?: number;
  /**
   * @remarks
   * The details of items that cannot be updated.
   */
  forbidUpdateDetail?: ConfirmPreBillResponseBodyModuleForbidUpdateDetail[];
  /**
   * @remarks
   * The number of matched items.
   * 
   * @example
   * 10
   */
  matchCount?: number;
  /**
   * @remarks
   * The number of unmatched items.
   * 
   * @example
   * 10
   */
  notMatchCount?: number;
  /**
   * @remarks
   * The details of unmatched items.
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
      forbidUpdateDetail: { 'type': 'array', 'itemType': ConfirmPreBillResponseBodyModuleForbidUpdateDetail },
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

export class ConfirmPreBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the returned result.
   */
  module?: ConfirmPreBillResponseBodyModule;
  /**
   * @remarks
   * The pagination token set by the server. Indicates whether more data is available on the next page during pagination.
   * 
   * @example
   * true
   */
  morePage?: boolean;
  /**
   * @remarks
   * The unique identifier of the request.
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
   * Indicates whether the API call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
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
      module: ConfirmPreBillResponseBodyModule,
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

