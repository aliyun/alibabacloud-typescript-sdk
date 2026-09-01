// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsResponseBodySuspEventsDetails extends $dara.Model {
  /**
   * @remarks
   * The display name of the security alert.
   * 
   * @example
   * Login with unusual location
   */
  nameDisplay?: string;
  /**
   * @remarks
   * The alerting event type.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The path where the security alert occurred.
   * 
   * @example
   * /etc/crontab
   */
  value?: string;
  /**
   * @remarks
   * The path where the security alert occurred.
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

export class DescribeSuspEventsResponseBodySuspEventsEventNotes extends $dara.Model {
  /**
   * @remarks
   * The remark information.
   * 
   * @example
   * Test
   */
  note?: string;
  /**
   * @remarks
   * The event record ID.
   * 
   * @example
   * 123
   */
  noteId?: number;
  /**
   * @remarks
   * The event record time.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  noteTime?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      noteId: 'NoteId',
      noteTime: 'NoteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      noteId: 'number',
      noteTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEventsTacticItems extends $dara.Model {
  /**
   * @remarks
   * The ATT&CK tactic name.
   * 
   * @example
   * Malicious scripts-Malicious script code execution
   */
  tacticDisplayName?: string;
  /**
   * @remarks
   * The ATT&CK attack stage information.
   * 
   * @example
   * TA0001
   */
  tacticId?: string;
  static names(): { [key: string]: string } {
    return {
      tacticDisplayName: 'TacticDisplayName',
      tacticId: 'TacticId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tacticDisplayName: 'string',
      tacticId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEvents extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is an offline analysis alert.
   * 
   * @example
   * true
   */
  advanced?: boolean;
  /**
   * @remarks
   * The name of the security alert.
   * 
   * @example
   * login_common_location
   */
  alarmEventName?: string;
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * Login with unusual location
   */
  alarmEventNameDisplay?: string;
  /**
   * @remarks
   * The alerting event type.
   * 
   * @example
   * Unusual Logon
   */
  alarmEventType?: string;
  /**
   * @remarks
   * The alerting event type.
   * 
   * @example
   * Unusual Logon
   */
  alarmEventTypeDisplay?: string;
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * @example
   * 8df914418f****
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The name of the application to which the security alert belongs.
   * 
   * @example
   * pro-deploy-tibasic
   */
  appName?: string;
  /**
   * @remarks
   * Indicates whether automatic defense is enabled.
   * 
   * @example
   * true
   */
  autoBreaking?: boolean;
  /**
   * @remarks
   * Indicates whether the alert event can be handled online, such as quarantine. Valid values:
   * 
   * - **true**: Online handling is supported.
   * - **false**: Online handling is not supported.
   * 
   * @example
   * true
   */
  canBeDealOnLine?: boolean;
  /**
   * @remarks
   * Indicates whether the false positive mark can be unmarked. Valid values:
   * 
   * @example
   * false
   */
  canCancelFault?: boolean;
  /**
   * @remarks
   * Indicates whether critical event protection mode is enabled for the server. Valid values:
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * false
   */
  containHwMode?: boolean;
  /**
   * @remarks
   * The container ID.
   * 
   * @example
   * container_1648601865161_14925_02_000****
   */
  containerId?: string;
  /**
   * @remarks
   * The container image ID.
   * 
   * @example
   * sha256:2e5a3b0ae5f452b3cb458789a9a7542ef40035a84318469a8528c5e444db1****
   */
  containerImageId?: string;
  /**
   * @remarks
   * The container image name.
   * 
   * @example
   * centos7_apache:v1.0.1
   */
  containerImageName?: string;
  /**
   * @remarks
   * The data source. You can ignore this parameter.
   * 
   * @example
   * aegis_suspicious_****
   */
  dataSource?: string;
  /**
   * @remarks
   * The download URL of the file deep analysis report.
   */
  deepAnalyzeReportUrl?: string;
  /**
   * @remarks
   * The description of the impact of the security alert.
   * 
   * @example
   * webshell
   */
  desc?: string;
  /**
   * @remarks
   * The details of the security alert.
   */
  details?: DescribeSuspEventsResponseBodySuspEventsDetails[];
  /**
   * @remarks
   * The discovery source. This parameter is invalid.
   * 
   * @example
   * linux
   */
  detectSource?: string;
  /**
   * @remarks
   * Indicates whether cloud sandbox detection is supported. Valid values:
   * 
   * @example
   * true
   */
  displaySandboxResult?: boolean;
  /**
   * @remarks
   * The remarks of the security alert.
   */
  eventNotes?: DescribeSuspEventsResponseBodySuspEventsEventNotes[];
  /**
   * @remarks
   * The status of the security alert. Valid values:
   * 
   * @example
   * 8
   */
  eventStatus?: number;
  /**
   * @remarks
   * The subtype of the security alert.
   * 
   * @example
   * login_common_location
   */
  eventSubType?: string;
  /**
   * @remarks
   * Indicates whether the security alert has tracing information. Valid values:
   * 
   * @example
   * true
   */
  hasTraceInfo?: boolean;
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * @example
   * 1000
   */
  id?: number;
  /**
   * @remarks
   * The image UUID.
   * 
   * @example
   * 70489fb520cea585ad9761d5a842****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The ID of the asset instance affected by the security alert.
   * 
   * @example
   * i-9dp6dwsxdl9z5u1e2f****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the associated instance.
   * 
   * @example
   * nginx
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the associated instance.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the associated instance.
   * 
   * @example
   * 100.100.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The Kubernetes cluster ID.
   * 
   * @example
   * c517b37e1401e4961b3951863a49a****
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * The name of the Kubernetes cluster.
   * 
   * @example
   * test-daily
   */
  k8sClusterName?: string;
  /**
   * @remarks
   * The Kubernetes namespace.
   * 
   * @example
   * default
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The Kubernetes node ID.
   * 
   * @example
   * i-bp14a1ay8e0aa9t0****
   */
  k8sNodeId?: string;
  /**
   * @remarks
   * The Kubernetes node name.
   * 
   * @example
   * N/A
   */
  k8sNodeName?: string;
  /**
   * @remarks
   * The Kubernetes pod name.
   * 
   * @example
   * myapp-pod
   */
  k8sPodName?: string;
  /**
   * @remarks
   * Indicates whether large model analysis tags are supported. Valid values:
   * 
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  largeModel?: boolean;
  /**
   * @remarks
   * The most recent time when the security alert occurred.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  lastTime?: string;
  /**
   * @remarks
   * The timestamp of the last occurrence, in milliseconds.
   * 
   * @example
   * 1631699497000
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * The risk level of the alert event. Valid values:
   * 
   * - **serious**: critical
   * - **suspicious**: suspicious
   * - **remind**: reminder
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The status of the malicious behavior defense rule. Valid values:
   * 
   * @example
   * open
   */
  maliciousRuleStatus?: string;
  /**
   * @remarks
   * The collection of security alert tags.
   */
  markList?: string[];
  /**
   * @remarks
   * The advanced whitelisting rules.
   * 
   * @example
   * <strong>1.</strong>&nbsp&nbsppath&nbsp&nbspcontain&nbsp&nbsp232&nbsp&nbsp
   */
  markMisRules?: string;
  /**
   * @remarks
   * The full name of the security alert.
   * 
   * @example
   * Unusual Logon-Login with unusual location
   */
  name?: string;
  /**
   * @remarks
   * The time when the security alert first occurred.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * The timestamp of the first occurrence, in milliseconds.
   * 
   * @example
   * 1631699497000
   */
  occurrenceTimeStamp?: number;
  /**
   * @remarks
   * The error code of the security alert operation.
   * 
   * @example
   * kill_and_quara.Success
   */
  operateErrorCode?: string;
  /**
   * @remarks
   * The remarks of the security alert operation.
   * 
   * @example
   * success
   */
  operateMsg?: string;
  /**
   * @remarks
   * The timestamp of the security alert operation, in milliseconds.
   * 
   * @example
   * 1631699497000
   */
  operateTime?: number;
  /**
   * @remarks
   * The product edition that supports the detection of this security alert. Valid values:
   * 
   * @example
   * 1
   */
  saleVersion?: string;
  /**
   * @remarks
   * The IDs of the security alerts associated with this security alert.
   * 
   * @example
   * 270789
   */
  securityEventIds?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that generated the alert.
   * 
   * @example
   * 196072141348****
   */
  sourceAliUid?: number;
  /**
   * @remarks
   * The attack stage.
   * 
   * @example
   * "["authority_maintenance"]"
   */
  stages?: string;
  /**
   * @remarks
   * The operation types supported by the alert. Valid values:
   * - **AI.false_positive**: suspected false positive.
   * - **AI.real_attack**: real attack.
   * - **AI.Insufficient_information_to_evaluate**: unable to determine.
   * 
   * @example
   * AI.real_attack
   */
  supportOperateCode?: string;
  /**
   * @remarks
   * The display name of the attack stage.
   */
  tacticItems?: DescribeSuspEventsResponseBodySuspEventsTacticItems[];
  /**
   * @remarks
   * The unique key of the security alert.
   * 
   * @example
   * e17e****
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The unique identifier of the associated instance.
   * 
   * @example
   * bf6b30d3-eea8-4924-9f0a-****
   */
  uuid?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c2051775877374cccbf68af596e6****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      advanced: 'Advanced',
      alarmEventName: 'AlarmEventName',
      alarmEventNameDisplay: 'AlarmEventNameDisplay',
      alarmEventType: 'AlarmEventType',
      alarmEventTypeDisplay: 'AlarmEventTypeDisplay',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      appName: 'AppName',
      autoBreaking: 'AutoBreaking',
      canBeDealOnLine: 'CanBeDealOnLine',
      canCancelFault: 'CanCancelFault',
      containHwMode: 'ContainHwMode',
      containerId: 'ContainerId',
      containerImageId: 'ContainerImageId',
      containerImageName: 'ContainerImageName',
      dataSource: 'DataSource',
      deepAnalyzeReportUrl: 'DeepAnalyzeReportUrl',
      desc: 'Desc',
      details: 'Details',
      detectSource: 'DetectSource',
      displaySandboxResult: 'DisplaySandboxResult',
      eventNotes: 'EventNotes',
      eventStatus: 'EventStatus',
      eventSubType: 'EventSubType',
      hasTraceInfo: 'HasTraceInfo',
      id: 'Id',
      imageUuid: 'ImageUuid',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      k8sClusterId: 'K8sClusterId',
      k8sClusterName: 'K8sClusterName',
      k8sNamespace: 'K8sNamespace',
      k8sNodeId: 'K8sNodeId',
      k8sNodeName: 'K8sNodeName',
      k8sPodName: 'K8sPodName',
      largeModel: 'LargeModel',
      lastTime: 'LastTime',
      lastTimeStamp: 'LastTimeStamp',
      level: 'Level',
      maliciousRuleStatus: 'MaliciousRuleStatus',
      markList: 'MarkList',
      markMisRules: 'MarkMisRules',
      name: 'Name',
      occurrenceTime: 'OccurrenceTime',
      occurrenceTimeStamp: 'OccurrenceTimeStamp',
      operateErrorCode: 'OperateErrorCode',
      operateMsg: 'OperateMsg',
      operateTime: 'OperateTime',
      saleVersion: 'SaleVersion',
      securityEventIds: 'SecurityEventIds',
      sourceAliUid: 'SourceAliUid',
      stages: 'Stages',
      supportOperateCode: 'SupportOperateCode',
      tacticItems: 'TacticItems',
      uniqueInfo: 'UniqueInfo',
      uuid: 'Uuid',
      clusterId: 'clusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanced: 'boolean',
      alarmEventName: 'string',
      alarmEventNameDisplay: 'string',
      alarmEventType: 'string',
      alarmEventTypeDisplay: 'string',
      alarmUniqueInfo: 'string',
      appName: 'string',
      autoBreaking: 'boolean',
      canBeDealOnLine: 'boolean',
      canCancelFault: 'boolean',
      containHwMode: 'boolean',
      containerId: 'string',
      containerImageId: 'string',
      containerImageName: 'string',
      dataSource: 'string',
      deepAnalyzeReportUrl: 'string',
      desc: 'string',
      details: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsDetails },
      detectSource: 'string',
      displaySandboxResult: 'boolean',
      eventNotes: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsEventNotes },
      eventStatus: 'number',
      eventSubType: 'string',
      hasTraceInfo: 'boolean',
      id: 'number',
      imageUuid: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      k8sClusterId: 'string',
      k8sClusterName: 'string',
      k8sNamespace: 'string',
      k8sNodeId: 'string',
      k8sNodeName: 'string',
      k8sPodName: 'string',
      largeModel: 'boolean',
      lastTime: 'string',
      lastTimeStamp: 'number',
      level: 'string',
      maliciousRuleStatus: 'string',
      markList: { 'type': 'array', 'itemType': 'string' },
      markMisRules: 'string',
      name: 'string',
      occurrenceTime: 'string',
      occurrenceTimeStamp: 'number',
      operateErrorCode: 'string',
      operateMsg: 'string',
      operateTime: 'number',
      saleVersion: 'string',
      securityEventIds: 'string',
      sourceAliUid: 'number',
      stages: 'string',
      supportOperateCode: 'string',
      tacticItems: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsTacticItems },
      uniqueInfo: 'string',
      uuid: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(Array.isArray(this.eventNotes)) {
      $dara.Model.validateArray(this.eventNotes);
    }
    if(Array.isArray(this.markList)) {
      $dara.Model.validateArray(this.markList);
    }
    if(Array.isArray(this.tacticItems)) {
      $dara.Model.validateArray(this.tacticItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page in a paging query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 0D6E20E4-8326-1D03-A553-2182BE9E82F9
   */
  requestId?: string;
  /**
   * @remarks
   * The security alert information.
   */
  suspEvents?: DescribeSuspEventsResponseBodySuspEvents[];
  /**
   * @remarks
   * The total number of security alerts.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      suspEvents: 'SuspEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      suspEvents: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEvents },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.suspEvents)) {
      $dara.Model.validateArray(this.suspEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

