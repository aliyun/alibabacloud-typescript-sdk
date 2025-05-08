// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequestCommodityMeteringEntityExtraInfos extends $dara.Model {
  /**
   * @remarks
   * Metering entity ID.
   * 
   * @example
   * cmgj0006xxxx-Memory-1
   */
  entityId?: string;
  /**
   * @remarks
   * Metric name, required when type is ComputeNestBill or ComputeNestPrometheus.
   * 
   * @example
   * VirtualCpu/ecs.InstanceType
   */
  metricName?: string;
  /**
   * @remarks
   * Promql statement.
   * 
   * @example
   * avg_over_time(sum(rate(container_cpu_usage_seconds_total{namespace=~"ALIYUN::StackName"}[2m]))[1h:10s])
   */
  promql?: string;
  /**
   * @remarks
   * Type. Valid values:
   * 
   * - Custom
   * - ComputeNestBill
   * - ComputeNestPrometheus
   * - ComputeNestTime
   * 
   * @example
   * Custom
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

