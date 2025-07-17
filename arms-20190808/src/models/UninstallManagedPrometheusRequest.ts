// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallManagedPrometheusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Service for Kubernetes (ACK) cluster. This parameter is required when the ClusterType parameter is set to ask or one.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster type. Valid values: ask, ecs, and one.
   * 
   * This parameter is required.
   * 
   * @example
   * ask
   */
  clusterType?: string;
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
   * The ID of the resource group to which the Prometheus instance belongs.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the cluster resides.
   * 
   * @example
   * vpc-rpn**********
   * 
   * **if can be null:**
   * true
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

