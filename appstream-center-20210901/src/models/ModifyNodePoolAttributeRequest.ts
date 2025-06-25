// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyNodePoolAttributeRequestNodePoolStrategy } from "./ModifyNodePoolAttributeRequestNodePoolStrategy";


export class ModifyNodePoolAttributeRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  nodePoolStrategy?: ModifyNodePoolAttributeRequestNodePoolStrategy;
  /**
   * @example
   * rg-ew7va2g1wl3vm****
   */
  poolId?: string;
  /**
   * @remarks
   * 产品类型。
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      nodeCapacity: 'NodeCapacity',
      nodePoolStrategy: 'NodePoolStrategy',
      poolId: 'PoolId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      nodeCapacity: 'number',
      nodePoolStrategy: ModifyNodePoolAttributeRequestNodePoolStrategy,
      poolId: 'string',
      productType: 'string',
    };
  }

  validate() {
    if(this.nodePoolStrategy && typeof (this.nodePoolStrategy as any).validate === 'function') {
      (this.nodePoolStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

