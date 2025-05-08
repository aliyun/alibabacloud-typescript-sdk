// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * cmgj0048****-Frequency-1
   */
  entityId?: string;
  /**
   * @remarks
   * Name of a measurement indicator.
   * 
   * @example
   * AvgMemory
   */
  metricName?: string;
  /**
   * @remarks
   * Custom PromQL.
   * 
   * @example
   * avg_over_time(count(kube_pod_info{namespace=\\"default\\"})[1h:1m])
   */
  promql?: string;
  /**
   * @remarks
   * Measurement indicators.
   * 
   * @example
   * ComputeNestPrometheus
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

