// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusInstanceRequestTags extends $dara.Model {
  key?: string;
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
   * Does it require all child instances to be verified successfully before creating a GlobalView instance. The default is false, which means partial success is possible.
   * 
   * @example
   * true
   */
  allSubClustersSuccess?: boolean;
  /**
   * @remarks
   * The number of days for which data is automatically archived after the storage expires. Valid values: 60, 90, 180, and 365. 0 indicates that the data is not archived.
   * 
   * @example
   * 90
   */
  archiveDuration?: number;
  /**
   * @remarks
   * The ID of the ACK cluster. This parameter is required if you set the ClusterType parameter to aliyun-cs.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the created cluster. This parameter is required if you set the ClusterType parameter to remote-write or ecs.
   * 
   * @example
   * clusterNameOfTest
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the Prometheus instance. Valid values:
   * 
   * *   remote-write: Prometheus instance for Remote Write
   * *   ecs (unavailable): Prometheus instance for ECS
   * *   global-view: Prometheus instance for GlobalView
   * *   aliyun-cs: Prometheus instance for Container Service
   * *   cloud-product (unavailable): Prometheus instance for Alibaba Cloud services
   * *   cloud-monitor (unavailable): Prometheus instance for Hybrid Cloud Monitoring
   * *   flink (unavailable): Prometheus instance for Flink
   * 
   * This parameter is required.
   * 
   * @example
   * remote-write
   */
  clusterType?: string;
  /**
   * @remarks
   * The data storage duration. Unit: days.
   * 
   * @example
   * 90
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the Grafana dedicated instance. This parameter is available if you set the ClusterType parameter to ecs.
   * 
   * @example
   * grafana-bp1*****
   */
  grafanaInstanceId?: string;
  /**
   * @remarks
   * The billing mode. Valid values: POSTPAY: charges fees based on the amount of reported metric data. POSTPAY_GB: charges fees based on the amount of written metric data. Empty: The user-defined default billing mode is used. If you do not specify a default value, you are charged based on the amount of reported metric data.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the region. If you use a Prometheus instance to monitor an Alibaba Cloud service in China, this parameter must be set to cn-shanghai.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the custom resource group. You can configure this parameter to bind the instance to the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group. This parameter is required if you set the ClusterType parameter to ecs.
   * 
   * @example
   * sg-bp1********
   */
  securityGroupId?: string;
  /**
   * @remarks
   * JSON string for child instances of the globalView instance.
   * 
   * @example
   * When the clusterType is global view, this parameter needs to be passed: a list of information about the clusters that need to be aggregated.
   * Example:
   * [
   *   {
   *     "Headers":{
   * 
   *     },
   *     "RegionId": "cn hangzhou",
   *     "SourceType": "Alibaba Prometheus",
   *     "Extras":{
   * 
   *     },
   *     "ClusterId": "c39a1048921e04f ****************",
   *     "SourceName": "test1",
   *     "DataSource": "",
   *     "UserId": "1672753 ******************"
   *   },
   *   {
   *     "Headers":{
   * 
   *     },
   *     "RegionId": "cn beijing",
   *     "SourceType": "Alibaba Prometheus",
   *     "Extras":{
   * 
   *     },
   *     "ClusterId": "c6b6485496d5b40 ****************",
   *     "SourceName": "test2",
   *     "DataSource": "",
   *     "UserId": "1672753 ******************"
   *   },
   *   {
   *     "Headers":{
   * 
   *     },
   *     "RegionId": "cn zhangjiakou",
   *     "SourceType": "Alibaba Prometheus",
   *     "Extras":{
   * 
   *     },
   *     "ClusterId": "c261a4f3200c446 ****************",
   *     "SourceName": "test3",
   *     "DataSource": "",
   *     "UserId": "1672753 ******************"
   *   }
   * ]
   */
  subClustersJson?: string;
  /**
   * @remarks
   * The tags of the instance. You can configure this parameter to manage tags for the instance.
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
   * The ID of the vSwitch. This parameter is required if you set the ClusterType parameter to ecs.
   * 
   * @example
   * vsw-bp1*********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of virtual private cloud (VPC). This parameter is required if you set the ClusterType parameter to ecs.
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

