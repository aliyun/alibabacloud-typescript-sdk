// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleOidcCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The code parameter carried in the OIDC callback request.
   * 
   * @example
   * code-xxxxxxxx
   */
  code?: string;
  /**
   * @remarks
   * The state parameter carried in the OIDC callback request.
   * 
   * @example
   * state-xxxxxxxx
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

