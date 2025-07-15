// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveSnapshotNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * ww.yourdomain***.com
   */
  domainName?: string;
  /**
   * @remarks
   * The callback authentication key. The key can be 16 to 32 characters in length and can contain only letters and digits.
   * 
   * >  This parameter is required if you set the NotifyReqAuth parameter to **yes**.
   * 
   * @example
   * yourkey
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * Specifies whether to enable callback authentication. Valid values:
   * 
   * *   **yes**: enables callback authentication
   * *   **no**: disables callback authentication
   * 
   * >  Default value: **no**. If you set this parameter to **yes**, the NotifyAuthKey parameter is required.
   * 
   * @example
   * yes
   */
  notifyReqAuth?: string;
  /**
   * @remarks
   * The callback URL. Specify a valid URL that is up to 500 characters in length.
   * 
   * @example
   * http://callback.yourdomain***.com
   */
  notifyUrl?: string;
  ownerId?: number;
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

