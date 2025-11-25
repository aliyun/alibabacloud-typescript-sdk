// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The severity of alerts. Valid values:
   * 
   * *   0: does not generate alerts
   * *   1: sends notifications
   * *   2: suspicious
   * *   3: high-risk
   * 
   * @example
   * 1
   */
  alertLevel?: number;
  /**
   * @remarks
   * The event command line.
   * 
   * @example
   * ["touch","/usr/local/aaaa"]
   */
  cmdLine?: string;
  /**
   * @remarks
   * The path to the file.
   * 
   * @example
   * /usr/local
   */
  filePath?: string;
  /**
   * @remarks
   * The permissions to run the process.
   * 
   * @example
   * rwxr-xr-x
   */
  filePermission?: string;
  /**
   * @remarks
   * The timestamp at which the event was first detected.
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
   * The ID of the event.
   * 
   * @example
   * 55037
   */
  id?: number;
  /**
   * @remarks
   * The name of the instance.
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
   * 172.16.XX.XX
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
   * The time when the event last occurred.
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
   * The type of the operating system. Valid values:
   * 
   * *   **windows**: Windows
   * *   **linux**: Linux
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The path to the process.
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
   * ["test"]
   */
  remark?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-000
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: not handled
   * *   1: handled
   * *   2: added to the whitelist
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * User ID of the user who started the current process.
   * 
   * @example
   * 1001
   */
  userId?: string;
  /**
   * @remarks
   * The username that started the current process.
   * 
   * @example
   * test
   */
  userName?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 49f1360f-62c8-4b48-a24c-5cc317656419
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      cmdLine: 'CmdLine',
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

export class GetFileProtectEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the returned data.
   */
  data?: GetFileProtectEventResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
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
      data: GetFileProtectEventResponseBodyData,
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

