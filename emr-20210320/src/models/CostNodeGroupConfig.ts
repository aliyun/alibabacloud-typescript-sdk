// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CostInstanceType } from "./CostInstanceType";


export class CostNodeGroupConfig extends $dara.Model {
  /**
   * @remarks
   * 实例类型列表。
   */
  instanceTypes?: CostInstanceType[];
  /**
   * @remarks
   * 最大节点数限制。
   * 
   * @example
   * 100
   */
  maximalNodeCount?: number;
  /**
   * @remarks
   * 最小节点数限制。
   * 
   * @example
   * 0
   */
  minimalNodeCount?: number;
  /**
   * @remarks
   * 节点数。
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  nodeGroupName?: string;
  /**
   * @remarks
   * 节点组类型。取值范围：
   * - MASTER：管理类型节点组。
   * - CORE：存储类型节点组。
   * - TASK：计算类型节点组。
   * 
   * @example
   * CORE
   */
  nodeGroupType?: string;
  /**
   * @remarks
   * 付费类型。
   */
  paymentType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      maximalNodeCount: 'MaximalNodeCount',
      minimalNodeCount: 'MinimalNodeCount',
      nodeCount: 'NodeCount',
      nodeGroupName: 'NodeGroupName',
      nodeGroupType: 'NodeGroupType',
      paymentType: 'PaymentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': CostInstanceType },
      maximalNodeCount: 'number',
      minimalNodeCount: 'number',
      nodeCount: 'number',
      nodeGroupName: 'string',
      nodeGroupType: 'string',
      paymentType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

