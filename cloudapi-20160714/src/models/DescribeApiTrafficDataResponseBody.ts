// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem extends $dara.Model {
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
  callDownloads?: DescribeApiTrafficDataResponseBodyCallDownloads;
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

