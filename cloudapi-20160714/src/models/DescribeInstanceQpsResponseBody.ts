// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceQpsResponseBodyInstanceQps } from "./DescribeInstanceQpsResponseBodyInstanceQps";


export class DescribeInstanceQpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of requests sent to the APIs in the instance.
   */
  instanceQps?: DescribeInstanceQpsResponseBodyInstanceQps;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceQps: 'InstanceQps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceQps: DescribeInstanceQpsResponseBodyInstanceQps,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceQps && typeof (this.instanceQps as any).validate === 'function') {
      (this.instanceQps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

