// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectEventResponseBodyEventList extends $dara.Model {
  /**
   * @remarks
   * The alert notification level. Valid values:
   * 
   * - 0: no alert
   * 
   * - 1: reminder
   * 
   * - 2: suspicious
   * 
   * - 3: high-risk.
   * 
   * @example
   * 1
   */
  alertLevel?: number;
  /**
   * @remarks
   * The command line of the event.
   * 
   * @example
   * ["touch","/test/aaaa"]
   */
  cmdLine?: string;
  /**
   * @remarks
   * The file path on which the process operates.
   * 
   * @example
   * /etc/pam.d/su
   */
  filePath?: string;
  /**
   * @remarks
   * The time when the event was handled.
   * 
   * @example
   * 1694576692000
   */
  handleTime?: number;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 161757
   */
  id?: number;
  /**
   * @remarks
   * The name of the server instance.
   * 
   * @example
   * kyy-admin-01
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 121.40.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset.
   * 
   * @example
   * 172.22.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The most recent time when the event occurred.
   * 
   * @example
   * 1694576692000
   */
  latestTime?: number;
  /**
   * @remarks
   * The operation performed by the process on the file.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - **windows**: Windows
   * - **linux**: Linux.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The process path.
   * 
   * @example
   * /usr/bin/sshpass
   */
  procPath?: string;
  /**
   * @remarks
   * The process permission.
   * 
   * @example
   * rwxr-xr-x
   */
  procPermission?: string;
  /**
   * @remarks
   * The process ID of the event.
   * 
   * @example
   * 52636
   */
  processId?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * - 0: Unhandled. 
   * - 1: Manually handled.
   * - 2: Whitelisted.
   * - 3: Ignored.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server associated with the process.
   * 
   * @example
   * 94b44720-d982-4d20-a4e1-80a1a57b****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      cmdLine: 'CmdLine',
      filePath: 'FilePath',
      handleTime: 'HandleTime',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      latestTime: 'LatestTime',
      operation: 'Operation',
      platform: 'Platform',
      procPath: 'ProcPath',
      procPermission: 'ProcPermission',
      processId: 'ProcessId',
      remark: 'Remark',
      ruleName: 'RuleName',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'number',
      cmdLine: 'string',
      filePath: 'string',
      handleTime: 'number',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      latestTime: 'number',
      operation: 'string',
      platform: 'string',
      procPath: 'string',
      procPermission: 'string',
      processId: 'string',
      remark: 'string',
      ruleName: 'string',
      status: 'number',
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

export class ListFileProtectEventResponseBodyPageInfo extends $dara.Model {
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
   * The maximum number of entries returned per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 149
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

export class ListFileProtectEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of events.
   */
  eventList?: ListFileProtectEventResponseBodyEventList[];
  /**
   * @remarks
   * The pagination information of the query result.
   */
  pageInfo?: ListFileProtectEventResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 23AD0BD2-8771-5647-819E-6BA51E212F80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': ListFileProtectEventResponseBodyEventList },
      pageInfo: ListFileProtectEventResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
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

