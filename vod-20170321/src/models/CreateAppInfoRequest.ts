// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. The name must be unique.
   * - The name can be up to 128 characters in length and can contain Chinese characters, letters, digits, periods (.), hyphens (-), and at signs (@).
   * - UTF-8 encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The application description.
   * - The description can be up to 512 characters in length.
   * - UTF-8 encoding.
   * 
   * @example
   * myfirstapp
   */
  description?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzko7fsuj****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

