// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetMessageCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. If you leave this parameter empty, the default value **app-1000000** is used.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The authentication key. The key can be up to 32 characters in length and must contain uppercase letters, lowercase letters, and digits. This parameter takes effect only when you set CallbackType to **HTTP**.
   * 
   * @example
   * Dsf346dvet
   */
  authKey?: string;
  /**
   * @remarks
   * Specifies whether to enable callback authentication. This parameter takes effect only when you set CallbackType to **HTTP**. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  authSwitch?: string;
  /**
   * @remarks
   * The callback method. Valid values:
   * 
   * *   **HTTP**
   * *   **Simple Message Queue(formerly MNS)**
   * 
   * @example
   * HTTP
   */
  callbackType?: string;
  /**
   * @remarks
   * The callback URL. This parameter is required if you set CallbackType to **HTTP**. The callback URL cannot exceed 256 bytes in length. You can specify only one callback URL.
   * 
   * @example
   * http://developer.aliyundoc.com
   */
  callbackURL?: string;
  /**
   * @remarks
   * The type of the callback event. If you do not set this parameter, notifications for all types of events are disabled. If you set this parameter to **ALL**, notifications for all types of events are enabled. You can specify the event types for which notifications are enabled. Separate multiple event types with commas (,). For more information about the valid values of this parameter, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @example
   * FileUploadComplete
   */
  eventTypeList?: string;
  /**
   * @remarks
   * The public endpoint of Message Service (MNS). This parameter only takes effect when the CallbackType parameter is set to **Simple Message Queue(formerly MNS)**. To obtain the public endpoint, log on to the [Simple Message Queue(formerly MNS) console](https://account.aliyun.com/login/login.html) and click **Get Endpoint** in the upper-right corner of the Topics page. For more information, see [Endpoint](https://help.aliyun.com/document_detail/27480.html).
   * 
   * @example
   * http://****.mns.cn-shanghai.aliyuncs.com/
   */
  mnsEndpoint?: string;
  /**
   * @remarks
   * The name of the Simple Message Queue(formerly MNS). You can obtain the name of the Simple Message Queue(formerly MNS) on the **Queues** page in the [Simple Message Queue(formerly MNS) console](https://account.aliyun.com/login/login.html). This parameter is required when you set CallbackType to **Simple Message Queue(formerly MNS)**.
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

