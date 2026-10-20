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
   * The cluster specification. This parameter is valid when cluster_type is set to ManagedKubernetes and profile is configured. Valid values:
   * 
   * - ack.standard: Basic Edition.
   * - ack.pro.small: Pro Edition.
   * - ack.pro.xlarge: Pro XL.
   * - ack.pro.2xlarge: Pro 2XL.
   * - ack.pro.4xlarge: Pro 4XL. To use this specification, contact customer service to apply for whitelist access.
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are the three tiers provided by the <props="china">[ACK Pro provisioned control plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro provisioned control plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and dedicating control plane resources, these tiers ensure consistently high levels of API concurrency and pod scheduling capabilities. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For information about the cluster management fees for the Pro Edition and provisioned control plane editions, see <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * - Kubernetes: ACK dedicated cluster.
   * - ManagedKubernetes: ACK managed clusters, including ACK managed clusters (Pro Edition and Basic Edition), ACK Serverless clusters (Pro Edition and Basic Edition), ACK Edge clusters (Pro Edition and Basic Edition), and ACK Lingjun clusters (Pro Edition).
   * - ExternalKubernetes: registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster name. Fuzzy match is supported.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The cluster subtype. This parameter is valid only when cluster_type is set to ManagedKubernetes. Valid values:
   * - Default: ACK serverless clusters, including ACK serverless cluster Pro Edition and Basic Edition.
   * - Edge: ACK Edge clusters, including ACK Edge cluster Pro Edition and Basic Edition.
   * - Serverless: ACK ACK clusters, including ACK ACK cluster Pro Edition and Basic Edition.
   * - Lingjun: ACK Lingjun clusters, providing Pro Edition.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The region of the cluster. Specify this parameter to filter clusters by region.
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

