// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDashboardsByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster. If the ClusterType parameter is not set to `cloud-product-prometheus` or `cms-enterprise-prometheus`, you must specify the ClusterId parameter.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   vpc-prometheus
   * *   cloud-product-prometheus
   * *   cms-enterprise-prometheus
   * *   ExternalKubernetes
   * *   Ask
   * *   Kubernetes
   * *   ManagedKubernetes
   * *   remote-write-prometheus
   * *   GlobalViewV2
   * 
   * @example
   * cloud-product-prometheus
   */
  clusterType?: string;
  /**
   * @remarks
   * The name of the dashboard.
   * 
   * @example
   * edas-ingress-url
   */
  dashBoardName?: string;
  /**
   * @remarks
   * The version of the dashboard.
   * 
   * @example
   * latest
   */
  dashBoardVersion?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   loki
   * *   prometheus
   * 
   * @example
   * loki
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the dashboard group.
   * 
   * @example
   * EDAS
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether to display the Grafana dashboard only in the Application Real-Time Monitoring Service (ARMS) console.
   * 
   * @example
   * true
   */
  onlyQuery?: boolean;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * edas
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      dashBoardName: 'DashBoardName',
      dashBoardVersion: 'DashBoardVersion',
      dataSourceType: 'DataSourceType',
      groupName: 'GroupName',
      onlyQuery: 'OnlyQuery',
      productCode: 'ProductCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      dashBoardName: 'string',
      dashBoardVersion: 'string',
      dataSourceType: 'string',
      groupName: 'string',
      onlyQuery: 'boolean',
      productCode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

