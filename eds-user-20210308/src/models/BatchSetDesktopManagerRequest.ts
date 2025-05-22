// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetDesktopManagerRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  isDesktopManager?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      isDesktopManager: 'IsDesktopManager',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDesktopManager: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

