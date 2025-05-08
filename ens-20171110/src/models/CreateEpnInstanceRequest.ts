// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEpnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the EPN instance.
   * 
   * @example
   * test EPNInstanceName
   */
  EPNInstanceName?: string;
  /**
   * @remarks
   * The type of the EPN instance. Set the value to **EdgeToEdge**.
   * 
   * This parameter is required.
   * 
   * @example
   * EdgeToEdge
   */
  EPNInstanceType?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   **BandwidthByDay**: Pay by daily peak bandwidth.
   * *   **95BandwidthByMonth**: Pay by monthly 95th percentile bandwidth.
   * *   **PayByBandwidth4thMonth**: Pay by monthly fourth peak bandwidth.
   * *   **PayByBandwidth**: Pay by fixed bandwidth.
   * 
   * You can specify only one metering method for network usage and cannot overwrite the existing metering method.
   * 
   * This parameter is required.
   * 
   * @example
   * BandwidthByDay
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The networking mode. Valid values:
   * 
   * *   **SpeedUp**: intelligent acceleration network (Internet)
   * *   **Connection**: internal network
   * *   **SpeedUpAndConnection**: intelligent acceleration network and internal network
   * 
   * This parameter is required.
   * 
   * @example
   * SpeedUp
   */
  networkingModel?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceName: 'EPNInstanceName',
      EPNInstanceType: 'EPNInstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      networkingModel: 'NetworkingModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceName: 'string',
      EPNInstanceType: 'string',
      internetChargeType: 'string',
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

