// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectClientEventResponseBodyEventList extends $dara.Model {
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
   * The number of times the event occurred.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /data/*
   */
  filePath?: string;
  /**
   * @remarks
   * The timestamp when the event was first detected. Unit: milliseconds.
   * 
   * @example
   * 1694576692000
   */
  firstTime?: number;
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
   * 3719
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
   * The public IP address of the instance.
   * 
   * @example
   * 121.40.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 172.22.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The most recent time the event occurred.
   * 
   * @example
   * 1694576692000
   */
  latestTime?: number;
  /**
   * @remarks
   * The type of operation performed on the file. Valid values:
   * 
   * - **DELETE**: deletes the file.
   * - **WRITE**: writes to the file.
   * - **READ**: reads the file.
   * - **RENAME**: renames the file.
   * - **CHOWN**: changes the file owner and associated group.
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
   * c:/*Unity*
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
   * The rule action. Valid values:
   * 
   * - **block**: Block.
   * 
   * - **monitor**: Monitor.
   * 
   * @example
   * block
   */
  ruleAction?: string;
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
   * - 0: unhandled 
   * - 1: handled
   * - 2: whitelisted.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 94b44720-d982-4d20-a4e1-80a1a57b****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      cmdLine: 'CmdLine',
      count: 'Count',
      filePath: 'FilePath',
      firstTime: 'FirstTime',
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
      ruleAction: 'RuleAction',
      ruleName: 'RuleName',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'number',
      cmdLine: 'string',
      count: 'number',
      filePath: 'string',
      firstTime: 'number',
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
      ruleAction: 'string',
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

export class ListFileProtectClientEventResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page when paging is used in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page when paging is used in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 263
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

export class ListFileProtectClientEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file monitoring events.
   */
  eventList?: ListFileProtectClientEventResponseBodyEventList[];
  /**
   * @remarks
   * The pagination information of the query result.
   */
  pageInfo?: ListFileProtectClientEventResponseBodyPageInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ACF97412-FD09-4D1F-994F-34DF12B****
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
      eventList: { 'type': 'array', 'itemType': ListFileProtectClientEventResponseBodyEventList },
      pageInfo: ListFileProtectClientEventResponseBodyPageInfo,
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

