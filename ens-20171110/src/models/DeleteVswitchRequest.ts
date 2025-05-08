// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-5m9xhl****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

