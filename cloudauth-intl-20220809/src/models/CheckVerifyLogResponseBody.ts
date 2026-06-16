// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckVerifyLogResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {}
   */
  extInfo?: string;
  /**
   * @remarks
   * The last page where the authentication was interrupted. Valid values:
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
   * - Liveness detection downgrade page
   * - Liveness detection retry
   * - Liveness detection loading.
   * 
   * @example
   * OCR拍摄证件页面
   */
  interruptPage?: string;
  /**
   * @remarks
   * The last page where the authentication was interrupted, in English. Valid values:
   * 
   * - LOADING
   * 
   * - GUIDE
   * 
   * - FACE
   * 
   * - OCR_SCAN
   * 
   * - OCR_RESULT
   * 
   * - NFC_INPUT
   * 
   * - NFC_READ.
   * 
   * @example
   * LOADING
   */
  interruptPageEn?: string;
  /**
   * @remarks
   * The SDK runtime log details.
   */
  logInfo?: string[];
  /**
   * @remarks
   * The SDK runtime trace log details in English. The format of this field is the same as **LogInfo**.
   */
  logInfoEn?: string[];
  /**
   * @remarks
   * The SDK runtime log statistics details.
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
   * Indicates whether the authentication is passed. Valid values:
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
   * The sub-result code.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * The error code for authentication interruption. Valid values:
   * 
   * - 1000: The user completed the face verification process, and the authentication result is passed.
   * - 1001: The user completed the face verification process, and the authentication result is not passed.
   * - 1002: System error.
   * - 1003: SDK initialization failed. Check whether the client time is correct.
   * - 1004: Camera permission error.
   * - 1005: Network error.
   * - 1006: The user exited.
   * - 1007: Invalid TransactionId.
   * - 1009: Client timestamp error.
   * - 1011: Incorrect document type submitted.
   * - 1012: Key information of the recognized document is missing or format validation failed.
   * - 1013: Poor image quality.
   * - 1014: The number of errors exceeded the upper limit.
   * - 1015: The Android system version is too low.
   * - 1016: Camera permission not obtained.
   * - 9999: The authentication process is suspected to be interrupted.
   * 
   * @example
   * 1001
   */
  verifyErrorCode?: string;
  /**
   * @remarks
   * The authentication status. Valid values:
   * 
   * - 0: finished. The authentication is complete.
   * - 1: unfinished. The authentication is interrupted.
   * - 2: notstart. The authentication has not started.
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
   * The backend error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
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

