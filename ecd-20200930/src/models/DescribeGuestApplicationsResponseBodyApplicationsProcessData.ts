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

