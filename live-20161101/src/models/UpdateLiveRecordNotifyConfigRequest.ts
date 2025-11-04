// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveRecordNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to enable callbacks for recording status. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  needStatusNotify?: boolean;
  notifyAuthKey?: string;
  notifyReqAuth?: boolean;
  /**
   * @remarks
   * The callback URL that is used to receive notifications about recording events and status.
   * 
   * > 
   * 
   * *   The URL must start with `http://` or `https://`.
   * 
   * *   You must use URLEncoder for encoding. This way, the system can identify Chinese characters, spaces, and special characters.
   * 
   * This parameter is required.
   * 
   * @example
   * http://learn.aliyundoc.com/examplecallback.action
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The callback URL for on-demand recordings.
   * 
   * > 
   * 
   * *   The URL must start with `http://` or `https://`.
   * 
   * *   You must use URLEncoder for encoding. This way, the system can identify Chinese characters, spaces, and special characters.
   * 
   * @example
   * http://guide.aliyundoc.com/ondemandcallback.action
   */
  onDemandUrl?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      needStatusNotify: 'NeedStatusNotify',
      notifyAuthKey: 'NotifyAuthKey',
      notifyReqAuth: 'NotifyReqAuth',
      notifyUrl: 'NotifyUrl',
      onDemandUrl: 'OnDemandUrl',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      needStatusNotify: 'boolean',
      notifyAuthKey: 'string',
      notifyReqAuth: 'boolean',
      notifyUrl: 'string',
      onDemandUrl: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

