// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedPrometheusStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. This parameter is required if the ClusterType parameter is set to ask.
   * 
   * This parameter is required.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values: ask and ecs.
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
   * The resource group id of the Prometheus instance.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). This parameter is required if the ClusterType parameter is set to ecs.
   * 
   * @example
   * vpc-***
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

