// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanMachineEventResponseBodyDataVirusScanLatestTaskStatistic extends $dara.Model {
  completeMachine?: number;
  machineName?: string;
  progress?: string;
  riskLevel?: string;
  safeMachine?: number;
  scanMachine?: number;
  scanPath?: string[];
  scanTime?: number;
  scanType?: string;
  status?: number;
  suspiciousCount?: number;
  suspiciousMachine?: number;
  taskId?: string;
  unCompleteMachine?: number;
  static names(): { [key: string]: string } {
    return {
      completeMachine: 'CompleteMachine',
      machineName: 'MachineName',
      progress: 'Progress',
      riskLevel: 'RiskLevel',
      safeMachine: 'SafeMachine',
      scanMachine: 'ScanMachine',
      scanPath: 'ScanPath',
      scanTime: 'ScanTime',
      scanType: 'ScanType',
      status: 'Status',
      suspiciousCount: 'SuspiciousCount',
      suspiciousMachine: 'SuspiciousMachine',
      taskId: 'TaskId',
      unCompleteMachine: 'UnCompleteMachine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeMachine: 'number',
      machineName: 'string',
      progress: 'string',
      riskLevel: 'string',
      safeMachine: 'number',
      scanMachine: 'number',
      scanPath: { 'type': 'array', 'itemType': 'string' },
      scanTime: 'number',
      scanType: 'string',
      status: 'number',
      suspiciousCount: 'number',
      suspiciousMachine: 'number',
      taskId: 'string',
      unCompleteMachine: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scanPath)) {
      $dara.Model.validateArray(this.scanPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListDataDetails extends $dara.Model {
  infoType?: string;
  nameDisplay?: string;
  type?: string;
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      infoType: 'InfoType',
      nameDisplay: 'NameDisplay',
      type: 'Type',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoType: 'string',
      nameDisplay: 'string',
      type: 'string',
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

export class ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListData extends $dara.Model {
  details?: ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListDataDetails[];
  eventId?: number;
  eventName?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  lastTimeStamp?: number;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      eventId: 'EventId',
      eventName: 'EventName',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTimeStamp: 'LastTimeStamp',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListDataDetails },
      eventId: 'number',
      eventName: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTimeStamp: 'number',
      level: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListPageInfo extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
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

export class ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventList extends $dara.Model {
  data?: ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListData[];
  pageInfo?: ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListPageInfo;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListData },
      pageInfo: ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListPageInfo,
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

export class ListVirusScanMachineEventResponseBodyData extends $dara.Model {
  requestId?: string;
  virusScanLatestTaskStatistic?: ListVirusScanMachineEventResponseBodyDataVirusScanLatestTaskStatistic;
  virusScanMachineEventList?: ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virusScanLatestTaskStatistic: 'VirusScanLatestTaskStatistic',
      virusScanMachineEventList: 'VirusScanMachineEventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virusScanLatestTaskStatistic: ListVirusScanMachineEventResponseBodyDataVirusScanLatestTaskStatistic,
      virusScanMachineEventList: ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventList,
    };
  }

  validate() {
    if(this.virusScanLatestTaskStatistic && typeof (this.virusScanLatestTaskStatistic as any).validate === 'function') {
      (this.virusScanLatestTaskStatistic as any).validate();
    }
    if(this.virusScanMachineEventList && typeof (this.virusScanMachineEventList as any).validate === 'function') {
      (this.virusScanMachineEventList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanMachineEventResponseBody extends $dara.Model {
  code?: string;
  data?: ListVirusScanMachineEventResponseBodyData;
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
      data: ListVirusScanMachineEventResponseBodyData,
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

