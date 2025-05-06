// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLog extends $dara.Model {
  driverStartup?: string;
  driverStdError?: string;
  driverStdOut?: string;
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

