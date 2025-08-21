// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcologyOpennessSendVerificationCodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18612345678
   */
  phoneNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * +86
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbe2eb4458302b9246c6da17fbc95f4b
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      region: 'Region',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      region: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

