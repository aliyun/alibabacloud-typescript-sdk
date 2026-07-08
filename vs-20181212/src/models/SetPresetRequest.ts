// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPresetRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * Preset ID.<br>
   * Valid values: 1 to 7.<br>
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  presetId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      presetId: 'PresetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      presetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

