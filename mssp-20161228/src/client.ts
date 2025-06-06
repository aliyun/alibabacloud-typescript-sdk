// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateServiceWorkOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 2024-03-07 16:45:01
   */
  completeTime?: number;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-10-04T02:19:55Z
   */
  createTime?: number;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 426556
   */
  creator?: string;
  /**
   * @remarks
   * Customer ID.
   * 
   * @example
   * 1477832102462645
   */
  customerId?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 24-03-11 00:00:00
   */
  endTime?: number;
  /**
   * @remarks
   * Primary key.
   * 
   * @example
   * 1978941
   */
  id?: number;
  /**
   * @remarks
   * Owner.
   * 
   * @example
   * 426556
   */
  ownerId?: string;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 2021-01-21 15:25:25
   */
  startTime?: number;
  /**
   * @remarks
   * Work order details.
   * 
   * @example
   * {"questionDetail":"测试工单","answerDetail":""}
   */
  workOrderDetail?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * @example
   * 安全月报交付任务
   */
  workOrderName?: string;
  /**
   * @remarks
   * Work order source.
   * 
   * @example
   * 工单迁移
   */
  workOrderSource?: string;
  /**
   * @remarks
   * Work order status.
   * 
   * @example
   * UNPROCESSED
   */
  workOrderStatus?: string;
  /**
   * @remarks
   * Work order type.
   * 
   * @example
   * MONTH_REPORT
   */
  workOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      creator: 'Creator',
      customerId: 'CustomerId',
      endTime: 'EndTime',
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      workOrderDetail: 'WorkOrderDetail',
      workOrderName: 'WorkOrderName',
      workOrderSource: 'WorkOrderSource',
      workOrderStatus: 'WorkOrderStatus',
      workOrderType: 'WorkOrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'number',
      createTime: 'number',
      creator: 'string',
      customerId: 'string',
      endTime: 'number',
      id: 'number',
      ownerId: 'string',
      startTime: 'number',
      workOrderDetail: 'string',
      workOrderName: 'string',
      workOrderSource: 'string',
      workOrderStatus: 'string',
      workOrderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdResponseBodyDataEventDetails extends $dara.Model {
  /**
   * @remarks
   * Alarm event display name.
   * 
   * @example
   * Login with unusual location
   */
  nameDisplay?: string;
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Path where the alarm event occurred.
   * 
   * @example
   * /etc/crontab
   */
  value?: string;
  /**
   * @remarks
   * Path where the alarm event occurred.
   * 
   * @example
   * /etc/crontab
   */
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
      valueDisplay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * Unusual Logon
   */
  alarmEventType?: string;
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * Login with unusual location
   */
  alarmEventTypeDisplay?: string;
  /**
   * @remarks
   * Alarm ID.
   * 
   * @example
   * 202427220
   */
  alarmId?: number;
  /**
   * @remarks
   * Alarm name.
   * 
   * @example
   * 负载均衡可挂载服务器数量告警
   */
  alarmName?: string;
  /**
   * @remarks
   * Alarm source.
   * 
   * @example
   * SUSP_EVENT
   */
  alarmSource?: string;
  /**
   * @remarks
   * Latest alarm time.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  alarmTime?: string;
  /**
   * @remarks
   * Analysis process.
   * 
   * @example
   * [{"value":"服务器可能已被黑客攻击，存在恶意进程在运行。 分析过程：告警显示，服务端存在一个名为”dns.exe”的进程在访问”polling.burpcollaborator.net”，这是一个被黑名单列出的恶意域名。在正常情况下,”dns.exe”不应该单独存在于系统的路径下，并且也不应该访问这类恶意域名。因此，这个进程可能是黑客留下的恶意进程。","key":"结论"},{"value":"尽快对服务器进行全面扫描，清除恶意进程。同时，联系网络安全专家进行深入调查，以确定是否有其他潜在的安全威胁。","key":"处置建议"}]
   */
  analysisResult?: string;
  /**
   * @remarks
   * Whether high-protection mode is enabled. true means enabled, false means not enabled.
   * 
   * @example
   * false
   */
  containHwMode?: boolean;
  /**
   * @remarks
   * Alarm handling time.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  dealTime?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * webshell
   */
  desc?: string;
  /**
   * @remarks
   * Event details information.
   */
  eventDetails?: GetAlarmDetailByIdResponseBodyDataEventDetails[];
  /**
   * @remarks
   * Alarm level.
   * 
   * @example
   * suspicious
   */
  eventLevel?: string;
  /**
   * @remarks
   * Primary key ID of the work order.
   * 
   * @example
   * 9772
   */
  id?: number;
  /**
   * @remarks
   * Affected asset.
   * 
   * @example
   * nginx
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP.
   * 
   * @example
   * 47.116.126.79
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP.
   * 
   * @example
   * 172.19.195.176
   */
  intranetIp?: string;
  /**
   * @remarks
   * First occurrence time
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * Owner.
   * 
   * @example
   * 324546
   */
  ownerId?: string;
  /**
   * @remarks
   * Disposal method.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * Handling status.
   * 
   * @example
   * 要查询的告警事件状态。取值：
   * 
   * 0：全部
   * 1：待处理
   * 2：已忽略
   * 4：已确认
   * 8：已标记为误报
   * 16：处理中
   * 32：处理完毕
   * 64：已经过期
   * 128：已经删除
   * 512：自动拦截中
   * 513：自动拦截完毕
   */
  status?: string;
  /**
   * @remarks
   * ATT&CK tactic name.
   * 
   * @example
   * Malicious scripts-Malicious script code execution
   */
  tacticDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventType: 'AlarmEventType',
      alarmEventTypeDisplay: 'AlarmEventTypeDisplay',
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      alarmSource: 'AlarmSource',
      alarmTime: 'AlarmTime',
      analysisResult: 'AnalysisResult',
      containHwMode: 'ContainHwMode',
      dealTime: 'DealTime',
      desc: 'Desc',
      eventDetails: 'EventDetails',
      eventLevel: 'EventLevel',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      occurrenceTime: 'OccurrenceTime',
      ownerId: 'OwnerId',
      remark: 'Remark',
      status: 'Status',
      tacticDisplayName: 'TacticDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventType: 'string',
      alarmEventTypeDisplay: 'string',
      alarmId: 'number',
      alarmName: 'string',
      alarmSource: 'string',
      alarmTime: 'string',
      analysisResult: 'string',
      containHwMode: 'boolean',
      dealTime: 'string',
      desc: 'string',
      eventDetails: { 'type': 'array', 'itemType': GetAlarmDetailByIdResponseBodyDataEventDetails },
      eventLevel: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      occurrenceTime: 'string',
      ownerId: 'string',
      remark: 'string',
      status: 'string',
      tacticDisplayName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventDetails)) {
      $dara.Model.validateArray(this.eventDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealResponseBodyDataEcsTrendList extends $dara.Model {
  /**
   * @remarks
   * Date point.
   * 
   * @example
   * 202312或20231205
   */
  date?: string;
  /**
   * @remarks
   * Number of processed items.
   * 
   * @example
   * 2
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered items.
   * 
   * @example
   * 暂时无值，有疑问请联系管理员
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Collection of attacked asset convergence trends.
   */
  ecsTrendList?: GetAttackedAssetDealResponseBodyDataEcsTrendList[];
  static names(): { [key: string]: string } {
    return {
      ecsTrendList: 'EcsTrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsTrendList: { 'type': 'array', 'itemType': GetAttackedAssetDealResponseBodyDataEcsTrendList },
    };
  }

  validate() {
    if(Array.isArray(this.ecsTrendList)) {
      $dara.Model.validateArray(this.ecsTrendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryResponseBodyDataTrendDTOList extends $dara.Model {
  /**
   * @remarks
   * Date point.
   * 
   * @example
   * 202408或者20240801
   */
  date?: string;
  /**
   * @remarks
   * Number of processed items.
   * 
   * @example
   * 10
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered items.
   * 
   * @example
   * 12
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Collection of baseline statistical data.
   */
  trendDTOList?: GetBaselineSummaryResponseBodyDataTrendDTOList[];
  static names(): { [key: string]: string } {
    return {
      trendDTOList: 'TrendDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trendDTOList: { 'type': 'array', 'itemType': GetBaselineSummaryResponseBodyDataTrendDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.trendDTOList)) {
      $dara.Model.validateArray(this.trendDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdResponseBodyDataVulDetails extends $dara.Model {
  /**
   * @remarks
   * CVE ID.
   * 
   * @example
   * CVE-2022-21291
   */
  cveId?: string;
  /**
   * @remarks
   * The CVSS score of the vulnerability in the Alibaba Cloud vulnerability database.
   * 
   * @example
   * 10.0
   */
  cvssScore?: string;
  /**
   * @remarks
   * Fix suggestion.
   * 
   * @example
   * https://avd.aliyun.com/detail/CVE-2022-21291
   */
  fixSuggestion?: string;
  /**
   * @remarks
   * Title of the vulnerability announcement.
   * 
   * @example
   * Chanjet T-Plus SetupAccount/Upload. Aspx file upload vulnerability(CNVD-2022-60632)
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      cvssScore: 'CvssScore',
      fixSuggestion: 'FixSuggestion',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      cvssScore: 'string',
      fixSuggestion: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Vulnerability details.
   */
  vulDetails?: GetDetailByIdResponseBodyDataVulDetails[];
  static names(): { [key: string]: string } {
    return {
      vulDetails: 'VulDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulDetails: { 'type': 'array', 'itemType': GetDetailByIdResponseBodyDataVulDetails },
    };
  }

  validate() {
    if(Array.isArray(this.vulDetails)) {
      $dara.Model.validateArray(this.vulDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Delivered by.
   * 
   * @example
   * luna
   */
  deliveredBy?: string;
  /**
   * @remarks
   * Report name.
   * 
   * @example
   * month report
   */
  documentName?: string;
  /**
   * @remarks
   * Service report type.
   * 
   * @example
   * 3
   */
  documentType?: string;
  /**
   * @remarks
   * Primary key ID of the document.
   * 
   * @example
   * 346409
   */
  id?: number;
  /**
   * @remarks
   * Report status.
   * 
   * @example
   * uploaded
   */
  reportStatus?: string;
  /**
   * @remarks
   * Report generation time.
   * 
   * @example
   * 2023-03-21 17:26:34
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      deliveredBy: 'DeliveredBy',
      documentName: 'DocumentName',
      documentType: 'DocumentType',
      id: 'Id',
      reportStatus: 'ReportStatus',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveredBy: 'string',
      documentName: 'string',
      documentType: 'string',
      id: 'number',
      reportStatus: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of queried items.
   * 
   * @example
   * 3149
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of documents.
   * 
   * @example
   * 10
   */
  documentCount?: number;
  /**
   * @remarks
   * Number of services or days.
   * 
   * @example
   * 10
   */
  frequency?: number;
  static names(): { [key: string]: string } {
    return {
      documentCount: 'DocumentCount',
      frequency: 'Frequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentCount: 'number',
      frequency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecentDocumentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 360491
   */
  id?: number;
  /**
   * @remarks
   * Document name
   * 
   * @example
   * 文档名称测试
   */
  name?: string;
  /**
   * @remarks
   * Upload time.
   * 
   * @example
   * 2023-03-20 14:30:38
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyDataCfwProtection extends $dara.Model {
  /**
   * @remarks
   * Number of unprotected items.
   * 
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @remarks
   * Number of protected items.
   * 
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @remarks
   * Year-over-year protection rate.
   * 
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @remarks
   * Protection rate.
   * 
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
   * @remarks
   * Total quantity.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noProtectionCount: 'NoProtectionCount',
      protectionCount: 'ProtectionCount',
      protectionGrowthRate: 'ProtectionGrowthRate',
      protectionRate: 'ProtectionRate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noProtectionCount: 'number',
      protectionCount: 'number',
      protectionGrowthRate: 'string',
      protectionRate: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyDataEcsProtection extends $dara.Model {
  /**
   * @remarks
   * Number of unprotected items.
   * 
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @remarks
   * Number of protected items.
   * 
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @remarks
   * Year-over-year growth in protection rate.
   * 
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @remarks
   * Protection rate.
   * 
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noProtectionCount: 'NoProtectionCount',
      protectionCount: 'ProtectionCount',
      protectionGrowthRate: 'ProtectionGrowthRate',
      protectionRate: 'ProtectionRate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noProtectionCount: 'number',
      protectionCount: 'number',
      protectionGrowthRate: 'string',
      protectionRate: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyDataWafProtection extends $dara.Model {
  /**
   * @remarks
   * Number of unprotected items.
   * 
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @remarks
   * Number of protected items.
   * 
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @remarks
   * Year-over-year growth in protection rate.
   * 
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @remarks
   * Protection rate.
   * 
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noProtectionCount: 'NoProtectionCount',
      protectionCount: 'ProtectionCount',
      protectionGrowthRate: 'ProtectionGrowthRate',
      protectionRate: 'ProtectionRate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noProtectionCount: 'number',
      protectionCount: 'number',
      protectionGrowthRate: 'string',
      protectionRate: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * CFW protection coverage.
   */
  cfwProtection?: GetSafetyCoverResponseBodyDataCfwProtection;
  /**
   * @remarks
   * ECS protection coverage.
   */
  ecsProtection?: GetSafetyCoverResponseBodyDataEcsProtection;
  /**
   * @remarks
   * WAF protection coverage.
   */
  wafProtection?: GetSafetyCoverResponseBodyDataWafProtection;
  static names(): { [key: string]: string } {
    return {
      cfwProtection: 'CfwProtection',
      ecsProtection: 'EcsProtection',
      wafProtection: 'WafProtection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cfwProtection: GetSafetyCoverResponseBodyDataCfwProtection,
      ecsProtection: GetSafetyCoverResponseBodyDataEcsProtection,
      wafProtection: GetSafetyCoverResponseBodyDataWafProtection,
    };
  }

  validate() {
    if(this.cfwProtection && typeof (this.cfwProtection as any).validate === 'function') {
      (this.cfwProtection as any).validate();
    }
    if(this.ecsProtection && typeof (this.ecsProtection as any).validate === 'function') {
      (this.ecsProtection as any).validate();
    }
    if(this.wafProtection && typeof (this.wafProtection as any).validate === 'function') {
      (this.wafProtection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSowListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 2024-03-28 16:19:35
   */
  completeTime?: string;
  /**
   * @remarks
   * Operation remarks.
   * 
   * @example
   * 新建
   */
  operateRemark?: string;
  /**
   * @remarks
   * Progress.
   * 
   * @example
   * IN_PREPARATION
   */
  progress?: string;
  /**
   * @remarks
   * Record count.
   * 
   * @example
   * 173
   */
  recordCount?: number;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 2023-03-24 16:51:26
   */
  startTime?: string;
  /**
   * @remarks
   * Task type.
   * 
   * @example
   * 安全风险评估
   */
  taskTypeName?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * @example
   * 安全产品配置问题与超量提醒
   */
  workOrderName?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      operateRemark: 'OperateRemark',
      progress: 'Progress',
      recordCount: 'RecordCount',
      startTime: 'StartTime',
      taskTypeName: 'TaskTypeName',
      workOrderName: 'WorkOrderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      operateRemark: 'string',
      progress: 'string',
      recordCount: 'number',
      startTime: 'string',
      taskTypeName: 'string',
      workOrderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * 精准防御
   */
  alarmEventType?: string;
  /**
   * @remarks
   * Alarm ID.
   * 
   * @example
   * 5b1eeebe4f22daa2b177298234214fa3
   */
  alarmId?: number;
  /**
   * @remarks
   * Alarm name.
   * 
   * @example
   * Web服务漏洞利用
   */
  alarmName?: string;
  /**
   * @remarks
   * Alarm source.
   * 
   * @example
   * SUSP_EVENT
   */
  alarmSource?: string;
  /**
   * @remarks
   * Latest alarm time.
   * 
   * @example
   * 1722515522000
   */
  alarmTime?: string;
  /**
   * @remarks
   * Analysis process.
   * 
   * @example
   * [{"value":"服务器可能已被黑客攻击，存在恶意进程在运行。 分析过程：告警显示，服务端存在一个名为”dns.exe”的进程在访问”polling.burpcollaborator.net”，这是一个被黑名单列出的恶意域名。在正常情况下,”dns.exe”不应该单独存在于系统的路径下，并且也不应该访问这类恶意域名。因此，这个进程可能是黑客留下的恶意进程。","key":"结论"},{"value":"尽快对服务器进行全面扫描，清除恶意进程。同时，联系网络安全专家进行深入调查，以确定是否有其他潜在的安全威胁。","key":"处置建议"}]
   */
  analysisResult?: string;
  /**
   * @remarks
   * Alarm handling time.
   * 
   * @example
   * 1732515522000
   */
  dealTime?: string;
  /**
   * @remarks
   * Alarm level.
   * 
   * @example
   * suspicious
   */
  eventLevel?: string;
  /**
   * @remarks
   * Ticket primary key id.
   * 
   * @example
   * 9947
   */
  id?: number;
  /**
   * @remarks
   * Affected asset.
   * 
   * @example
   * shells-azhou
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP address.
   * 
   * @example
   * 47.99.188.31
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP address.
   * 
   * @example
   * 172.16.109.130
   */
  intranetIp?: string;
  /**
   * @remarks
   * First occurrence time.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * Owner ID.
   * 
   * @example
   * 张三
   */
  ownerId?: string;
  /**
   * @remarks
   * Disposal method.
   * 
   * @example
   * 处理完成
   */
  remark?: string;
  /**
   * @remarks
   * Handling status.
   * 
   * @example
   * 未处理
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventType: 'AlarmEventType',
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      alarmSource: 'AlarmSource',
      alarmTime: 'AlarmTime',
      analysisResult: 'AnalysisResult',
      dealTime: 'DealTime',
      eventLevel: 'EventLevel',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      occurrenceTime: 'OccurrenceTime',
      ownerId: 'OwnerId',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventType: 'string',
      alarmId: 'number',
      alarmName: 'string',
      alarmSource: 'string',
      alarmTime: 'string',
      analysisResult: 'string',
      dealTime: 'string',
      eventLevel: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      occurrenceTime: 'string',
      ownerId: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of items displayed per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTOTrendList extends $dara.Model {
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 202409或20240901
   */
  date?: string;
  /**
   * @remarks
   * DDoS count.
   * 
   * @example
   * 10
   */
  ddosCount?: number;
  /**
   * @remarks
   * EIP count.
   * 
   * @example
   * 10
   */
  eipCount?: number;
  /**
   * @remarks
   * WAF count.
   * 
   * @example
   * 10
   */
  wafCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      ddosCount: 'DdosCount',
      eipCount: 'EipCount',
      wafCount: 'WafCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      ddosCount: 'number',
      eipCount: 'number',
      wafCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO extends $dara.Model {
  /**
   * @remarks
   * Collection of trend nodes for each attack item.
   */
  trendList?: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTOTrendList[];
  static names(): { [key: string]: string } {
    return {
      trendList: 'TrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trendList: { 'type': 'array', 'itemType': GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTOTrendList },
    };
  }

  validate() {
    if(Array.isArray(this.trendList)) {
      $dara.Model.validateArray(this.trendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO extends $dara.Model {
  /**
   * @remarks
   * Completed.
   * 
   * @example
   * 20
   */
  completedCount?: number;
  /**
   * @remarks
   * In progress.
   * 
   * @example
   * 5
   */
  handingCount?: number;
  /**
   * @remarks
   * Alert handling rate.
   * 
   * @example
   * 90
   */
  handingRate?: string;
  /**
   * @remarks
   * Total number of alerts.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  /**
   * @remarks
   * Year-over-year comparison of alerts.
   * 
   * @example
   * 10
   */
  totalGrowthRate?: string;
  /**
   * @remarks
   * Number of unhandled alerts.
   * 
   * @example
   * 10
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      handingCount: 'HandingCount',
      handingRate: 'HandingRate',
      totalCount: 'TotalCount',
      totalGrowthRate: 'TotalGrowthRate',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      handingCount: 'number',
      handingRate: 'string',
      totalCount: 'number',
      totalGrowthRate: 'string',
      waitHandleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTopDTOSuspEventList extends $dara.Model {
  /**
   * @remarks
   * Alert name.
   * 
   * @example
   * 主动外连风险 IP
   */
  eventName?: string;
  /**
   * @remarks
   * Count.
   * 
   * @example
   * 7
   */
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      taskCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTopDTO extends $dara.Model {
  /**
   * @remarks
   * Top 10 before handling alarms
   */
  suspEventList?: GetSuspEventSummaryResponseBodyDataSuspEventTopDTOSuspEventList[];
  static names(): { [key: string]: string } {
    return {
      suspEventList: 'SuspEventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suspEventList: { 'type': 'array', 'itemType': GetSuspEventSummaryResponseBodyDataSuspEventTopDTOSuspEventList },
    };
  }

  validate() {
    if(Array.isArray(this.suspEventList)) {
      $dara.Model.validateArray(this.suspEventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTrendDTOTrendList extends $dara.Model {
  /**
   * @remarks
   * Time point.
   * 
   * @example
   * 202405或者20240501
   */
  date?: string;
  /**
   * @remarks
   * Number of handled alerts.
   * 
   * @example
   * 10
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered alerts.
   * 
   * @example
   * 15
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTrendDTO extends $dara.Model {
  /**
   * @remarks
   * Trend of alerts.
   */
  trendList?: GetSuspEventSummaryResponseBodyDataSuspEventTrendDTOTrendList[];
  static names(): { [key: string]: string } {
    return {
      trendList: 'TrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trendList: { 'type': 'array', 'itemType': GetSuspEventSummaryResponseBodyDataSuspEventTrendDTOTrendList },
    };
  }

  validate() {
    if(Array.isArray(this.trendList)) {
      $dara.Model.validateArray(this.trendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Network attack trend.
   */
  networkAttackTrendDTO?: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO;
  /**
   * @remarks
   * Overview of alert handling.
   */
  suspEventDealSummaryDTO?: GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO;
  /**
   * @remarks
   * Top 10 alerts before handling.
   */
  suspEventTopDTO?: GetSuspEventSummaryResponseBodyDataSuspEventTopDTO;
  /**
   * @remarks
   * Trend of alert responses.
   */
  suspEventTrendDTO?: GetSuspEventSummaryResponseBodyDataSuspEventTrendDTO;
  static names(): { [key: string]: string } {
    return {
      networkAttackTrendDTO: 'NetworkAttackTrendDTO',
      suspEventDealSummaryDTO: 'SuspEventDealSummaryDTO',
      suspEventTopDTO: 'SuspEventTopDTO',
      suspEventTrendDTO: 'SuspEventTrendDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAttackTrendDTO: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO,
      suspEventDealSummaryDTO: GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO,
      suspEventTopDTO: GetSuspEventSummaryResponseBodyDataSuspEventTopDTO,
      suspEventTrendDTO: GetSuspEventSummaryResponseBodyDataSuspEventTrendDTO,
    };
  }

  validate() {
    if(this.networkAttackTrendDTO && typeof (this.networkAttackTrendDTO as any).validate === 'function') {
      (this.networkAttackTrendDTO as any).validate();
    }
    if(this.suspEventDealSummaryDTO && typeof (this.suspEventDealSummaryDTO as any).validate === 'function') {
      (this.suspEventDealSummaryDTO as any).validate();
    }
    if(this.suspEventTopDTO && typeof (this.suspEventTopDTO as any).validate === 'function') {
      (this.suspEventTopDTO as any).validate();
    }
    if(this.suspEventTrendDTO && typeof (this.suspEventTrendDTO as any).validate === 'function') {
      (this.suspEventTrendDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspPageSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of completed items.
   * 
   * @example
   * 10
   */
  completedCount?: number;
  /**
   * @remarks
   * Number of items being processed.
   * 
   * @example
   * 10
   */
  handingCount?: number;
  /**
   * @remarks
   * Number of high-risk items.
   * 
   * @example
   * 10
   */
  highCount?: number;
  /**
   * @remarks
   * Number of low-risk items.
   * 
   * @example
   * 10
   */
  lowCount?: number;
  /**
   * @remarks
   * Number of medium-risk items.
   * 
   * @example
   * 10
   */
  mediumCount?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  /**
   * @remarks
   * Number of unhandled items.
   * 
   * @example
   * 10
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      handingCount: 'HandingCount',
      highCount: 'HighCount',
      lowCount: 'LowCount',
      mediumCount: 'MediumCount',
      totalCount: 'TotalCount',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      handingCount: 'number',
      highCount: 'number',
      lowCount: 'number',
      mediumCount: 'number',
      totalCount: 'number',
      waitHandleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Customer type.
   * 
   * @example
   * official
   */
  customerType?: string;
  /**
   * @remarks
   * End date.
   * 
   * @example
   * 2023-09-28 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * 726cec3c-4887-4354-8c21-c0ad12e10fc2
   */
  instanceId?: string;
  /**
   * @remarks
   * Start date.
   * 
   * @example
   * 2023-09-20 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * FirstLogin
   */
  status?: string;
  /**
   * @remarks
   * Version.
   * 
   * @example
   * mdrjichu
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      customerType: 'CustomerType',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerType: 'string',
      endDate: 'string',
      instanceId: 'string',
      startDate: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Vulnerability alias.
   * 
   * @example
   * RHSA-2024:4620: libndp 安全更新
   */
  aliasName?: string;
  /**
   * @remarks
   * Number of high-priority vulnerabilities to be fixed.
   * 
   * @example
   * 74
   */
  asapCount?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 1940494487193744
   */
  customerId?: string;
  /**
   * @remarks
   * Prefix for the CVE remediation advice URL.
   * 
   * @example
   * https://avd.aliyun.com/detail/
   */
  cveUrlPrefix?: string;
  /**
   * @remarks
   * Processing status.
   * 
   * @example
   * y
   */
  dealed?: string;
  /**
   * @remarks
   * Timestamp of the last discovery of the vulnerability.
   * 
   * @example
   * 2023-04-23 14:47:34
   */
  findTime?: string;
  /**
   * @remarks
   * Number of processed vulnerabilities.
   * 
   * @example
   * 20
   */
  handledCount?: number;
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 353845
   */
  id?: number;
  /**
   * @remarks
   * Number of medium-priority vulnerabilities to be fixed.
   * 
   * @example
   * 10
   */
  laterCount?: number;
  /**
   * @remarks
   * Risk level
   * 
   * @example
   * later
   */
  level?: string;
  /**
   * @remarks
   * Vulnerability name.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20205002
   */
  name?: string;
  /**
   * @remarks
   * Number of low-priority vulnerabilities to be fixed.
   * 
   * @example
   * 8
   */
  nntfCount?: number;
  /**
   * @remarks
   * CVE number.
   * 
   * @example
   * CVE-2019-20907
   */
  related?: string;
  /**
   * @remarks
   * Number of related CVE numbers.
   * 
   * @example
   * 20
   */
  relatedCveCount?: number;
  /**
   * @remarks
   * Vulnerability type.
   * 
   * @example
   * sca
   */
  scanType?: string;
  /**
   * @remarks
   * Tags.
   * 
   * @example
   * Elevation of Privilege
   */
  tags?: string;
  /**
   * @remarks
   * Total number of fixed vulnerabilities.
   * 
   * @example
   * 50
   */
  totalFixCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      asapCount: 'AsapCount',
      customerId: 'CustomerId',
      cveUrlPrefix: 'CveUrlPrefix',
      dealed: 'Dealed',
      findTime: 'FindTime',
      handledCount: 'HandledCount',
      id: 'Id',
      laterCount: 'LaterCount',
      level: 'Level',
      name: 'Name',
      nntfCount: 'NntfCount',
      related: 'Related',
      relatedCveCount: 'RelatedCveCount',
      scanType: 'ScanType',
      tags: 'Tags',
      totalFixCount: 'TotalFixCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      asapCount: 'number',
      customerId: 'string',
      cveUrlPrefix: 'string',
      dealed: 'string',
      findTime: 'string',
      handledCount: 'number',
      id: 'number',
      laterCount: 'number',
      level: 'string',
      name: 'string',
      nntfCount: 'number',
      related: 'string',
      relatedCveCount: 'number',
      scanType: 'string',
      tags: 'string',
      totalFixCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number for pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items to display per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records in the query result.
   * 
   * @example
   * 163
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBodyDataEffectMsgDTOS extends $dara.Model {
  /**
   * @remarks
   * Hit
   * 
   * @example
   * fastjson(jar) extendField.safemode equals false
   */
  matchList?: string;
  /**
   * @remarks
   * Path
   * 
   * @example
   * /uat6/qry/enquiry/policy/yrtPolicyList
   */
  path?: string;
  /**
   * @remarks
   * Software name
   * 
   * @example
   * python-perf 3.10.0
   */
  softName?: string;
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
      path: 'Path',
      softName: 'SoftName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: 'string',
      path: 'string',
      softName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Vulnerability Alias
   * 
   * @example
   * Tomcat websocket 拒绝服务漏洞利用代码披露（CVE-2020-13935）
   */
  aliasName?: string;
  /**
   * @remarks
   * Impact description
   */
  effectMsgDTOS?: GetVulListByIdResponseBodyDataEffectMsgDTOS[];
  /**
   * @remarks
   * Timestamp of the first time the vulnerability was detected
   * 
   * @example
   * 1620404763000
   */
  firstTs?: string;
  /**
   * @remarks
   * Instance name of the asset
   * 
   * @example
   * 凌星-CentOS
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP of the asset
   * 
   * @example
   * 39.101.73.28
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP of the asset
   * 
   * @example
   * 172.22.216.17
   */
  intranetIp?: string;
  /**
   * @remarks
   * Timestamp of the last time the vulnerability was detected
   * 
   * @example
   * 1620404763000
   */
  lastTs?: string;
  /**
   * @remarks
   * Vulnerability name
   * 
   * @example
   * SCA:ACSV-2020-111301
   */
  name?: string;
  /**
   * @remarks
   * Necessity level of vulnerability repair
   * 
   * @example
   * later,asap,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * List of associated CVEs for the vulnerability, separated by commas (,) if there are multiple values.
   * 
   * @example
   * CVE-2020-13935
   */
  related?: string;
  /**
   * @remarks
   * Repair command
   * 
   * @example
   * *** update python-perf
   */
  repairCmd?: string;
  /**
   * @remarks
   * Timestamp of vulnerability repair
   * 
   * @example
   * 1541207563000
   */
  repairTs?: string;
  /**
   * @remarks
   * Vulnerability status:
   * 1: Not fixed
   * 2: Fix failed
   * 3: Rollback failed
   * 4: Fixing
   * 5: Rolling back
   * 6: Verifying
   * 7: Fixed successfully
   * 8: Fixed successfully, pending reboot
   * 9: Rolled back successfully
   * 10: Ignored
   * 11: Rolled back successfully, pending reboot
   * 12: Vulnerability does not exist
   * 20: Expired
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * Vulnerability tag
   * 
   * @example
   * Restart Required
   */
  tag?: string;
  /**
   * @remarks
   * UUID of the asset instance.
   * 
   * @example
   * hdm_5cf2eaf263c021b354877943f181956d
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      effectMsgDTOS: 'EffectMsgDTOS',
      firstTs: 'FirstTs',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTs: 'LastTs',
      name: 'Name',
      necessity: 'Necessity',
      related: 'Related',
      repairCmd: 'RepairCmd',
      repairTs: 'RepairTs',
      status: 'Status',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      effectMsgDTOS: { 'type': 'array', 'itemType': GetVulListByIdResponseBodyDataEffectMsgDTOS },
      firstTs: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTs: 'string',
      name: 'string',
      necessity: 'string',
      related: 'string',
      repairCmd: 'string',
      repairTs: 'string',
      status: 'string',
      tag: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.effectMsgDTOS)) {
      $dara.Model.validateArray(this.effectMsgDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records in the query result.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulPageSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of completed items.
   * 
   * @example
   * 1990
   */
  completedCount?: number;
  /**
   * @remarks
   * Number of items being handled.
   * 
   * @example
   * 6
   */
  handingCount?: number;
  /**
   * @remarks
   * Number of high-risk items.
   * 
   * @example
   * 500
   */
  highCount?: number;
  /**
   * @remarks
   * Number of low-risk items.
   * 
   * @example
   * 1000
   */
  lowCount?: number;
  /**
   * @remarks
   * Number of medium-risk items.
   * 
   * @example
   * 500
   */
  mediumCount?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 2000
   */
  totalCount?: number;
  /**
   * @remarks
   * Number of unhandled items.
   * 
   * @example
   * 4
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      handingCount: 'HandingCount',
      highCount: 'HighCount',
      lowCount: 'LowCount',
      mediumCount: 'MediumCount',
      totalCount: 'TotalCount',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      handingCount: 'number',
      highCount: 'number',
      lowCount: 'number',
      mediumCount: 'number',
      totalCount: 'number',
      waitHandleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryResponseBodyDataTrendList extends $dara.Model {
  /**
   * @remarks
   * Time point.
   * 
   * @example
   * 202407或者20240701
   */
  date?: string;
  /**
   * @remarks
   * Number of handled items.
   * 
   * @example
   * 10
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered items.
   * 
   * @example
   * 15
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of completed items.
   * 
   * @example
   * 10
   */
  completedCount?: number;
  /**
   * @remarks
   * Risk convergence rate.
   * 
   * @example
   * 50
   */
  dealRate?: string;
  /**
   * @remarks
   * Collection of vulnerability trend nodes.
   */
  trendList?: GetVulSummaryResponseBodyDataTrendList[];
  /**
   * @remarks
   * Number of unhandled items.
   * 
   * @example
   * 5
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      dealRate: 'DealRate',
      trendList: 'TrendList',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      dealRate: 'string',
      trendList: { 'type': 'array', 'itemType': GetVulSummaryResponseBodyDataTrendList },
      waitHandleCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.trendList)) {
      $dara.Model.validateArray(this.trendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkTaskSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Average response time (in minutes).
   * 
   * @example
   * 60
   */
  dealAverageDuration?: number;
  /**
   * @remarks
   * Year-over-year growth rate of average response time.
   * 
   * @example
   * 20
   */
  dealAverageDurationGrowthRate?: string;
  /**
   * @remarks
   * Number of work orders responded to.
   * 
   * @example
   * 100
   */
  dealWorkTaskCount?: number;
  /**
   * @remarks
   * Year-over-year growth rate of the number of work orders responded to.
   * 
   * @example
   * 20
   */
  dealWorkTaskCountRate?: string;
  /**
   * @remarks
   * Number of service responses.
   * 
   * @example
   * 10
   */
  workTaskCount?: number;
  /**
   * @remarks
   * Problem closure rate.
   * 
   * @example
   * 90
   */
  workTaskDealRate?: string;
  /**
   * @remarks
   * Year-over-year growth rate of problem closure rate.
   * 
   * @example
   * 20
   */
  workTaskDealRateGrowthRate?: string;
  /**
   * @remarks
   * Year-over-year growth rate of service responses.
   * 
   * @example
   * 20
   */
  workTaskGrowthRate?: string;
  static names(): { [key: string]: string } {
    return {
      dealAverageDuration: 'DealAverageDuration',
      dealAverageDurationGrowthRate: 'DealAverageDurationGrowthRate',
      dealWorkTaskCount: 'DealWorkTaskCount',
      dealWorkTaskCountRate: 'DealWorkTaskCountRate',
      workTaskCount: 'WorkTaskCount',
      workTaskDealRate: 'WorkTaskDealRate',
      workTaskDealRateGrowthRate: 'WorkTaskDealRateGrowthRate',
      workTaskGrowthRate: 'WorkTaskGrowthRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealAverageDuration: 'number',
      dealAverageDurationGrowthRate: 'string',
      dealWorkTaskCount: 'number',
      dealWorkTaskCountRate: 'string',
      workTaskCount: 'number',
      workTaskDealRate: 'string',
      workTaskDealRateGrowthRate: 'string',
      workTaskGrowthRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Customer UID.
   * 
   * @example
   * 1667751131382856
   */
  aliuid?: string;
  /**
   * @remarks
   * Authorization status.
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * Cloud Monitoring - Alert authorization status.
   * 
   * @example
   * 0
   */
  cmAuthStatus?: number;
  /**
   * @remarks
   * End time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710123149222
   */
  endTime?: number;
  /**
   * @remarks
   * Customer level.
   * 
   * @example
   * GC1
   */
  level?: string;
  /**
   * @remarks
   * Cloud Security - Alert authorization status.
   * 
   * @example
   * 1
   */
  monitorAuthStatus?: number;
  /**
   * @remarks
   * Customer name.
   * 
   * @example
   * 中国工程院
   */
  name?: string;
  /**
   * @remarks
   * Owner name.
   * 
   * @example
   * 常温
   */
  ownId?: string;
  /**
   * @remarks
   * Start time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710123149000
   */
  startTime?: number;
  /**
   * @remarks
   * Customer ID.
   * 
   * @example
   * 1667751131382856
   */
  userId?: string;
  /**
   * @remarks
   * Version information.
   * 
   * @example
   * 企业版
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      authStatus: 'AuthStatus',
      cmAuthStatus: 'CmAuthStatus',
      endTime: 'EndTime',
      level: 'Level',
      monitorAuthStatus: 'MonitorAuthStatus',
      name: 'Name',
      ownId: 'OwnId',
      startTime: 'StartTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      authStatus: 'number',
      cmAuthStatus: 'number',
      endTime: 'number',
      level: 'string',
      monitorAuthStatus: 'number',
      name: 'string',
      ownId: 'string',
      startTime: 'number',
      userId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Service UID.
   * 
   * @example
   * 1601097845544644
   */
  customerId?: string;
  /**
   * @remarks
   * Customer name.
   * 
   * @example
   * 天津瑞鹏昇科技发展有限公司
   */
  customerName?: string;
  /**
   * @remarks
   * Alert ID.
   * 
   * @example
   * c0dc71d1-8a1d-4043-9767-f6c420e34901-81bd
   */
  eventId?: string;
  /**
   * @remarks
   * Alert type.
   * 
   * @example
   * SUSP_CUSTOM_WAF
   */
  eventType?: string;
  /**
   * @remarks
   * Work order ID.
   * 
   * @example
   * 1914348
   */
  id?: number;
  /**
   * @remarks
   * Owner ID.
   * 
   * @example
   * 352675
   */
  ownerId?: string;
  /**
   * @remarks
   * Owner name.
   * 
   * @example
   * 乐牙
   */
  ownerName?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * @example
   * 22端口禁止任意IP访问
   */
  workTaskName?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      customerName: 'CustomerName',
      eventId: 'EventId',
      eventType: 'EventType',
      id: 'Id',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      workTaskName: 'WorkTaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      customerName: 'string',
      eventId: 'string',
      eventType: 'string',
      id: 'number',
      ownerId: 'string',
      ownerName: 'string',
      workTaskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDjbhReportRequest extends $dara.Model {
  /**
   * @remarks
   * Primary key ID of the report.
   * 
   * @example
   * 24563
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDjbhReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDjbhReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmDjbhReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfirmDjbhReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * Language.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

export class CreateServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 592B80F0-7674-56A4-9027-8A0A9ACDBD56
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceWorkOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Creator.
   * 
   * This parameter is required.
   * 
   * @example
   * 426556
   */
  creator?: string;
  /**
   * @remarks
   * Customer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1477832102462645
   */
  customerId?: string;
  /**
   * @remarks
   * Duration in days.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  durationDay?: string;
  /**
   * @remarks
   * Attachment requirement.
   * 
   * This parameter is required.
   * 
   * @example
   * Y
   */
  isAttachment?: string;
  isMilestone?: string;
  /**
   * @remarks
   * Whether a reminder is needed.
   * 
   * This parameter is required.
   * 
   * @example
   * Y
   */
  isWorkOrderNotify?: string;
  /**
   * @remarks
   * Number of days for advance notification.
   * 
   * @example
   * 5
   */
  notifyDay?: string;
  /**
   * @remarks
   * Notification ID.
   * 
   * @example
   * 10
   */
  notifyId?: number;
  /**
   * @remarks
   * Operation remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 新建
   */
  operateRemark?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE
   */
  operateType?: string;
  /**
   * @remarks
   * Operator.
   * 
   * This parameter is required.
   * 
   * @example
   * 426556
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: string;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-01-21 15:25:25
   */
  startTime?: number;
  /**
   * @remarks
   * Work order details.
   * 
   * This parameter is required.
   * 
   * @example
   * {"questionDetail":"测试工单","answerDetail":""}
   */
  workOrderDetail?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * This parameter is required.
   * 
   * @example
   * 安全月报交付任务
   */
  workOrderName?: string;
  /**
   * @remarks
   * Work order source.
   * 
   * This parameter is required.
   * 
   * @example
   * 工单迁移
   */
  workOrderSource?: string;
  /**
   * @remarks
   * Work order status.
   * 
   * This parameter is required.
   * 
   * @example
   * UNPROCESSED
   */
  workOrderStatus?: string;
  /**
   * @remarks
   * Work order type.
   * 
   * This parameter is required.
   * 
   * @example
   * MONTH_REPORT
   */
  workOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      customerId: 'CustomerId',
      durationDay: 'DurationDay',
      isAttachment: 'IsAttachment',
      isMilestone: 'IsMilestone',
      isWorkOrderNotify: 'IsWorkOrderNotify',
      notifyDay: 'NotifyDay',
      notifyId: 'NotifyId',
      operateRemark: 'OperateRemark',
      operateType: 'OperateType',
      operator: 'Operator',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      workOrderDetail: 'WorkOrderDetail',
      workOrderName: 'WorkOrderName',
      workOrderSource: 'WorkOrderSource',
      workOrderStatus: 'WorkOrderStatus',
      workOrderType: 'WorkOrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      customerId: 'string',
      durationDay: 'string',
      isAttachment: 'string',
      isMilestone: 'string',
      isWorkOrderNotify: 'string',
      notifyDay: 'string',
      notifyId: 'number',
      operateRemark: 'string',
      operateType: 'string',
      operator: 'string',
      ownerId: 'string',
      startTime: 'number',
      workOrderDetail: 'string',
      workOrderName: 'string',
      workOrderSource: 'string',
      workOrderStatus: 'string',
      workOrderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceWorkOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: CreateServiceWorkOrderResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The prompt message of the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7DC44321-7AAE-51CD-8E5F-CEB968569042
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateServiceWorkOrderResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class CreateServiceWorkOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceWorkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceWorkOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDjbhReportRequest extends $dara.Model {
  /**
   * @remarks
   * Primary key ID of the report.
   * 
   * This parameter is required.
   * 
   * @example
   * 26579
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDjbhReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 86786E4C-6416-55CF-9AB6-5E275B68801D
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDjbhReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDjbhReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDjbhReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * Language.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

export class DescribeServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Whether the service-linked role permission is granted:
   * - true: Granted.
   * - false: Not granted.
   * 
   * @example
   * true
   */
  entityRoleGrant?: boolean;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 02F8BBF3-2D61-5982-8911-EEB387BE3AF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityRoleGrant: 'EntityRoleGrant',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityRoleGrant: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLinkedRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceLinkedRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeServiceWorkOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Attachment name.
   * 
   * @example
   * bbaa133c-0ac2-489f-9fc8-39f91c2e770c_20230301-20240403-服务工单列表.xlsx
   */
  attachmentName?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 2024-04-14 00:00:00
   */
  endTime?: number;
  /**
   * @remarks
   * Forward to owner.
   * 
   * @example
   * 405639
   */
  forwardOwnerId?: string;
  /**
   * @remarks
   * Work order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23172
   */
  id?: number;
  /**
   * @remarks
   * Attachment requirement.
   * 
   * @example
   * Y
   */
  isAttachment?: string;
  /**
   * @remarks
   * Work order notification.
   * 
   * @example
   * Y
   */
  isWorkOrderNotify?: string;
  /**
   * @remarks
   * Notification ID.
   * 
   * @example
   * 10
   */
  notifyId?: number;
  /**
   * @remarks
   * Operation remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 处理完成
   */
  operateRemark?: string;
  /**
   * @remarks
   * Processing type.
   * 
   * This parameter is required.
   * 
   * @example
   * PROCESSED
   */
  operateType?: string;
  /**
   * @remarks
   * Operator.
   * 
   * This parameter is required.
   * 
   * @example
   * 396120
   */
  operator?: string;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 2024-04-02 00:00:00
   */
  startTime?: number;
  /**
   * @remarks
   * Upgrade owner.
   * 
   * @example
   * 336333
   */
  upgradeOwnerId?: string;
  /**
   * @remarks
   * Work order details.
   * 
   * @example
   * {"questionDetail":"测试工单","answerDetail":""}
   */
  workOrderDetail?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * This parameter is required.
   * 
   * @example
   * 安全产品配置问题与超量提醒
   */
  workOrderName?: string;
  /**
   * @remarks
   * Work order status.
   * 
   * @example
   * PROCESSED
   */
  workOrderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentName: 'AttachmentName',
      endTime: 'EndTime',
      forwardOwnerId: 'ForwardOwnerId',
      id: 'Id',
      isAttachment: 'IsAttachment',
      isWorkOrderNotify: 'IsWorkOrderNotify',
      notifyId: 'NotifyId',
      operateRemark: 'OperateRemark',
      operateType: 'OperateType',
      operator: 'Operator',
      startTime: 'StartTime',
      upgradeOwnerId: 'UpgradeOwnerId',
      workOrderDetail: 'WorkOrderDetail',
      workOrderName: 'WorkOrderName',
      workOrderStatus: 'WorkOrderStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentName: 'string',
      endTime: 'number',
      forwardOwnerId: 'string',
      id: 'number',
      isAttachment: 'string',
      isWorkOrderNotify: 'string',
      notifyId: 'number',
      operateRemark: 'string',
      operateType: 'string',
      operator: 'string',
      startTime: 'number',
      upgradeOwnerId: 'string',
      workOrderDetail: 'string',
      workOrderName: 'string',
      workOrderStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeServiceWorkOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message of the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ED520610-6231-5D80-BADD-A8CDC7BBC809
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeServiceWorkOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisposeServiceWorkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisposeServiceWorkOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeWorkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Operator.
   * 
   * This parameter is required.
   * 
   * @example
   * WB01089929
   */
  operator?: string;
  /**
   * @remarks
   * Operation remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 处理完成
   */
  optRemark?: string;
  /**
   * @remarks
   * Work order status.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  status?: number;
  /**
   * @remarks
   * Work order ID, multiple IDs separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 10310
   */
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      optRemark: 'OptRemark',
      status: 'Status',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      optRemark: 'string',
      status: 'number',
      taskIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeWorkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message of the returned result.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 86786E4C-6416-55CF-9AB6-5E275B68801D
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisposeWorkTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisposeWorkTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisposeWorkTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdRequest extends $dara.Model {
  /**
   * @remarks
   * Primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 20077761
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetAlarmDetailByIdResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5C1B0668-442C-57AE-9668-D894B0B012EB
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful: - true: Success. - false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAlarmDetailByIdResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetAlarmDetailByIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlarmDetailByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlarmDetailByIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealRequest extends $dara.Model {
  /**
   * @remarks
   * Time filter type, supporting filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  startDate?: number;
  /**
   * @remarks
   * Source of the alert event.
   * 
   * @example
   * 暂时无需传参，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackedAssetDealResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetAttackedAssetDealResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1E74F11C-B4A8-5774-962C-02003BA8504E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the query was successful.<br />
   * **Enum values:**
   * * true: Success.
   * * false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAttackedAssetDealResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetAttackedAssetDealResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAttackedAssetDealResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAttackedAssetDealResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Time filter type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetBaselineSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 67D61738-5E38-5164-947A-34E3850D493A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Values: true: success; false: failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBaselineSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetBaselineSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBaselineSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBaselineSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsoleScoreRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, last 30 days, last half year, or custom. If empty, it represents the last 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End date.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start date.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Source of alert events.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsoleScoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   * 
   * @example
   * {
   *     "score": "94.00",
   *     "consoleScoreTrendDTOS": [
   *         {
   *             "date": "20241009",
   *             "score": "100.0"
   *         }
   *     ],
   *     "cyclicYearOverYear": "-6.00",
   *     "recordDate": "20241209",
   *     "weeklyYearOverYear": "1.62",
   *     "aboveWholeNetworkUserRatio": "6.25",
   *     "aliUid": "1601097845544644",
   *     "detailJson": "[{\\"detailDTO\\":[{\\"count\\":0,\\"itemName\\":\\"应用漏洞POC验证\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"未授权访问漏洞（公网暴露）\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"后台弱口令漏洞（公网暴露）\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"文件上传漏洞（公网暴露）\\",\\"mark\\":\\"1\\"}],\\"markRate\\":\\"0.5\\",\\"markType\\":\\"vul\\"},{\\"detailDTO\\":[{\\"count\\":12,\\"itemName\\":\\"WAF3.0回源配置不正确\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"AK泄露检查未开启\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"DNAT管理端口开放\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"高危端口暴露\\",\\"mark\\":\\"0.5\\"}],\\"markRate\\":\\"0.5\\",\\"markType\\":\\"risk\\"}]"
   * }
   */
  data?: any;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the result returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * D0937B0F-9180-5F70-B6ED-0BA22591627F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. true means success, false means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsoleScoreResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsoleScoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConsoleScoreResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdRequest extends $dara.Model {
  /**
   * @remarks
   * Primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetDetailByIdResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * DAB46EC5-3746-59C4-B6D2-469F442EC73F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Values: - **true**: indicates a successful call. - **false**: indicates a failed call.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDetailByIdResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetDetailByIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDetailByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDetailByIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * Document management ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 175815
   */
  id?: number;
  /**
   * @remarks
   * Report type.
   * 
   * @example
   * 5
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * OSS file access URL.
   * 
   * @example
   * https://oos-cn.ctyunapi.cn/example-bucket/test/1.jpg
   */
  data?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Message of the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * C7BE80B4-7692-54FA-AB22-2A7DF08C4754
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful: - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentDownloadUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentDownloadUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageRequest extends $dara.Model {
  /**
   * @remarks
   * Current page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Delivered by.
   * 
   * @example
   * luna
   */
  deliveredBy?: string;
  /**
   * @remarks
   * Document name.
   * 
   * @example
   * month report
   */
  documentName?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * 0
   */
  documentType?: string;
  /**
   * @remarks
   * Page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Report type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deliveredBy: 'DeliveredBy',
      documentName: 'DocumentName',
      documentType: 'DocumentType',
      pageSize: 'PageSize',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deliveredBy: 'string',
      documentName: 'string',
      documentType: 'string',
      pageSize: 'number',
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetDocumentPageResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetDocumentPageResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 04DAD7B4-E1DA-5C2C-8E5C-A1EDC880CF60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetDocumentPageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetDocumentPageResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentPageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Type of service report.
   * 
   * @example
   * 1
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetDocumentSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7903F2DE-D9EE-5D16-8A08-E9223E54B281
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. Values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDocumentSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetDocumentSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecentDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time ranges.
   * 
   * This parameter is required.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecentDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetRecentDocumentResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4916FA8D-F294-518D-B373-8B59D63CAB19
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetRecentDocumentResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecentDocumentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecentDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRecentDocumentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732255620000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该接口不用传
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBody extends $dara.Model {
  /**
   * @remarks
   * API return code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetSafetyCoverResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Message of the response result.
   * 
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 564f8bb9-df3c-42a0-877a-b35d48f66603
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful:
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSafetyCoverResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetSafetyCoverResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSafetyCoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSafetyCoverResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSowListRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time ranges.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSowListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSowListResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt information for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * FA8883BC-CB18-5E28-A113-8249917CA05E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSowListResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSowListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSowListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSowListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageRequest extends $dara.Model {
  /**
   * @remarks
   * Alarm end time.
   * 
   * @example
   * 1732515522000
   */
  alarmEndTime?: number;
  /**
   * @remarks
   * Alarm start time.
   * 
   * @example
   * 1722515522000
   */
  alarmStartTime?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Alarm source.
   * 
   * @example
   * SUSP_EVENT
   */
  source?: string;
  /**
   * @remarks
   * Disposal status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      alarmEndTime: 'AlarmEndTime',
      alarmStartTime: 'AlarmStartTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      source: 'Source',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEndTime: 'number',
      alarmStartTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
      source: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSuspEventPageResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message of the returned result.
   * 
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetSuspEventPageResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AFA6F7B7-7C4B-58BB-B8FB-E0FFA4483561
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSuspEventPageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetSuspEventPageResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSuspEventPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSuspEventPageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type. Supports filtering by the last 7 days, the last 30 days, the last half year, or custom time ranges.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * SUSP_EVENT
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSuspEventSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9B2DAE9B-B901-5818-AFEF-E5637D938280
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - true: Call succeeded.
   * - false: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSuspEventSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetSuspEventSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSuspEventSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSuspEventSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspPageSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSuspPageSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the result returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSuspPageSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetSuspPageSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSuspPageSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSuspPageSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetUserStatusResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message of the returned result.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * D8DBD769-613E-5E6B-A9FD-B622375B152D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUserStatusResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetUserStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageRequest extends $dara.Model {
  /**
   * @remarks
   * Vulnerability alias.
   * 
   * @example
   * RHSA-2018:3665-Important: NetworkManager security update
   */
  aliasName?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Processing status. y: processed; n: unprocessed; h: processing.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * later
   */
  level?: string;
  /**
   * @remarks
   * Vulnerability name.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20183665
   */
  name?: string;
  /**
   * @remarks
   * Number of items to display per page in the returned data.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Vulnerability type.
   * 
   * @example
   * sca
   */
  scanType?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      level: 'Level',
      name: 'Name',
      pageSize: 'PageSize',
      scanType: 'ScanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      currentPage: 'number',
      dealed: 'string',
      level: 'string',
      name: 'string',
      pageSize: 'number',
      scanType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetVulItemPageResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetVulItemPageResponseBodyPageInfo;
  /**
   * @remarks
   * Request response.
   * 
   * This parameter is required.
   * 
   * @example
   * 02F8BBF3-2D61-5982-8911-EEB387BE3AF8
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * true: Call succeeded. false: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetVulItemPageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetVulItemPageResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVulItemPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVulItemPageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdRequest extends $dara.Model {
  /**
   * @remarks
   * Current page
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Whether it has been processed; y: processed; n: not processed
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * This parameter is required.
   * 
   * @example
   * 4209205
   */
  id?: number;
  /**
   * @remarks
   * Risk level
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Asset information of the vulnerability to be queried, which can be set as asset name, public IP, or private IP.
   * 
   * @example
   * production_nat_cn-hangzhou_zone_105
   */
  remark?: string;
  /**
   * @remarks
   * UUID of the server with the vulnerability to be queried. Multiple UUIDs should be separated by a comma (,).
   * 
   * @example
   * 3615b908-995a-4edb-bc85-1981b4e94ba0,9c52cf9a-d8ba-4e31-ae06-500b879ee4e6,4b7de3cf-c4ac-42fc-8804-35070493dc29,f3c01525-0777-4c97-88d9-bec11afd4a6a,a80bd516-c4f3-4c27-a169-c8abfaf9e89e
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      id: 'Id',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      remark: 'Remark',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealed: 'string',
      id: 'number',
      necessity: 'string',
      pageSize: 'number',
      remark: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetVulListByIdResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetVulListByIdResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * D38B3D2F-67FD-57FF-87D1-C431D2C70F76
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Values: - **true**: Yes. - **false**: No.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetVulListByIdResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetVulListByIdResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulListByIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVulListByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVulListByIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulPageSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetVulPageSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * A3A575C8-80F9-5F04-AA24-CCAC246884A3
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVulPageSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetVulPageSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVulPageSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVulPageSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type. Supports filtering by the last 7 days, the last 30 days, the last half year, or a custom time range.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetVulSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the response result.
   * 
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVulSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetVulSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVulSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVulSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkTaskSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该字段暂时未用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkTaskSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetWorkTaskSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the response result.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWorkTaskSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetWorkTaskSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkTaskSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorkTaskSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerRequest extends $dara.Model {
  /**
   * @remarks
   * Authorization status.
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * Cloud Monitoring - Alert authorization status.
   * 
   * @example
   * 1
   */
  cmAuthStatus?: number;
  /**
   * @remarks
   * The page number of the query result, default is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * End time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710641101123
   */
  endTime?: number;
  /**
   * @remarks
   * Cloud Security - Alert authorization status.
   * 
   * @example
   * 1
   */
  monitorAuthStatus?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710641101000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      cmAuthStatus: 'CmAuthStatus',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      monitorAuthStatus: 'MonitorAuthStatus',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'number',
      cmAuthStatus: 'number',
      currentPage: 'number',
      endTime: 'number',
      monitorAuthStatus: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * System error or openapi error
   */
  code?: string;
  /**
   * @remarks
   * Data query results.
   */
  data?: PageServiceCustomerResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message. When the request is successful, it returns a success message; when the request fails, it returns the reason for the failure.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: PageServiceCustomerResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 808A307F-9513-5099-AAA5-98D4EF199140
   */
  requestId?: string;
  /**
   * @remarks
   * Request return status.
   * - true: Success.
   * - false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': PageServiceCustomerResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: PageServiceCustomerResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageServiceCustomerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PageServiceCustomerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomEventRequest extends $dara.Model {
  /**
   * @remarks
   * User ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1214484929940219
   */
  customerId?: string;
  /**
   * @remarks
   * Data source.
   * 
   * @example
   * aegis_suspicious_event
   */
  dataSource?: string;
  /**
   * @remarks
   * Event details.
   * 
   * @example
   * 疑似病毒木马启动运行。
   */
  eventDescription?: string;
  /**
   * @remarks
   * Alert event details.
   * 
   * @example
   * [{"name":"提示","type":"text","value":"在您的系统上发现可疑进程启动行为，通常与病毒木马或入侵事件相关"},{"name":"ATT&CK攻击阶段","type":"text","value":"代码执行"},{"name":"恶意行为","type":"text","value":"可疑的漏洞利用代码执行"},{"name":"规则类型","type":"text","value":"进程启动"},{"name":"规则引擎","type":"text","value":"精准攻击识别引擎"},{"name":"处置动作","type":"text","value":"阻断行为"},{"name":"进程路径","type":"text","value":"/usr/bin/python3.9"},{"name":"命令行","type":"text","value":"python3 /root/poc/python/cve-2018-15473.py --username root --port 22"},{"name":"父进程路径","type":"text","value":"/bin/gunkit"},{"name":"父进程命令行","type":"text","value":"gunkit serve-grpc --addr unix:///data/gunkit-grpc.sock"},{"name":"进程ID","type":"text","value":"22714"},{"name":"父进程ID","type":"text","value":"2986"},{"name":"描述","type":"text","value":"主动防御检测到可疑进程启动行为，这类可疑进程通常存在于特殊的系统目录，或通过后缀伪装成文档/音频/图片等文件诱导用户运行，该异常行为已被成功拦截"},{"name":"处置建议","type":"text","value":"请您及时排查是否是正常的业务操作，如果您觉得此次拦截是非预期的，那您可以在主动防御 - 恶意行为防御页面中，关闭“可疑进程启动“规则集或者将受影响机器从管理主机中移除"},{"name":"父进程关系","type":"processChain","value":"1:::/usr/lib/systemd/systemd --switched-root --system --deserialize 22 &&& 2939:::/usr/local/bin/containerd-shim-runc-v2 -namespace moby -id 270f164903b47d4e219b410b8d11d9079a7ad1bac8133aea604598300d3b03d5 -address /run/containerd/containerd.sock &&& 2962:::/usr/bin/python3 /usr/bin/supervisord -n &&& 2986:::gunkit serve-grpc --addr unix:///data/gunkit-grpc.sock"}]
   */
  eventDetails?: string;
  /**
   * @remarks
   * Event name.
   * 
   * This parameter is required.
   * 
   * @example
   * 客户端离线
   */
  eventName?: string;
  /**
   * @remarks
   * Event type.
   * 
   * This parameter is required.
   * 
   * @example
   * SUSP_CUSTOM_CFW
   */
  eventType?: string;
  /**
   * @remarks
   * Alert discovery time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-23 14:47:34
   */
  findTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-uf60h3ns25bzq9eyf8ps
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * 猫吉-售卖-MDR扫描器集群1
   */
  instanceName?: string;
  /**
   * @remarks
   * Whether to send.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  isSend?: string;
  /**
   * @remarks
   * Event level.
   * 
   * This parameter is required.
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The first occurrence time of the alert event.
   * 
   * @example
   * 1724956996000
   */
  occurrenceTime?: number;
  ownerId?: string;
  /**
   * @remarks
   * Product name.
   * 
   * @example
   * CloudSecCenter
   */
  product?: string;
  /**
   * @remarks
   * Unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 68888f02-98f2-492b-a2b2-5b13295755b7
   */
  uniqueId?: string;
  /**
   * @remarks
   * UUID.
   * 
   * @example
   * 93B6CDAB-7D2E-33D2-9EBA-25D561A2E95F
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      dataSource: 'DataSource',
      eventDescription: 'EventDescription',
      eventDetails: 'EventDetails',
      eventName: 'EventName',
      eventType: 'EventType',
      findTime: 'FindTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isSend: 'IsSend',
      level: 'Level',
      occurrenceTime: 'OccurrenceTime',
      ownerId: 'OwnerId',
      product: 'Product',
      uniqueId: 'UniqueId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      dataSource: 'string',
      eventDescription: 'string',
      eventDetails: 'string',
      eventName: 'string',
      eventType: 'string',
      findTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      isSend: 'string',
      level: 'string',
      occurrenceTime: 'number',
      ownerId: 'string',
      product: 'string',
      uniqueId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Interface return data.
   */
  data?: SendCustomEventResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message. When the request is successful, it returns a success message; when the request fails, it returns the reason for the failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 606EB377-155D-5AEB-AC4F-F013444A4C45
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * 
   * - true: Call succeeded.
   * 
   * - false: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SendCustomEventResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class SendCustomEventResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendCustomEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendCustomEventResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mssp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Confirm Receipt of Security Assessment Report
   * 
   * @param request - ConfirmDjbhReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmDjbhReportResponse
   */
  async confirmDjbhReportWithOptions(request: ConfirmDjbhReportRequest, runtime: $dara.RuntimeOptions): Promise<ConfirmDjbhReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmDjbhReport",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ConfirmDjbhReportResponse>(await this.callApi(params, req, runtime), new ConfirmDjbhReportResponse({}));
  }

  /**
   * Confirm Receipt of Security Assessment Report
   * 
   * @param request - ConfirmDjbhReportRequest
   * @returns ConfirmDjbhReportResponse
   */
  async confirmDjbhReport(request: ConfirmDjbhReportRequest): Promise<ConfirmDjbhReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.confirmDjbhReportWithOptions(request, runtime);
  }

  /**
   * Create Service-Linked Role
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRole",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  /**
   * Create Service-Linked Role
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Create Service Work Order
   * 
   * @param request - CreateServiceWorkOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceWorkOrderResponse
   */
  async createServiceWorkOrderWithOptions(request: CreateServiceWorkOrderRequest, runtime: $dara.RuntimeOptions): Promise<CreateServiceWorkOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      body["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.durationDay)) {
      body["DurationDay"] = request.durationDay;
    }

    if (!$dara.isNull(request.isAttachment)) {
      body["IsAttachment"] = request.isAttachment;
    }

    if (!$dara.isNull(request.isMilestone)) {
      body["IsMilestone"] = request.isMilestone;
    }

    if (!$dara.isNull(request.isWorkOrderNotify)) {
      body["IsWorkOrderNotify"] = request.isWorkOrderNotify;
    }

    if (!$dara.isNull(request.notifyDay)) {
      body["NotifyDay"] = request.notifyDay;
    }

    if (!$dara.isNull(request.notifyId)) {
      body["NotifyId"] = request.notifyId;
    }

    if (!$dara.isNull(request.operateRemark)) {
      body["OperateRemark"] = request.operateRemark;
    }

    if (!$dara.isNull(request.operateType)) {
      body["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workOrderDetail)) {
      body["WorkOrderDetail"] = request.workOrderDetail;
    }

    if (!$dara.isNull(request.workOrderName)) {
      body["WorkOrderName"] = request.workOrderName;
    }

    if (!$dara.isNull(request.workOrderSource)) {
      body["WorkOrderSource"] = request.workOrderSource;
    }

    if (!$dara.isNull(request.workOrderStatus)) {
      body["WorkOrderStatus"] = request.workOrderStatus;
    }

    if (!$dara.isNull(request.workOrderType)) {
      body["WorkOrderType"] = request.workOrderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceWorkOrder",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateServiceWorkOrderResponse>(await this.callApi(params, req, runtime), new CreateServiceWorkOrderResponse({}));
  }

  /**
   * Create Service Work Order
   * 
   * @param request - CreateServiceWorkOrderRequest
   * @returns CreateServiceWorkOrderResponse
   */
  async createServiceWorkOrder(request: CreateServiceWorkOrderRequest): Promise<CreateServiceWorkOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceWorkOrderWithOptions(request, runtime);
  }

  /**
   * Delete Security Assessment Report
   * 
   * @param request - DeleteDjbhReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDjbhReportResponse
   */
  async deleteDjbhReportWithOptions(request: DeleteDjbhReportRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDjbhReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDjbhReport",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteDjbhReportResponse>(await this.callApi(params, req, runtime), new DeleteDjbhReportResponse({}));
  }

  /**
   * Delete Security Assessment Report
   * 
   * @param request - DeleteDjbhReportRequest
   * @returns DeleteDjbhReportResponse
   */
  async deleteDjbhReport(request: DeleteDjbhReportRequest): Promise<DeleteDjbhReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDjbhReportWithOptions(request, runtime);
  }

  /**
   * Query Service-Linked Role
   * 
   * @param request - DescribeServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceLinkedRoleResponse
   */
  async describeServiceLinkedRoleWithOptions(request: DescribeServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<DescribeServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceLinkedRole",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new DescribeServiceLinkedRoleResponse({}));
  }

  /**
   * Query Service-Linked Role
   * 
   * @param request - DescribeServiceLinkedRoleRequest
   * @returns DescribeServiceLinkedRoleResponse
   */
  async describeServiceLinkedRole(request: DescribeServiceLinkedRoleRequest): Promise<DescribeServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Process Service Work Order
   * 
   * @param request - DisposeServiceWorkOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisposeServiceWorkOrderResponse
   */
  async disposeServiceWorkOrderWithOptions(request: DisposeServiceWorkOrderRequest, runtime: $dara.RuntimeOptions): Promise<DisposeServiceWorkOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachmentName)) {
      body["AttachmentName"] = request.attachmentName;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.forwardOwnerId)) {
      body["ForwardOwnerId"] = request.forwardOwnerId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.isAttachment)) {
      body["IsAttachment"] = request.isAttachment;
    }

    if (!$dara.isNull(request.isWorkOrderNotify)) {
      body["IsWorkOrderNotify"] = request.isWorkOrderNotify;
    }

    if (!$dara.isNull(request.notifyId)) {
      body["NotifyId"] = request.notifyId;
    }

    if (!$dara.isNull(request.operateRemark)) {
      body["OperateRemark"] = request.operateRemark;
    }

    if (!$dara.isNull(request.operateType)) {
      body["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.upgradeOwnerId)) {
      body["UpgradeOwnerId"] = request.upgradeOwnerId;
    }

    if (!$dara.isNull(request.workOrderDetail)) {
      body["WorkOrderDetail"] = request.workOrderDetail;
    }

    if (!$dara.isNull(request.workOrderName)) {
      body["WorkOrderName"] = request.workOrderName;
    }

    if (!$dara.isNull(request.workOrderStatus)) {
      body["WorkOrderStatus"] = request.workOrderStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisposeServiceWorkOrder",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisposeServiceWorkOrderResponse>(await this.callApi(params, req, runtime), new DisposeServiceWorkOrderResponse({}));
  }

  /**
   * Process Service Work Order
   * 
   * @param request - DisposeServiceWorkOrderRequest
   * @returns DisposeServiceWorkOrderResponse
   */
  async disposeServiceWorkOrder(request: DisposeServiceWorkOrderRequest): Promise<DisposeServiceWorkOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disposeServiceWorkOrderWithOptions(request, runtime);
  }

  /**
   * Handle Alert Work Order
   * 
   * @param request - DisposeWorkTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisposeWorkTaskResponse
   */
  async disposeWorkTaskWithOptions(request: DisposeWorkTaskRequest, runtime: $dara.RuntimeOptions): Promise<DisposeWorkTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.optRemark)) {
      body["OptRemark"] = request.optRemark;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskIds)) {
      body["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisposeWorkTask",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisposeWorkTaskResponse>(await this.callApi(params, req, runtime), new DisposeWorkTaskResponse({}));
  }

  /**
   * Handle Alert Work Order
   * 
   * @param request - DisposeWorkTaskRequest
   * @returns DisposeWorkTaskResponse
   */
  async disposeWorkTask(request: DisposeWorkTaskRequest): Promise<DisposeWorkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disposeWorkTaskWithOptions(request, runtime);
  }

  /**
   * Query Alarm Details
   * 
   * @param request - GetAlarmDetailByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlarmDetailByIdResponse
   */
  async getAlarmDetailByIdWithOptions(request: GetAlarmDetailByIdRequest, runtime: $dara.RuntimeOptions): Promise<GetAlarmDetailByIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlarmDetailById",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAlarmDetailByIdResponse>(await this.callApi(params, req, runtime), new GetAlarmDetailByIdResponse({}));
  }

  /**
   * Query Alarm Details
   * 
   * @param request - GetAlarmDetailByIdRequest
   * @returns GetAlarmDetailByIdResponse
   */
  async getAlarmDetailById(request: GetAlarmDetailByIdRequest): Promise<GetAlarmDetailByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAlarmDetailByIdWithOptions(request, runtime);
  }

  /**
   * Trend of Attacked Asset Convergence
   * 
   * @param request - GetAttackedAssetDealRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAttackedAssetDealResponse
   */
  async getAttackedAssetDealWithOptions(request: GetAttackedAssetDealRequest, runtime: $dara.RuntimeOptions): Promise<GetAttackedAssetDealResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAttackedAssetDeal",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAttackedAssetDealResponse>(await this.callApi(params, req, runtime), new GetAttackedAssetDealResponse({}));
  }

  /**
   * Trend of Attacked Asset Convergence
   * 
   * @param request - GetAttackedAssetDealRequest
   * @returns GetAttackedAssetDealResponse
   */
  async getAttackedAssetDeal(request: GetAttackedAssetDealRequest): Promise<GetAttackedAssetDealResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAttackedAssetDealWithOptions(request, runtime);
  }

  /**
   * Compliance Risk Convergence Trend
   * 
   * @param request - GetBaselineSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBaselineSummaryResponse
   */
  async getBaselineSummaryWithOptions(request: GetBaselineSummaryRequest, runtime: $dara.RuntimeOptions): Promise<GetBaselineSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBaselineSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetBaselineSummaryResponse>(await this.callApi(params, req, runtime), new GetBaselineSummaryResponse({}));
  }

  /**
   * Compliance Risk Convergence Trend
   * 
   * @param request - GetBaselineSummaryRequest
   * @returns GetBaselineSummaryResponse
   */
  async getBaselineSummary(request: GetBaselineSummaryRequest): Promise<GetBaselineSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBaselineSummaryWithOptions(request, runtime);
  }

  /**
   * Get Console Score
   * 
   * @param request - GetConsoleScoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsoleScoreResponse
   */
  async getConsoleScoreWithOptions(request: GetConsoleScoreRequest, runtime: $dara.RuntimeOptions): Promise<GetConsoleScoreResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsoleScore",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetConsoleScoreResponse>(await this.callApi(params, req, runtime), new GetConsoleScoreResponse({}));
  }

  /**
   * Get Console Score
   * 
   * @param request - GetConsoleScoreRequest
   * @returns GetConsoleScoreResponse
   */
  async getConsoleScore(request: GetConsoleScoreRequest): Promise<GetConsoleScoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConsoleScoreWithOptions(request, runtime);
  }

  /**
   * Query Risk Details
   * 
   * @param request - GetDetailByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDetailByIdResponse
   */
  async getDetailByIdWithOptions(request: GetDetailByIdRequest, runtime: $dara.RuntimeOptions): Promise<GetDetailByIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDetailById",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetDetailByIdResponse>(await this.callApi(params, req, runtime), new GetDetailByIdResponse({}));
  }

  /**
   * Query Risk Details
   * 
   * @param request - GetDetailByIdRequest
   * @returns GetDetailByIdResponse
   */
  async getDetailById(request: GetDetailByIdRequest): Promise<GetDetailByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDetailByIdWithOptions(request, runtime);
  }

  /**
   * Single Service Report Download
   * 
   * @param request - GetDocumentDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentDownloadUrlResponse
   */
  async getDocumentDownloadUrlWithOptions(request: GetDocumentDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<GetDocumentDownloadUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentDownloadUrl",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetDocumentDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetDocumentDownloadUrlResponse({}));
  }

  /**
   * Single Service Report Download
   * 
   * @param request - GetDocumentDownloadUrlRequest
   * @returns GetDocumentDownloadUrlResponse
   */
  async getDocumentDownloadUrl(request: GetDocumentDownloadUrlRequest): Promise<GetDocumentDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Service Report Query
   * 
   * @param request - GetDocumentPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentPageResponse
   */
  async getDocumentPageWithOptions(request: GetDocumentPageRequest, runtime: $dara.RuntimeOptions): Promise<GetDocumentPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deliveredBy)) {
      body["DeliveredBy"] = request.deliveredBy;
    }

    if (!$dara.isNull(request.documentName)) {
      body["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.documentType)) {
      body["DocumentType"] = request.documentType;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentPage",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetDocumentPageResponse>(await this.callApi(params, req, runtime), new GetDocumentPageResponse({}));
  }

  /**
   * Service Report Query
   * 
   * @param request - GetDocumentPageRequest
   * @returns GetDocumentPageResponse
   */
  async getDocumentPage(request: GetDocumentPageRequest): Promise<GetDocumentPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentPageWithOptions(request, runtime);
  }

  /**
   * Service Report Home Page Statistics Acquisition
   * 
   * @param request - GetDocumentSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentSummaryResponse
   */
  async getDocumentSummaryWithOptions(request: GetDocumentSummaryRequest, runtime: $dara.RuntimeOptions): Promise<GetDocumentSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetDocumentSummaryResponse>(await this.callApi(params, req, runtime), new GetDocumentSummaryResponse({}));
  }

  /**
   * Service Report Home Page Statistics Acquisition
   * 
   * @param request - GetDocumentSummaryRequest
   * @returns GetDocumentSummaryResponse
   */
  async getDocumentSummary(request: GetDocumentSummaryRequest): Promise<GetDocumentSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentSummaryWithOptions(request, runtime);
  }

  /**
   * Get Recently Uploaded Service Reports
   * 
   * @param request - GetRecentDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecentDocumentResponse
   */
  async getRecentDocumentWithOptions(request: GetRecentDocumentRequest, runtime: $dara.RuntimeOptions): Promise<GetRecentDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecentDocument",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetRecentDocumentResponse>(await this.callApi(params, req, runtime), new GetRecentDocumentResponse({}));
  }

  /**
   * Get Recently Uploaded Service Reports
   * 
   * @param request - GetRecentDocumentRequest
   * @returns GetRecentDocumentResponse
   */
  async getRecentDocument(request: GetRecentDocumentRequest): Promise<GetRecentDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecentDocumentWithOptions(request, runtime);
  }

  /**
   * Get Safety Coverage
   * 
   * @param request - GetSafetyCoverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSafetyCoverResponse
   */
  async getSafetyCoverWithOptions(request: GetSafetyCoverRequest, runtime: $dara.RuntimeOptions): Promise<GetSafetyCoverResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSafetyCover",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSafetyCoverResponse>(await this.callApi(params, req, runtime), new GetSafetyCoverResponse({}));
  }

  /**
   * Get Safety Coverage
   * 
   * @param request - GetSafetyCoverRequest
   * @returns GetSafetyCoverResponse
   */
  async getSafetyCover(request: GetSafetyCoverRequest): Promise<GetSafetyCoverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSafetyCoverWithOptions(request, runtime);
  }

  /**
   * Get SOW List
   * 
   * @param request - GetSowListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSowListResponse
   */
  async getSowListWithOptions(request: GetSowListRequest, runtime: $dara.RuntimeOptions): Promise<GetSowListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSowList",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSowListResponse>(await this.callApi(params, req, runtime), new GetSowListResponse({}));
  }

  /**
   * Get SOW List
   * 
   * @param request - GetSowListRequest
   * @returns GetSowListResponse
   */
  async getSowList(request: GetSowListRequest): Promise<GetSowListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSowListWithOptions(request, runtime);
  }

  /**
   * Alarm Disposal Query
   * 
   * @param request - GetSuspEventPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuspEventPageResponse
   */
  async getSuspEventPageWithOptions(request: GetSuspEventPageRequest, runtime: $dara.RuntimeOptions): Promise<GetSuspEventPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmEndTime)) {
      body["AlarmEndTime"] = request.alarmEndTime;
    }

    if (!$dara.isNull(request.alarmStartTime)) {
      body["AlarmStartTime"] = request.alarmStartTime;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSuspEventPage",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSuspEventPageResponse>(await this.callApi(params, req, runtime), new GetSuspEventPageResponse({}));
  }

  /**
   * Alarm Disposal Query
   * 
   * @param request - GetSuspEventPageRequest
   * @returns GetSuspEventPageResponse
   */
  async getSuspEventPage(request: GetSuspEventPageRequest): Promise<GetSuspEventPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSuspEventPageWithOptions(request, runtime);
  }

  /**
   * Get Alert Statistics
   * 
   * @param request - GetSuspEventSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuspEventSummaryResponse
   */
  async getSuspEventSummaryWithOptions(request: GetSuspEventSummaryRequest, runtime: $dara.RuntimeOptions): Promise<GetSuspEventSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSuspEventSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSuspEventSummaryResponse>(await this.callApi(params, req, runtime), new GetSuspEventSummaryResponse({}));
  }

  /**
   * Get Alert Statistics
   * 
   * @param request - GetSuspEventSummaryRequest
   * @returns GetSuspEventSummaryResponse
   */
  async getSuspEventSummary(request: GetSuspEventSummaryRequest): Promise<GetSuspEventSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSuspEventSummaryWithOptions(request, runtime);
  }

  /**
   * Alarm Page Statistics
   * 
   * @param request - GetSuspPageSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuspPageSummaryResponse
   */
  async getSuspPageSummaryWithOptions(runtime: $dara.RuntimeOptions): Promise<GetSuspPageSummaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetSuspPageSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSuspPageSummaryResponse>(await this.callApi(params, req, runtime), new GetSuspPageSummaryResponse({}));
  }

  /**
   * Alarm Page Statistics
   * @returns GetSuspPageSummaryResponse
   */
  async getSuspPageSummary(): Promise<GetSuspPageSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSuspPageSummaryWithOptions(runtime);
  }

  /**
   * Query User Activation Status
   * 
   * @param request - GetUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserStatusResponse
   */
  async getUserStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<GetUserStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetUserStatus",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetUserStatusResponse>(await this.callApi(params, req, runtime), new GetUserStatusResponse({}));
  }

  /**
   * Query User Activation Status
   * @returns GetUserStatusResponse
   */
  async getUserStatus(): Promise<GetUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserStatusWithOptions(runtime);
  }

  /**
   * Risk Query
   * 
   * @param request - GetVulItemPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulItemPageResponse
   */
  async getVulItemPageWithOptions(request: GetVulItemPageRequest, runtime: $dara.RuntimeOptions): Promise<GetVulItemPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasName)) {
      body["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealed)) {
      body["Dealed"] = request.dealed;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scanType)) {
      body["ScanType"] = request.scanType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVulItemPage",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetVulItemPageResponse>(await this.callApi(params, req, runtime), new GetVulItemPageResponse({}));
  }

  /**
   * Risk Query
   * 
   * @param request - GetVulItemPageRequest
   * @returns GetVulItemPageResponse
   */
  async getVulItemPage(request: GetVulItemPageRequest): Promise<GetVulItemPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVulItemPageWithOptions(request, runtime);
  }

  /**
   * Query processed details
   * 
   * @param request - GetVulListByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulListByIdResponse
   */
  async getVulListByIdWithOptions(request: GetVulListByIdRequest, runtime: $dara.RuntimeOptions): Promise<GetVulListByIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealed)) {
      body["Dealed"] = request.dealed;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.necessity)) {
      body["Necessity"] = request.necessity;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.uuids)) {
      body["Uuids"] = request.uuids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVulListById",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetVulListByIdResponse>(await this.callApi(params, req, runtime), new GetVulListByIdResponse({}));
  }

  /**
   * Query processed details
   * 
   * @param request - GetVulListByIdRequest
   * @returns GetVulListByIdResponse
   */
  async getVulListById(request: GetVulListByIdRequest): Promise<GetVulListByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVulListByIdWithOptions(request, runtime);
  }

  /**
   * Risk Page Statistics
   * 
   * @param request - GetVulPageSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulPageSummaryResponse
   */
  async getVulPageSummaryWithOptions(runtime: $dara.RuntimeOptions): Promise<GetVulPageSummaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetVulPageSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetVulPageSummaryResponse>(await this.callApi(params, req, runtime), new GetVulPageSummaryResponse({}));
  }

  /**
   * Risk Page Statistics
   * @returns GetVulPageSummaryResponse
   */
  async getVulPageSummary(): Promise<GetVulPageSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVulPageSummaryWithOptions(runtime);
  }

  /**
   * Get Risk Statistics
   * 
   * @param request - GetVulSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulSummaryResponse
   */
  async getVulSummaryWithOptions(request: GetVulSummaryRequest, runtime: $dara.RuntimeOptions): Promise<GetVulSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVulSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetVulSummaryResponse>(await this.callApi(params, req, runtime), new GetVulSummaryResponse({}));
  }

  /**
   * Get Risk Statistics
   * 
   * @param request - GetVulSummaryRequest
   * @returns GetVulSummaryResponse
   */
  async getVulSummary(request: GetVulSummaryRequest): Promise<GetVulSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVulSummaryWithOptions(request, runtime);
  }

  /**
   * Get the First Line Work Order Statistics
   * 
   * @param request - GetWorkTaskSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkTaskSummaryResponse
   */
  async getWorkTaskSummaryWithOptions(request: GetWorkTaskSummaryRequest, runtime: $dara.RuntimeOptions): Promise<GetWorkTaskSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkTaskSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetWorkTaskSummaryResponse>(await this.callApi(params, req, runtime), new GetWorkTaskSummaryResponse({}));
  }

  /**
   * Get the First Line Work Order Statistics
   * 
   * @param request - GetWorkTaskSummaryRequest
   * @returns GetWorkTaskSummaryResponse
   */
  async getWorkTaskSummary(request: GetWorkTaskSummaryRequest): Promise<GetWorkTaskSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkTaskSummaryWithOptions(request, runtime);
  }

  /**
   * Service Customer Information Query
   * 
   * @param request - PageServiceCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageServiceCustomerResponse
   */
  async pageServiceCustomerWithOptions(request: PageServiceCustomerRequest, runtime: $dara.RuntimeOptions): Promise<PageServiceCustomerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authStatus)) {
      body["AuthStatus"] = request.authStatus;
    }

    if (!$dara.isNull(request.cmAuthStatus)) {
      body["CmAuthStatus"] = request.cmAuthStatus;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.monitorAuthStatus)) {
      body["MonitorAuthStatus"] = request.monitorAuthStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageServiceCustomer",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<PageServiceCustomerResponse>(await this.callApi(params, req, runtime), new PageServiceCustomerResponse({}));
  }

  /**
   * Service Customer Information Query
   * 
   * @param request - PageServiceCustomerRequest
   * @returns PageServiceCustomerResponse
   */
  async pageServiceCustomer(request: PageServiceCustomerRequest): Promise<PageServiceCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageServiceCustomerWithOptions(request, runtime);
  }

  /**
   * Send Custom Alert Event
   * 
   * @param request - SendCustomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCustomEventResponse
   */
  async sendCustomEventWithOptions(request: SendCustomEventRequest, runtime: $dara.RuntimeOptions): Promise<SendCustomEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["DataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.eventDescription)) {
      body["EventDescription"] = request.eventDescription;
    }

    if (!$dara.isNull(request.eventDetails)) {
      body["EventDetails"] = request.eventDetails;
    }

    if (!$dara.isNull(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.eventType)) {
      body["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.findTime)) {
      body["FindTime"] = request.findTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isSend)) {
      body["IsSend"] = request.isSend;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.occurrenceTime)) {
      body["OccurrenceTime"] = request.occurrenceTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.product)) {
      body["Product"] = request.product;
    }

    if (!$dara.isNull(request.uniqueId)) {
      body["UniqueId"] = request.uniqueId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendCustomEvent",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendCustomEventResponse>(await this.callApi(params, req, runtime), new SendCustomEventResponse({}));
  }

  /**
   * Send Custom Alert Event
   * 
   * @param request - SendCustomEventRequest
   * @returns SendCustomEventResponse
   */
  async sendCustomEvent(request: SendCustomEventRequest): Promise<SendCustomEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCustomEventWithOptions(request, runtime);
  }

}
