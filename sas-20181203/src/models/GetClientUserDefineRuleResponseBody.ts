// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientUserDefineRuleResponseBodyUserDefineRuleDetail extends $dara.Model {
  /**
   * @remarks
   * The action of the custom defense rule. Valid values:
   * 
   * *   **0**: allow
   * *   **1**: block
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
   * The time when the custom defense rule was created.
   * 
   * @example
   * 167118088****
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the custom defense rule was last modified.
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
   * The ID of the custom defense rule.
   * 
   * @example
   * 200****
   */
  id?: number;
  /**
   * @remarks
   * The hash values of processes.
   * 
   * @example
   * 0c9045b5bec90f9825f1f3f64dd4****
   */
  md5List?: string;
  /**
   * @remarks
   * The name of the custom defense rule.
   * 
   * @example
   * Rule\\*\\*\\*\\*
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
   * The path to the parent process.
   * 
   * @example
   * c:/windows/system32/i****
   */
  parentProcPath?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **linux**
   * *   **windows**
   * *   **all**
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
   * The path to the process.
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
   * The type of the custom defense rule. Valid values:
   * 
   * *   **1**: Process hash
   * *   **2**: Command line
   * *   **3**: Process Network
   * *   **4**: File Read and Write
   * *   **5**: Operation on Registry
   * *   **6**: Dynamic-link Library Loading
   * *   **7**: File Renaming
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
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF4****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the custom defense rule.
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

