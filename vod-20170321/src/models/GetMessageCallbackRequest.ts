// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. If you do not set this parameter, the default value **app-1000000** is used.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

