// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProhibitedSoftwareResponseBodySoftwareLinuxProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes.
   * 
   * @example
   * com.aliyun.security.sase
   */
  bundleId?: string;
  /**
   * @remarks
   * The command line parameters for starting the process.
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
   * C:\\\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * kismain.exe
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

export class UpdateProhibitedSoftwareResponseBodySoftwareMacOSProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes.
   * 
   * @example
   * com.autotest.app
   */
  bundleId?: string;
  /**
   * @remarks
   * The command line parameters for starting the process.
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
   * C:\\\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * QQPCTray.exe
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

export class UpdateProhibitedSoftwareResponseBodySoftwareWindowsProcesses extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the application. This parameter is required only for macOS processes.
   * 
   * @example
   * com.aliyun.security.sase
   */
  bundleId?: string;
  /**
   * @remarks
   * The command line parameters for starting the process.
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
   * C:\\\\autotest
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * QQPCTray.exe
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

export class UpdateProhibitedSoftwareResponseBodySoftware extends $dara.Model {
  /**
   * @remarks
   * The time when the prohibited software was created, in the yyyy-MM-dd HH:mm:ss format. The time is displayed in UTC+8.
   * 
   * @example
   * 2023-08-17 09:49:03
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the prohibited software.
   * 
   * @example
   * kxi3
   */
  description?: string;
  /**
   * @remarks
   * The list of process configurations for the Linux operating system.
   */
  linuxProcesses?: UpdateProhibitedSoftwareResponseBodySoftwareLinuxProcesses[];
  /**
   * @remarks
   * The list of process configurations for the macOS operating system.
   */
  macOSProcesses?: UpdateProhibitedSoftwareResponseBodySoftwareMacOSProcesses[];
  /**
   * @remarks
   * The name of the prohibited software.
   * 
   * @example
   * xshell
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the software prohibition policies that directly reference this prohibited software.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the prohibited software.
   * 
   * @example
   * swb-c64076fa7afd****
   */
  softwareId?: string;
  /**
   * @remarks
   * The IDs of the prohibited software tags associated with this prohibited software.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The list of process configurations for the Windows operating system.
   */
  windowsProcesses?: UpdateProhibitedSoftwareResponseBodySoftwareWindowsProcesses[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
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
      linuxProcesses: { 'type': 'array', 'itemType': UpdateProhibitedSoftwareResponseBodySoftwareLinuxProcesses },
      macOSProcesses: { 'type': 'array', 'itemType': UpdateProhibitedSoftwareResponseBodySoftwareMacOSProcesses },
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      softwareId: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      windowsProcesses: { 'type': 'array', 'itemType': UpdateProhibitedSoftwareResponseBodySoftwareWindowsProcesses },
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

export class UpdateProhibitedSoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2123E64A-FB25-561F-9988-B8781E430694
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the prohibited software.
   */
  software?: UpdateProhibitedSoftwareResponseBodySoftware;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      software: 'Software',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      software: UpdateProhibitedSoftwareResponseBodySoftware,
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

