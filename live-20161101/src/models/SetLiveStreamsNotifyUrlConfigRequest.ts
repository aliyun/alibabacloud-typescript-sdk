// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveStreamsNotifyUrlConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The callback URL for exception events.
   * 
   * @example
   * https://4a7e5f08.r37.cpolar.top/live/Rsssd/call-back/streamStart
   */
  exceptionNotifyUrl?: string;
  /**
   * @remarks
   * The authentication key.
   * 
   * > This parameter is required when the NotifyReqAuth request parameter is set to **yes**.
   * 
   * Value requirements:
   * 
   * - 16 to 64 characters in length.
   * 
   * - Supports uppercase letters, lowercase letters, and digits.
   * 
   * @example
   * 123456
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication. Valid values:
   * 
   * - **yes**: Enabled. If you set this parameter to **yes**, you must also set the NotifyAuthKey request parameter.
   * - **no**: Disabled.
   * 
   * > If this parameter is not specified, the default value is **no**.
   * 
   * For the authentication logic, see **Stream ingest callback authentication description** below.
   * 
   * @example
   * yes
   */
  notifyReqAuth?: string;
  /**
   * @remarks
   * The URL to which live stream information is pushed.
   * 
   * @example
   * http://guide.aliyundoc.com/notify
   */
  notifyUrl?: string;
  ownerId?: number;
  /**
   * @remarks
   * The callback URL for stream switching information.
   * 
   * @example
   * http://guide.aliyundoc.com/switchnotify
   */
  switchNotifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      exceptionNotifyUrl: 'ExceptionNotifyUrl',
      notifyAuthKey: 'NotifyAuthKey',
      notifyReqAuth: 'NotifyReqAuth',
      notifyUrl: 'NotifyUrl',
      ownerId: 'OwnerId',
      switchNotifyUrl: 'SwitchNotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      exceptionNotifyUrl: 'string',
      notifyAuthKey: 'string',
      notifyReqAuth: 'string',
      notifyUrl: 'string',
      ownerId: 'number',
      switchNotifyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

