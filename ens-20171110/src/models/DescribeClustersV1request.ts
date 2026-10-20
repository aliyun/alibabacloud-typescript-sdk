// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersV1Request extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster type. Valid values: Kubernetes and ManagedKubernetes. A value of Kubernetes indicates an ECK cluster. A value of ManagedKubernetes indicates a serverless virtual cluster. This parameter must be used together with the profile parameter.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The ENS region ID of the cluster.
   * 
   * @example
   * cn-hangzhou-58
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test-eck-name
   */
  name?: string;
  /**
   * @remarks
   * The cluster profile. Valid values: Default and Serverless. A value of Default indicates an ECK cluster. A value of Serverless indicates a serverless virtual cluster. This parameter must be used together with the cluster_type parameter.
   * 
   * @example
   * Default
   */
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      ensRegionId: 'string',
      name: 'string',
      profile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

