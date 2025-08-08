// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CrossAccountVerifyTokenRequest extends $dara.Model {
  /**
   * @example
   * C19D103FEA2D50A584410267CE9FBA56
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

