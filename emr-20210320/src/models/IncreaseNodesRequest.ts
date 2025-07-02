// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfig } from "./ApplicationConfig";
import { Promotion } from "./Promotion";


export class IncreaseNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The application configurations. Number of elements in the array: 1 to 1,000.
   * 
   * @example
   * Month
   */
  applicationConfigs?: ApplicationConfig[];
  /**
   * @remarks
   * Indicates whether to automatically pay for the orders involved in the scale-out operation. This parameter takes effect only when the PaymentType parameter is set to Subscription. Valid values:
   * 
   * *   true: automatically pays for the order involved in this operation.
   * *   false: does not automatically pay for the orders involved in this operation.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  autoPayOrder?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for nodes. Valid values:
   * 
   * *   true
   * *   false (default value)
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of nodes to add.Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  increaseNodeCount?: number;
  /**
   * @remarks
   * The minimum number of nodes that can be added. Valid values: 1 to 500.
   * 
   * *   If you configure this parameter, and the number of available Elastic Compute Service (ECS) instances is less than the value of the IncreaseNodeCount parameter, the system tries to add nodes based on the number specified by the `MinIncreaseNodeCount` parameter. If the minimum number of nodes are added, the scale-out status is `PARTIAL_COMPLETED`.
   * *   If you do not configure this parameter, and the number of available ECS instances is less than the value of the IncreaseNodeCount parameter, the scale-out process fails. The scale-out status is `FAILED`.
   */
  minIncreaseNodeCount?: number;
  /**
   * @remarks
   * The ID of the node group. The target node group to which you want to scale out the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The subscription duration. Valid values when the PaymentDurationUnit value is Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 12
   */
  paymentDuration?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   Month
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  promotions?: Promotion[];
  /**
   * @remarks
   * The ID of the region in which you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      autoPayOrder: 'AutoPayOrder',
      autoRenew: 'AutoRenew',
      clusterId: 'ClusterId',
      increaseNodeCount: 'IncreaseNodeCount',
      minIncreaseNodeCount: 'MinIncreaseNodeCount',
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      promotions: 'Promotions',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': ApplicationConfig },
      autoPayOrder: 'boolean',
      autoRenew: 'boolean',
      clusterId: 'string',
      increaseNodeCount: 'number',
      minIncreaseNodeCount: 'number',
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      promotions: { 'type': 'array', 'itemType': Promotion },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationConfigs)) {
      $dara.Model.validateArray(this.applicationConfigs);
    }
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

