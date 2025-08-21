// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData extends $dara.Model {
  /**
   * @remarks
   * The outbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 0
   */
  downBandWidth?: number;
  /**
   * @remarks
   * The Internet traffic to the instance. Unit: bytes.
   * 
   * @example
   * 0
   */
  internetRX?: number;
  /**
   * @remarks
   * The Internet traffic from the instance. Unit: bytes.
   * 
   * @example
   * 0
   */
  internetTX?: number;
  /**
   * @remarks
   * The timestamp when the monitoring data was queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-12T05:45:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The inbound bandwidth. Unit: bit/s.
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

export class DescribeUserBandWidthDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. 0 indicates that the request was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The monitoring data.
   */
  monitorData?: DescribeUserBandWidthDataResponseBodyMonitorData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50373E71-7710-4620-8AAB-133CCE49451C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      monitorData: DescribeUserBandWidthDataResponseBodyMonitorData,
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

