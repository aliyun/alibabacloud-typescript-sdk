// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMessageToiOSRequest extends $dara.Model {
  /**
   * @remarks
   * AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
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
   * The custom ID for the push Job. If JobKey is not empty, this field is included in the receipt log. For receipt logs, see [Receipt Logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * Whether to store the message offline. StoreOffline is set to false by default.
   * 
   * If stored, and the user is offline during the push, the message is sent again when the user comes online within the time-to-live (TTL). The default time-to-live (TTL) is 72 hours.
   * 
   * @example
   * true
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * Push target. Valid values:
   * 
   * - **DEVICE**: Push by device
   * 
   * - **ACCOUNT**: Push by account
   * 
   * - **ALIAS**: Push by alias
   * 
   * - **TAG**: Push by tag
   * 
   * - **ALL**: Push to all devices
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * Set based on Target. Separate multiple values with commas. If the limit is exceeded, push multiple times.
   * 
   * - Target=DEVICE. Example values: `deviceid111,deviceid1111` (supports up to 1,000).
   * 
   * - Target=ACCOUNT. Example values: `account111,account222` (supports up to 1,000).
   * 
   * - Target=ALIAS. Example values: `alias111,alias222` (supports up to 1,000).
   * 
   * - Target=TAG. Supports single and multiple tags. For format, see [Tag Format](https://help.aliyun.com/document_detail/434847.html).
   * 
   * - Target=ALL. Value is **all**.
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

