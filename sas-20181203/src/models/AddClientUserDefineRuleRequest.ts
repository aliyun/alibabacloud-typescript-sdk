// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddClientUserDefineRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - **0**: allow
   * - **1**: block
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  actionType?: number;
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
   * The IP address.
   * 
   * @example
   * 10.240.XX.XX
   */
  IP?: string;
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
   * The name of the custom rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Rule1
   */
  name?: string;
  /**
   * @remarks
   * The new file path for file rename.
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
   * - **windows**: Windows
   * - **linux**: Linux
   * - **all**: all
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The port number. This parameter is deprecated.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The port number. Valid values: **1 to 65535**.
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
   * Specifies whether machines are automatically added to the rule. Default value: add. Valid values:
   * 
   * - **add**: Automatically added by default.
   * - **del**: Not automatically added by default.
   * 
   * @example
   * add
   */
  targetDefault?: string;
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
   * - **7**: file rename
   * - **8**: network domain name
   * - **9**: network IP
   * - **10**: file path
   * 
   * This parameter is required.
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
      IP: 'IP',
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
      targetDefault: 'TargetDefault',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      cmdline: 'string',
      domain: 'string',
      filePath: 'string',
      IP: 'string',
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
      targetDefault: 'string',
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

