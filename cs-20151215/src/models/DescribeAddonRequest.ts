// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * When a cluster ID is specified, the list of available components for the cluster is queried, and other parameters are ignored.
   * 
   * @example
   * c02b3e03be10643e8a644a843ffcb****
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster specification.
   * If cluster_id is specified, this parameter is ignored.
   * The five parameters region_id, cluster_type, profile, cluster_spec, and cluster_version must be specified together.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * Cluster type.
   * If cluster_id is specified, this parameter is ignored.
   * The five parameters region_id, cluster_type, profile, cluster_spec, and cluster_version must be specified together.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * Cluster version.
   * If cluster_id is specified, this parameter is ignored.
   * The five parameters region_id, cluster_type, profile, cluster_spec, and cluster_version must be specified together.
   * 
   * @example
   * 1.26.3-aliyun.1
   */
  clusterVersion?: string;
  /**
   * @remarks
   * Cluster subtype.
   * If cluster_id is specified, this parameter is ignored.
   * The five parameters region_id, cluster_type, profile, cluster_spec, and cluster_version must be specified together.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * Region.
   * If cluster_id is specified, this parameter is ignored.
   * The five parameters region_id, cluster_type, profile, cluster_spec, and cluster_version must be specified together.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Component version. If not specified, the latest available version of the component is queried.
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

