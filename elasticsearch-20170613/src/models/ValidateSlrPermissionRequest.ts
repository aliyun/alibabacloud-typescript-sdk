// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateSlrPermissionRequest extends $dara.Model {
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AliyunServiceRoleForElasticsearchCollector
   */
  rolename?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      rolename: 'rolename',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      rolename: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

