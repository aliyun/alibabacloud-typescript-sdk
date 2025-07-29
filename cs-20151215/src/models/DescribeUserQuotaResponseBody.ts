// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotasValue } from "./QuotasValue";


export class DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota extends $dara.Model {
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The maximum bandwidth of each enhanced edge node pool. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The maximum number of enhanced edge node pools that you can create within an Alibaba Cloud account.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The maximum subscription duration of an enhanced edge node pool. Unit: months.
   * 
   * >  You are charged for enhanced edge node pools based on the pay-as-you-go billing method. Therefore, you can ignore this parameter.
   * 
   * @example
   * 3
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'bandwidth',
      count: 'count',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      count: 'number',
      period: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota of Container Service for Kubernetes (ACK) managed clusters. Default value: 20. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 20
   */
  amkClusterQuota?: number;
  /**
   * @remarks
   * The quota of ACK Serverless clusters. Default value: 20. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 3
   */
  askClusterQuota?: number;
  /**
   * @remarks
   * The quota of node pools in an ACK cluster. Default value: 20. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 10
   */
  clusterNodepoolQuota?: number;
  /**
   * @remarks
   * The quota of clusters that belong to an Alibaba Cloud account. Default value: 50. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 50
   */
  clusterQuota?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The quotas of enhanced edge node pools.
   */
  edgeImprovedNodepoolQuota?: DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota;
  /**
   * @remarks
   * The quota of nodes in an ACK cluster. Default value: 100. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 100
   */
  nodeQuota?: number;
  /**
   * @remarks
   * Information about the new quota.
   */
  quotas?: { [key: string]: QuotasValue };
  static names(): { [key: string]: string } {
    return {
      amkClusterQuota: 'amk_cluster_quota',
      askClusterQuota: 'ask_cluster_quota',
      clusterNodepoolQuota: 'cluster_nodepool_quota',
      clusterQuota: 'cluster_quota',
      edgeImprovedNodepoolQuota: 'edge_improved_nodepool_quota',
      nodeQuota: 'node_quota',
      quotas: 'quotas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amkClusterQuota: 'number',
      askClusterQuota: 'number',
      clusterNodepoolQuota: 'number',
      clusterQuota: 'number',
      edgeImprovedNodepoolQuota: DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota,
      nodeQuota: 'number',
      quotas: { 'type': 'map', 'keyType': 'string', 'valueType': QuotasValue },
    };
  }

  validate() {
    if(this.edgeImprovedNodepoolQuota && typeof (this.edgeImprovedNodepoolQuota as any).validate === 'function') {
      (this.edgeImprovedNodepoolQuota as any).validate();
    }
    if(this.quotas) {
      $dara.Model.validateMap(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

