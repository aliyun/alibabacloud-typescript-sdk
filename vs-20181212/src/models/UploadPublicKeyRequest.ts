// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Base64-encoded public key content.
   * 
   * This parameter is required.
   * 
   * @example
   * verify_dffeb6610035dcb77b413a59c3*****
   */
  content?: string;
  /**
   * @remarks
   * Description of the public key.
   * 
   * @example
   * 测试使用
   */
  description?: string;
  /**
   * @remarks
   * Group for the public key. Used for public key management.
   * 
   * 1. Length: 0 to 255 characters.
   * 
   * 2. Valid characters: lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * 3. First character must be a letter or digit.
   * 
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * Name of the public key. Must be unique.
   * 
   * 1. Length: 8 to 255 characters.
   * 
   * 2. Valid characters: lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * 3. First character must be a letter or digit.
   * 
   * 4. Prefix cannot be group-.
   * 
   * This parameter is required.
   * 
   * @example
   * mykey-v1.0
   */
  keyName?: string;
  /**
   * @remarks
   * Type of the public key. Valid values:
   * 
   * - **adb**: ADB key.
   * 
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

