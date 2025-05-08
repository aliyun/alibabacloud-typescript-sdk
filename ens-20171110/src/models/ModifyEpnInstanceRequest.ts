// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEpnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EPN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * epn-****
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The name of the EPN instance.
   * 
   * @example
   * ens_test_epn
   */
  EPNInstanceName?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 1 Mbit/s to 100 Mbit/s.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The networking mode. Valid values:
   * 
   * *   **SpeedUp**: Intelligent acceleration network (Internet).
   * *   **Connection**: Internal network.
   * *   **SpeedUpAndConnection**: Intelligent acceleration network and internal network.
   * 
   * >  The internal network supports only **Connection** and **SpeedUpAndConnection**.
   * 
   * @example
   * SpeedUp
   */
  networkingModel?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      networkingModel: 'NetworkingModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      internetMaxBandwidthOut: 'number',
      networkingModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

