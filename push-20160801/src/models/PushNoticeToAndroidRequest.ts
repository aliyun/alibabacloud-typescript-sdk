// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushNoticeToAndroidRequest extends $dara.Model {
  /**
   * @remarks
   * Your AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The body of the notification.
   * 
   * This parameter is required.
   * 
   * @example
   * body
   */
  body?: string;
  /**
   * @remarks
   * Custom key-value pairs for Android-specific extensions. Pass this as a JSON object.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  extParameters?: string;
  /**
   * @remarks
   * A custom ID for the push task. If you specify a non-empty JobKey, it appears in the delivery receipt log. For more information, see [Delivery receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * Whether to store the notification for offline delivery. Default: false.
   * 
   * If enabled, the notification is redelivered when the user comes online within the time-to-live (TTL) period. Default TTL: 72 hours.
   * 
   * @example
   * true
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * The target of the push. Valid values:
   * 
   * - **DEVICE**: Push to specific devices.
   * 
   * - **ACCOUNT**: Push to specific accounts.
   * 
   * - **ALIAS**: Push to users with specific aliases.
   * 
   * - **TAG**: Push to users with specific tags.
   * 
   * - **ALL**: Push to all devices.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * Set this based on the Target value. Separate multiple values with commas. If you exceed the limit, send multiple requests.
   * 
   * - If Target=DEVICE, use values such as `deviceid111,deviceid1111`. Maximum: 1000 devices.
   * 
   * - If Target=ACCOUNT, use values such as `account111,account222`. Maximum: 1000 accounts.
   * 
   * - If Target=ALIAS, use values such as `alias111,alias222`. Maximum: 1000 aliases.
   * 
   * - If Target=TAG, support single or multiple tags. For format details, see [Tag format](https://help.aliyun.com/document_detail/434847.html).
   * 
   * - If Target=ALL, set this to **ALL**.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  /**
   * @remarks
   * The title of the notification.
   * 
   * This parameter is required.
   * 
   * @example
   * title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
      extParameters: 'ExtParameters',
      jobKey: 'JobKey',
      storeOffline: 'StoreOffline',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      body: 'string',
      extParameters: 'string',
      jobKey: 'string',
      storeOffline: 'boolean',
      target: 'string',
      targetValue: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

