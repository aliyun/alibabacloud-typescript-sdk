// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTrafficResponseBodyInstanceTraffic } from "./DescribeInstanceTrafficResponseBodyInstanceTraffic";


export class DescribeInstanceTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The traffic consumed by the requests and responses in the instance.
   */
  instanceTraffic?: DescribeInstanceTrafficResponseBodyInstanceTraffic;
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
      instanceTraffic: 'InstanceTraffic',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTraffic: DescribeInstanceTrafficResponseBodyInstanceTraffic,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceTraffic && typeof (this.instanceTraffic as any).validate === 'function') {
      (this.instanceTraffic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

