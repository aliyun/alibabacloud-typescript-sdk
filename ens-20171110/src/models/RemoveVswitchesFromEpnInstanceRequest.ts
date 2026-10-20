// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveVSwitchesFromEpnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The Edge Private Network (EPN) instance ID. The NetworkingModel of the EPN instance must be Connection or SpeedUpAndConnection. The SpeedUp pattern does not support vSwitch operations.
   * 
   * This parameter is required.
   * 
   * @example
   * epn-****
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The internal network configuration information to remove.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"VSwitchId":"vs-ixxxx"}]
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

