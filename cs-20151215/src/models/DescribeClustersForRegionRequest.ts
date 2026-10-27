// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersForRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c8155823d057948c69a****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies the cluster specification. Valid values:
   * 
   * - `ack.standard`: Basic edition.
   * - `ack.pro.small`: Pro edition.
   * - `ack.pro.xlarge`: Pro XL.
   * - `ack.pro.2xlarge`: Pro 2XL.
   * - `ack.pro.4xlarge`: Pro 4XL (requires whitelist approval from customer service).
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are the three tiers provided by <props="china">[ACK Pro provisioned control plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro provisioned control plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). By pre-allocating and dedicating control plane resources, these tiers ensure that API concurrency and pod scheduling capabilities remain consistently at a high level. They are suitable for AI training and inference, ultra-large-scale clusters, and mission-critical workloads.
   * 
   * For cluster management fees of the Pro edition and provisioned control plane editions, refer to <props="china">[Cluster management fees](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[Cluster management fees](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * Specifies the cluster type. Valid values:
   * - Kubernetes: ACK dedicated clusters.
   * - ManagedKubernetes: ACK managed clusters, including ACK managed clusters (ACK Pro and ACK Basic), ACK Serverless clusters (Pro and Basic), ACK Edge clusters (Pro and Basic), and ACK Lingjun clusters (Pro).
   * - ExternalKubernetes: registered clusters.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * Specifies the cluster name for fuzzy match.
   * 
   * @example
   * test-cluster
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies the cluster subtype. Valid values:
   * - Default: ACK managed clusters, including ACK Pro and ACK Basic.
   * - Edge: ACK Edge clusters, including ACK Edge Pro and ACK Edge Basic.
   * - Serverless: ACK Serverless clusters, including ACK Serverless Pro and ACK Serverless Basic.
   * - LingJun: ACK Lingjun clusters, available only in Pro edition.
   * 
   * @example
   * Serverless
   */
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      name: 'name',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      profile: 'profile',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

