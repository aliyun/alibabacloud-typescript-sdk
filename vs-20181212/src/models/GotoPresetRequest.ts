// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GotoPresetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
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

