// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectClientEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alert notification level. Valid values:
   * 
   * - 0: no alert
   * - 1: reminder
   * - 2: suspicious
   * - 3: high-risk.
   * 
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @remarks
   * The command line of the event.
   * 
   * @example
   * ["touch","/usr/local/aaaa"]
   */
  cmdLine?: string;
  /**
   * @remarks
   * The number of times the alert occurred.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /usr/local
   */
  filePath?: string;
  /**
   * @remarks
   * The process permissions.
   * 
   * @example
   * rwxr-xr-x
   */
  filePermission?: string;
  /**
   * @remarks
   * The timestamp when the event first occurred.
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
   * 3454
   */
  id?: number;
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
   * The public IP address of the associated instance.
   * 
   * @example
   * 17.16.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the associated instance.
   * 
   * @example
   * 10.42.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The time when the event most recently occurred.
   * 
   * @example
   * 1694576692000
   */
  latestTime?: number;
  /**
   * @remarks
   * The operation that the process performed on the file.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The operating system type.
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
   * /bin/bash33
   */
  procPath?: string;
  /**
   * @remarks
   * The process ID of the event.
   * 
   * @example
   * 3453
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
   * The action of the blocking rule.
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
   * test-000
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
   * The user ID of the event.
   * 
   * @example
   * 12
   */
  userId?: string;
  /**
   * @remarks
   * The username of the event.
   * 
   * @example
   * root
   */
  userName?: string;
  /**
   * @remarks
   * The UUID of the asset instance.
   * 
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      cmdLine: 'CmdLine',
      count: 'Count',
      filePath: 'FilePath',
      filePermission: 'FilePermission',
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
      processId: 'ProcessId',
      remark: 'Remark',
      ruleAction: 'RuleAction',
      ruleName: 'RuleName',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'number',
      cmdLine: 'string',
      count: 'number',
      filePath: 'string',
      filePermission: 'string',
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
      processId: 'string',
      remark: 'string',
      ruleAction: 'string',
      ruleName: 'string',
      status: 'number',
      userId: 'string',
      userName: 'string',
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

export class GetFileProtectClientEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data details.
   */
  data?: GetFileProtectClientEventResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1383B0DB-D5D6-4B0C-9E6B-75939C8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileProtectClientEventResponseBodyData,
      requestId: 'string',
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

