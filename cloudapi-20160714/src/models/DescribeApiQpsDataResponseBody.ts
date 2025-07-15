// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiQpsDataResponseBodyCallFailsMonitorItem extends $dara.Model {
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
   * 0
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

export class DescribeApiQpsDataResponseBodyCallFails extends $dara.Model {
  monitorItem?: DescribeApiQpsDataResponseBodyCallFailsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiQpsDataResponseBodyCallFailsMonitorItem },
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

export class DescribeApiQpsDataResponseBodyCallSuccessesMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The time of the monitoring metric. The time format follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2016-07-28T08:24:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The value corresponding to the monitoring metric.
   * 
   * @example
   * 650
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

export class DescribeApiQpsDataResponseBodyCallSuccesses extends $dara.Model {
  monitorItem?: DescribeApiQpsDataResponseBodyCallSuccessesMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiQpsDataResponseBodyCallSuccessesMonitorItem },
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

export class DescribeApiQpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about failed API calls. It is an array consisting of MonitorItem data.
   */
  callFails?: DescribeApiQpsDataResponseBodyCallFails;
  /**
   * @remarks
   * The returned information about successful API calls. It is an array consisting of MonitorItem data.
   */
  callSuccesses?: DescribeApiQpsDataResponseBodyCallSuccesses;
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
      callFails: 'CallFails',
      callSuccesses: 'CallSuccesses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFails: DescribeApiQpsDataResponseBodyCallFails,
      callSuccesses: DescribeApiQpsDataResponseBodyCallSuccesses,
      requestId: 'string',
    };
  }

  validate() {
    if(this.callFails && typeof (this.callFails as any).validate === 'function') {
      (this.callFails as any).validate();
    }
    if(this.callSuccesses && typeof (this.callSuccesses as any).validate === 'function') {
      (this.callSuccesses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

