// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProhibitedSoftwareResponseBodySoftwareLinuxProcesses extends $dara.Model {
  /**
   * @remarks
   * The application bundle identifier (Bundle ID). This parameter is required only for macOS processes.
   * 
   * @example
   * com.xunlei.Thunder
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line arguments for starting the process.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located.
   * 
   * @example
   * C:\\Program Files\\Thunder Network\\Thunder
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * thuner.exe
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

export class GetProhibitedSoftwareResponseBodySoftwareMacOSProcesses extends $dara.Model {
  /**
   * @remarks
   * The application bundle identifier (Bundle ID). This parameter is required only for macOS processes.
   * 
   * @example
   * com.xunlei.Thunder
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line arguments for starting the process.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located.
   * 
   * @example
   * C:\\Program Files\\Thunder Network\\Thunder
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * thuner.exe
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

export class GetProhibitedSoftwareResponseBodySoftwareWindowsProcesses extends $dara.Model {
  /**
   * @remarks
   * The application bundle identifier (Bundle ID). This parameter is required only for macOS processes.
   * 
   * @example
   * com.xunlei.Thunder
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line arguments for starting the process.
   * 
   * @example
   * --start-minimized
   */
  cmdline?: string;
  /**
   * @remarks
   * The directory where the process is located.
   * 
   * @example
   * C:\\Program Files\\Thunder Network\\Thunder
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * thuner.exe
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

export class GetProhibitedSoftwareResponseBodySoftware extends $dara.Model {
  /**
   * @remarks
   * The creation time of the prohibited software, in the yyyy-MM-dd HH:mm:ss format. The time is displayed in UTC+8.
   * 
   * @example
   * 2025-09-05 10:20:46
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the prohibited software.
   * 
   * @example
   * P2P download tool
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the prohibited software is a system built-in prohibited software. Valid values:
   * - **true**: A system built-in prohibited software that is shared across all Alibaba Cloud accounts and cannot be modified or deleted.
   * - **false**: A custom prohibited software under the current Alibaba Cloud account.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The list of process configurations for the Linux operating system.
   */
  linuxProcesses?: GetProhibitedSoftwareResponseBodySoftwareLinuxProcesses[];
  /**
   * @remarks
   * The list of process configurations for the macOS operating system.
   */
  macOSProcesses?: GetProhibitedSoftwareResponseBodySoftwareMacOSProcesses[];
  /**
   * @remarks
   * The name of the prohibited software.
   * 
   * @example
   * Thunder
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the software prohibition policies that directly reference the prohibited software.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The prohibited software ID.
   * 
   * @example
   * swb-3e6a1f9c4b28****
   */
  softwareId?: string;
  /**
   * @remarks
   * The IDs of the prohibited software tags associated with the prohibited software.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The list of process configurations for the Windows operating system.
   */
  windowsProcesses?: GetProhibitedSoftwareResponseBodySoftwareWindowsProcesses[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      linuxProcesses: 'LinuxProcesses',
      macOSProcesses: 'MacOSProcesses',
      name: 'Name',
      policyIds: 'PolicyIds',
      softwareId: 'SoftwareId',
      tagIds: 'TagIds',
      windowsProcesses: 'WindowsProcesses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      linuxProcesses: { 'type': 'array', 'itemType': GetProhibitedSoftwareResponseBodySoftwareLinuxProcesses },
      macOSProcesses: { 'type': 'array', 'itemType': GetProhibitedSoftwareResponseBodySoftwareMacOSProcesses },
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      softwareId: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      windowsProcesses: { 'type': 'array', 'itemType': GetProhibitedSoftwareResponseBodySoftwareWindowsProcesses },
    };
  }

  validate() {
    if(Array.isArray(this.linuxProcesses)) {
      $dara.Model.validateArray(this.linuxProcesses);
    }
    if(Array.isArray(this.macOSProcesses)) {
      $dara.Model.validateArray(this.macOSProcesses);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
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

export class GetProhibitedSoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 019F6DE3-3079-52DE-ABD1-39FB76B74FC9
   */
  requestId?: string;
  /**
   * @remarks
   * The prohibited software details.
   */
  software?: GetProhibitedSoftwareResponseBodySoftware;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      software: 'Software',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      software: GetProhibitedSoftwareResponseBodySoftware,
    };
  }

  validate() {
    if(this.software && typeof (this.software as any).validate === 'function') {
      (this.software as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

