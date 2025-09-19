// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockFileEventsResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The number of attempts.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The timestamp at which the event on web tamper proofing was first detected.
   * 
   * @example
   * 1657178400000
   */
  ds?: number;
  /**
   * @remarks
   * The name of the event on web tamper proofing.
   * 
   * @example
   * modify
   */
  eventName?: string;
  /**
   * @remarks
   * The status of the event on web tamper proofing. Valid values:
   * 
   * *   **1**: unhandled
   * *   **2**: ignored
   * *   **4**: deprecated
   * *   **8**: marked as false positive
   * *   **10**: added to the whitelist
   * *   **16**: handling
   * *   **32**: defended
   * *   **64**: invalid
   * *   **128**: deleted
   * *   **512**: automatically handled
   * 
   * @example
   * 1
   */
  eventStatus?: string;
  /**
   * @remarks
   * The prevention mode. Valid values:
   * 
   * *   **audit**: Interception Mode
   * *   **web_lock**: Alert Mode
   * 
   * @example
   * audit
   */
  eventType?: string;
  /**
   * @remarks
   * The timestamp at which the event on web tamper proofing was last detected.
   * 
   * @example
   * 1657178400000
   */
  gmtEvent?: number;
  /**
   * @remarks
   * The ID of the event on web tamper proofing.
   * 
   * @example
   * 3555953980
   */
  id?: number;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * sql-test-001
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the affected asset.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 8.210.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The severity of the event on web tamper proofing. Valid values: **medium**
   * 
   * @example
   * medium
   */
  level?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * D:\\test-tamper-proofing\\123.html
   */
  path?: string;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * python3.7
   */
  processName?: string;
  /**
   * @remarks
   * The path to the process.
   * 
   * @example
   * C:\\Windows\\explorer.exe
   */
  processPath?: string;
  /**
   * @remarks
   * The status of the event on web tamper proofing. Valid values:
   * 
   * *   **1**: unhandled
   * *   **2**: ignored
   * *   **4**: deprecated
   * *   **8**: marked as false positive
   * *   **10**: added to the whitelist
   * *   **16**: handling
   * *   **32**: defended
   * *   **64**: invalid
   * *   **128**: deleted
   * *   **512**: automatically handled
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ds: 'Ds',
      eventName: 'EventName',
      eventStatus: 'EventStatus',
      eventType: 'EventType',
      gmtEvent: 'GmtEvent',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      level: 'Level',
      path: 'Path',
      processName: 'ProcessName',
      processPath: 'ProcessPath',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ds: 'number',
      eventName: 'string',
      eventStatus: 'string',
      eventType: 'string',
      gmtEvent: 'number',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      level: 'string',
      path: 'string',
      processName: 'string',
      processPath: 'string',
      status: 'string',
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

export class DescribeWebLockFileEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of events on web tamper proofing returned.
   */
  list?: DescribeWebLockFileEventsResponseBodyList[];
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
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925FDAA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of events on web tamper proofing returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': DescribeWebLockFileEventsResponseBodyList },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

