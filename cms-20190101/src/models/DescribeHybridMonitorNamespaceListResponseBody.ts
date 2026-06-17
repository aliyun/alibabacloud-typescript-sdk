// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceListMetricList extends $dara.Model {
  /**
   * @remarks
   * The list of metrics.
   */
  list?: string[];
  /**
   * @remarks
   * The collection period of the metric.
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceList extends $dara.Model {
  /**
   * @remarks
   * The list of metrics for the Alibaba Cloud service.
   */
  metricList?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceListMetricList[];
  /**
   * @remarks
   * The data namespace of the Alibaba Cloud service.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceListMetricList },
      namespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricList)) {
      $dara.Model.validateArray(this.metricList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricList extends $dara.Model {
  /**
   * @remarks
   * The list of namespaces.
   */
  namespaceList?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceList[];
  /**
   * @remarks
   * The account that is used to create the namespace.
   * 
   * @example
   * 120886317861****
   */
  userId?: number;
  /**
   * @remarks
   * The configuration file for the Alibaba Cloud service that is connected to Hybrid Cloud Monitoring.
   * 
   * - namespace: the namespace of the Alibaba Cloud service.
   * 
   * - metric_list: the metrics of the Alibaba Cloud service.
   * 
   * - dimension: the resources of the Alibaba Cloud service that can be queried in Hybrid Cloud Monitoring. If this parameter is empty, all resources are monitored.
   * 
   * @example
   * products:- namespace: acs_ecs_dashboard metric_info: - metric_list: - cpu_total dimension: \\"\\"
   */
  YAMLConfig?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceList: 'NamespaceList',
      userId: 'UserId',
      YAMLConfig: 'YAMLConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceList: { 'type': 'array', 'itemType': DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceList },
      userId: 'number',
      YAMLConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaceList)) {
      $dara.Model.validateArray(this.namespaceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceDetail extends $dara.Model {
  /**
   * @remarks
   * The region where the monitoring data is stored.
   * 
   * > This parameter is returned if you set `NamespaceType` to `m_prom_user` when you create the namespace.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceRegion?: string;
  /**
   * @remarks
   * The Prometheus instance where the monitoring data is stored.
   * 
   * > This parameter is returned if you set `NamespaceType` to `aliyun_prometheus` when you create the namespace.
   * 
   * @example
   * rw-57******************7f
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) project where the monitoring data is stored.
   * 
   * > This parameter is returned if you set `NamespaceType` to `m_prom_user` when you create the namespace.
   * 
   * @example
   * cms-hybrid-120886317861****-cn-hangzhou-a83d
   */
  SLSProject?: string;
  /**
   * @remarks
   * The data storage duration. Valid values:
   * 
   * - cms.s1.large: 15 days.
   * 
   * - cms.s1.xlarge: 32 days.
   * 
   * - cms.s1.2xlarge: 63 days.
   * 
   * - cms.s1.3xlarge: 93 days.
   * 
   * - cms.s1.6xlarge: 185 days.
   * 
   * - cms.s1.12xlarge: 376 days.
   * 
   * @example
   * cms.s1.3xlarge
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceRegion: 'NamespaceRegion',
      prometheusInstanceId: 'PrometheusInstanceId',
      SLSProject: 'SLSProject',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceRegion: 'string',
      prometheusInstanceId: 'string',
      SLSProject: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespace extends $dara.Model {
  /**
   * @remarks
   * The configuration details of data import tasks for Alibaba Cloud services.
   */
  aliyunProductMetricList?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricList[];
  /**
   * @remarks
   * The timestamp when the namespace was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1652682744000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * aliyun-test
   */
  description?: string;
  /**
   * @remarks
   * The details of the data storage duration.
   */
  detail?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceDetail;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 3****
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the namespace is deleted. Valid values:
   * 
   * - 0: The namespace is not deleted.
   * 
   * - 1: The namespace is deleted.
   * 
   * @example
   * 0
   */
  isDelete?: number;
  /**
   * @remarks
   * The timestamp when the namespace was last modified. Unit: milliseconds.
   * 
   * @example
   * 1652682744000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * aliyun-test
   */
  namespace?: string;
  /**
   * @remarks
   * The storage solution for monitoring data. Valid values:
   * 
   * - m_prom_user: The monitoring data is stored in SLS.
   * 
   * - m_prom_pool: The monitoring data is stored in the storage space provided by Cloud Monitor.
   * 
   * - aliyun_prometheus: The monitoring data is stored in a Prometheus instance.
   * 
   * @example
   * aliyun_prometheus
   */
  namespaceType?: string;
  /**
   * @remarks
   * The number of data import tasks for non-Alibaba Cloud services.
   * 
   * @example
   * 0
   */
  notAliyunTaskNumber?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunProductMetricList: 'AliyunProductMetricList',
      createTime: 'CreateTime',
      description: 'Description',
      detail: 'Detail',
      id: 'Id',
      isDelete: 'IsDelete',
      modifyTime: 'ModifyTime',
      namespace: 'Namespace',
      namespaceType: 'NamespaceType',
      notAliyunTaskNumber: 'NotAliyunTaskNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunProductMetricList: { 'type': 'array', 'itemType': DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricList },
      createTime: 'string',
      description: 'string',
      detail: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceDetail,
      id: 'string',
      isDelete: 'number',
      modifyTime: 'string',
      namespace: 'string',
      namespaceType: 'string',
      notAliyunTaskNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunProductMetricList)) {
      $dara.Model.validateArray(this.aliyunProductMetricList);
    }
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The details of the namespaces.
   */
  describeHybridMonitorNamespace?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespace[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Specified parameter PageSize is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1EC450A4-3221-5148-B77E-2827576CFE48
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      describeHybridMonitorNamespace: 'DescribeHybridMonitorNamespace',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      describeHybridMonitorNamespace: { 'type': 'array', 'itemType': DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespace },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.describeHybridMonitorNamespace)) {
      $dara.Model.validateArray(this.describeHybridMonitorNamespace);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

