// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinVSwitchesToEpnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * epn-xxxx
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The information about the internal networking to which you want to add the edge network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"VSwitchId":"vs-ixxxx"},{"VSwitchId":"vs-ixxxx"}]
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

