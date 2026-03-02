// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProvisionExternalApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  scopes?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scopes: 'Scopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scopes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

