// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAiCallDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of unsuccessful cancellations.
   * 
   * @example
   * 75
   */
  failedCount?: number;
  /**
   * @remarks
   * The details of failed cancellations. This parameter is a map where the key is the ID or phone number of the failed detail record, and the value is the reason for the failure.
   * 
   * @example
   * {
   *   "176********": "The detail record cannot be canceled in its current state"
   * }
   */
  failedDetails?: { [key: string]: any };
  /**
   * @remarks
   * The cancellation result. Valid values:
   * - ALL_FAILED: All cancellations failed.
   * - ALL_SUCCEED: All cancellations succeeded.
   * - PART_FAILED: Some cancellations failed.
   * 
   * @example
   * PART_FAILED
   */
  resultCode?: string;
  /**
   * @remarks
   * The number of successful cancellations.
   * 
   * @example
   * 81
   */
  succeedCount?: number;
  /**
   * @remarks
   * The total count.
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
   * The details of the access denial.
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
   * The description of the status code.
   * 
   * @example
   * Success
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
   * Indicates whether the operation was called successfully. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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

