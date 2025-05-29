// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig extends $dara.Model {
  /**
   * @example
   * success
   */
  bandwidthStatus?: string;
  /**
   * @example
   * 100
   */
  maxEgressBandwidth?: number;
  /**
   * @example
   * 100
   */
  maxIngressBandwidth?: number;
  /**
   * @example
   * 2023-08-17T09:54:35Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthStatus: 'BandwidthStatus',
      maxEgressBandwidth: 'MaxEgressBandwidth',
      maxIngressBandwidth: 'MaxIngressBandwidth',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthStatus: 'string',
      maxEgressBandwidth: 'number',
      maxIngressBandwidth: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

