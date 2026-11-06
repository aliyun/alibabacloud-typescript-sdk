// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterAutoUpgradeMinorVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The minor engine version update policy. Valid values: Auto: automatic update. Manual: manual update.
   * 
   * This parameter is required.
   * 
   * @example
   * Manual
   */
  autoUpgradeMinorVersion?: string;
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-******************
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeMinorVersion: 'string',
      DBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

