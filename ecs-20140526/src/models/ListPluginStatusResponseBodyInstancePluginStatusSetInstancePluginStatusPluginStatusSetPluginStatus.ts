// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSetPluginStatus extends $dara.Model {
  /**
   * @remarks
   * The first time when Cloud Assistant reported the state of the plug-in.
   * 
   * @example
   * 2020-01-19T09:15:46Z
   */
  firstHeartbeatTime?: string;
  /**
   * @remarks
   * The last time when Cloud Assistant reported the state of the plug-in.
   * 
   * @example
   * 2020-01-19T09:15:46Z
   */
  lastHeartbeatTime?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * testName
   */
  pluginName?: string;
  /**
   * @remarks
   * The state of the Cloud Assistant plug-in. Valid values:
   * 
   * *   NotInstalled: The plug-in is not installed.
   * *   Installed: The one-time plug-in is installed.
   * *   Running: The long-running plug-in is running.
   * *   Stopped: The long-running plug-in is not running.
   * *   Crashed: The plug-in is abnormal.
   * *   Removed: The plug-in is uninstalled.
   * *   Unknown: The state of the plug-in is unknown.
   * 
   * @example
   * Running
   */
  pluginStatus?: string;
  /**
   * @remarks
   * The version of the plug-in.
   * 
   * @example
   * 1.1
   */
  pluginVersion?: string;
  static names(): { [key: string]: string } {
    return {
      firstHeartbeatTime: 'FirstHeartbeatTime',
      lastHeartbeatTime: 'LastHeartbeatTime',
      pluginName: 'PluginName',
      pluginStatus: 'PluginStatus',
      pluginVersion: 'PluginVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstHeartbeatTime: 'string',
      lastHeartbeatTime: 'string',
      pluginName: 'string',
      pluginStatus: 'string',
      pluginVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

