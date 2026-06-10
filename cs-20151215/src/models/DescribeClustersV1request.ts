// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersV1Request extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c3fb96524f9274b4495df0f12a6b5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster specification. This parameter is valid only when `cluster_type` is set to `ManagedKubernetes` and the `profile` parameter is specified. Valid values:
   * 
   * - `ack.standard`: Standard
   * 
   * - `ack.pro.small`: Pro
   * 
   * - `ack.pro.xlarge`: Pro XL
   * 
   * - `ack.pro.2xlarge`: Pro 2XL
   * 
   * - `ack.pro.4xlarge`: Pro 4XL (Contact customer service to enable this option.)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three tiers provided by the <props="china">[ACK Pro provisioned control plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro provisioned control plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). These tiers pre-allocate and dedicate control plane resources to ensure a consistently high, predictable level of performance for API concurrency and pod scheduling. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For information about the cluster management fees for Pro and provisioned control plane editions, see <props="china">[Cluster management fee](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fee](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * - `Kubernetes`: an ACK dedicated cluster.
   * 
   * - `ManagedKubernetes`: an ACK managed cluster. This type includes ACK managed clusters (Pro and Standard), ACK Serverless clusters (Pro and Standard), ACK Edge clusters (Pro and Standard), and ACK Lingjun clusters (Pro).
   * 
   * - `ExternalKubernetes`: a registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * When `cluster_type` is set to `ManagedKubernetes`, you can further specify a sub-type of the cluster.
   * 
   * - `Default`: an ACK managed cluster. This includes ACK Pro and ACK Standard clusters.
   * 
   * - `Edge`: an ACK Edge cluster. This includes ACK Edge Pro and ACK Edge Standard clusters.
   * 
   * - `Serverless`: an ACK Serverless cluster. This includes ACK Serverless Pro and ACK Serverless Standard clusters.
   * 
   * - `Lingjun`: an ACK Lingjun cluster (Pro edition).
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The ID of the region to which the clusters belong.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      name: 'name',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      profile: 'profile',
      regionId: 'region_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      profile: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

