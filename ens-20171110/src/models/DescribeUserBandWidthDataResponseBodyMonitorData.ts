// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData } from "./DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData";


export class DescribeUserBandWidthDataResponseBodyMonitorData extends $dara.Model {
  /**
   * @remarks
   * The bandwidth data.
   */
  bandWidthMonitorData?: DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData[];
  /**
   * @remarks
   * The maximum outbound bandwidth within the queried time range. Unit: bit/s.
   * 
   * @example
   * 16817468
   */
  maxDownBandWidth?: string;
  /**
   * @remarks
   * The maximum inbound bandwidth within the queried time range. Unit: bit/s.
   * 
   * @example
   * 231008
   */
  maxUpBandWidth?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidthMonitorData: 'BandWidthMonitorData',
      maxDownBandWidth: 'MaxDownBandWidth',
      maxUpBandWidth: 'MaxUpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthMonitorData: { 'type': 'array', 'itemType': DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData },
      maxDownBandWidth: 'string',
      maxUpBandWidth: 'string',
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

