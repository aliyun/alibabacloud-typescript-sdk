// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMessageToAndroidRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The content of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * my body
   */
  body?: string;
  /**
   * @remarks
   * A custom ID for the push task. If \\`JobKey\\` is not empty, this field is included in the receipt logs. For more information, see [Receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * Specifies whether to store the message offline. The default value is false.
   * 
   * If you store the message and the user is offline, the message is sent again when the user comes online within the time-to-live (TTL) period. The default TTL is 72 hours.
   * 
   * @example
   * true
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * The push target. Valid values:
   * 
   * - **DEVICE**: Pushes messages to devices.
   * 
   * - **ACCOUNT**: Pushes messages to accounts.
   * 
   * - **ALIAS**: Pushes messages to aliases.
   * 
   * - **TAG**: Pushes messages to tags.
   * 
   * - **ALL**: Pushes messages to all devices.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * Set this parameter based on the value of \\`Target\\`. Use commas (,) to separate multiple values. If you exceed the limit, send the pushes in batches.
   * 
   * - If \\`Target\\` is set to \\`DEVICE\\`, specify device IDs. Example: `deviceid111,deviceid1111`. You can specify up to 1,000 device IDs.
   * 
   * - If \\`Target\\` is set to \\`ACCOUNT\\`, specify account IDs. Example: `account111,account222`. You can specify up to 1,000 account IDs.
   * 
   * - If \\`Target\\` is set to \\`ALIAS\\`, specify aliases. Example: `alias111,alias222`. You can specify up to 1,000 aliases.
   * 
   * - If \\`Target\\` is set to \\`TAG\\`, you can specify one or more tags. For more information about the format, see [Tag format](https://help.aliyun.com/document_detail/434847.html).
   * 
   * - If \\`Target\\` is set to \\`ALL\\`, set the value to **all**.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  targetValue?: string;
  /**
   * @remarks
   * The title of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * my title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
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

