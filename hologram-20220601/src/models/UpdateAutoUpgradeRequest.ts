// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoUpgradeRequest extends $dara.Model {
  /**
   * @remarks
   * The upgrade type. Valid values:
   * - auto: Enables automatic minor version upgrades.
   * - manual: Manual upgrade.
   * 
   * @example
   * auto
   */
  autoUpgrade?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'autoUpgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

