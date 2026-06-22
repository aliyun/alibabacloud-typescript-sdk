// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientUserDefineRuleResponseBodyUserDefineRuleDetail extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - **0**: added to the whitelist
   * - **1**: added to the blacklist.
   * 
   * @example
   * 0
   */
  actionType?: string;
  /**
   * @remarks
   * The command line.
   * 
   * @example
   * /usr/sbin/s****
   */
  cmdline?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /etc/pam****
   */
  filePath?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 167118088****
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The most recent modification time.
   * 
   * @example
   * 167118088****
   */
  gmtModified?: number;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 10.240.XX.XX
   */
  IP?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 200****
   */
  id?: number;
  /**
   * @remarks
   * The list of process hashes.
   * 
   * @example
   * 0c9045b5bec90f9825f1f3f64dd4****
   */
  md5List?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * 规则****
   */
  name?: string;
  /**
   * @remarks
   * The new file path after the file is renamed.
   * 
   * @example
   * /etc/pam****
   */
  newFilePath?: string;
  /**
   * @remarks
   * The parent command line.
   * 
   * @example
   * /usr/sbin/s****
   */
  parentCmdline?: string;
  /**
   * @remarks
   * The parent process path.
   * 
   * @example
   * c:/windows/system32/i****
   */
  parentProcPath?: string;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - **linux**
   * - **windows**
   * - **all**.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The port number. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  portStr?: string;
  /**
   * @remarks
   * The process path.
   * 
   * @example
   * c:/windows/system32/i****
   */
  procPath?: string;
  /**
   * @remarks
   * The registry value.
   * 
   * @example
   * *SECOH-QAD.exe*
   */
  registryContent?: string;
  /**
   * @remarks
   * The registry key.
   * 
   * @example
   * HKEY_DYN_****
   */
  registryKey?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * - **1**: process hash
   * - **2**: command line
   * - **3**: process network
   * - **4**: file read/write
   * - **5**: registry operation
   * - **6**: dynamic-link library loading
   * - **7**: file rename.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      cmdline: 'Cmdline',
      domain: 'Domain',
      filePath: 'FilePath',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      IP: 'IP',
      id: 'Id',
      md5List: 'Md5List',
      name: 'Name',
      newFilePath: 'NewFilePath',
      parentCmdline: 'ParentCmdline',
      parentProcPath: 'ParentProcPath',
      platform: 'Platform',
      port: 'Port',
      portStr: 'PortStr',
      procPath: 'ProcPath',
      registryContent: 'RegistryContent',
      registryKey: 'RegistryKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      cmdline: 'string',
      domain: 'string',
      filePath: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      IP: 'string',
      id: 'number',
      md5List: 'string',
      name: 'string',
      newFilePath: 'string',
      parentCmdline: 'string',
      parentProcPath: 'string',
      platform: 'string',
      port: 'number',
      portStr: 'string',
      procPath: 'string',
      registryContent: 'string',
      registryKey: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserDefineRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF4****
   */
  requestId?: string;
  /**
   * @remarks
   * The rule details.
   */
  userDefineRuleDetail?: GetClientUserDefineRuleResponseBodyUserDefineRuleDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userDefineRuleDetail: 'UserDefineRuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userDefineRuleDetail: GetClientUserDefineRuleResponseBodyUserDefineRuleDetail,
    };
  }

  validate() {
    if(this.userDefineRuleDetail && typeof (this.userDefineRuleDetail as any).validate === 'function') {
      (this.userDefineRuleDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

