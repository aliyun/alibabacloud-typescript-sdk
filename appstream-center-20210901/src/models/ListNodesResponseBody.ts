// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesResponseBodyNodeModels extends $dara.Model {
  /**
   * @remarks
   * The billing method of the resource node.
   * 
   * >  This parameter is returned only if the ChargeResourceMode parameter of the delivery group to which the resource node belongs is set to Node.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   Prepaid: subscription
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the resource node.
   * 
   * >  This parameter is returned only if the ChargeResourceMode parameter of the delivery group to which the resource node belongs is set to Node.
   * 
   * @example
   * i-bp13********
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The resource nodes.
   */
  nodeModels?: ListNodesResponseBodyNodeModels[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  perPageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  toPage?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nodeModels: 'NodeModels',
      perPageSize: 'PerPageSize',
      requestId: 'RequestId',
      toPage: 'ToPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nodeModels: { 'type': 'array', 'itemType': ListNodesResponseBodyNodeModels },
      perPageSize: 'number',
      requestId: 'string',
      toPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeModels)) {
      $dara.Model.validateArray(this.nodeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

