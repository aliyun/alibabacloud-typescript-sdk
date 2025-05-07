// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceNetworkSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the RDS Custom instance.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s.
   * 
   * Valid values: 0 to 1024. Default value: 0.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: string;
  /**
   * @remarks
   * The billing method of the bandwidth. Only the **pay-by-traffic** billing method is supported.
   * 
   * >  If the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may not be limited.
   * 
   * @example
   * PayByTraffic
   */
  networkChargeType?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      networkChargeType: 'NetworkChargeType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      internetMaxBandwidthOut: 'string',
      networkChargeType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

