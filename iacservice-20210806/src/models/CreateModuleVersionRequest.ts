// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModuleVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The version description. The length cannot exceed 256 characters.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * The template version name. It must meet the following requirements:
   * 
   * - The length is 2 to 128 characters.
   * - It can contain uppercase and lowercase letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). It cannot start or end with a hyphen, underscore, or period.
   * 
   * This parameter is required.
   * 
   * @example
   * versionName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

