// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectDashboardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of enabled rules.
   * 
   * @example
   * 12
   */
  enableRuleCount?: number;
  /**
   * @remarks
   * The total number of servers on which the Security Center agent is installed.
   * 
   * @example
   * 12
   */
  pluginCount?: number;
  /**
   * @remarks
   * The total number of servers on which the Security Center agent is offline.
   * 
   * @example
   * 1
   */
  pluginOfflineCount?: number;
  /**
   * @remarks
   * The total number of servers on which the Security Center agent is online.
   * 
   * @example
   * 11
   */
  pluginOnlineCount?: number;
  static names(): { [key: string]: string } {
    return {
      enableRuleCount: 'EnableRuleCount',
      pluginCount: 'PluginCount',
      pluginOfflineCount: 'PluginOfflineCount',
      pluginOnlineCount: 'PluginOnlineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRuleCount: 'number',
      pluginCount: 'number',
      pluginOfflineCount: 'number',
      pluginOnlineCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileProtectDashboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetFileProtectDashboardResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6673D49C-A9AB-40DD-B4A2-B92306701AE7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileProtectDashboardResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

