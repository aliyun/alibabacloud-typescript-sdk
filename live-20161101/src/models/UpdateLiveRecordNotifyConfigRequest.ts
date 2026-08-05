// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveRecordNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain of the streamer.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether recording task status callbacks are required. Valid values:
   * 
   * - **true**: Recording task status callbacks are required.
   * - **false** (default): Recording task status callbacks are not required.
   * 
   * @example
   * false
   */
  needStatusNotify?: boolean;
  /**
   * @remarks
   * The callback authentication key. The key is 16 to 32 characters in length and can contain only letters and digits.
   * >This parameter is required when the NotifyReqAuth parameter is set to **true**.
   * 
   * @example
   * testkeyyourkey12
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * Specifies whether to enable callback authentication. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * >Default value: **false**. If this parameter is set to **true**, the NotifyAuthKey parameter is required.
   * 
   * @example
   * false
   */
  notifyReqAuth?: boolean;
  /**
   * @remarks
   * The callback URL for recording events, including event callbacks and status callbacks.
   * 
   * > - The URL must start with `http://` or `https://`.
   * > - To properly identify Chinese characters, spaces, and other special characters in the input, perform URL encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * http://learn.aliyundoc.com/examplecallback.action
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The on-demand recording callback URL.
   * 
   * > - The URL must start with `http://` or `https://`.
   * > - To properly identify Chinese characters, spaces, and other special characters in the input, perform URL encoding.
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

