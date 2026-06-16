// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsResponseBodyDataBodySuspEventsDetails extends $dara.Model {
  nameDisplay?: string;
  type?: string;
  value?: string;
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
  note?: string;
  noteId?: number;
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
  tacticDisplayName?: string;
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
  advanced?: boolean;
  alarmEventName?: string;
  alarmEventNameDisplay?: string;
  alarmEventType?: string;
  alarmEventTypeDisplay?: string;
  alarmUniqueInfo?: string;
  appName?: string;
  autoBreaking?: boolean;
  canBeDealOnLine?: boolean;
  canCancelFault?: boolean;
  clusterId?: string;
  containHwMode?: boolean;
  containerId?: string;
  containerImageId?: string;
  containerImageName?: string;
  dataSource?: string;
  desc?: string;
  details?: DescribeSuspEventsResponseBodyDataBodySuspEventsDetails[];
  detectSource?: string;
  displaySandboxResult?: boolean;
  eventNotes?: DescribeSuspEventsResponseBodyDataBodySuspEventsEventNotes[];
  eventStatus?: number;
  eventSubType?: string;
  hasTraceInfo?: boolean;
  id?: number;
  imageUuid?: string;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  k8sClusterId?: string;
  k8sClusterName?: string;
  k8sNamespace?: string;
  k8sNodeId?: string;
  k8sNodeName?: string;
  k8sPodName?: string;
  largeModel?: boolean;
  lastTime?: string;
  lastTimeStamp?: number;
  level?: string;
  maliciousRuleStatus?: string;
  markList?: string[];
  markMisRules?: string;
  name?: string;
  occurrenceTime?: string;
  occurrenceTimeStamp?: number;
  operateErrorCode?: string;
  operateMsg?: string;
  operateTime?: number;
  saleVersion?: string;
  securityEventIds?: string;
  sourceAliUid?: number;
  stages?: string;
  supportOperateCode?: string;
  tacticItems?: DescribeSuspEventsResponseBodyDataBodySuspEventsTacticItems[];
  uniqueInfo?: string;
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
  count?: number;
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  suspEvents?: DescribeSuspEventsResponseBodyDataBodySuspEvents[];
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
  code?: string;
  data?: DescribeSuspEventsResponseBodyData;
  message?: string;
  requestId?: string;
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

