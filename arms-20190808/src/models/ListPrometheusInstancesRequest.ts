// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type. If you do not specify this parameter, all cluster types are queried. Valid values:
   * 
   * *   cloud-product-prometheus: Prometheus instance for cloud services
   * *   ManagedKubernetes: ACK managed cluster
   * *   satellite: Prometheus instance for ARMS OpenTelemetry
   * *   Ask: ACK Serverless cluster
   * *   remote-write-prometheus: general-purpose Prometheus instance
   * *   cloud-monitor-cmee: Hybrid Cloud Monitoring
   * *   ExternalKubernetes: external Kubernetes cluster registered in ACK
   * *   vpc-prometheus: Prometheus instance for ECS
   * *   cloud-monitor-direct: cloud service self-monitoring
   * *   Edge Kubernetes: ACK Edge cluster
   * 
   * @example
   * cloud-product-prometheus
   */
  clusterType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to obtain global aggregation instances. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  showGlobalView?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      regionId: 'RegionId',
      showGlobalView: 'ShowGlobalView',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      regionId: 'string',
      showGlobalView: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

