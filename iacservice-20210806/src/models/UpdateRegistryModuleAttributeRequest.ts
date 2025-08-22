// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRegistryModuleAttributeRequest extends $dara.Model {
  /**
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clientToken?: string;
  /**
   * @example
   * test
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

