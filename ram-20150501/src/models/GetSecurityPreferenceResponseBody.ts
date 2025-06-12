// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSecurityPreferenceResponseBodySecurityPreference } from "./GetSecurityPreferenceResponseBodySecurityPreference";


export class GetSecurityPreferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC1213F1-A9D5-4A01-A996-44983689126C
   */
  requestId?: string;
  /**
   * @remarks
   * The security preferences.
   */
  securityPreference?: GetSecurityPreferenceResponseBodySecurityPreference;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPreference: 'SecurityPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPreference: GetSecurityPreferenceResponseBodySecurityPreference,
    };
  }

  validate() {
    if(this.securityPreference && typeof (this.securityPreference as any).validate === 'function') {
      (this.securityPreference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

