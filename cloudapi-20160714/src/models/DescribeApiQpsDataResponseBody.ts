// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiQpsDataResponseBodyCallFailsMonitorItem extends $dara.Model {
  itemTime?: string;
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
  itemTime?: string;
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
  callFails?: DescribeApiQpsDataResponseBodyCallFails;
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

