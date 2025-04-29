// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance } from "./DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance";


export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstances extends $dara.Model {
  invokeInstance?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance },
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

