// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiTrafficDataResponseBodyCallDownloads } from "./DescribeApiTrafficDataResponseBodyCallDownloads";
import { DescribeApiTrafficDataResponseBodyCallUploads } from "./DescribeApiTrafficDataResponseBodyCallUploads";


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

