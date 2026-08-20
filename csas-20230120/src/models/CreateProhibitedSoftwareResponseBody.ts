// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProhibitedSoftwareResponseBodySoftwareLinuxProcesses extends $dara.Model {
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
   * C:\\Program Files\\Thunder Network\\Thunder
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * terraform
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

export class CreateProhibitedSoftwareResponseBodySoftwareMacOSProcesses extends $dara.Model {
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
   * C:\\Program Files\\Thunder Network\\Thunder
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * autotest_update.exe
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

export class CreateProhibitedSoftwareResponseBodySoftwareWindowsProcesses extends $dara.Model {
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
   * C:\\Program Files\\Thunder Network\\Thunder
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * anaconda3.exe
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

export class CreateProhibitedSoftwareResponseBodySoftware extends $dara.Model {
  /**
   * @remarks
   * The creation time of the disabled software, in the yyyy-MM-dd HH:mm:ss format. The time is in the UTC+8 time zone.
   * 
   * @example
   * 2025-09-05 10:20:46
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the disabled software.
   * 
   * @example
   * Endpoint group targeting github
   */
  description?: string;
  /**
   * @remarks
   * The list of process configurations for the Linux operating system.
   */
  linuxProcesses?: CreateProhibitedSoftwareResponseBodySoftwareLinuxProcesses[];
  /**
   * @remarks
   * The list of process configurations for the macOS operating system.
   */
  macOSProcesses?: CreateProhibitedSoftwareResponseBodySoftwareMacOSProcesses[];
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * shell
   */
  name?: string;
  /**
   * @remarks
   * The ID of the disabled software.
   * 
   * @example
   * swb-83995ff2ae38****
   */
  softwareId?: string;
  /**
   * @remarks
   * The IDs of disabled software tags associated with this disabled software.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The list of process configurations for the Windows operating system.
   */
  windowsProcesses?: CreateProhibitedSoftwareResponseBodySoftwareWindowsProcesses[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
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
      createTime: 'string',
      description: 'string',
      linuxProcesses: { 'type': 'array', 'itemType': CreateProhibitedSoftwareResponseBodySoftwareLinuxProcesses },
      macOSProcesses: { 'type': 'array', 'itemType': CreateProhibitedSoftwareResponseBodySoftwareMacOSProcesses },
      name: 'string',
      softwareId: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      windowsProcesses: { 'type': 'array', 'itemType': CreateProhibitedSoftwareResponseBodySoftwareWindowsProcesses },
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

export class CreateProhibitedSoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B9AC7B08-80F5-5EDD-8E6B-033F2FE5D4E2
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the disabled software.
   */
  software?: CreateProhibitedSoftwareResponseBodySoftware;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      software: 'Software',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      software: CreateProhibitedSoftwareResponseBodySoftware,
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

