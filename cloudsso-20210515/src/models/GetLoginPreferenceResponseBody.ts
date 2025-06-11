// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLoginPreferenceResponseBodyLoginPreference } from "./GetLoginPreferenceResponseBodyLoginPreference";


export class GetLoginPreferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The logon preference.
   */
  loginPreference?: GetLoginPreferenceResponseBodyLoginPreference;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8CE8B990-193D-50CE-A604-69F3E7DCE740
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginPreference: 'LoginPreference',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginPreference: GetLoginPreferenceResponseBodyLoginPreference,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loginPreference && typeof (this.loginPreference as any).validate === 'function') {
      (this.loginPreference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

