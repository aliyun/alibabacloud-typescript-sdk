// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections } from "./DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections";


export class DescribeInstanceNewConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of new connections in the instance.
   */
  instanceNewConnections?: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections;
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
      instanceNewConnections: 'InstanceNewConnections',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNewConnections: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceNewConnections && typeof (this.instanceNewConnections as any).validate === 'function') {
      (this.instanceNewConnections as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

