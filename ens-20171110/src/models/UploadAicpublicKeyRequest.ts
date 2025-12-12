// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAICPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Public Key
   * 
   * This parameter is required.
   * 
   * @example
   * verify_dffeb6610035dcb77b413a59c3
   */
  content?: string;
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * Public Key Grouping
   * 
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * Public Key Name
   * 
   * This parameter is required.
   * 
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
   * Public key type
   * 
   * This parameter is required.
   * 
   * @example
   * adb
   */
  keyType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

