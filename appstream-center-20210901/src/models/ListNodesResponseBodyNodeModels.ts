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

