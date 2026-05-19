// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectClientEventResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @example
   * ["touch","/usr/local/aaaa"]
   */
  cmdLine?: string;
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * /usr/local
   */
  filePath?: string;
  /**
   * @example
   * rwxr-xr-x
   */
  filePermission?: string;
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
   * 3454
   */
  id?: number;
  /**
   * @example
   * i-wz92q7m5hsbgfhdss***
   */
  instanceName?: string;
  /**
   * @example
   * 17.16.XX.XX
   */
  internetIp?: string;
  /**
   * @example
   * 10.42.XX.XX
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
   * /bin/bash33
   */
  procPath?: string;
  /**
   * @example
   * 3453
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
   * test-000
   */
  ruleName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 12
   */
  userId?: string;
  /**
   * @example
   * root
   */
  userName?: string;
  /**
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

