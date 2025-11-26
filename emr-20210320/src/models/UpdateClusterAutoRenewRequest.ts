// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutoRenewInstance } from "./AutoRenewInstance";


export class UpdateClusterAutoRenewRequest extends $dara.Model {
  /**
   * @remarks
   * 自动续费ECS实例列表。
   */
  autoRenewInstances?: AutoRenewInstance[];
  /**
   * @remarks
   * 集群是否自动续费。
   * 
   * @example
   * true
   */
  clusterAutoRenew?: boolean;
  /**
   * @remarks
   * 集群自动续费时长。
   * 
   * @example
   * 1
   */
  clusterAutoRenewDuration?: number;
  /**
   * @remarks
   * 集群续费时长单位。
   * 
   * @example
   * Monthly
   */
  clusterAutoRenewDurationUnit?: string;
  /**
   * @remarks
   * 集群ID。
   * 
   * This parameter is required.
   * 
   * @example
   * c-d6661c71139a****
   */
  clusterId?: string;
  /**
   * @remarks
   * 区域ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 续费所有ECS实例。
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

