// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodePoolAmountRequestNodePool extends $dara.Model {
  /**
   * @remarks
   * The total number of subscription nodes after the change.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The change mode of subscription nodes.
   * 
   * Valid value:
   * 
   * *   EXPAND_FROM_POST_PAID_EXPLICIT: changes from specified pay-as-you-go nodes
   * 
   * @example
   * EXPAND_FROM_POST_PAID_EXPLICIT
   */
  prePaidNodeAmountModifyMode?: string;
  /**
   * @remarks
   * The nodes for which you want to change the billing method.
   */
  prePaidNodeAmountModifyNodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nodeAmount: 'NodeAmount',
      prePaidNodeAmountModifyMode: 'PrePaidNodeAmountModifyMode',
      prePaidNodeAmountModifyNodeIds: 'PrePaidNodeAmountModifyNodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeAmount: 'number',
      prePaidNodeAmountModifyMode: 'string',
      prePaidNodeAmountModifyNodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.prePaidNodeAmountModifyNodeIds)) {
      $dara.Model.validateArray(this.prePaidNodeAmountModifyNodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

