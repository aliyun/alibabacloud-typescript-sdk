// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckVerifyLogResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Extended information
   * 
   * @example
   * {}
   */
  extInfo?: string;
  /**
   * @remarks
   * Records the last page where the authentication was interrupted.
   * 
   * - Page not started
   * - OCR guide page
   * - OCR camera authorization
   * - OCR document capture page
   * - OCR recognition loading
   * - OCR recognition result editing page
   * - OCR recognition result editing loading
   * - Liveness detection guide page
   * - Liveness detection camera authorization page
   * - Liveness detection page
   * - Liveness detection fallback page
   * - Liveness detection retry
   * - Liveness detection loading
   * 
   * @example
   * OCR拍摄证件页面
   */
  interruptPage?: string;
  interruptPageEn?: string;
  /**
   * @remarks
   * SDK operation log details
   */
  logInfo?: string[];
  logInfoEn?: string[];
  /**
   * @remarks
   * SDK operation log statistics details
   * 
   * @example
   * {
   *           "faceOverTimes": 0,
   *           "hasFaceOverTimes": false,
   *           "hasFacePermissionRefuse": false,
   *           "hasOcrEdit": true,
   *           "hasOcrEditOverTimes": false,
   *           "hasOcrOverTimes": true,
   *           "hasOcrPermissionRefuse": false,
   *           "ocrEditOverTimes": 0,
   *           "ocrEditTimes": 1,
   *           "ocrOverTimes": 1,
   *           "pageStayTimeInfo": {
   *             "LOADING": "1615",
   *             "OCR_SCAN": "37446",
   *             "OCR_RESULT": "1338",
   *             "FACE": "8707"
   *           }
   *         }
   */
  logStatisticsInfo?: string;
  /**
   * @remarks
   * Whether the authentication passed.
   * 
   * - Y: Passed.
   * - N: Not passed.
   * 
   * @example
   * Y
   */
  passed?: string;
  /**
   * @remarks
   * Sub-result code
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * Authentication interruption error codes
   * 
   * - 1000: The user completed the face scanning process, and the suggested authentication result is pass
   * - 1001: The user completed the face scanning process, and the suggested authentication result is fail
   * - 1002: System error
   * - 1003: SDK initialization failed, please check if the client time is correct
   * - 1004: Camera permission error
   * - 1005: Network error
   * - 1006: User exited
   * - 1007: Invalid TransactionId
   * - 1009: Client timestamp error
   * - 1011: Incorrect document type submitted
   * - 1012: Missing or format validation failure of key information on the recognized document
   * - 1013: Poor image quality
   * - 1014: Exceeded the upper limit of errors
   * - 1015: Android system version too low
   * - 1016: Camera permission not obtained
   * - 9999: Suspected authentication process interruption
   * 
   * @example
   * 1001
   */
  verifyErrorCode?: string;
  /**
   * @remarks
   * Authentication status, values:
   * 
   * - 0: finished (authentication completed)
   * - 1: unfinished (authentication interrupted)
   * - 2: notstart (authentication not started)
   * 
   * @example
   * 1
   */
  verifyStatus?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      interruptPage: 'InterruptPage',
      interruptPageEn: 'InterruptPageEn',
      logInfo: 'LogInfo',
      logInfoEn: 'LogInfoEn',
      logStatisticsInfo: 'LogStatisticsInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      verifyErrorCode: 'VerifyErrorCode',
      verifyStatus: 'VerifyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      interruptPage: 'string',
      interruptPageEn: 'string',
      logInfo: { 'type': 'array', 'itemType': 'string' },
      logInfoEn: { 'type': 'array', 'itemType': 'string' },
      logStatisticsInfo: 'string',
      passed: 'string',
      subCode: 'string',
      verifyErrorCode: 'string',
      verifyStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logInfo)) {
      $dara.Model.validateArray(this.logInfo);
    }
    if(Array.isArray(this.logInfoEn)) {
      $dara.Model.validateArray(this.logInfoEn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVerifyLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backend error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  result?: CheckVerifyLogResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CheckVerifyLogResponseBodyResult,
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

