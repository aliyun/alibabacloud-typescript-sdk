// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlV2ResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The recognized key information in JSON format.
   * 
   * @example
   * {
   *   "address": "",
   *   "name":""
   * }
   */
  extIdInfo?: string;
  /**
   * @remarks
   * The result code. Valid values:
   * - 200: OCR extraction is successful and all rule checks are passed
   * - 204: verification results are inconsistent. OCR extraction is successful, but some fields in CheckRuleConfig fail the check (N)
   * - 211: quality does not meet the requirements. Quality detection fails when idQuality is set to Y. This feature is not available in the current version
   * - 212: anti-counterfeiting check fails. fraudCheck is triggered and anti-counterfeiting verification fails
   * - 213: no text is extracted or the credential type check fails
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * The extraction result. Valid values:
   * - S: success.
   * - F: failure.
   * 
   * @example
   * S
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      extIdInfo: 'ExtIdInfo',
      subCode: 'SubCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extIdInfo: 'string',
      subCode: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialRecognitionIntlV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates that the request is successful. Other values indicate that the request failed.
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
   * 7F971622-38C0-5F56-B2EC-315367979B4F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: CredentialRecognitionIntlV2ResponseBodyResult;
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
      result: CredentialRecognitionIntlV2ResponseBodyResult,
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

