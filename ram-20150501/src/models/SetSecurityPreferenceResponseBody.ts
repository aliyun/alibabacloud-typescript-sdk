// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetSecurityPreferenceResponseBodySecurityPreference } from "./SetSecurityPreferenceResponseBodySecurityPreference";


export class SetSecurityPreferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A978915D-F279-4CA0-A89B-9A71219FFB3E
   */
  requestId?: string;
  /**
   * @remarks
   * The security preferences.
   */
  securityPreference?: SetSecurityPreferenceResponseBodySecurityPreference;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPreference: 'SecurityPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPreference: SetSecurityPreferenceResponseBodySecurityPreference,
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

