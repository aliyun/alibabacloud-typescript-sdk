// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotasValue } from "./QuotasValue";


export class DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota extends $dara.Model {
  bandwidth?: number;
  count?: number;
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
   * The quota for managed clusters. Default value: 20. To request a quota increase beyond the default value, [submit a request on the Quota Center page](https://quotas.console.aliyun.com/products/csk/quotas).
   * 
   * @example
   * 20
   */
  amkClusterQuota?: number;
  /**
   * @remarks
   * The quota for ASK clusters. Default value: 20. To request a quota increase beyond the default value, [submit a request on the Quota Center page](https://quotas.console.aliyun.com/products/csk/quotas).
   * 
   * @example
   * 3
   */
  askClusterQuota?: number;
  /**
   * @remarks
   * The node pool quota per cluster. Default value: 20. To request a quota increase beyond the default value, [submit a request on the Quota Center page](https://quotas.console.aliyun.com/products/csk/quotas).
   * 
   * @example
   * 10
   */
  clusterNodepoolQuota?: number;
  /**
   * @remarks
   * The total cluster quota per account. Default value: 50. To request a quota increase beyond the default value, [submit a request on the Quota Center page](https://quotas.console.aliyun.com/products/csk/quotas).
   * 
   * @example
   * 50
   */
  clusterQuota?: number;
  edgeImprovedNodepoolQuota?: DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota;
  /**
   * @remarks
   * The node quota per cluster. Default value: 100. To request a quota increase beyond the default value, [submit a request on the Quota Center page](https://quotas.console.aliyun.com/products/csk/quotas).
   * 
   * @example
   * 100
   */
  nodeQuota?: number;
  /**
   * @remarks
   * The new quota items. If this field is returned, the values in this field take precedence.
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

