// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEpnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Edge-to-Edge network instance.
   * 
   * @example
   * test EPNInstanceName
   */
  EPNInstanceName?: string;
  /**
   * @remarks
   * The type of the Edge-to-Edge communication instance. Valid value: **EdgeToEdge**.
   * 
   * This parameter is required.
   * 
   * @example
   * EdgeToEdge
   */
  EPNInstanceType?: string;
  /**
   * @remarks
   * The network billing type. Valid values:
   * 
   * - **BandwidthByDay**: Daily peak bandwidth.
   * - **95BandwidthByMonth**: Monthly 95th percentile peak bandwidth.
   * - **PayByBandwidth4thMonth**: Monthly fourth peak bandwidth.
   * - **PayByBandwidth**: Bandwidth with defined specifications.
   * 
   * Only one of the Billable methods is supported. If a billing method already exists, the new value is invalid by default, and the existing one prevails.
   * 
   * This parameter is required.
   * 
   * @example
   * BandwidthByDay
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth to the Internet. Unit: Mbit/s. Valid values: 1 to 100.
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
   * - **SpeedUp**: Intelligent acceleration (Internet).
   * - **Connection**: Internal network connectivity (internal network mode).
   * - **SpeedUpAndConnection**: Intelligent acceleration and internal network connectivity (internal network mode).
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

