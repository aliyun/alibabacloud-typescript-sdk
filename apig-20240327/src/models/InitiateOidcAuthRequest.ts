// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitiateOidcAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The OIDC provider identifier.
   * 
   * @example
   * provider-xxxxxxxx
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

