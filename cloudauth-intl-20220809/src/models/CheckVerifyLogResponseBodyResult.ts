// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckVerifyLogResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {}
   */
  extInfo?: string;
  interruptPage?: string;
  logInfo?: string[];
  /**
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
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @example
   * 1001
   */
  verifyErrorCode?: string;
  /**
   * @example
   * 1
   */
  verifyStatus?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      interruptPage: 'InterruptPage',
      logInfo: 'LogInfo',
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
      logInfo: { 'type': 'array', 'itemType': 'string' },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

