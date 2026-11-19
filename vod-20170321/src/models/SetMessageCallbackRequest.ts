// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetMessageCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. If you do not specify this parameter, the ID of the default application is used, which is fixed at **app-1000000**.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The authentication key. The key can be up to 32 characters in length and must contain both uppercase and lowercase letters and digits. You can set this parameter when the callback method is set to **HTTP**.
   * 
   * @example
   * Dsf346dvet
   */
  authKey?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication for HTTP callbacks. This parameter takes effect only when the callback method is set to **HTTP**. Valid values:
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  authSwitch?: string;
  /**
   * @remarks
   * The callback method. Valid values:
   * - **HTTP**
   * - **Simple MSMQ (formerly MNS)**
   * 
   * @example
   * HTTP
   */
  callbackType?: string;
  /**
   * @remarks
   * The callback URL. This parameter is required when the callback method is set to **HTTP**.
   * The callback URL cannot exceed 256 bytes in length. You cannot specify multiple callback URLs.
   * 
   * @example
   * http://developer.aliyundoc.com
   */
  callbackURL?: string;
  /**
   * @remarks
   * The callback event types. If this parameter is left empty, all message notifications are disabled. If this parameter is set to **ALL**, all message notifications are enabled. You can also specify specific event types to enable. Separate multiple event types with commas (,). For more information about the valid values, see [Event types](https://help.aliyun.com/document_detail/55627.html).
   * 
   * <props="china">
   * > All AI-related events, such as AIMediaAuditComplete and AIMediaDNAComplete, use the value **AIComplete**.
   * 
   * @example
   * FileUploadComplete
   */
  eventTypeList?: string;
  /**
   * @remarks
   * The public endpoint of the MSMQ. Settings for this parameter are required when the callback method is set to **Simple MSMQ (formerly MNS)**. You can logon to the [Message Service console](https://account.aliyun.com/login/login.html) and click the **Get Endpoint** button in the upper-right corner to obtain the endpoint. For more information, see [Endpoints](https://help.aliyun.com/document_detail/27480.html).
   * 
   * @example
   * http://****.mns.cn-shanghai.aliyuncs.com/
   */
  mnsEndpoint?: string;
  /**
   * @remarks
   * The name of the MSMQ. You can logon to the [Message Service console](https://account.aliyun.com/login/login.html) and view the name in the **Queue List**. Settings for this parameter are required when the callback method is set to **Simple MSMQ (formerly MNS)**.
   * 
   * @example
   * quene_name
   */
  mnsQueueName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      authKey: 'AuthKey',
      authSwitch: 'AuthSwitch',
      callbackType: 'CallbackType',
      callbackURL: 'CallbackURL',
      eventTypeList: 'EventTypeList',
      mnsEndpoint: 'MnsEndpoint',
      mnsQueueName: 'MnsQueueName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      authKey: 'string',
      authSwitch: 'string',
      callbackType: 'string',
      callbackURL: 'string',
      eventTypeList: 'string',
      mnsEndpoint: 'string',
      mnsQueueName: 'string',
      ownerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

