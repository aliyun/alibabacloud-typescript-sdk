// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerClusterResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The status of the client. Valid values:
   * 
   * *   **MISS**: The client is disconnected.
   * *   **UNKNOWN**: The client is in an unknown state.
   * *   **READY**: The client is ready.
   * 
   * @example
   * READY
   */
  agentStatus?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cl-0006gwppd0jtttpmb0ri
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster. Valid value: ACK, which indicates ACK clusters.
   * 
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description ack pv backup
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the cluster.
   * 
   * @example
   * c5bbd0931a30947f4ab85efd19380a72d
   */
  identifier?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ack_pv_backup_location
   */
  name?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **CLASSIC**: the classic network
   * *   **VPC**: virtual private cloud (VPC)
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The token that is used to register the Hybrid Backup Recovery (HBR) client in the cluster.
   * 
   * @example
   * eyJhY2Nvd******A/VnZpgXQC5A==
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      description: 'Description',
      identifier: 'Identifier',
      name: 'Name',
      networkType: 'NetworkType',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      clusterId: 'string',
      clusterType: 'string',
      description: 'string',
      identifier: 'string',
      name: 'string',
      networkType: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of clusters.
   */
  clusters?: DescribeContainerClusterResponseBodyClusters[];
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CC94B755-C3C2-5B9D-BD77-E0FE819A4DB2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeContainerClusterResponseBodyClusters },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

