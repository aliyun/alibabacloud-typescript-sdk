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
   * The callback authentication key. The key must be 16 to 32 characters in length and can contain letters and digits.
   * 
   * > This parameter is required when NotifyReqAuth is set to **yes**.
   * 
   * @example
   * testkeyyourkey12
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication for callback notifications. Valid values:
   * 
   * - **yes**: Enables
   * 
   * - **no**: Disables
   * 
   * > The default value is **no**. If you set this parameter to **yes**, NotifyAuthKey is required.
   * 
   * @example
   * yes
   */
  notifyReqAuth?: string;
  /**
   * @remarks
   * The callback URL. The URL must be valid and cannot exceed 500 characters.
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

