// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appIds?: string;
  enable?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      enable: 'Enable',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      enable: 'string',
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

