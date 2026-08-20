// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProhibitedSoftwareResponseBodySoftwareLinuxProcesses extends $dara.Model {
  /**
   * @remarks
   * The application bundle identifier (Bundle ID). This parameter is required only for macOS processes.
   * 
   * @example
   * com.autotest.app
   */
  bundleId?: string;
  /**
   * @remarks
   * The command-line parameters for starting the process.
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
   * /User/sase/Applications
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * thunder
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

export class ListProhibitedSoftwareResponseBodySoftwareMacOSProcesses extends $dara.Model {
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
   * The command-line parameters for starting the process.
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
   * ~/Applications
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
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

export class ListProhibitedSoftwareResponseBodySoftwareWindowsProcesses extends $dara.Model {
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
   * The command-line parameters for starting the process.
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
   * C:\\Program Files\\Thunder Network
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * SASE.exe
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

export class ListProhibitedSoftwareResponseBodySoftware extends $dara.Model {
  /**
   * @remarks
   * The time when the prohibited software was created, in the yyyy-MM-dd HH:mm:ss format. The time is in the UTC+8 time zone.
   * 
   * @example
   * 2026-08-19 10:24:31
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the prohibited software.
   * 
   * @example
   * P2P download software
   */
  description?: string;
  /**
   * @remarks
   * The collection of dynamic policy IDs that reference the prohibited software as a disposal action.
   */
  dynamicPolicyIds?: string[];
  /**
   * @remarks
   * Indicates whether the software is a system built-in prohibited software. Valid values:
   * - **true**: A system built-in prohibited software that is shared across all Alibaba Cloud accounts and cannot be modified or deleted.
   * - **false**: Custom prohibited software under the current Alibaba Cloud account.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The list of process configurations for the Linux operating system.
   */
  linuxProcesses?: ListProhibitedSoftwareResponseBodySoftwareLinuxProcesses[];
  /**
   * @remarks
   * The list of process configurations for the macOS operating system.
   */
  macOSProcesses?: ListProhibitedSoftwareResponseBodySoftwareMacOSProcesses[];
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
   * The collection of software prohibition policy IDs that directly reference the prohibited software.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the prohibited software.
   * 
   * @example
   * swb-238eee6903e8****
   */
  softwareId?: string;
  /**
   * @remarks
   * The collection of prohibited software tag IDs associated with the prohibited software.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The list of process configurations for the Windows operating system.
   */
  windowsProcesses?: ListProhibitedSoftwareResponseBodySoftwareWindowsProcesses[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      dynamicPolicyIds: 'DynamicPolicyIds',
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
      dynamicPolicyIds: { 'type': 'array', 'itemType': 'string' },
      isDefault: 'boolean',
      linuxProcesses: { 'type': 'array', 'itemType': ListProhibitedSoftwareResponseBodySoftwareLinuxProcesses },
      macOSProcesses: { 'type': 'array', 'itemType': ListProhibitedSoftwareResponseBodySoftwareMacOSProcesses },
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      softwareId: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      windowsProcesses: { 'type': 'array', 'itemType': ListProhibitedSoftwareResponseBodySoftwareWindowsProcesses },
    };
  }

  validate() {
    if(Array.isArray(this.dynamicPolicyIds)) {
      $dara.Model.validateArray(this.dynamicPolicyIds);
    }
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

export class ListProhibitedSoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C7F49DCC-8EFE-59BE-8947-0529CC458C59
   */
  requestId?: string;
  /**
   * @remarks
   * The list of prohibited software.
   */
  software?: ListProhibitedSoftwareResponseBodySoftware[];
  /**
   * @remarks
   * The total number of prohibited software entries.
   * 
   * @example
   * 28
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      software: 'Software',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      software: { 'type': 'array', 'itemType': ListProhibitedSoftwareResponseBodySoftware },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.software)) {
      $dara.Model.validateArray(this.software);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

