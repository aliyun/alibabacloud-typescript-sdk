// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutoRenewInstance } from "./AutoRenewInstance";


export class UpdateClusterAutoRenewRequest extends $dara.Model {
  /**
   * @remarks
   * The list of ECS instances for which to enable auto-renewal. This parameter takes effect only when RenewAllInstances is not set to true.
   */
  autoRenewInstances?: AutoRenewInstance[];
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the cluster. Valid values:
   * 
   * - true: Enables auto-renewal.
   * 
   * - false: Disables auto-renewal.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  clusterAutoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration for the cluster. This parameter takes effect only when ClusterAutoRenew is set to true.
   * If ClusterAutoRenewDurationUnit is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, and 36. If ClusterAutoRenewDurationUnit is set to Year, the valid values are 1, 2, and 3.
   * 
   * @example
   * 1
   */
  clusterAutoRenewDuration?: number;
  /**
   * @remarks
   * The unit of the auto-renewal duration. Valid values:
   * 
   * - Month
   * 
   * - Year
   * 
   * Default value: Month.
   * 
   * @example
   * Monthly
   */
  clusterAutoRenewDurationUnit?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-d6661c71139a****
   */
  clusterId?: string;
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
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for all ECS instances in the cluster. Valid values:
   * 
   * - true: Enables auto-renewal for all ECS instances in the cluster. The default auto-renewal duration is one month.
   * 
   * - false: Does not enable auto-renewal for all ECS instances in the cluster. You can specify the ECS instances for which to enable auto-renewal in the AutoRenewInstances parameter.
   * 
   * Default value: false.
   */
  renewAllInstances?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoRenewInstances: 'AutoRenewInstances',
      clusterAutoRenew: 'ClusterAutoRenew',
      clusterAutoRenewDuration: 'ClusterAutoRenewDuration',
      clusterAutoRenewDurationUnit: 'ClusterAutoRenewDurationUnit',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      renewAllInstances: 'RenewAllInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewInstances: { 'type': 'array', 'itemType': AutoRenewInstance },
      clusterAutoRenew: 'boolean',
      clusterAutoRenewDuration: 'number',
      clusterAutoRenewDurationUnit: 'string',
      clusterId: 'string',
      regionId: 'string',
      renewAllInstances: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.autoRenewInstances)) {
      $dara.Model.validateArray(this.autoRenewInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

