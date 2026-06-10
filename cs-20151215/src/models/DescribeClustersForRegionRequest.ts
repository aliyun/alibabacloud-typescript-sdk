// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersForRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c8155823d057948c69a****
   */
  clusterId?: string;
  /**
   * @remarks
   * The specification of the cluster. Valid values:
   * 
   * - `ack.standard`: Standard Edition
   * 
   * - `ack.pro.small`: Pro Edition
   * 
   * - `ack.pro.xlarge`: Pro XL
   * 
   * - `ack.pro.2xlarge`: Pro 2XL
   * 
   * - `ack.pro.4xlarge`: Pro 4XL (To use this specification, you must submit a ticket.)
   * 
   * Pro XL, Pro 2XL, and Pro 4XL are three specifications available for the <props="china">[ACK Pro provisioned control plane](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane)<props="intl">[ACK Pro provisioned control plane](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/user-guide/ack-pro-provisioned-control-plane). These specifications ensure a high and deterministic level of API concurrency and Pod scheduling capabilities by pre-allocating and dedicating control plane resources. They are suitable for AI training and inference, large-scale clusters, and mission-critical workloads.
   * 
   * For information about the cluster management fees for Pro Edition and provisioned control plane clusters, see <props="china">[cluster management fee](https://help.aliyun.com/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee)<props="intl">[cluster management fee](https://www.alibabacloud.com/help/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee).
   * 
   * @example
   * ack.standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * - `Kubernetes`: an ACK dedicated cluster.
   * 
   * - `ManagedKubernetes`: an ACK managed cluster. This includes ACK managed clusters (Pro and Standard Editions), ACK Serverless clusters (Pro and Standard Editions), ACK Edge clusters (Pro and Standard Editions), and ACK Lingjun clusters (Pro Edition).
   * 
   * - `ExternalKubernetes`: a registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The name of the cluster. Fuzzy search is supported.
   * 
   * @example
   * test-cluster
   */
  name?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  /**
   * @remarks
   * The subtype of the cluster. Valid values:
   * 
   * - `Default`: ACK managed clusters, including Pro and Standard Editions.
   * 
   * - `Edge`: ACK Edge clusters, including Pro and Standard Editions.
   * 
   * - `Serverless`: ACK Serverless clusters, including Pro and Standard Editions.
   * 
   * - `LingJun`: ACK Lingjun clusters, available in the Pro Edition.
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

