// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinVSwitchesToEpnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The edge-to-edge communication instance ID.
   * 
   * The NetworkingModel of the EPN instance must be Connection or SpeedUpAndConnection. The SpeedUp pattern does not allow you to associate vSwitches.
   * 
   * This parameter is required.
   * 
   * @example
   * epn-xxxx
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The internal networking information to be added.
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

