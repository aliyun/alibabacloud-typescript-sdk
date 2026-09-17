// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlV2ResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The recognized key information, in JSON format.
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
   * 
   * - 200: OCR extraction succeeded and all rule checks passed.
   * - 204: Validation result is inconsistent. OCR extraction succeeded, but some fields in CheckRuleConfig did not pass (N).
   * - 211: Quality does not meet requirements. Quality detection did not pass when idQuality is set to Y (not yet supported in the current version).
   * - 212: Anti-forgery check did not pass. fraudCheck was triggered and anti-forgery verification failed.
   * - 213: No text was extracted, or the credential type check did not pass.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * The extraction result. Valid values:
   * - S: Succeeded.
   * - F: Failed.
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
   * The return code. A value of 200 indicates a successful request. Other values indicate failures.
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
   * 7F971622-38C0-5F56-B2EC-315367979B4F
   */
  requestId?: string;
  /**
   * @remarks
   * The response result.
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

