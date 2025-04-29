// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance } from "./DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance";


export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances extends $dara.Model {
  invokeInstance?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance },
    };
  }

  validate() {
    if(Array.isArray(this.invokeInstance)) {
      $dara.Model.validateArray(this.invokeInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

