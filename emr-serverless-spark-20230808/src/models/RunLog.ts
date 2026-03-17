// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLog extends $dara.Model {
  /**
   * @remarks
   * The path of the startup file.
   * 
   * @example
   * oss://bucket/path/to/startup
   */
  driverStartup?: string;
  /**
   * @remarks
   * The path of the stderr file.
   * 
   * @example
   * oss://bucket/path/to/stderr
   */
  driverStdError?: string;
  /**
   * @remarks
   * The path of the stdout file.
   * 
   * @example
   * oss://bucket/path/to/stdout
   */
  driverStdOut?: string;
  /**
   * @remarks
   * The path of the syslog file.
   * 
   * @example
   * oss://bucket/path/to/syslog
   */
  driverSyslog?: string;
  static names(): { [key: string]: string } {
    return {
      driverStartup: 'driverStartup',
      driverStdError: 'driverStdError',
      driverStdOut: 'driverStdOut',
      driverSyslog: 'driverSyslog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverStartup: 'string',
      driverStdError: 'string',
      driverStdOut: 'string',
      driverSyslog: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

