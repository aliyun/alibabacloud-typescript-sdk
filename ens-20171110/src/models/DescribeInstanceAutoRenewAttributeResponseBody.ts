// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes } from "./DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes";


export class DescribeInstanceAutoRenewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The renewal status of the instance.
   */
  instanceRenewAttributes?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DD66F05-3116-4BAA-B588-52EB2E7F431D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceRenewAttributes: 'InstanceRenewAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceRenewAttributes && typeof (this.instanceRenewAttributes as any).validate === 'function') {
      (this.instanceRenewAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

