// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRumAppRequest extends $dara.Model {
  /**
   * @remarks
   * The group where the application resides.
   * 
   * @example
   * default
   */
  appGroup?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * b590lhguqs@28f515462******
   */
  appId?: string;
  /**
   * @remarks
   * The region where the application resides. You can leave this parameter empty or set it to China East 2 Finance.
   * 
   * @example
   * cn-shanghai-finance-1
   */
  realRegionId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appGroup: 'AppGroup',
      appId: 'AppId',
      realRegionId: 'RealRegionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroup: 'string',
      appId: 'string',
      realRegionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

