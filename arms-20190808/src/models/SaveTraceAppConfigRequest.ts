// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTraceAppConfigRequestSettings extends $dara.Model {
  /**
   * @remarks
   * The key of the settings that you want to modify. For more information about the supported settings, see the following sections.
   * 
   * *   Trace sampling settings
   * *   Agent switch settings
   * *   Threshold settings
   * *   Advanced settings
   * *   Thread settings
   * *   Memory snapshot settings
   * *   URL convergence settings
   * *   Business log association settings
   * 
   * @example
   * sampling.enable
   */
  key?: string;
  /**
   * @remarks
   * The value of the settings that you want to modify. For more information about the supported settings, see the following sections.
   * 
   * *   Trace sampling settings
   * *   Agent switch settings
   * *   Threshold settings
   * *   Advanced settings
   * *   Thread settings
   * *   Memory snapshot settings
   * *   URL convergence settings
   * *   Business log association settings
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The process ID (PID) of the application.
   * 
   * Log on to the ARMS console. In the left-side navigation pane, choose **Application Monitoring** > **Application List**. On the Application List page, click the name of an application. The URL in the address bar contains the PID of the application. The PID is indicated in the pid=xxx format. The PID is usually percent encoded as xxx%40xxx. You must modify this value to remove the percent encoding. For example, if the PID in the URL is xxx%4074xxx, you must replace %40 with an at sign (@) to obtain xxx@74xxx.
   * 
   * This parameter is required.
   * 
   * @example
   * a2n80plglh@745eddxxx
   */
  pid?: string;
  /**
   * @remarks
   * The settings of Application Monitoring.
   */
  settings?: SaveTraceAppConfigRequestSettings[];
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      settings: { 'type': 'array', 'itemType': SaveTraceAppConfigRequestSettings },
    };
  }

  validate() {
    if(Array.isArray(this.settings)) {
      $dara.Model.validateArray(this.settings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

