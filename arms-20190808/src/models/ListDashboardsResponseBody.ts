// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDashboardsResponseBodyDashboardVosI18nChild extends $dara.Model {
  /**
   * @remarks
   * The type of the Grafana dashboard. This parameter has the same effect as the Exporter parameter whereas provides clearer implication.
   * 
   * @example
   * Node
   */
  dashboardType?: string;
  /**
   * @remarks
   * The type of the exporter access source. Valid values:
   * 
   * *   Prometheus
   * *   Node
   * *   GPU
   * *   Redis
   * *   MySQL
   * *   Kafka
   * *   NGINX V2
   * *   Nginx
   * *   ZooKeeper
   * *   MongoDB
   * *   RabbitMQ
   * *   PostgreSQL
   * *   Kubernetes
   * *   Client Library
   * *   Elasticsearch
   * *   RocketMQ
   * 
   * @example
   * Nginx
   */
  exporter?: string;
  /**
   * @remarks
   * The URL of the Grafana dashboard.
   * 
   * @example
   * http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s
   */
  httpUrl?: string;
  /**
   * @remarks
   * The URL of the Grafana dashboard.
   * 
   * @example
   * http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s
   */
  httpsUrl?: string;
  /**
   * @remarks
   * The ID of the Grafana dashboard. The value is unique only when you install the Grafana dashboard.
   * 
   * @example
   * 1100**
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the exporter is provided by ARMS.
   * 
   * *   `true:` The exporter is provided by ARMS.
   * *   `false:`: The exporter is not provided by ARMS.
   * 
   * @example
   * false
   */
  isArmsExporter?: boolean;
  /**
   * @remarks
   * The category of the Grafana dashboard. Valid values: BASIC, THIRD, LIMIT, and CUSTOM.
   * 
   * @example
   * BASIC
   */
  kind?: string;
  /**
   * @remarks
   * The language of the Grafana dashboard.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The name of the Grafana dashboard. This parameter is different from the **Title** parameter as this parameter cannot be changed.
   * 
   * @example
   * k8s-node-overview
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the Grafana dashboard has a new version that is available for upgrade.
   * 
   * @example
   * false
   */
  needUpdate?: boolean;
  /**
   * @remarks
   * The tags of the Grafana dashboard.
   */
  tags?: string[];
  /**
   * @remarks
   * The time when the Grafana dashboard was created. The value is a timestamp.
   * 
   * @example
   * 1590136924
   */
  time?: string;
  /**
   * @remarks
   * The title of the Grafana dashboard.
   * 
   * @example
   * ApiServer
   */
  title?: string;
  /**
   * @remarks
   * The type of the Grafana dashboard. Valid values:
   * 
   * *   `dash-db`: a dashboard
   * *   `dash-folder`: a folder that can include a dashboard
   * 
   * @example
   * dash-db
   */
  type?: string;
  /**
   * @remarks
   * The unique identifier of the Grafana dashboard.
   * 
   * @example
   * 1131971649496228-*****-59
   */
  uid?: string;
  /**
   * @remarks
   * The complete URL of the Grafana dashboard.
   * 
   * @example
   * http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s
   */
  url?: string;
  /**
   * @remarks
   * The version of the Grafana dashboard. The combination of version and name uniquely identifies a dashboard.
   * 
   * @example
   * v2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardType: 'DashboardType',
      exporter: 'Exporter',
      httpUrl: 'HttpUrl',
      httpsUrl: 'HttpsUrl',
      id: 'Id',
      isArmsExporter: 'IsArmsExporter',
      kind: 'Kind',
      language: 'Language',
      name: 'Name',
      needUpdate: 'NeedUpdate',
      tags: 'Tags',
      time: 'Time',
      title: 'Title',
      type: 'Type',
      uid: 'Uid',
      url: 'Url',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardType: 'string',
      exporter: 'string',
      httpUrl: 'string',
      httpsUrl: 'string',
      id: 'string',
      isArmsExporter: 'boolean',
      kind: 'string',
      language: 'string',
      name: 'string',
      needUpdate: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
      time: 'string',
      title: 'string',
      type: 'string',
      uid: 'string',
      url: 'string',
      version: 'string',
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

export class ListDashboardsResponseBodyDashboardVos extends $dara.Model {
  /**
   * @remarks
   * The type of the Grafana dashboard. This parameter has the same effect as the Exporter parameter whereas provides clearer implication.
   * 
   * @example
   * Node
   */
  dashboardType?: string;
  /**
   * @remarks
   * The type of the exporter access source. Valid values:
   * 
   * *   Prometheus
   * *   Node
   * *   GPU
   * *   Redis
   * *   MySQL
   * *   Kafka
   * *   NGINX V2
   * *   Nginx
   * *   ZooKeeper
   * *   MongoDB
   * *   RabbitMQ
   * *   PostgreSQL
   * *   Kubernetes
   * *   Client Library
   * *   Elasticsearch
   * *   RocketMQ
   * 
   * @example
   * Nginx
   */
  exporter?: string;
  /**
   * @remarks
   * The URL of the Grafana dashboard.
   * 
   * @example
   * http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s
   */
  httpUrl?: string;
  /**
   * @remarks
   * The URL of the Grafana dashboard.
   * 
   * @example
   * http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s
   */
  httpsUrl?: string;
  /**
   * @remarks
   * The information about the Grafana dashboard.
   */
  i18nChild?: ListDashboardsResponseBodyDashboardVosI18nChild;
  /**
   * @remarks
   * The ID of the Grafana dashboard. The value is unique only when you install the Grafana dashboard.
   * 
   * @example
   * 1100**
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the exporter is provided by Application Real-Time Monitoring Service (ARMS).
   * 
   * *   `true:` The exporter is provided by ARMS.
   * *   `false:`: The exporter is not provided by ARMS.
   * 
   * @example
   * false
   */
  isArmsExporter?: boolean;
  /**
   * @remarks
   * The category of the Grafana dashboard. Valid values: BASIC, THIRD, LIMIT, and CUSTOM.
   * 
   * @example
   * BASIC
   */
  kind?: string;
  /**
   * @remarks
   * The language of the Grafana dashboard.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The name of the Grafana dashboard. This parameter is different from the **Title** parameter as this parameter cannot be changed.
   * 
   * @example
   * k8s-node-overview
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the Grafana dashboard has a new version that is available for upgrade.
   * 
   * @example
   * false
   */
  needUpdate?: boolean;
  /**
   * @remarks
   * The tags of the Grafana dashboard.
   */
  tags?: string[];
  /**
   * @remarks
   * The time when the Grafana dashboard was created. The value is a timestamp. Unit: seconds.
   * 
   * @example
   * 1590136924
   */
  time?: string;
  /**
   * @remarks
   * The title of the Grafana dashboard.
   * 
   * @example
   * ApiServer
   */
  title?: string;
  /**
   * @remarks
   * The type of the Grafana dashboard. Valid values:
   * 
   * *   `dash-db`: a dashboard
   * *   `dash-folder`: a folder that can include a dashboard
   * 
   * @example
   * dash-db
   */
  type?: string;
  /**
   * @remarks
   * The unique identifier of the Grafana dashboard.
   * 
   * @example
   * 1131971649496228-*****-59
   */
  uid?: string;
  /**
   * @remarks
   * The complete URL of the Grafana dashboard.
   * 
   * @example
   * http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s
   */
  url?: string;
  /**
   * @remarks
   * The version of the Grafana dashboard. The combination of version and name uniquely identifies a dashboard.
   * 
   * @example
   * v2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardType: 'DashboardType',
      exporter: 'Exporter',
      httpUrl: 'HttpUrl',
      httpsUrl: 'HttpsUrl',
      i18nChild: 'I18nChild',
      id: 'Id',
      isArmsExporter: 'IsArmsExporter',
      kind: 'Kind',
      language: 'Language',
      name: 'Name',
      needUpdate: 'NeedUpdate',
      tags: 'Tags',
      time: 'Time',
      title: 'Title',
      type: 'Type',
      uid: 'Uid',
      url: 'Url',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardType: 'string',
      exporter: 'string',
      httpUrl: 'string',
      httpsUrl: 'string',
      i18nChild: ListDashboardsResponseBodyDashboardVosI18nChild,
      id: 'string',
      isArmsExporter: 'boolean',
      kind: 'string',
      language: 'string',
      name: 'string',
      needUpdate: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
      time: 'string',
      title: 'string',
      type: 'string',
      uid: 'string',
      url: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.i18nChild && typeof (this.i18nChild as any).validate === 'function') {
      (this.i18nChild as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the Grafana dashboard.
   */
  dashboardVos?: ListDashboardsResponseBodyDashboardVos[];
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * @example
   * env-ebd54733482581fc8c4237******
   */
  environmentId?: string;
  /**
   * @remarks
   * Indicates whether Managed Service for Grafana is activated.
   * 
   * @example
   * true
   */
  grafanaServiceOpened?: string;
  /**
   * @remarks
   * Whether or not to turn on Prometheus service.
   * 
   * @example
   * true
   */
  prometheusServiceOpened?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A0CEDF1-06FE-44AC-8E21-21A5BE65****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardVos: 'DashboardVos',
      environmentId: 'EnvironmentId',
      grafanaServiceOpened: 'GrafanaServiceOpened',
      prometheusServiceOpened: 'PrometheusServiceOpened',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardVos: { 'type': 'array', 'itemType': ListDashboardsResponseBodyDashboardVos },
      environmentId: 'string',
      grafanaServiceOpened: 'string',
      prometheusServiceOpened: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dashboardVos)) {
      $dara.Model.validateArray(this.dashboardVos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

