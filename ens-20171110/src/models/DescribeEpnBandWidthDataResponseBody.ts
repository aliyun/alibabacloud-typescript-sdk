// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData extends $dara.Model {
  /**
   * @remarks
   * The downstream bandwidth. Unit: bit/s.
   * 
   * @example
   * 0
   */
  downBandWidth?: number;
  /**
   * @remarks
   * The inbound public network traffic of the instance. Unit: bits.
   * 
   * @example
   * 0
   */
  internetRX?: number;
  /**
   * @remarks
   * The outbound public network traffic of the instance. Unit: bits.
   * 
   * @example
   * 0
   */
  internetTX?: number;
  /**
   * @remarks
   * The timestamp of the monitoring data. The time is in UTC and in the format of yyyy-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2019-10-12T05:45:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The upstream bandwidth. Unit: bit/s.
   * 
   * @example
   * 0
   */
  upBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      downBandWidth: 'DownBandWidth',
      internetRX: 'InternetRX',
      internetTX: 'InternetTX',
      timeStamp: 'TimeStamp',
      upBandWidth: 'UpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downBandWidth: 'number',
      internetRX: 'number',
      internetTX: 'number',
      timeStamp: 'string',
      upBandWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponseBodyMonitorData extends $dara.Model {
  /**
   * @remarks
   * The bandwidth monitoring data.
   */
  bandWidthMonitorData?: DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData[];
  /**
   * @remarks
   * The maximum downstream bandwidth within the queried time range. Unit: bit/s.
   * 
   * @example
   * 16817468
   */
  maxDownBandWidth?: number;
  /**
   * @remarks
   * The maximum upstream bandwidth within the queried time range. Unit: bit/s.
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

export class DescribeEpnBandWidthDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of the instance.
   */
  monitorData?: DescribeEpnBandWidthDataResponseBodyMonitorData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1D289DAA-F6DA-5FC4-AE47-F5C8B6277BFC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: DescribeEpnBandWidthDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.monitorData && typeof (this.monitorData as any).validate === 'function') {
      (this.monitorData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

