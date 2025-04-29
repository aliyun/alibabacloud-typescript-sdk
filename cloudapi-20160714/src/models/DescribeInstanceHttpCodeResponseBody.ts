// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceHttpCodeResponseBodyInstanceHttpCode } from "./DescribeInstanceHttpCodeResponseBodyInstanceHttpCode";


export class DescribeInstanceHttpCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status codes.
   */
  instanceHttpCode?: DescribeInstanceHttpCodeResponseBodyInstanceHttpCode;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD00F8C0-311B-54A9-ADE2-2436771012DA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceHttpCode: 'InstanceHttpCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceHttpCode: DescribeInstanceHttpCodeResponseBodyInstanceHttpCode,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceHttpCode && typeof (this.instanceHttpCode as any).validate === 'function') {
      (this.instanceHttpCode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

