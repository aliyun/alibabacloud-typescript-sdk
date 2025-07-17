// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRetcodeShareStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application that is monitored by Browser Monitoring.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The process identifier (PID) of the application. 
   * 
   * Log on to the **ARMS console**. In the left-side navigation pane, choose **Browser Monitoring** > **Browser Monitoring**. On the Browser Monitoring page, click the name of an application. The URL in the address bar contains the process ID (PID) of the application. The PID is indicated in the `pid=xxx` format. The PID is usually percent encoded as `xxx%40xxx`. You must modify this value to remove the percent encoding. For example, if the PID in the URL is `eb4zdose6v%409781be0f44d****`, you must replace `%40` with @ to obtain `eb4zdose6v@9781be0f44d****`.
   * 
   * @example
   * atc889zkcf@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * Specifies whether to turn on or turn off the logon-free sharing switch. Valid values:
   * 
   * *   `true`: Turn on the switch.
   * *   `false`: Turn off the switch.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      pid: 'Pid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      pid: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

