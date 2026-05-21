// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeInstanceRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * hot
   */
  type?: string;
  /**
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

