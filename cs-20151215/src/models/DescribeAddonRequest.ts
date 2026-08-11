// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. If you specify a cluster ID, the system queries the list of components available for the cluster, and other parameters are ignored.
   * 
   * @example
   * c02b3e03be10643e8a644a843ffcb****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster specifications. If cluster_id is specified, this parameter is ignored. The region_id, cluster_type, profile, cluster_spec, and cluster_version parameters must be specified together.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The cluster type. If cluster_id is specified, this parameter is ignored. The region_id, cluster_type, profile, cluster_spec, and cluster_version parameters must be specified together.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster version. If cluster_id is specified, this parameter is ignored. The region_id, cluster_type, profile, cluster_spec, and cluster_version parameters must be specified together.
   * 
   * @example
   * 1.26.3-aliyun.1
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The cluster subtype. If cluster_id is specified, this parameter is ignored. The region_id, cluster_type, profile, cluster_spec, and cluster_version parameters must be specified together.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The region ID. If cluster_id is specified, this parameter is ignored. The region_id, cluster_type, profile, cluster_spec, and cluster_version parameters must be specified together.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The component version. If this parameter is not specified, the latest available version of the component is queried.
   * 
   * @example
   * v1.9.3.10-7dfca203-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      clusterVersion: 'cluster_version',
      profile: 'profile',
      regionId: 'region_id',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      profile: 'string',
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

