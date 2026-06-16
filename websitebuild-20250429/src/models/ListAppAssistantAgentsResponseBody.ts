// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppAssistantAgentsResponseBodyModuleCredential extends $dara.Model {
  /**
   * @remarks
   * API Key
   * 
   * @example
   * akm-xxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * API Secret
   * 
   * @example
   * sk-xxxxxx
   */
  apiSecret?: string;
  /**
   * @remarks
   * The extension field.
   */
  extra?: { [key: string]: string };
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      apiSecret: 'ApiSecret',
      extra: 'Extra',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiSecret: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppAssistantAgentsResponseBodyModuleEmbedConfig extends $dara.Model {
  /**
   * @remarks
   * The extension field.
   */
  extra?: { [key: string]: string };
  /**
   * @remarks
   * The raw embedding script.
   */
  rawScript?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      rawScript: 'RawScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      rawScript: 'string',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppAssistantAgentsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The agent ID returned by the platform.
   * 
   * @example
   * liyang1_v@soulapp
   */
  agentId?: string;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * 演示
   */
  agentName?: string;
  /**
   * @remarks
   * The business ID of the associated application instance.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The authentication credential.
   */
  credential?: ListAppAssistantAgentsResponseBodyModuleCredential;
  /**
   * @remarks
   * The embedding configuration.
   */
  embedConfig?: ListAppAssistantAgentsResponseBodyModuleEmbedConfig;
  /**
   * @remarks
   * The extension parameters.
   */
  extraParams?: { [key: string]: string };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The platform application ID of the agent.
   * 
   * @example
   * WA12313123131
   */
  platformAppId?: string;
  /**
   * @remarks
   * The platform type.
   * 
   * @example
   * VMWARE
   */
  platformType?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1231311312
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      bizId: 'BizId',
      credential: 'Credential',
      embedConfig: 'EmbedConfig',
      extraParams: 'ExtraParams',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      platformAppId: 'PlatformAppId',
      platformType: 'PlatformType',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      bizId: 'string',
      credential: ListAppAssistantAgentsResponseBodyModuleCredential,
      embedConfig: ListAppAssistantAgentsResponseBodyModuleEmbedConfig,
      extraParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreate: 'string',
      gmtModified: 'string',
      platformAppId: 'string',
      platformType: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    if(this.embedConfig && typeof (this.embedConfig as any).validate === 'function') {
      (this.embedConfig as any).validate();
    }
    if(this.extraParams) {
      $dara.Model.validateMap(this.extraParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppAssistantAgentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether a retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response element.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
   */
  module?: ListAppAssistantAgentsResponseBodyModule[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The exception message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      module: 'Module',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      module: { 'type': 'array', 'itemType': ListAppAssistantAgentsResponseBodyModule },
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

