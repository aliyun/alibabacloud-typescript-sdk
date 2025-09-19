// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginForUuidResponseBodyAegisUuidTargetPluginConfigListAegisSuspiciousConfigList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the plug-in is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  config?: boolean;
  /**
   * @remarks
   * The message that indicates whether you are authorized to install the plug-in on your server or whether the plug-in is installed on your server. Valid values:
   * 
   * *   **authorized**: authorized
   * *   **unauthorized**: unauthorized
   * *   **unbind**: not installed
   * *   **nonsupport**: not supported
   * 
   * @example
   * authorized
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the plug-in is globally configured. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  overallConfig?: boolean;
  /**
   * @remarks
   * The name of the plug-in. Valid values:
   * 
   * *   **alihips**: trojan-specific prevention
   * *   **alisecguard**: attack-specific prevention
   * *   **alinet**: defense against attacks on servers
   * 
   * @example
   * alisecguard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      msg: 'Msg',
      overallConfig: 'OverallConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'boolean',
      msg: 'string',
      overallConfig: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginForUuidResponseBodyAegisUuidTargetPluginConfigList extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the configurations of plug-ins.
   */
  aegisSuspiciousConfigList?: ListPluginForUuidResponseBodyAegisUuidTargetPluginConfigListAegisSuspiciousConfigList[];
  /**
   * @remarks
   * The installation code of the plug-in.
   * 
   * @example
   * k5O5nd
   */
  pluginInstallCode?: string;
  /**
   * @remarks
   * The name of the plug-in. Valid values:
   * 
   * *   **alihips**: trojan-specific prevention
   * *   **alisecguard**: attack-specific prevention
   * *   **alinet**: defense against attacks on servers
   * 
   * @example
   * alisecguard
   */
  pluginName?: string;
  /**
   * @remarks
   * Indicates whether the plug-in is installed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  pluginOnlineInstalled?: boolean;
  /**
   * @remarks
   * Indicates whether the plug-in is online. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  pluginOnlineStatus?: boolean;
  /**
   * @remarks
   * The version of the plug-in.
   * 
   * @example
   * 00_10
   */
  pluginVersion?: string;
  static names(): { [key: string]: string } {
    return {
      aegisSuspiciousConfigList: 'AegisSuspiciousConfigList',
      pluginInstallCode: 'PluginInstallCode',
      pluginName: 'PluginName',
      pluginOnlineInstalled: 'PluginOnlineInstalled',
      pluginOnlineStatus: 'PluginOnlineStatus',
      pluginVersion: 'PluginVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aegisSuspiciousConfigList: { 'type': 'array', 'itemType': ListPluginForUuidResponseBodyAegisUuidTargetPluginConfigListAegisSuspiciousConfigList },
      pluginInstallCode: 'string',
      pluginName: 'string',
      pluginOnlineInstalled: 'boolean',
      pluginOnlineStatus: 'boolean',
      pluginVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aegisSuspiciousConfigList)) {
      $dara.Model.validateArray(this.aegisSuspiciousConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginForUuidResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information about the plug-ins.
   */
  aegisUuidTargetPluginConfigList?: ListPluginForUuidResponseBodyAegisUuidTargetPluginConfigList[];
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aegisUuidTargetPluginConfigList: 'AegisUuidTargetPluginConfigList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aegisUuidTargetPluginConfigList: { 'type': 'array', 'itemType': ListPluginForUuidResponseBodyAegisUuidTargetPluginConfigList },
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aegisUuidTargetPluginConfigList)) {
      $dara.Model.validateArray(this.aegisUuidTargetPluginConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

