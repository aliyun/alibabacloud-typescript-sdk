// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectClientEventResponseBodyEventList extends $dara.Model {
  /**
   * @example
   * 1
   */
  alertLevel?: number;
  /**
   * @example
   * ["touch","/test/aaaa"]
   */
  cmdLine?: string;
  /**
   * @example
   * 3
   */
  count?: number;
  /**
   * @example
   * /data/*
   */
  filePath?: string;
  /**
   * @example
   * 1694576692000
   */
  firstTime?: number;
  /**
   * @example
   * 1694576692000
   */
  handleTime?: number;
  /**
   * @example
   * 3719
   */
  id?: number;
  /**
   * @example
   * kyy-admin-01
   */
  instanceName?: string;
  /**
   * @example
   * 121.40.XX.XX
   */
  internetIp?: string;
  /**
   * @example
   * 172.22.XX.XX
   */
  intranetIp?: string;
  /**
   * @example
   * 1694576692000
   */
  latestTime?: number;
  /**
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @example
   * linux
   */
  platform?: string;
  /**
   * @example
   * c:/*Unity*
   */
  procPath?: string;
  /**
   * @example
   * rwxr-xr-x
   */
  procPermission?: string;
  /**
   * @example
   * 52636
   */
  processId?: string;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @example
   * block
   */
  ruleAction?: string;
  /**
   * @example
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
  eventList?: ListFileProtectClientEventResponseBodyEventList[];
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

