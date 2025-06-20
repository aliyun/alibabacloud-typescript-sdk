// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode } from "./DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode";


export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes extends $dara.Model {
  /**
   * @remarks
   * The command execution records of the node.
   */
  invokeNode?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode[];
  static names(): { [key: string]: string } {
    return {
      invokeNode: 'InvokeNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeNode: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode },
    };
  }

  validate() {
    if(Array.isArray(this.invokeNode)) {
      $dara.Model.validateArray(this.invokeNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

