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
   * - The page is not started.
   * - The OCR guide page.
   * - The OCR camera authorization page.
   * - The OCR document capture page.
   * - The OCR recognition loading page.
   * - The OCR recognition result editing page.
   * - The OCR recognition result editing loading page.
   * - The liveness detection guide page.
   * - The liveness detection camera authorization page.
   * - The liveness detection page.
   * - The liveness detection fallback page.
   * - The liveness detection retry page.
   * - The liveness detection loading page.
   * 
   * @example
   * OCR document capture page
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
   * - NFC_READ
   * 
   * @example
   * LOADING
   */
  interruptPageEn?: string;
  /**
   * @remarks
   * The details of the SDK runtime logs.
   */
  logInfo?: string[];
  /**
   * @remarks
   * The details of the SDK runtime trace logs in English. The format of this field is the same as that of **LogInfo**.
   */
  logInfoEn?: string[];
  /**
   * @remarks
   * The statistical details of the SDK runtime logs.
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
   * - 1000: The user completed the face scanning process, and the recommended authentication result is passed.
   * - 1001: The user completed the face scanning process, and the recommended authentication result is not passed.
   * - 1002: A system error occurred.
   * - 1003: SDK initialization failed. Check whether the client time is correct.
   * - 1004: A camera permission error occurred.
   * - 1005: A network error occurred.
   * - 1006: The user exited.
   * - 1007: The TransactionId is invalid.
   * - 1009: The client timestamp is incorrect.
   * - 1011: The submitted document type is incorrect.
   * - 1012: The recognized key information of the document is missing or the format verification failed.
   * - 1013: The image quality is poor.
   * - 1014: The number of errors exceeded the upper limit.
   * - 1015: The Android system version is too low.
   * - 1016: Camera permissions are not obtained.
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
   * - 0: finished. The authentication is completed.
   * - 1: unfinished. The authentication is interrupted.
   * - 2: notstart. The authentication is not started.
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
   * The returned message.
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

