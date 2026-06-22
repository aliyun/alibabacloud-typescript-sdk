// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterInterceptionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The container firewall status of the cluster. Valid values:
   * - **-1**: unknown
   * - **0**: abnormal
   * - **1**: normal
   * - **2**: normal pending confirmation.
   * 
   * @example
   * 1
   */
  clusterCNNFStatus?: number;
  /**
   * @remarks
   * The ID of the container cluster.
   * >You can call the [DescribeContainerInstances](~~DescribeContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * c22143730ab6e40b09ec7c1c51d4d****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * sas
   */
  clusterName?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20.
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

