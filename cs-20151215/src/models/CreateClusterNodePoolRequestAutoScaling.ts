// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterNodePoolRequestAutoScaling extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * **
   * 
   * **Important** This parameter is deprecated. Use the internet_charge_type and internet_max_bandwidth_out parameters instead.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The metering method of the EIP. Valid values:
   * 
   * *   `PayByBandwidth`: pay-by-bandwidth.
   * *   `PayByTraffic`: pay-by-data-transfer.
   * 
   * Default value: `PayByBandwidth`.
   * 
   * **
   * 
   * **Important** This parameter is deprecated. Use the internet_charge_type and internet_max_bandwidth_out parameters instead.
   * 
   * @example
   * PayByBandwidth
   * 
   * @deprecated
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling for the node pool. Valid values:
   * 
   * *   `true`: enables auto scaling.
   * *   `false`: disables auto scaling. If you set this parameter to false, other parameters in the `auto_scaling` section do not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
   * 
   * *   `true`: associates an EIP with the node pool.
   * *   `false`: does not associate an EIP with the node pool.
   * 
   * Default value: `false`.
   * 
   * **
   * 
   * **Important** This parameter is deprecated. Use the internet_charge_type and internet_max_bandwidth_out parameters instead.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number to which the Elastic Compute Service (ECS) instances in the node pool can be scaled. The number of nodes in the node pool cannot be greater than this value. This parameter takes effect only when `enable` is set to true. Valid values: [min_instances, 2000]. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number to which the ECS instances in the node pool can be scaled. The number of nodes in the node pool cannot be smaller than this value. This parameter takes effect only when `enable` is set to true. Valid values: [0, max_instances]. Default value: 0.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The instance type that is used for auto scaling. This parameter takes effect only when `enable` is set to true. Valid values:
   * 
   * *   `cpu`: regular instance.
   * *   `gpu`: GPU-accelerated instance.
   * *   `gpushare`: shared GPU-accelerated instance.
   * *   `spot`: preemptible instance.
   * 
   * Default value: `cpu`.
   * 
   * >  You cannot modify this parameter after the node pool is created.
   * 
   * @example
   * cpu
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

