// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsResponseBodyDataBodySuspEventsDetails extends $dara.Model {
  /**
   * @example
   * login with unusual location
   */
  nameDisplay?: string;
  /**
   * @example
   * text
   */
  type?: string;
  /**
   * @example
   * /etc/crontab
   */
  value?: string;
  /**
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

export class DescribeSuspEventsResponseBodyDataBodySuspEventsEventNotes extends $dara.Model {
  /**
   * @example
   * test
   */
  note?: string;
  /**
   * @example
   * 2859481
   */
  noteId?: number;
  /**
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

export class DescribeSuspEventsResponseBodyDataBodySuspEventsTacticItems extends $dara.Model {
  /**
   * @example
   * Malicious scripts-Malicious script code execution
   */
  tacticDisplayName?: string;
  /**
   * @example
   * TA0042
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

export class DescribeSuspEventsResponseBodyDataBodySuspEvents extends $dara.Model {
  /**
   * @example
   * true
   */
  advanced?: boolean;
  /**
   * @example
   * 反弹shell_拦截
   */
  alarmEventName?: string;
  /**
   * @example
   * Login with unusual location
   */
  alarmEventNameDisplay?: string;
  /**
   * @example
   * Unusual Logon
   */
  alarmEventType?: string;
  /**
   * @example
   * Unusual Logon
   */
  alarmEventTypeDisplay?: string;
  /**
   * @example
   * 8df914418f****
   */
  alarmUniqueInfo?: string;
  /**
   * @example
   * dfield-cloud-service-prod
   */
  appName?: string;
  /**
   * @example
   * true
   */
  autoBreaking?: boolean;
  /**
   * @example
   * true
   */
  canBeDealOnLine?: boolean;
  /**
   * @example
   * true
   */
  canCancelFault?: boolean;
  /**
   * @example
   * c8c87dae64c9947269091f36cfa9adc87
   */
  clusterId?: string;
  /**
   * @example
   * false
   */
  containHwMode?: boolean;
  /**
   * @example
   * 95878ef8779fae3dd82126812edd910402fc550a72f9bce87e56a4435d018384
   */
  containerId?: string;
  /**
   * @example
   * sha256:2e5a3b0ae5f452b3cb458789a9a7542ef40035a84318469a8528c5e444db1****
   */
  containerImageId?: string;
  /**
   * @example
   * centos7_apache:v1.0.1
   */
  containerImageName?: string;
  /**
   * @example
   * URL
   */
  dataSource?: string;
  /**
   * @example
   * webshell
   */
  desc?: string;
  details?: DescribeSuspEventsResponseBodyDataBodySuspEventsDetails[];
  /**
   * @example
   * -
   */
  detectSource?: string;
  /**
   * @example
   * true
   */
  displaySandboxResult?: boolean;
  eventNotes?: DescribeSuspEventsResponseBodyDataBodySuspEventsEventNotes[];
  /**
   * @example
   * 1
   */
  eventStatus?: number;
  /**
   * @example
   * login_common_location
   */
  eventSubType?: string;
  /**
   * @example
   * true
   */
  hasTraceInfo?: boolean;
  /**
   * @example
   * 3178
   */
  id?: number;
  /**
   * @example
   * ccdab289-9765-47ef-af50-ba6be09aacd6
   */
  imageUuid?: string;
  /**
   * @example
   * i-9dp6dwsxdl9z5u1e2f****
   */
  instanceId?: string;
  /**
   * @example
   * nginx
   */
  instanceName?: string;
  /**
   * @example
   * 8.137.3*.6
   */
  internetIp?: string;
  /**
   * @example
   * 10.36.*6.149
   */
  intranetIp?: string;
  /**
   * @example
   * ce3c41ed427794a7bb3d9da4554fc8039
   */
  k8sClusterId?: string;
  /**
   * @example
   * testName
   */
  k8sClusterName?: string;
  /**
   * @example
   * default
   */
  k8sNamespace?: string;
  /**
   * @example
   * i-bp14a1ay8e0aa9t0****
   */
  k8sNodeId?: string;
  /**
   * @example
   * N/A
   */
  k8sNodeName?: string;
  /**
   * @example
   * myapp-pod
   */
  k8sPodName?: string;
  /**
   * @example
   * true
   */
  largeModel?: boolean;
  /**
   * @example
   * 2018-09-26 01:51:01
   */
  lastTime?: string;
  /**
   * @example
   * 1631699497000
   */
  lastTimeStamp?: number;
  /**
   * @example
   * remind
   */
  level?: string;
  /**
   * @example
   * open
   */
  maliciousRuleStatus?: string;
  markList?: string[];
  /**
   * @example
   * <strong>1.</strong>&nbsp&nbsppath&nbsp&nbspcontain&nbsp&nbsp232&nbsp&nbsp
   */
  markMisRules?: string;
  /**
   * @example
   * Unusual Logon-Login with unusual location
   */
  name?: string;
  /**
   * @example
   * 2018-09-26 01:51:01
   */
  occurrenceTime?: string;
  /**
   * @example
   * 1631699497000
   */
  occurrenceTimeStamp?: number;
  /**
   * @example
   * kill_and_quara.Success
   */
  operateErrorCode?: string;
  /**
   * @example
   * success
   */
  operateMsg?: string;
  /**
   * @example
   * 1631699497000
   */
  operateTime?: number;
  /**
   * @example
   * 1
   */
  saleVersion?: string;
  /**
   * @example
   * 628978308
   */
  securityEventIds?: string;
  /**
   * @example
   * 124075**67406
   */
  sourceAliUid?: number;
  /**
   * @example
   * "["authority_maintenance"]"
   */
  stages?: string;
  /**
   * @example
   * AI.false_positive
   */
  supportOperateCode?: string;
  tacticItems?: DescribeSuspEventsResponseBodyDataBodySuspEventsTacticItems[];
  /**
   * @example
   * 1dfbdf56c5343b63c4854d08ec20e067
   */
  uniqueInfo?: string;
  /**
   * @example
   * 9A75F21D3993C0A2B094A4AB132890B2
   */
  uuid?: string;
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
      clusterId: 'ClusterId',
      containHwMode: 'ContainHwMode',
      containerId: 'ContainerId',
      containerImageId: 'ContainerImageId',
      containerImageName: 'ContainerImageName',
      dataSource: 'DataSource',
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
      clusterId: 'string',
      containHwMode: 'boolean',
      containerId: 'string',
      containerImageId: 'string',
      containerImageName: 'string',
      dataSource: 'string',
      desc: 'string',
      details: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodyDataBodySuspEventsDetails },
      detectSource: 'string',
      displaySandboxResult: 'boolean',
      eventNotes: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodyDataBodySuspEventsEventNotes },
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
      tacticItems: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodyDataBodySuspEventsTacticItems },
      uniqueInfo: 'string',
      uuid: 'string',
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

export class DescribeSuspEventsResponseBodyDataBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * AD2345D1-A498-58AF-97C0-88940AF87CB7
   */
  requestId?: string;
  suspEvents?: DescribeSuspEventsResponseBodyDataBodySuspEvents[];
  /**
   * @example
   * 72
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
      suspEvents: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodyDataBodySuspEvents },
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

export class DescribeSuspEventsResponseBodyData extends $dara.Model {
  body?: DescribeSuspEventsResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DescribeSuspEventsResponseBodyDataBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeSuspEventsResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 67BD8435-6624-5484-A75D-170231B51615
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSuspEventsResponseBodyData,
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

