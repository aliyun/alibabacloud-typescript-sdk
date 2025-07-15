// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSnapshotCallbackAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The custom key that is used for callback authentication.
   * 
   * This parameter is required.
   * 
   * @example
   * yourkey
   */
  callbackAuthKey?: string;
  /**
   * @remarks
   * Specifies whether to enable callback authentication. Valid values:
   * 
   * *   **yes**: enables callback authentication.
   * *   **no**: disables callback authentication.
   * 
   * This parameter is required.
   * 
   * @example
   * yes
   */
  callbackReqAuth?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackAuthKey: 'CallbackAuthKey',
      callbackReqAuth: 'CallbackReqAuth',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackAuthKey: 'string',
      callbackReqAuth: 'string',
      domainName: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

