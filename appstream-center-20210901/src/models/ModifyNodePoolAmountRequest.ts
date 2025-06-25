// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyNodePoolAmountRequestNodePool } from "./ModifyNodePoolAmountRequestNodePool";


export class ModifyNodePoolAmountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The parameters related to the configuration change of the node pool.
   * 
   * This parameter is required.
   */
  nodePool?: ModifyNodePoolAmountRequestNodePool;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
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

