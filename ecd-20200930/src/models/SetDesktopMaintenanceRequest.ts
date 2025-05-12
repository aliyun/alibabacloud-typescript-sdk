// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDesktopMaintenanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * enter
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopIds: 'DesktopIds',
      mode: 'Mode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

