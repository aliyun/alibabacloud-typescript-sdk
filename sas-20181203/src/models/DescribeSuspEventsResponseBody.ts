// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsResponseBodySuspEventsDetails extends $dara.Model {
  /**
   * @remarks
   * The display name of the alert event.
   * 
   * @example
   * Login with unusual location
   */
  nameDisplay?: string;
  /**
   * @remarks
   * The type of the alert event.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The path of the alert event.
   * 
   * @example
   * /etc/crontab
   */
  value?: string;
  /**
   * @remarks
   * The display name of the path of the alert event.
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
   * The note.
   * 
   * @example
   * Test
   */
  note?: string;
  /**
   * @remarks
   * The ID of the note.
   * 
   * @example
   * 123
   */
  noteId?: number;
  /**
   * @remarks
   * The time when the note was created.
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
   * The tactic name of ATT\\&CK.
   * 
   * @example
   * Malicious scripts-Malicious script code execution
   */
  tacticDisplayName?: string;
  /**
   * @remarks
   * The stage information about ATT\\&CK.
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
   * Indicates whether the alert event was analyzed offline.
   * 
   * @example
   * true
   */
  advanced?: boolean;
  /**
   * @remarks
   * The name of the alert event.
   * 
   * @example
   * login_common_location
   */
  alarmEventName?: string;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Login with unusual location
   */
  alarmEventNameDisplay?: string;
  /**
   * @remarks
   * The type of the alert event.
   * 
   * @example
   * Unusual Logon
   */
  alarmEventType?: string;
  /**
   * @remarks
   * The display name of the type of the alert event.
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
   * The name of the application to which the alert event belongs.
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
   * Indicates whether you can handle the alert event online, such as quarantining the source file of the malicious process. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  canBeDealOnLine?: boolean;
  /**
   * @remarks
   * Indicates whether you can cancel marking the alert event as a false positive. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  canCancelFault?: boolean;
  /**
   * @remarks
   * Indicates whether the safeguard mode for major activities is enabled for the server. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  containHwMode?: boolean;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * container_1648601865161_14925_02_000****
   */
  containerId?: string;
  /**
   * @remarks
   * The ID of the container image.
   * 
   * @example
   * sha256:2e5a3b0ae5f452b3cb458789a9a7542ef40035a84318469a8528c5e444db1****
   */
  containerImageId?: string;
  /**
   * @remarks
   * The name of the container image.
   * 
   * @example
   * centos7_apache:v1.0.1
   */
  containerImageName?: string;
  /**
   * @remarks
   * The source of data. This parameter can be ignored.
   * 
   * @example
   * aegis_suspicious_****
   */
  dataSource?: string;
  /**
   * @remarks
   * The impact of the alert event.
   * 
   * @example
   * webshell
   */
  desc?: string;
  /**
   * @remarks
   * The details of the alert event.
   */
  details?: DescribeSuspEventsResponseBodySuspEventsDetails[];
  /**
   * @remarks
   * Indicates whether the alert event can be detected by cloud sandbox. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  displaySandboxResult?: boolean;
  /**
   * @remarks
   * The note information about the alert event.
   */
  eventNotes?: DescribeSuspEventsResponseBodySuspEventsEventNotes[];
  /**
   * @remarks
   * The status of the alert event. Valid values:
   * 
   * *   **1**: pending handling
   * *   **2**: ignored
   * *   **4**: confirmed
   * *   **8**: marked as a false positive
   * *   **16**: handling
   * *   **32**: handled
   * *   **64**: expired
   * *   **604**: marked as a false positive by the system
   * 
   * @example
   * 1
   */
  eventStatus?: number;
  /**
   * @remarks
   * The subtype of the alert event.
   * 
   * @example
   * login_common_location
   */
  eventSubType?: string;
  /**
   * @remarks
   * Indicates whether the alert event has tracing information. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The UUID of the image.
   * 
   * @example
   * 70489fb520cea585ad9761d5a842****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The instance ID of the affected asset.
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
   * The ID of the Kubernetes cluster.
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
   * k8s-daily
   */
  k8sClusterName?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * default
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The ID of the Kubernetes node.
   * 
   * @example
   * i-bp14a1ay8e0aa9t0****
   */
  k8sNodeId?: string;
  /**
   * @remarks
   * The name of the Kubernetes node.
   * 
   * @example
   * N/A
   */
  k8sNodeName?: string;
  /**
   * @remarks
   * The name of the Kubernetes pod.
   * 
   * @example
   * myapp-pod
   */
  k8sPodName?: string;
  /**
   * @remarks
   * Indicates whether the large model analysis tag is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  largeModel?: boolean;
  /**
   * @remarks
   * The time when the alert event was last detected.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  lastTime?: string;
  /**
   * @remarks
   * The timestamp when the alert event was last detected. Unit: milliseconds.
   * 
   * @example
   * 1631699497000
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * The severity of the alert event. Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The status of the malicious behavior defense rule. Valid values:
   * 
   * *   **open**
   * *   **close**
   * 
   * @example
   * open
   */
  maliciousRuleStatus?: string;
  /**
   * @remarks
   * The tags of the alert events.
   */
  markList?: string[];
  /**
   * @remarks
   * The advanced whitelist rule.
   * 
   * @example
   * [{\\"uuid\\":\\"ALL\\",\\"field\\":\\"gmtModified\\",\\"operate\\":\\"contains\\",\\"fieldValue\\":\\"222\\"}]
   */
  markMisRules?: string;
  /**
   * @remarks
   * The complete name of the alert event.
   * 
   * @example
   * Unusual Logon-Login with unusual location
   */
  name?: string;
  /**
   * @remarks
   * The time when the alert event was first detected.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * The timestamp when the alert event was first detected. Unit: milliseconds.
   * 
   * @example
   * 1631699497000
   */
  occurrenceTimeStamp?: number;
  /**
   * @remarks
   * The handling result code of the alert event.
   * 
   * @example
   * kill_and_quara.Success
   */
  operateErrorCode?: string;
  /**
   * @remarks
   * The handing result message of the alert event.
   * 
   * @example
   * success
   */
  operateMsg?: string;
  /**
   * @remarks
   * The handling timestamp of the alert event. Unit: milliseconds.
   * 
   * @example
   * 1631699497000
   */
  operateTime?: number;
  /**
   * @remarks
   * The edition of Security Center in which the alert event can be detected. Valid values:
   * 
   * *   **0**: Basic edition
   * *   **1**: Enterprise edition
   * 
   * @example
   * 1
   */
  saleVersion?: string;
  /**
   * @remarks
   * The ID of the associated alert event.
   * 
   * @example
   * 270789
   */
  securityEventIds?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account within which an alert is generated.
   * 
   * @example
   * 196072141348****
   */
  sourceAliUid?: number;
  /**
   * @remarks
   * The stage at which the attack is detected.
   * 
   * @example
   * "["authority_maintenance"]"
   */
  stages?: string;
  /**
   * @remarks
   * Supported alarm operation types: 
   * - **AI.false_positive**: Suspected false positive 
   * - **AI.real_attack**: Real attack 
   * - **AI.Insufficient_information_to_evaluate**: Insufficient information to evaluate
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
   * The unique key of the alert.
   * 
   * @example
   * e17e****
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The unique ID of the associated instance.
   * 
   * @example
   * bf6b30d3-eea8-4924-9f0a-****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the cluster.
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
      desc: 'Desc',
      details: 'Details',
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
      desc: 'string',
      details: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsDetails },
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0D6E20E4-8326-1D03-A553-2182BE9E82F9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the alert events.
   */
  suspEvents?: DescribeSuspEventsResponseBodySuspEvents[];
  /**
   * @remarks
   * The total number of alert events.
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

