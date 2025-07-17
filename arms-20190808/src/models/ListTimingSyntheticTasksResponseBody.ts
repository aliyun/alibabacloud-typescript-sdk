// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomHostHosts extends $dara.Model {
  /**
   * @remarks
   * The destination domain name.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   0: A version is automatically selected.
   * *   1: IPv4.
   * *   2: IPv6.
   * 
   * @example
   * 0
   */
  ipType?: number;
  /**
   * @remarks
   * The IP address.
   */
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ipType: 'IpType',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ipType: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomHost extends $dara.Model {
  /**
   * @remarks
   * The custom host settings.
   */
  hosts?: ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomHostHosts[];
  /**
   * @remarks
   * The selection mode. Valid values:
   * 
   * *   0: random
   * *   1: polling
   * 
   * @example
   * 0
   */
  selectType?: number;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      selectType: 'SelectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomHostHosts },
      selectType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomPrometheusSetting extends $dara.Model {
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * Reserved field
   */
  prometheusClusterId?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * Reserved field
   */
  prometheusClusterRegion?: string;
  /**
   * @remarks
   * A reserved field.
   */
  prometheusLabels?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      prometheusClusterId: 'PrometheusClusterId',
      prometheusClusterRegion: 'PrometheusClusterRegion',
      prometheusLabels: 'PrometheusLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusClusterId: 'string',
      prometheusClusterRegion: 'string',
      prometheusLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.prometheusLabels) {
      $dara.Model.validateMap(this.prometheusLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomVPCSetting extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the client belongs. The security group specifies the inbound and outbound rules of the client for the VPC. You need to allow the security group to which the client belongs to access the security group to which the VPC belongs. Otherwise, the client cannot access resources in the VPC.
   * 
   * @example
   * sg-xxxxxxxxxxxxxx
   */
  secureGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1bcmj81kxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zehbd4dfzahxxxxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      secureGroupId: 'SecureGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      secureGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimingSyntheticTasksResponseBodyDataItemsCommonSetting extends $dara.Model {
  /**
   * @remarks
   * The custom host settings.
   */
  customHost?: ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomHost;
  /**
   * @remarks
   * A reserved field.
   */
  customPrometheusSetting?: ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomPrometheusSetting;
  /**
   * @remarks
   * The information about the virtual private cloud (VPC). If the destination URL is an Alibaba Cloud internal endpoint, you need to configure a VPC.
   */
  customVPCSetting?: ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomVPCSetting;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   0: A version is automatically selected.
   * *   1: IPv4.
   * *   2: IPv6.
   * 
   * @example
   * 0
   */
  ipType?: number;
  /**
   * @remarks
   * Indicates whether tracing is enabled.
   * 
   * @example
   * false
   */
  isOpenTrace?: boolean;
  /**
   * @remarks
   * Indicates whether monitoring samples are evenly distributed. Valid values:
   * 
   * *   0: No
   * *   1: Yes
   * 
   * @example
   * 0
   */
  monitorSamples?: number;
  /**
   * @remarks
   * The type of the client for tracing. Valid values:
   * 
   * *   0: ARMS agent
   * *   1: OpenTelemetry
   * *   2: Jaeger
   * 
   * @example
   * 1
   */
  traceClientType?: number;
  /**
   * @remarks
   * The region to which trace data is reported.
   * 
   * @example
   * cn-hangzhou
   */
  xtraceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      customHost: 'CustomHost',
      customPrometheusSetting: 'CustomPrometheusSetting',
      customVPCSetting: 'CustomVPCSetting',
      ipType: 'IpType',
      isOpenTrace: 'IsOpenTrace',
      monitorSamples: 'MonitorSamples',
      traceClientType: 'TraceClientType',
      xtraceRegion: 'XtraceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHost: ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomHost,
      customPrometheusSetting: ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomPrometheusSetting,
      customVPCSetting: ListTimingSyntheticTasksResponseBodyDataItemsCommonSettingCustomVPCSetting,
      ipType: 'number',
      isOpenTrace: 'boolean',
      monitorSamples: 'number',
      traceClientType: 'number',
      xtraceRegion: 'string',
    };
  }

  validate() {
    if(this.customHost && typeof (this.customHost as any).validate === 'function') {
      (this.customHost as any).validate();
    }
    if(this.customPrometheusSetting && typeof (this.customPrometheusSetting as any).validate === 'function') {
      (this.customPrometheusSetting as any).validate();
    }
    if(this.customVPCSetting && typeof (this.customVPCSetting as any).validate === 'function') {
      (this.customVPCSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimingSyntheticTasksResponseBodyDataItemsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class ListTimingSyntheticTasksResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The general settings.
   */
  commonSetting?: ListTimingSyntheticTasksResponseBodyDataItemsCommonSetting;
  /**
   * @remarks
   * The detection frequency. Valid values: 1m, 5m, 10m, 15m, 20m, 30m, 1h, 2h, 3h, 4h, 6h, 8h, 12h, and 24h.
   * 
   * @example
   * 1m
   */
  frequency?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1671454758000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 1673085633000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The detection point type. 1: PC. 2: mobile device.
   * 
   * @example
   * 1
   */
  monitorCategory?: number;
  /**
   * @remarks
   * The number of detection points.
   * 
   * @example
   * 10
   */
  monitorNum?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * AlibabaCloud DNS Task
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzgwtq5vxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The task status. CREATING: The task is being created. RUNNING: The task is running. PARTIAL_RUNNING: The task is partially running. STOP: The task is stopped. LIMIT_STOP: The task is stopped due to quota limit. EXCEPTION: The task is abnormal. DELETE: The task is deleted. DELETE_EXCEPTION: An exception occurs while deleting the task.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTimingSyntheticTasksResponseBodyDataItemsTags[];
  /**
   * @remarks
   * The ID of the synthetic monitoring task.
   * 
   * @example
   * 5308a2691f59422c8c3b7aeccec9cd3b
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * 1: ICMP. 2: TCP. 3: DNS. 4: HTTP. 5: website speed. 6: file download.
   * 
   * @example
   * 1
   */
  taskType?: number;
  /**
   * @remarks
   * The URL for synthetic monitoring.
   * 
   * @example
   * https://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commonSetting: 'CommonSetting',
      frequency: 'Frequency',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      monitorCategory: 'MonitorCategory',
      monitorNum: 'MonitorNum',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskType: 'TaskType',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonSetting: ListTimingSyntheticTasksResponseBodyDataItemsCommonSetting,
      frequency: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      monitorCategory: 'number',
      monitorNum: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTimingSyntheticTasksResponseBodyDataItemsTags },
      taskId: 'string',
      taskType: 'number',
      url: 'string',
    };
  }

  validate() {
    if(this.commonSetting && typeof (this.commonSetting as any).validate === 'function') {
      (this.commonSetting as any).validate();
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

export class ListTimingSyntheticTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried tasks.
   */
  items?: ListTimingSyntheticTasksResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListTimingSyntheticTasksResponseBodyDataItems },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimingSyntheticTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: ListTimingSyntheticTasksResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 730E90FE-996A-5638-99F3-4F0F9038CC6C
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
      code: 'number',
      data: ListTimingSyntheticTasksResponseBodyData,
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

