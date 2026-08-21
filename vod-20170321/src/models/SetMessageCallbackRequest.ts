// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetMessageCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. If this parameter is not specified, the ID of the default application is used, which is the fixed value: **app-1000000**.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The authentication key. The key can be up to 32 characters in length and must contain uppercase letters, lowercase letters, and digits. This parameter can be set when the callback method is **HTTP**.
   * 
   * @example
   * Dsf346dvet
   */
  authKey?: string;
  /**
   * @remarks
   * The authentication switch for HTTP callbacks. This parameter takes effect only when the callback method is set to **HTTP**. Valid values:
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * @example
   * on
   */
  authSwitch?: string;
  /**
   * @remarks
   * The callback method. Valid values:
   * - **HTTP**
   * - **Simple Message Queue (formerly MNS)**
   * 
   * @example
   * HTTP
   */
  callbackType?: string;
  /**
   * @remarks
   * The callback URL. This parameter is required when the callback method is set to **HTTP**.
   * The callback URL cannot exceed 256 bytes in length. Multiple callback URLs are not supported.
   * 
   * @example
   * http://developer.aliyundoc.com
   */
  callbackURL?: string;
  /**
   * @remarks
   * The event types for callbacks. If this parameter is left empty, all notifications are disabled. If this parameter is set to **ALL**, all notifications are enabled. You can also specify specific event types, separated by commas (,). For the valid event types, see [Event types](https://help.aliyun.com/document_detail/55627.html).
   * 
   * <props="china">
   * > All AI-related events such as AIMediaAuditComplete and AIMediaDNAComplete use the value **AIComplete**.
   * 
   * @example
   * FileUploadComplete
   */
  eventTypeList?: string;
  /**
   * @remarks
   * The public endpoint of Simple Message Queue (formerly MNS). This parameter is required when the callback method is set to **Simple Message Queue (formerly MNS)**. Log on to the [Simple Message Queue (formerly MNS) console](https://account.aliyun.com/login/login.html) and click the **Get Endpoint** button in the upper-right corner to obtain the endpoint. For more information, see [Endpoint](https://help.aliyun.com/document_detail/27480.html).
   * 
   * @example
   * http://****.mns.cn-shanghai.aliyuncs.com/
   */
  mnsEndpoint?: string;
  /**
   * @remarks
   * The name of the message queue. Log on to the [Simple Message Queue (formerly MNS) console](https://account.aliyun.com/login/login.html) and view the queue in the **Queue List**. This parameter is required when the callback method is set to **Simple Message Queue (formerly MNS)**.
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

