// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindTagRequest extends $dara.Model {
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
   * The ID of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  clientKey?: string;
  /**
   * @remarks
   * The type of the ClientKey. Valid value:
   * 
   * - **DEVICE**: The key is a device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  keyType?: string;
  /**
   * @remarks
   * Specifies the tag to unbind. To unbind multiple tags, separate them with commas. A maximum of 10 tags, each up to 128 characters long, can be unbound per request. The system supports a total of 10,000 tags.
   * 
   * This parameter is required.
   * 
   * @example
   * test_tag1,test_tag2
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

