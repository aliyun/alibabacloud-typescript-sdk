// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProhibitedSoftwareRequestLinuxProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes. You must specify at least one of BundleId and Process. Maximum length: 1024 characters.
   * 
   * @example
   * com.autotest.app
   */
  bundleId?: string;
  /**
   * @remarks
   * The command line parameters for starting the process. If specified, only processes whose command line contains this content are matched. If left empty, the command line is not checked. Maximum length: 1024 characters.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located. If specified, only processes with the same name in this directory are matched. If left empty, processes in any directory are matched. Maximum length: 1024 characters.
   * 
   * @example
   * C:\\\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name. Maximum length: 1024 characters.
   * 
   * @example
   * autotest.exe
   */
  process?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      cmdline: 'Cmdline',
      directory: 'Directory',
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      cmdline: 'string',
      directory: 'string',
      process: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProhibitedSoftwareRequestMacOSProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes. You must specify at least one of BundleId and Process. Maximum length: 1024 characters.
   * 
   * @example
   * com.autotest.app
   */
  bundleId?: string;
  /**
   * @remarks
   * The command line parameters for starting the process. If specified, only processes whose command line contains this content are matched. If left empty, the command line is not checked. Maximum length: 1024 characters.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located. If specified, only processes with the same name in this directory are matched. If left empty, processes in any directory are matched. Maximum length: 1024 characters.
   * 
   * @example
   * C:\\\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name. Maximum length: 1024 characters.
   * 
   * @example
   * WeChat
   */
  process?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      cmdline: 'Cmdline',
      directory: 'Directory',
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      cmdline: 'string',
      directory: 'string',
      process: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProhibitedSoftwareRequestWindowsProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes. You must specify at least one of BundleId and Process. Maximum length: 1024 characters.
   * 
   * @example
   * com.autotest.update
   */
  bundleId?: string;
  /**
   * @remarks
   * The command line parameters for starting the process. If specified, only processes whose command line contains this content are matched. If left empty, the command line is not checked. Maximum length: 1024 characters.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located. If specified, only processes with the same name in this directory are matched. If left empty, processes in any directory are matched. Maximum length: 1024 characters.
   * 
   * @example
   * C:\\\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name. Maximum length: 1024 characters.
   * 
   * @example
   * autotest.exe
   */
  process?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      cmdline: 'Cmdline',
      directory: 'Directory',
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      cmdline: 'string',
      directory: 'string',
      process: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProhibitedSoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the disabled software.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The list of process configurations for the Linux operating system.
   */
  linuxProcesses?: CreateProhibitedSoftwareRequestLinuxProcesses[];
  /**
   * @remarks
   * The list of process configurations for the macOS operating system.
   */
  macOSProcesses?: CreateProhibitedSoftwareRequestMacOSProcesses[];
  /**
   * @remarks
   * The name of the disabled software.
   * 
   * This parameter is required.
   * 
   * @example
   * Thunder
   */
  name?: string;
  /**
   * @remarks
   * The IDs of custom disabled software tags to associate. Duplicate values are not allowed.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The list of process configurations for the Windows operating system.
   */
  windowsProcesses?: CreateProhibitedSoftwareRequestWindowsProcesses[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      linuxProcesses: 'LinuxProcesses',
      macOSProcesses: 'MacOSProcesses',
      name: 'Name',
      tagIds: 'TagIds',
      windowsProcesses: 'WindowsProcesses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      linuxProcesses: { 'type': 'array', 'itemType': CreateProhibitedSoftwareRequestLinuxProcesses },
      macOSProcesses: { 'type': 'array', 'itemType': CreateProhibitedSoftwareRequestMacOSProcesses },
      name: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      windowsProcesses: { 'type': 'array', 'itemType': CreateProhibitedSoftwareRequestWindowsProcesses },
    };
  }

  validate() {
    if(Array.isArray(this.linuxProcesses)) {
      $dara.Model.validateArray(this.linuxProcesses);
    }
    if(Array.isArray(this.macOSProcesses)) {
      $dara.Model.validateArray(this.macOSProcesses);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    if(Array.isArray(this.windowsProcesses)) {
      $dara.Model.validateArray(this.windowsProcesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

