// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGuestApplicationsResponseBodyApplicationsProcessData extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Google Chrome
   */
  applicationName?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 115.0.5790.110
   */
  applicationVersion?: string;
  /**
   * @remarks
   * The CPU utilization (%).
   * 
   * @example
   * 89
   */
  cpuPercent?: number;
  /**
   * @remarks
   * The GPU usage (%).
   * 
   * @example
   * 15
   */
  gpuPercent?: number;
  /**
   * @remarks
   * The I/O read and write performance. Unit: byte/s.
   * 
   * @example
   * 124906.0
   */
  iospeed?: number;
  /**
   * @remarks
   * The memory usage (%).
   * 
   * @example
   * 34
   */
  memPercent?: number;
  /**
   * @remarks
   * The PID.
   * 
   * @example
   * 1357
   */
  pid?: number;
  /**
   * @remarks
   * The path to the process.
   * 
   * @example
   * C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\ch****.exe
   */
  processPath?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationVersion: 'ApplicationVersion',
      cpuPercent: 'CpuPercent',
      gpuPercent: 'GpuPercent',
      iospeed: 'Iospeed',
      memPercent: 'MemPercent',
      pid: 'Pid',
      processPath: 'ProcessPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationVersion: 'string',
      cpuPercent: 'number',
      gpuPercent: 'number',
      iospeed: 'number',
      memPercent: 'number',
      pid: 'number',
      processPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Google Chrome
   */
  applicationName?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 115.0.5790.110
   */
  applicationVersion?: string;
  /**
   * @remarks
   * The CPU utilization (%).
   * 
   * @example
   * 89
   */
  cpuPercent?: number;
  /**
   * @remarks
   * The GPU utilization (%).
   * 
   * @example
   * 15
   */
  gpuPercent?: number;
  /**
   * @remarks
   * The icon URL of the application.
   * 
   * @example
   * https://app-center-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/market/preload/default****.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The I/O read and write performance. Unit: byte/s.
   * 
   * @example
   * 124906.0
   */
  ioSpeed?: number;
  /**
   * @remarks
   * The memory utilization (%).
   * 
   * @example
   * 34
   */
  memPercent?: number;
  /**
   * @remarks
   * The process ID (PID).
   * 
   * @example
   * 1357
   */
  pid?: number;
  /**
   * @remarks
   * The processes.
   */
  processData?: DescribeGuestApplicationsResponseBodyApplicationsProcessData[];
  /**
   * @remarks
   * The path to the process.
   * 
   * @example
   * C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\ch****.exe
   */
  processPath?: string;
  /**
   * @remarks
   * The status of the application.
   * 
   * Valid value:
   * 
   * *   Idle: The application is installed in the cloud computer but is not running.
   * *   Running: The application has been installed in the cloud computer and is running.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationVersion: 'ApplicationVersion',
      cpuPercent: 'CpuPercent',
      gpuPercent: 'GpuPercent',
      iconUrl: 'IconUrl',
      ioSpeed: 'IoSpeed',
      memPercent: 'MemPercent',
      pid: 'Pid',
      processData: 'ProcessData',
      processPath: 'ProcessPath',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationVersion: 'string',
      cpuPercent: 'number',
      gpuPercent: 'number',
      iconUrl: 'string',
      ioSpeed: 'number',
      memPercent: 'number',
      pid: 'number',
      processData: { 'type': 'array', 'itemType': DescribeGuestApplicationsResponseBodyApplicationsProcessData },
      processPath: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processData)) {
      $dara.Model.validateArray(this.processData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGuestApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applications.
   */
  applications?: DescribeGuestApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 272CF39E-B5DE-5BE3-A09B-B43F1026****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': DescribeGuestApplicationsResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

