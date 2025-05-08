// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData } from "./DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData";


export class DescribeEpnBandWidthDataResponseBodyMonitorData extends $dara.Model {
  /**
   * @remarks
   * The bandwidth data.
   */
  bandWidthMonitorData?: DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData[];
  /**
   * @remarks
   * The maximum outbound bandwidth within the queried time range. Unit: bit/s.
   * 
   * @example
   * 16817468
   */
  maxDownBandWidth?: number;
  /**
   * @remarks
   * The maximum inbound bandwidth within the queried time range. Unit: bit/s.
   * 
   * @example
   * 231008
   */
  maxUpBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      bandWidthMonitorData: 'BandWidthMonitorData',
      maxDownBandWidth: 'MaxDownBandWidth',
      maxUpBandWidth: 'MaxUpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthMonitorData: { 'type': 'array', 'itemType': DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData },
      maxDownBandWidth: 'number',
      maxUpBandWidth: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bandWidthMonitorData)) {
      $dara.Model.validateArray(this.bandWidthMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

