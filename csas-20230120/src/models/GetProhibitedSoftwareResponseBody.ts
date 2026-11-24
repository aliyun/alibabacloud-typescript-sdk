// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProhibitedSoftwareResponseBodySoftwareLinuxProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes.
   * 
   * @example
   * com.xunlei.Thunder
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line arguments used to start the process.
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
   * The name of the process.
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
   * The bundle ID of the application. This parameter is required only for macOS processes.
   * 
   * @example
   * com.xunlei.Thunder
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line arguments used to start the process.
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
   * The name of the process.
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
   * The bundle ID of the application. This parameter is required only for macOS processes.
   * 
   * @example
   * com.xunlei.Thunder
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line arguments used to start the process.
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
   * The name of the process.
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
   * The time when the prohibited software was created. The time is in the yyyy-MM-dd HH:mm:ss format and follows the UTC+8 time zone.
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
   * Specifies whether the prohibited software is a built-in prohibited software. Valid values:
   * - **true**: The software is a built-in prohibited software. It is shared by all Alibaba Cloud accounts and cannot be modified or deleted.
   * - **false**: The software is a custom prohibited software within the current Alibaba Cloud account.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The list of process configurations in the Linux operating system.
   */
  linuxProcesses?: GetProhibitedSoftwareResponseBodySoftwareLinuxProcesses[];
  /**
   * @remarks
   * The list of process configurations in the macOS operating system.
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
   * The ID of the prohibited software.
   * 
   * @example
   * swb-3e6a1f9c4b28****
   */
  softwareId?: string;
  /**
   * @remarks
   * The IDs of the prohibited software tags that are associated with the prohibited software.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The list of process configurations in the Windows operating system.
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
   * The details of the prohibited software.
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

