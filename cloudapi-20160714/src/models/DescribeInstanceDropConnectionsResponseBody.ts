// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections } from "./DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections";


export class DescribeInstanceDropConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of dropped connections in the instance.
   */
  instanceDropConnections?: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDropConnections: 'InstanceDropConnections',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDropConnections: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceDropConnections && typeof (this.instanceDropConnections as any).validate === 'function') {
      (this.instanceDropConnections as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

