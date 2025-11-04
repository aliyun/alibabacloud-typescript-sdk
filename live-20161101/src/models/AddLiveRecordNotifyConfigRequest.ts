// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveRecordNotifyConfigRequest extends $dara.Model {
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
   * *   true: enables callbacks for recording status. If you set this parameter to **true**, an example of recording status callback is returned.
   * *   false (default): disables callbacks for recording status.
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
   * >  The URL must start with `http://` or `https://`. For more information, see [Callbacks for live stream recording](https://help.aliyun.com/document_detail/55016.html).
   * 
   * This parameter is required.
   * 
   * @example
   * http://demo.aliyundoc.com/examplecallback.action
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The callback URL for on-demand recordings.
   * 
   * >  The URL must start with `http://` or `https://`. For more information, see [On-demand recording](https://help.aliyun.com/document_detail/85910.html).
   * 
   * @example
   * http://learn.aliyundoc.com/ondemandcallback.action
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

