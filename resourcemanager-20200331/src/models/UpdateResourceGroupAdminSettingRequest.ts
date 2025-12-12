// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceGroupAdminSettingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  creatorAsAdmin?: boolean;
  static names(): { [key: string]: string } {
    return {
      creatorAsAdmin: 'CreatorAsAdmin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAsAdmin: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

