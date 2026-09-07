// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether all sub-instances must pass validation before the GlobalView instance is created. Default value: false, which indicates that partial success is allowed.
   * 
   * @example
   * true
   */
  allSubClustersSuccess?: boolean;
  /**
   * @remarks
   * The number of days to automatically archive data after the storage period expires. Valid values: 60, 90, 180, and 365. A value of 0 indicates that data is not archived.
   * 
   * @example
   * 90
   */
  archiveDuration?: number;
  /**
   * @remarks
   * The Container Service cluster ID. This parameter is required when ClusterType is set to aliyun-cs.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster to create. This parameter is required when ClusterType is set to remote-write, ecs, or global-view.
   * 
   * For ecs instances, the ClusterName must follow the format "name-vpc-id", and the name part cannot exceed 24 characters. Example: "mytest1-vpc-xxxxxxxxxxx".
   * 
   * @example
   * clusterNameOfTest
   */
  clusterName?: string;
  /**
   * @remarks
   * The instance type. Valid values: 
   * -  remote-write: Prometheus for Remote Write.
   * -  ecs (no longer supported): Prometheus for ECS.
   * -  global-view: Prometheus for GlobalView.
   * -  aliyun-cs (no longer supported): Prometheus for Container Service.
   * - cloud-product (no longer supported): Prometheus for Cloud Service.
   * - cloud-monitor (no longer supported): Prometheus for Hybrid Cloud Monitoring.
   * - flink (no longer supported): Prometheus for Flink.
   * 
   * This parameter is required.
   * 
   * @example
   * remote-write
   */
  clusterType?: string;
  /**
   * @remarks
   * The data storage duration, in days.
   * 
   * @example
   * 90
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the bound Grafana workspace. Set this parameter to "free" when you use the shared Grafana edition.
   * 
   * @example
   * grafana-bp1*****
   */
  grafanaInstanceId?: string;
  /**
   * @remarks
   * The Billable methods. Valid values:
   * POSTPAY: pay-as-you-go based on the number of reported metrics.
   * POSTPAY_GB: pay-as-you-go based on the volume of written metrics.
   * Empty: uses the default billing method configured by the user. If no default is configured, the system defaults to billing based on the number of reported metrics.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The actual region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Network Security group ID. This parameter is required when ClusterType is set to ecs or aliyun-cs for a managed ASK cluster.
   * 
   * @example
   * sg-bp1********
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The JSON string of sub-instances for the GlobalView instance.
   * 
   * @example
   * 当clusterType为global-view时，需要传此参数：需要聚合的集群的信息列表；示例：
   * [
   *     {
   *         "headers":{
   * 
   *         },
   *         "regionId":"cn-hangzhou",
   *         "sourceType":"AlibabaPrometheus",
   *         "extras":{
   * 
   *         },
   *         "clusterId":"c39a1048921e04f***********",
   *         "sourceName":"arms-luyao-test",
   *         "dataSource":"",
   *         "userId":"1672753***********"
   *     },
   *     {
   *         "headers":{
   * 
   *         },
   *         "regionId":"cn-beijing",
   *         "sourceType":"AlibabaPrometheus",
   *         "extras":{
   * 
   *         },
   *         "clusterId":"c6b6485496d5b40***********",
   *         "sourceName":"agent-321-测试",
   *         "dataSource":"",
   *         "userId":"1672753***********"
   *     },
   *     {
   *         "headers":{
   * 
   *         },
   *         "regionId":"cn-zhangjiakou",
   *         "sourceType":"AlibabaPrometheus",
   *         "extras":{
   * 
   *         },
   *         "clusterId":"c261a4f3200c446***********",
   *         "sourceName":"zaifeng-cardinality-01",
   *         "dataSource":"",
   *         "userId":"1672753***********"
   *     }
   * ]
   */
  subClustersJson?: string;
  /**
   * @remarks
   * The custom tags.
   * 
   * @example
   * [
   *     {
   *         "labelName":"labelValue"
   *     },
   *     {
   *         "testName":"clusterA"
   *     }
   * ]
   */
  tags?: CreatePrometheusInstanceRequestTags[];
  /**
   * @remarks
   * The vSwitch ID. This parameter is required when ClusterType is set to ecs or aliyun-cs for a managed ASK cluster.
   * 
   * @example
   * vsw-bp1*********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID. This parameter is required when ClusterType is set to ecs or aliyun-cs for a managed ASK cluster.
   * 
   * @example
   * vpc-rpn**********
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allSubClustersSuccess: 'AllSubClustersSuccess',
      archiveDuration: 'ArchiveDuration',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      duration: 'Duration',
      grafanaInstanceId: 'GrafanaInstanceId',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      subClustersJson: 'SubClustersJson',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSubClustersSuccess: 'boolean',
      archiveDuration: 'number',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      duration: 'number',
      grafanaInstanceId: 'string',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      subClustersJson: 'string',
      tags: { 'type': 'array', 'itemType': CreatePrometheusInstanceRequestTags },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

