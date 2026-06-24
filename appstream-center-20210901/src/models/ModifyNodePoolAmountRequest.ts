// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodePoolAmountRequestNodePool extends $dara.Model {
  /**
   * @remarks
   * The total number of subscription nodes after the upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The modification mode for subscription nodes.
   * 
   * @example
   * EXPAND_FROM_POST_PAID_EXPLICIT
   */
  prePaidNodeAmountModifyMode?: string;
  /**
   * @remarks
   * The list of nodes whose billing type is to be changed.
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

export class ModifyNodePoolAmountRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The node pool specification change parameters.
   * 
   * This parameter is required.
   */
  nodePool?: ModifyNodePoolAmountRequestNodePool;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      nodePool: 'NodePool',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      nodePool: ModifyNodePoolAmountRequestNodePool,
      productType: 'string',
    };
  }

  validate() {
    if(this.nodePool && typeof (this.nodePool as any).validate === 'function') {
      (this.nodePool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

