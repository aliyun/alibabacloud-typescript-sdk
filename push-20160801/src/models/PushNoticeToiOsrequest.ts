// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushNoticeToiOSRequest extends $dara.Model {
  /**
   * @remarks
   * iOS notifications use Apple’s APNs service. Specify the environment.
   * 
   * - DEV: Development environment.
   * 
   * - PRODUCT: Production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  apnsEnv?: string;
  /**
   * @remarks
   * Your AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @remarks
   * The body text of the notification.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello World
   */
  body?: string;
  /**
   * @remarks
   * A custom key-value map for developer extensions.
   * 
   * > For iOS devices, pass this parameter as a JSON object. Otherwise, parsing fails.
   * 
   * @example
   * {"k1":"ios","k2":"v2"}
   */
  extParameters?: string;
  /**
   * @remarks
   * A custom ID for the push task. If you specify a JobKey, the delivery log includes this field. For more information, see [Delivery logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * 123
   */
  jobKey?: string;
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
   * Values depend on the Target value. Separate multiple values with commas. If you exceed the limit, send multiple requests.
   * 
   * - If Target=DEVICE, use values such as `deviceid111,deviceid1111`. Maximum: 1000.
   * 
   * - If Target=ACCOUNT, use values such as `account111,account222`. Maximum: 1000.
   * 
   * - If Target=ALIAS, use values such as `alias111,alias222`. Maximum: 1000.
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
   * - iOS 10 and later: Displays as the notification title.
   * 
   * - iOS 8.2 through iOS 9.x: Replaces the app name in the notification.
   * 
   * @example
   * title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      apnsEnv: 'ApnsEnv',
      appKey: 'AppKey',
      body: 'Body',
      extParameters: 'ExtParameters',
      jobKey: 'JobKey',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apnsEnv: 'string',
      appKey: 'number',
      body: 'string',
      extParameters: 'string',
      jobKey: 'string',
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

