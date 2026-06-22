// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClientUserDefineRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - **0**: allow
   * - **1**: block.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
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
   * /etc/pam.d/su****
   */
  filePath?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 1.1.XX.XX
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * >Call the [ListClientUserDefineRules](~~ListClientUserDefineRules~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 210****
   */
  id?: number;
  /**
   * @remarks
   * The list of process hashes.
   * 
   * @example
   * aa5ee3ed4363c9d195a591a70281****,3e522d6f3bf5cf88bb77e9ff3d13****
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
   * The new file path for file rename.
   * 
   * @example
   * /etc/pam****
   */
  newFilePath?: string;
  /**
   * @remarks
   * The parent process command line.
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
   * C:/Windows/System32/cmd****
   */
  parentProcPath?: string;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - **windows**: Windows
   * - **linux**: Linux
   * - **all**: all.
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
   * /root/1111/****
   * 
   * **if can be null:**
   * false
   */
  procPath?: string;
  /**
   * @remarks
   * The registry value.
   * 
   * @example
   * SECOH-QAD****
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
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      cmdline: 'Cmdline',
      domain: 'Domain',
      filePath: 'FilePath',
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
      actionType: 'number',
      cmdline: 'string',
      domain: 'string',
      filePath: 'string',
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

