// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable item.
   * 
   * @example
   * cmgjxxxxxxxx-NetworkOut-2
   */
  entityId?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * NetworkLantency
   */
  metricName?: string;
  /**
   * @remarks
   * The custom prometheus statement.
   * 
   * @example
   * avg_over_time(count(kube_pod_info{namespace=\\"default\\"})[1h:1m])
   */
  promql?: string;
  /**
   * @remarks
   * The metric.
   * 
   * @example
   * AvgPod
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      metricName: 'MetricName',
      promql: 'Promql',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      metricName: 'string',
      promql: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

