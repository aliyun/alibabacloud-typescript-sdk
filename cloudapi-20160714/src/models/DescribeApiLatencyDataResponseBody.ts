// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The time of the monitoring metric. The time format follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2016-07-28T08:20:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The value corresponding to the monitoring metric.
   * 
   * @example
   * 15
   */
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataResponseBodyCallLatencys extends $dara.Model {
  monitorItem?: DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem },
    };
  }

  validate() {
    if(Array.isArray(this.monitorItem)) {
      $dara.Model.validateArray(this.monitorItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLatencyDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about API call latency. It is an array consisting of MonitorItem data.
   */
  callLatencys?: DescribeApiLatencyDataResponseBodyCallLatencys;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callLatencys: 'CallLatencys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callLatencys: DescribeApiLatencyDataResponseBodyCallLatencys,
      requestId: 'string',
    };
  }

  validate() {
    if(this.callLatencys && typeof (this.callLatencys as any).validate === 'function') {
      (this.callLatencys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

