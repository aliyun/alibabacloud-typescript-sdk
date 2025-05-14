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
   * The specification of the clusters to query. Valid values:
   * 
   * *   ack.pro.small: ACK Pro clusters.
   * *   ack.standard: ACK Basic clusters.
   * 
   * @example
   * ack.standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the clusters to query. Valid values:
   * 
   * *   Kubernetes: ACK dedicated clusters.
   * *   ManagedKubernetes: ACK managed clusters. ACK managed clusters include ACK Basic clusters, ACK Pro clusters, ACK Serverless Basic clusters, ACK Serverless Pro clusters, ACK Edge Basic clusters, ACK Edge Pro clusters, and ACK Lingjun Pro clusters.
   * *   ExternalKubernetes: registered clusters.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * Perform a fuzzy search by using the cluster name.
   * 
   * @example
   * test-cluster
   */
  name?: string;
  /**
   * @remarks
   * The number of pages.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  /**
   * @remarks
   * The subtype of the clusters to query. Valid values:
   * 
   * *   Default: ACK managed clusters. ACK managed clusters include ACK Basic clusters and ACK Pro clusters.
   * *   Edge: ACK Edge clusters. ACK Edge clusters include ACK Edge Basic clusters and ACK Edge Pro clusters.
   * *   Serverless: ACK Serverless clusters. ACK Serverless clusters include ACK Serverless Basic clusters and ACK Serverless Pro clusters.
   * *   Lingjun: ACK Lingjun Pro clusters.
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

