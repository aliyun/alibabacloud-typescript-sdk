// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveVSwitchesFromEpnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of theEPN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * epn-****
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The internal networking information that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * VSwitchesInfo=[{"VSwitchId":"vs-ixxxx"},{"VSwitchId":"vs-ixxxx"}]
   */
  vSwitchesInfo?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      vSwitchesInfo: 'VSwitchesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      vSwitchesInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

