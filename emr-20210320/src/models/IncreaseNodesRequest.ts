// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfig } from "./ApplicationConfig";
import { Promotion } from "./Promotion";


export class IncreaseNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The application configurations. The number of array elements can range from 1 to 1,000.
   * 
   * @example
   * Month
   */
  applicationConfigs?: ApplicationConfig[];
  /**
   * @remarks
   * Specifies whether to automatically pay for the order. This parameter is effective only when the PaymentType of the node group is Subscription. Valid values:
   * 
   * - true: Automatically pays for the order.
   * 
   * - false: Does not automatically pay for the order.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoPayOrder?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the added nodes. The default value is false. Valid values:
   * 
   * - true: Enables auto-renewal.
   * 
   * - false: Disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of nodes to add. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  increaseNodeCount?: number;
  /**
   * @remarks
   * The minimum number of nodes to add in this scale-out operation. The value must be between 1 and 500.
   * 
   * - If you set this parameter and the available ECS inventory is less than IncreaseNodeCount, the system attempts to create at least the number of nodes specified by MinIncreaseNodeCount. The scale-out flow is then marked as `PARTIAL_COMPLETED`.
   * 
   * - If you do not set this parameter and the available ECS inventory is less than IncreaseNodeCount, the scale-out flow fails and is marked as `FAILED`.
   */
  minIncreaseNodeCount?: number;
  /**
   * @remarks
   * The ID of the node group to scale out.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The subscription duration. If PaymentDurationUnit is set to Month, valid values are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 12
   */
  paymentDuration?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - Month: The unit is month.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  promotions?: Promotion[];
  /**
   * @remarks
   * The region ID.
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

