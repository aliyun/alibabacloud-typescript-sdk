// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAiCallDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 75
   */
  failedCount?: number;
  failedDetails?: { [key: string]: any };
  /**
   * @example
   * ALL_SUCCEED
   */
  resultCode?: string;
  /**
   * @example
   * 81
   */
  succeedCount?: number;
  /**
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
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CancelAiCallDetailsResponseBodyData;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @example
   * 46C98E28-9239-5D95-AC76-648B8FD4889A
   */
  requestId?: string;
  /**
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

