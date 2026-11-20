// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The upgrade type.
   * 
   * @example
   * hot
   */
  type?: string;
  /**
   * @remarks
   * The upgrade time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-02-11 10:00:01
   */
  upgradeTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      type: 'type',
      upgradeTime: 'upgradeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      type: 'string',
      upgradeTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

