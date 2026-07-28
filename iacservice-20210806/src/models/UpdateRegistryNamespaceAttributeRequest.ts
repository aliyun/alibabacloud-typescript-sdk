// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRegistryNamespaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The access permission. Valid values:
   * 
   * - private: private access.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2da11a5501f18cc5e004
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      clientToken: 'clientToken',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

