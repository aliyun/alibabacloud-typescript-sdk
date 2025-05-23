// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterNodePoolRequestAutoScaling extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the internet_charge_type and internet_max_bandwidth_out parameters instead. The maximum bandwidth of the EIP.
   * 
   * Valid values: 1 to 100. Unit: Mbit/s.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * This parameter is deprecated. Use the internet_charge_type and internet_max_bandwidth_out parameters instead.
   * 
   * The metering method of the EIP. Valid values:
   * 
   * *   `PayByBandwidth`: pay-by-bandwidth.
   * *   `PayByTraffic`: pay-by-data-transfer.
   * 
   * Default value: `PayByBandwidth`.
   * 
   * @example
   * PayByBandwidth
   * 
   * @deprecated
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling. Valid values:
   * 
   * *   `true`: enables auto scaling for the node pool. When the capacity planning of the cluster cannot meet the requirements of pod scheduling, ACK automatically scales out nodes based on the configured minimum and maximum number of instances. By default, node instant scaling is enabled for clusters that run Kubernetes 1.24. By default, node auto scaling is enabled for clusters that run Kubernetes versions earlier than 1.24. For more information, see [Auto scaling of nodes](https://help.aliyun.com/document_detail/2746785.html).
   * *   `false`: disables auto scaling. Container Service for Kubernetes (ACK) adjusts the number of nodes in the node pool based on the value of the Expected Nodes parameter. The number of nodes is always the same as the value of the Expected Nodes parameter.
   * 
   * If you set this parameter to false, other parameters in the `auto_scaling` section do not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is deprecated. Use the internet_charge_type and internet_max_bandwidth_out parameters instead.
   * 
   * *   `true`: associates an elastic IP address (EIP) with the node pool.
   * *   `false`: does not associate an EIP with the node pool.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of nodes that can be created in the node pool. Existing instances are excluded. This parameter takes effect only when `enable=true` is specified.
   * 
   * The value must be at least the value of min_instances and cannot exceed 2000. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of nodes that must be kept in the node pool. Existing instances are excluded. This parameter takes effect only when `enable=true` is specified.
   * 
   * The value must be at least 0 and cannot exceed the value of max_instances. Default value: 0.
   * 
   * > 
   * 
   * *   When the minimum number of instances is greater than 0 and a scaling group is set up, ECS instances are automatically created based on the minimum number.
   * 
   * *   We recommend that the value of max_instances is equal to or larger than the current number of nodes in the node pool. If the value of max_instances is less than the current number of nodes in the node pool, the node pool will be scaled in after you enable auto scaling for the node pool.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The instance type that is used for auto scaling. Valid values:
   * 
   * *   `cpu`: regular instance.
   * *   `gpu`: GPU-accelerated instance.
   * *   `gpushare`: shared GPU-accelerated instance.
   * *   `spot`: preemptible instance.
   * 
   * Default value: `cpu`.
   * 
   * @example
   * cpu
   * 
   * @deprecated
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'eip_bandwidth',
      eipInternetChargeType: 'eip_internet_charge_type',
      enable: 'enable',
      isBondEip: 'is_bond_eip',
      maxInstances: 'max_instances',
      minInstances: 'min_instances',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      eipInternetChargeType: 'string',
      enable: 'boolean',
      isBondEip: 'boolean',
      maxInstances: 'number',
      minInstances: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

