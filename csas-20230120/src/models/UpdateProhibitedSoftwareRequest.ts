// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProhibitedSoftwareRequestLinuxProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes. You must specify at least one of this parameter and Process. The value can be up to 1024 characters in length.
   * 
   * @example
   * com.aliyun.security.sase
   */
  bundleId?: string;
  /**
   * @remarks
   * The command line parameters for starting the process. If specified, only processes whose command line contains this content are matched. If left empty, the command line is not checked. The value can be up to 1024 characters in length.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located. If specified, only processes with the same name in this directory are matched. If left empty, processes in any directory are matched. The value can be up to 1024 characters in length.
   * 
   * @example
   * C:\\\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name. The value can be up to 1024 characters in length.
   * 
   * @example
   * Everything.exe
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

export class UpdateProhibitedSoftwareRequestMacOSProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes. You must specify at least one of this parameter and Process. The value can be up to 1024 characters in length.
   * 
   * @example
   * com.autotest.update
   */
  bundleId?: string;
  /**
   * @remarks
   * The command line parameters for starting the process. If specified, only processes whose command line contains this content are matched. If left empty, the command line is not checked. The value can be up to 1024 characters in length.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located. If specified, only processes with the same name in this directory are matched. If left empty, processes in any directory are matched. The value can be up to 1024 characters in length.
   * 
   * @example
   * C:\\\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name. The value can be up to 1024 characters in length.
   * 
   * @example
   * Everything.exe
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

export class UpdateProhibitedSoftwareRequestWindowsProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes. You must specify at least one of this parameter and Process. The value can be up to 1024 characters in length.
   * 
   * @example
   * cn.apifox.app
   */
  bundleId?: string;
  /**
   * @remarks
   * The command line parameters for starting the process. If specified, only processes whose command line contains this content are matched. If left empty, the command line is not checked. The value can be up to 1024 characters in length.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located. If specified, only processes with the same name in this directory are matched. If left empty, processes in any directory are matched. The value can be up to 1024 characters in length.
   * 
   * @example
   * C:\\\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name. The value can be up to 1024 characters in length.
   * 
   * @example
   * Everything.exe
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

export class UpdateProhibitedSoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the prohibited software.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The list of process configurations for the Linux operating system.
   */
  linuxProcesses?: UpdateProhibitedSoftwareRequestLinuxProcesses[];
  /**
   * @remarks
   * The list of process configurations for the macOS operating system.
   */
  macOSProcesses?: UpdateProhibitedSoftwareRequestMacOSProcesses[];
  /**
   * @remarks
   * The name of the prohibited software.
   * 
   * @example
   * Edge
   */
  name?: string;
  /**
   * @remarks
   * The ID of the custom prohibited software to update. Only custom prohibited software under the current Alibaba Cloud account can be updated. Built-in prohibited software cannot be updated. You can obtain the value from the following operations:
   * - [ListProhibitedSoftware](~~ListProhibitedSoftware~~): queries prohibited software entries in batches.
   * - [CreateProhibitedSoftware](~~CreateProhibitedSoftware~~): creates a custom prohibited software entry.
   * 
   * This parameter is required.
   * 
   * @example
   * swb-a43c9cbf88df****
   */
  softwareId?: string;
  /**
   * @remarks
   * The IDs of the custom prohibited software tags to associate. Duplicate values are not allowed.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The list of process configurations for the Windows operating system.
   */
  windowsProcesses?: UpdateProhibitedSoftwareRequestWindowsProcesses[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      linuxProcesses: 'LinuxProcesses',
      macOSProcesses: 'MacOSProcesses',
      name: 'Name',
      softwareId: 'SoftwareId',
      tagIds: 'TagIds',
      windowsProcesses: 'WindowsProcesses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      linuxProcesses: { 'type': 'array', 'itemType': UpdateProhibitedSoftwareRequestLinuxProcesses },
      macOSProcesses: { 'type': 'array', 'itemType': UpdateProhibitedSoftwareRequestMacOSProcesses },
      name: 'string',
      softwareId: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      windowsProcesses: { 'type': 'array', 'itemType': UpdateProhibitedSoftwareRequestWindowsProcesses },
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

