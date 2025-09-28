// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyWithFusionAuthTokenResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * The phone number, which is returned when the verification is successful.
   * 
   * @example
   * 180********
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The phone number score, which is generated only after the phone number scoring node is enabled and the verification is successful. The higher the score, the more risky the phone number. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  phoneScore?: number;
  /**
   * @remarks
   * The verification result. Valid values: PASS and UNKNOWN.
   * 
   * @example
   * PASS
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      phoneScore: 'PhoneScore',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      phoneScore: 'number',
      verifyResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWithFusionAuthTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. If OK is returned, the request is successful. Other values indicate that the request failed. For more information, see Error codes.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  model?: VerifyWithFusionAuthTokenResponseBodyModel;
  /**
   * @remarks
   * The request ID, which is used to troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: VerifyWithFusionAuthTokenResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

