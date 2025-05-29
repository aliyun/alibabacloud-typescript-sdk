// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * verify_dffeb6610035dcb77b413a59c3*****
   */
  content?: string;
  description?: string;
  /**
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mykey-v1.0
   */
  keyName?: string;
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

