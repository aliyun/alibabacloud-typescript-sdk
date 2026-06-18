// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAiCallDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of calls that could not be canceled.
   * 
   * @example
   * 75
   */
  failedCount?: number;
  /**
   * @remarks
   * Details about the failed cancellations. This is a map where the key is the failed detail ID or phone number, and the value is the reason for the failure.
   * 
   * @example
   * {
   *   "176********": "明细记录当前状态不可取消"
   * }
   */
  failedDetails?: { [key: string]: any };
  /**
   * @remarks
   * The result code of the cancellation. Valid values:
   * 
   * - ALL_FAILED: All cancellations failed.
   * 
   * - ALL_SUCCEED: All cancellations succeeded.
   * 
   * - PART_FAILED: Some cancellations failed.
   * 
   * @example
   * PART_FAILED
   */
  resultCode?: string;
  /**
   * @remarks
   * The number of calls that were successfully canceled.
   * 
   * @example
   * 81
   */
  succeedCount?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      failedDetails: 'FailedDetails',
      resultCode: 'ResultCode',
      succeedCount: 'SucceedCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      failedDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resultCode: 'string',
      succeedCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.failedDetails) {
      $dara.Model.validateMap(this.failedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAiCallDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CancelAiCallDetailsResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46C98E28-9239-5D95-AC76-648B8FD4889A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CancelAiCallDetailsResponseBodyData,
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

