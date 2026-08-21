// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMessageCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. If this parameter is not specified, the ID of the system default application is used. Fixed value: **app-1000000**.
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

