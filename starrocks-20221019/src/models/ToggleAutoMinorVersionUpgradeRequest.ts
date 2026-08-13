// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ToggleAutoMinorVersionUpgradeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic minor version upgrades. Valid values:
   * 
   * - true: Enables automatic upgrades.
   * 
   * - false: Disables automatic upgrades.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'AutoUpgrade',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

