// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveSnapshotNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * www.yourdomain***.com
   */
  domainName?: string;
  /**
   * @remarks
   * The authentication key for the callback. The key must be 16 to 32 characters in length and contain only letters and digits.
   * 
   * > This parameter is required if you set NotifyReqAuth to **yes**.
   * 
   * @example
   * yourkey
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * Specifies whether to enable callback authentication. Valid values:
   * 
   * - **yes**: Enables
   * 
   * - **no** (Default): Disables
   * 
   * > If you set this parameter to yes, NotifyAuthKey is required.
   * 
   * @example
   * yes
   */
  notifyReqAuth?: string;
  /**
   * @remarks
   * The callback URL. The URL must be valid, with a maximum length of 500 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * http://callback.yourdomain***.com
   */
  notifyUrl?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      notifyAuthKey: 'NotifyAuthKey',
      notifyReqAuth: 'NotifyReqAuth',
      notifyUrl: 'NotifyUrl',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      notifyAuthKey: 'string',
      notifyReqAuth: 'string',
      notifyUrl: 'string',
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

