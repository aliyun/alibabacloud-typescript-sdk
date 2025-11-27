// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetDesktopManagerRequest extends $dara.Model {
  /**
   * @remarks
   * Whether the convenience account has the local administrator permissions on cloud computers.
   * 
   * Valid values:
   * 
   * *   0: no
   * *   1 (default): yes
   * 
   * @example
   * 1
   */
  isDesktopManager?: string;
  /**
   * @remarks
   * The convenience accounts.
   * 
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

