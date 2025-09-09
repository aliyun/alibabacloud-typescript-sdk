// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeInstanceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance that you want to upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgaen89****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The version number of the PolarDB-X 1.0 instance. You can leave this parameter unspecified.
   * 
   * @example
   * t-drds-server-5.4.12-16348095.noarch.rpm
   */
  rpm?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      rpm: 'Rpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
      rpm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

