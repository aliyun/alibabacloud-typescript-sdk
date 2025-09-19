// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterInterceptionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the container firewall feature. Valid values:
   * 
   * *   **-1**: unknown
   * *   **0**: abnormal
   * *   **1**: normal
   * *   **2**: normal to be confirmed
   * 
   * @example
   * 1
   */
  clusterCNNFStatus?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > You can call the [DescribeContainerInstances](~~DescribeContainerInstances~~) operation to query the IDs of clusters.
   * 
   * @example
   * c22143730ab6e40b09ec7c1c51d4d****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * sas
   */
  clusterName?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterCNNFStatus: 'ClusterCNNFStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCNNFStatus: 'number',
      clusterId: 'string',
      clusterName: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

