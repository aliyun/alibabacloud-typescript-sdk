// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanMachineEventResponseBodyDataVirusScanLatestTaskStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of machines that completed scanning.
   * 
   * @example
   * 2
   */
  completeMachine?: number;
  /**
   * @remarks
   * The server machine name.
   * 
   * @example
   * testMahine1
   */
  machineName?: string;
  /**
   * @remarks
   * The percentage of the scan task progress.
   * 
   * @example
   * 92
   */
  progress?: string;
  /**
   * @remarks
   * The highest risk level of the detected alerts. Valid values:
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @remarks
   * The number of machines on which no risks were detected.
   * 
   * @example
   * 1
   */
  safeMachine?: number;
  /**
   * @remarks
   * The number of machines scanned in this virus scan.
   * 
   * @example
   * 1
   */
  scanMachine?: number;
  /**
   * @remarks
   * The file paths specified for scanning when the user-defined scan type is used.
   */
  scanPath?: string[];
  /**
   * @remarks
   * The scan timestamp, in milliseconds.
   * 
   * @example
   * 1681145862000
   */
  scanTime?: number;
  /**
   * @remarks
   * The scan type of this virus scan. Valid values:
   * 
   * @example
   * system
   */
  scanType?: string;
  /**
   * @remarks
   * The status of the scan task.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The number of security alerts detected during the scan.
   * 
   * @example
   * 0
   */
  suspiciousCount?: number;
  /**
   * @remarks
   * The number of machines on which risks were detected.
   * 
   * @example
   * 1
   */
  suspiciousMachine?: number;
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * @example
   * t-0mqu9dhpi365dp5iyf
   */
  taskId?: string;
  /**
   * @remarks
   * The number of machines that did not complete scanning or failed during scanning.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The display type of valueDisplay. Valid values:
   * 
   * @example
   * download_url
   */
  infoType?: string;
  /**
   * @remarks
   * The display name of the alert event.
   * 
   * @example
   * Trojan Path
   */
  nameDisplay?: string;
  /**
   * @remarks
   * The display method of the anomalous event details.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The additional attribute information of the anomalous event, such as the logon time or logon location for abnormal logon alerts, or the trojan file path or trojan type for trojan alerts.
   * 
   * @example
   * getopt
   */
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
  /**
   * @remarks
   * The details of the anomalous event.
   */
  details?: ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListDataDetails[];
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * @example
   * 123-2CcoavZnCXrJKqk2KQKxp9WGwup
   */
  eventId?: number;
  /**
   * @remarks
   * The name (subtype) of the alert event.
   * 
   * @example
   * Malicious script code execution.
   */
  eventName?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * i-wz92q7m5hsbgfhdss***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.57.*1.65
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 47.57.*1.65
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp of the last occurrence, in milliseconds.
   * 
   * @example
   * 1682046733628
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * The risk level of the alert event. Valid values:
   * 
   * @example
   * remind
   */
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
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries displayed per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of alert events returned.
   * 
   * @example
   * 0
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

export class ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventList extends $dara.Model {
  /**
   * @remarks
   * The details of the alert events.
   */
  data?: ListVirusScanMachineEventResponseBodyDataVirusScanMachineEventListData[];
  /**
   * @remarks
   * The pagination information.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E222AB5-5C2B-50AD-8A96-E704AF80F2A0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the latest virus scan task.
   */
  virusScanLatestTaskStatistic?: ListVirusScanMachineEventResponseBodyDataVirusScanLatestTaskStatistic;
  /**
   * @remarks
   * The virus alerts detected on specific machines during virus scanning.
   */
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
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListVirusScanMachineEventResponseBodyData;
  /**
   * @remarks
   * The message information.
   * 
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0AD8096-E7A2-573D-ACF0-7CE9050CDE38
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * True
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

