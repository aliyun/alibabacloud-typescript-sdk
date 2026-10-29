// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The encoded content of the public key. The default encoding format is Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * verify_dffeb6610035dcb77b413a59c3*****
   */
  content?: string;
  /**
   * @remarks
   * The description of the public key.
   * 
   * @example
   * For testing purposes
   */
  description?: string;
  /**
   * @remarks
   * The group of the public key. Used for public key management.
   * Naming conventions:
   * 1. The length must be 0 to 255 characters.
   * 2. The name can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 3. The first character must be a letter or a digit.
   * 
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * The name of the public key. The name must be unique.
   * Naming conventions:
   * 1. The length must be 8 to 255 characters.
   * 2. The name can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 3. The first character must be a letter or a digit.
   * 4. The prefix cannot be "group-".
   * 
   * This parameter is required.
   * 
   * @example
   * mykey-v1.0
   */
  keyName?: string;
  /**
   * @remarks
   * The type of the public key. Valid values:
   * 
   * - **adb**: ADB key.
   * - **ssh**: SSH key.
   * 
   * @example
   * ssh
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

