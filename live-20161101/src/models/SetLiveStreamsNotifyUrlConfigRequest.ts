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
   * Exception event callback URL.
   * 
   * @example
   * https://4a7e5f08.r37.cpolar.top/live/Rsssd/call-back/streamStart
   */
  exceptionNotifyUrl?: string;
  /**
   * @remarks
   * The authentication key.
   * 
   * >  This parameter is required if you set the NotifyReqAuth parameter to **yes**.
   * 
   * Value requirements:
   * 
   * *   The key must be 16 to 64 characters in length.
   * *   The key can contain letters and digits.
   * 
   * @example
   * 123456
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * Specifies whether to enable callback authentication. Valid values:
   * 
   * *   **yes**: enables callback authentication. If you set this parameter to **yes**, you must also specify the NotifyAuthKey parameter.
   * *   **no**: disables callback authentication.
   * 
   * >  If you do not specify this parameter, the default value **no** is used.
   * 
   * For information about the authentication logic, see **Authentication for stream ingest callbacks**.
   * 
   * @example
   * yes
   */
  notifyReqAuth?: string;
  /**
   * @remarks
   * The URL to which the stream ingest callbacks are sent.
   * 
   * @example
   * http://guide.aliyundoc.com/notify
   */
  notifyUrl?: string;
  ownerId?: number;
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

