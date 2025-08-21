// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  clientKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  keyType?: string;
  /**
   * @remarks
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

