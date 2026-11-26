// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProhibitedSoftwareRequestLinuxProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID. This parameter is required only for macOS processes. You must specify at least one of the BundleId and Process parameters. The value can be up to 1,024 characters in length.
   * 
   * @example
   * com.autotest.app
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line arguments used to start the process. If you specify this parameter, only processes whose command lines contain the specified content are matched. If you leave this parameter empty, the command line is not verified. The value can be up to 1,024 characters in length.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located. If you specify this parameter, only processes with the same name in this directory are matched. If you leave this parameter empty, processes in any directory are matched. The value can be up to 1,024 characters in length.
   * 
   * @example
   * C:\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name. The value can be up to 1,024 characters in length.
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
   * The bundle ID. This parameter is required only for macOS processes. You must specify at least one of the BundleId and Process parameters. The value can be up to 1,024 characters in length.
   * 
   * @example
   * com.autotest.app
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line arguments used to start the process. If you specify this parameter, only processes whose command lines contain the specified content are matched. If you leave this parameter empty, the command line is not verified. The value can be up to 1,024 characters in length.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located. If you specify this parameter, only processes with the same name in this directory are matched. If you leave this parameter empty, processes in any directory are matched. The value can be up to 1,024 characters in length.
   * 
   * @example
   * C:\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name. The value can be up to 1,024 characters in length.
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
   * The bundle ID. This parameter is required only for macOS processes. You must specify at least one of the BundleId and Process parameters. The value can be up to 1,024 characters in length.
   * 
   * @example
   * com.autotest.update
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line arguments used to start the process. If you specify this parameter, only processes whose command lines contain the specified content are matched. If you leave this parameter empty, the command line is not verified. The value can be up to 1,024 characters in length.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located. If you specify this parameter, only processes with the same name in this directory are matched. If you leave this parameter empty, processes in any directory are matched. The value can be up to 1,024 characters in length.
   * 
   * @example
   * C:\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name. The value can be up to 1,024 characters in length.
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
   * The description of the blocked software.
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
   * The name of the blocked software.
   * 
   * This parameter is required.
   * 
   * @example
   * Thunder
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the custom blocked software tags to associate. Duplicate IDs are not allowed.
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

