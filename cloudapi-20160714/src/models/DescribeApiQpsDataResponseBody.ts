// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiQpsDataResponseBodyCallFails } from "./DescribeApiQpsDataResponseBodyCallFails";
import { DescribeApiQpsDataResponseBodyCallSuccesses } from "./DescribeApiQpsDataResponseBodyCallSuccesses";


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

