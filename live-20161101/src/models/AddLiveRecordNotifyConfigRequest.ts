// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveRecordNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The streamer streaming domain.
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
   * - true: Required. If NeedStatusNotify is set to **true**, the response includes a recording status callback example.
   * - false (default): Not required.
   * 
   * @example
   * false
   */
  needStatusNotify?: boolean;
  /**
   * @remarks
   * The callback authentication key. The key must be 16 to 32 characters in length and can contain only letters and digits.
   * > This parameter is required when the NotifyReqAuth parameter is set to true.
   * 
   * @example
   * chenhuanxin249088
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * Specifies whether to enable callback authentication. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false (default): Disabled.
   * 
   * > When this parameter is set to true, the NotifyAuthKey parameter is required.
   * 
   * @example
   * true
   */
  notifyReqAuth?: boolean;
  /**
   * @remarks
   * The callback URL for recording events and status callbacks.
   * 
   * > The URL must start with `http://` or `https://`. For more information, see [Recording event callback](https://help.aliyun.com/document_detail/55016.html).
   * 
   * This parameter is required.
   * 
   * @example
   * http://demo.aliyundoc.com/examplecallback.action
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The callback URL for on-demand recording.
   * 
   * > The URL must start with `http://` or `https://`. For more information, see [On-demand recording callback](https://help.aliyun.com/document_detail/85910.html).
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

