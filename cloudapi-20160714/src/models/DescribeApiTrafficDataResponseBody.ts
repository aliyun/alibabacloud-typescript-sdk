// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem extends $dara.Model {
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

export class DescribeApiTrafficDataResponseBodyCallDownloads extends $dara.Model {
  monitorItem?: DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem },
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

export class DescribeApiTrafficDataResponseBodyCallUploadsMonitorItem extends $dara.Model {
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
   * 670
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

export class DescribeApiTrafficDataResponseBodyCallUploads extends $dara.Model {
  monitorItem?: DescribeApiTrafficDataResponseBodyCallUploadsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiTrafficDataResponseBodyCallUploadsMonitorItem },
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

export class DescribeApiTrafficDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned downlink traffic data of API calls. It is an array consisting of MonitorItem data.
   */
  callDownloads?: DescribeApiTrafficDataResponseBodyCallDownloads;
  /**
   * @remarks
   * The returned uplink traffic data of API calls. It is an array consisting of MonitorItem data.
   */
  callUploads?: DescribeApiTrafficDataResponseBodyCallUploads;
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
      callDownloads: 'CallDownloads',
      callUploads: 'CallUploads',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDownloads: DescribeApiTrafficDataResponseBodyCallDownloads,
      callUploads: DescribeApiTrafficDataResponseBodyCallUploads,
      requestId: 'string',
    };
  }

  validate() {
    if(this.callDownloads && typeof (this.callDownloads as any).validate === 'function') {
      (this.callDownloads as any).validate();
    }
    if(this.callUploads && typeof (this.callUploads as any).validate === 'function') {
      (this.callUploads as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

