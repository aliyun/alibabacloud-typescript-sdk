// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstanceByTagAndResourceGroupIdResponseBodyDataPrometheusInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * ac-cus-tag-3
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * asg-2vc8qq7x89o11rus9uvu
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusInstanceByTagAndResourceGroupIdResponseBodyDataPrometheusInstances extends $dara.Model {
  /**
   * @remarks
   * The authorization token.
   * 
   * @example
   * ad32dxxxx
   */
  authToken?: string;
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * c9d5dda1aeca64220853ace304baeb03d
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the Prometheus instance.
   * 
   * @example
   * prom1
   */
  clusterName?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   remote-write: Prometheus instance for Remote Write
   * *   ecs: Prometheus instances for ECS
   * *   cloud-monitor: Prometheus instance for Alibaba Cloud services in the Chinese mainland
   * *   cloud-product: Prometheus instance for Alibaba Cloud services outside the Chinese mainland
   * *   global-view: global aggregation instance
   * *   aliyun-cs: Prometheus instance for Container Service
   * 
   * @example
   * ecs
   */
  clusterType?: string;
  /**
   * @remarks
   * The ID of the Grafana workspace.
   * 
   * @example
   * grafana-rnggfvhlcdl6m71l**
   */
  grafanaInstanceId?: string;
  /**
   * @remarks
   * The public URL for the HTTP API.
   * 
   * @example
   * http://cn-beijing.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/cn-beijing
   */
  httpApiInterUrl?: string;
  /**
   * @remarks
   * The internal URL for the HTTP API.
   * 
   * @example
   * http://cn-beijing-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/cn-beijing
   */
  httpApiIntraUrl?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The public URL for Pushgateway.
   * 
   * @example
   * http://cn-beijing.arms.aliyuncs.com/prometheus/xxx/api/v2
   */
  pushGatewayInterUrl?: string;
  /**
   * @remarks
   * The internal URL for Pushgateway.
   * 
   * @example
   * http://cn-beijing-intranet.arms.aliyuncs.com/prometheus/xxx/api/v2
   */
  pushGatewayIntraUrl?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The public URL for remote read.
   * 
   * @example
   * http://cn-beijing.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/api/v1/read
   */
  remoteReadInterUrl?: string;
  /**
   * @remarks
   * The internal URL for remote read.
   * 
   * @example
   * http://cn-beijing-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/api/v1/read
   */
  remoteReadIntraUrl?: string;
  /**
   * @remarks
   * The public URL for remote write.
   * 
   * @example
   * http://cn-beijing.arms.aliyuncs.com/prometheus/xxx/api/v3/write
   */
  remoteWriteInterUrl?: string;
  /**
   * @remarks
   * The internal URL for remote write.
   * 
   * @example
   * http://cn-beijing-intranet.arms.aliyuncs.com/prometheus/xxx/api/v3/write
   */
  remoteWriteIntraUrl?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Prometheus instance belongs.
   * 
   * @example
   * rg-acfmz7nocpeidcy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * PROMETHEUS
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-f8zd1toc10wmbi1v5rom
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The child instances of the global aggregation instance. The value is a JSON string.
   * 
   * @example
   * [ { "headers": {}, "regionId": "cn-hangzhou", "sourceType": "AlibabaPrometheus", "extras": {}, "clusterId": "c39a1048921e04fceb039db2fb\\*\\*\\*\\*", "sourceName": "arms-luyao-test", "dataSource": "", "userId": "167275301789\\*\\*\\*\\*" }, { "headers": {}, "regionId": "cn-beijing", "sourceType": "AlibabaPrometheus", "extras": {}, "clusterId": "c6b6485496d5b400abde22cb47b5\\*\\*\\*\\*", "sourceName": "agent-321-test", "dataSource": "", "userId": "167275301789\\*\\*\\*\\*" }, { "headers": {}, "regionId": "cn-zhangjiakou", "sourceType": "AlibabaPrometheus", "extras": {}, "clusterId": "c261a4f3200c446659133f1ade78\\*\\*\\*\\*", "sourceName": "zaifeng-cardinality-01", "dataSource": "", "userId": "167275301789\\*\\*\\*\\*" } ]
   */
  subClustersJson?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListPrometheusInstanceByTagAndResourceGroupIdResponseBodyDataPrometheusInstancesTags[];
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1672753017899***
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-f8z73vcja1tqnw90aav5a
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-8vbtp1fsm8mir18l8rl0u
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'AuthToken',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      grafanaInstanceId: 'GrafanaInstanceId',
      httpApiInterUrl: 'HttpApiInterUrl',
      httpApiIntraUrl: 'HttpApiIntraUrl',
      paymentType: 'PaymentType',
      pushGatewayInterUrl: 'PushGatewayInterUrl',
      pushGatewayIntraUrl: 'PushGatewayIntraUrl',
      regionId: 'RegionId',
      remoteReadInterUrl: 'RemoteReadInterUrl',
      remoteReadIntraUrl: 'RemoteReadIntraUrl',
      remoteWriteInterUrl: 'RemoteWriteInterUrl',
      remoteWriteIntraUrl: 'RemoteWriteIntraUrl',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      securityGroupId: 'SecurityGroupId',
      subClustersJson: 'SubClustersJson',
      tags: 'Tags',
      userId: 'UserId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      grafanaInstanceId: 'string',
      httpApiInterUrl: 'string',
      httpApiIntraUrl: 'string',
      paymentType: 'string',
      pushGatewayInterUrl: 'string',
      pushGatewayIntraUrl: 'string',
      regionId: 'string',
      remoteReadInterUrl: 'string',
      remoteReadIntraUrl: 'string',
      remoteWriteInterUrl: 'string',
      remoteWriteIntraUrl: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      securityGroupId: 'string',
      subClustersJson: 'string',
      tags: { 'type': 'array', 'itemType': ListPrometheusInstanceByTagAndResourceGroupIdResponseBodyDataPrometheusInstancesTags },
      userId: 'string',
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

export class ListPrometheusInstanceByTagAndResourceGroupIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried Prometheus instances.
   */
  prometheusInstances?: ListPrometheusInstanceByTagAndResourceGroupIdResponseBodyDataPrometheusInstances[];
  static names(): { [key: string]: string } {
    return {
      prometheusInstances: 'PrometheusInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusInstances: { 'type': 'array', 'itemType': ListPrometheusInstanceByTagAndResourceGroupIdResponseBodyDataPrometheusInstances },
    };
  }

  validate() {
    if(Array.isArray(this.prometheusInstances)) {
      $dara.Model.validateArray(this.prometheusInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusInstanceByTagAndResourceGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned struct.
   */
  data?: ListPrometheusInstanceByTagAndResourceGroupIdResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4789C3E9-A85A-524B-B97B-9D2B14BA06BC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListPrometheusInstanceByTagAndResourceGroupIdResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

