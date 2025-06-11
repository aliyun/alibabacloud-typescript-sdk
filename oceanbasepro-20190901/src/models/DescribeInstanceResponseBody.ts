// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceResponseBodyInstance } from "./DescribeInstanceResponseBodyInstance";


export class DescribeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the OceanBase cluster.
   */
  instance?: DescribeInstanceResponseBodyInstance;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

