// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application. The application name must be unique.
   * 
   * *   The name can contain letters, digits, periods (.), hyphens (-), and at signs (@). The name can be up to 128 characters in length.
   * *   The value must be encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * *   The description can contain up to 512 characters in length.
   * *   The value must be encoded in UTF-8.
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

