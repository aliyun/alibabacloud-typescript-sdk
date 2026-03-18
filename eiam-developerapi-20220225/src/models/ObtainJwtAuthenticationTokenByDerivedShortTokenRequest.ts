// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainJwtAuthenticationTokenByDerivedShortTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sk-Nx2vzxxxxxxxxxxxxxxxxx
   */
  derivedShortToken?: string;
  static names(): { [key: string]: string } {
    return {
      derivedShortToken: 'derivedShortToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      derivedShortToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

