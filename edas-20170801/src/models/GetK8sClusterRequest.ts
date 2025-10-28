// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the Kubernetes cluster. Valid values:
   * 
   * *   5: ACK cluster
   * *   7: self-managed Kubernetes cluster
   * 
   * @example
   * 5
   */
  clusterType?: number;
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
   * The number of entries to return on each page. Default value: 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionTag?: string;
  /**
   * @remarks
   * The subtype of the cluster. Valid values:
   * 
   * *   Ask: Serverless Kubernetes cluster
   * *   ManagedKubernetes: ACK cluster
   * 
   * @example
   * Ask
   */
  subClusterType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionTag: 'RegionTag',
      subClusterType: 'SubClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'number',
      currentPage: 'number',
      pageSize: 'number',
      regionTag: 'string',
      subClusterType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

