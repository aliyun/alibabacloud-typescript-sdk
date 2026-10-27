// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetDesktopManagerRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * Specifies whether the convenience account has local administrator permissions on the cloud desktop.
   * 
   * @example
   * 1
   */
  isDesktopManager?: string;
  /**
   * @remarks
   * The list of convenience accounts.
   * 
   * This parameter is required.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      isDesktopManager: 'IsDesktopManager',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
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

