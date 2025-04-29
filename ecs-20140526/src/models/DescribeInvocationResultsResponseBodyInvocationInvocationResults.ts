// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult } from "./DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult";


export class DescribeInvocationResultsResponseBodyInvocationInvocationResults extends $dara.Model {
  invocationResult?: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult[];
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: { 'type': 'array', 'itemType': DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult },
    };
  }

  validate() {
    if(Array.isArray(this.invocationResult)) {
      $dara.Model.validateArray(this.invocationResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

