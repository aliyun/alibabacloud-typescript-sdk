// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClientUserDefineRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The action of the rule. Valid values:
   * 
   * *   **0**: allow
   * *   **1**: block
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
   * The ID of the rule.
   * 
   * >  You can call the [ListClientUserDefineRules](~~ListClientUserDefineRules~~) operation to query the IDs of rules.
   * 
   * This parameter is required.
   * 
   * @example
   * 210****
   */
  id?: number;
  /**
   * @remarks
   * The hash values of processes.
   * 
   * @example
   * aa5ee3ed4363c9d195a591a70281****,3e522d6f3bf5cf88bb77e9ff3d13****
   */
  md5List?: string;
  /**
   * @remarks
   * The name of the rule.
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
   * C:/Windows/System32/cmd****
   */
  parentProcPath?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **windows**: Windows
   * *   **linux**: Linux
   * *   **all**: all types
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
   * The path to the process.
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
   * The type of the rule. Valid values:
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

