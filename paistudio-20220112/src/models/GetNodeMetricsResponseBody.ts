// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeMetric } from "./NodeMetric";


export class GetNodeMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the queried metric.
   * 
   * @example
   * DiskWriteRate
   */
  metricType?: string;
  /**
   * @remarks
   * The metric information of the nodes.
   */
  nodesMetrics?: NodeMetric[];
  /**
   * @remarks
   * The ID of the resource group. Each resource group has a globally unique ID. You can use the resource group ID to retrieve the information about the resource group.
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      metricType: 'MetricType',
      nodesMetrics: 'NodesMetrics',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricType: 'string',
      nodesMetrics: { 'type': 'array', 'itemType': NodeMetric },
      resourceGroupID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodesMetrics)) {
      $dara.Model.validateArray(this.nodesMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

