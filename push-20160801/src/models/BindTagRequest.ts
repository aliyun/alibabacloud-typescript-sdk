// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindTagRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey of your application.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The ID of the target device. You can specify a maximum of 1,000 device IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  clientKey?: string;
  /**
   * @remarks
   * The type of the `ClientKey`. Valid value:
   * 
   * - **DEVICE**: Indicates a device target.
   * 
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  keyType?: string;
  /**
   * @remarks
   * The tags to bind. Separate multiple tags with commas (,). You can bind up to 10 tags per request.
   * A tag name can be up to 128 characters long (each Chinese character counts as 1 character). Each application can have up to 10,000 tags. A single device can be bound to multiple tags.
   * 
   * >Notice: 
   * 
   * Do not bind a single tag to more than 100,000 devices. This practice can increase push processing time and increase response time.
   * 
   * - Use the full push feature to send notifications to all devices.
   * 
   * - Split the device set into multiple fine-grained tags and call the push API in batches.
   * 
   * 
   * 
   * > - If you attempt to bind the same tag multiple times, the system automatically removes the duplicates.
   * >
   * > - When a user uninstalls the application from a device, the tags associated with that device are automatically unbound. This unbinding process may be slightly delayed.
   * 
   * This parameter is required.
   * 
   * @example
   * test_tag,test_tag2
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      clientKey: 'ClientKey',
      keyType: 'KeyType',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      clientKey: 'string',
      keyType: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

