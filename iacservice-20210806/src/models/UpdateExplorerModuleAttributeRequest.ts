// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExplorerModuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The template description. Length: 0 to 255 characters.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The template name. Length: 1 to 128 characters. The name must be unique.
   * 
   * @example
   * test
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

