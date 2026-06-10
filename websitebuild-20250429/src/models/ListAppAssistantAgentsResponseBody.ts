// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppAssistantAgentsResponseBodyModuleCredential extends $dara.Model {
  /**
   * @remarks
   * API key
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
   * Extension field
   */
  extra?: { [key: string]: string };
  /**
   * @remarks
   * Password
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * Username
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
   * Extension fields
   */
  extra?: { [key: string]: string };
  /**
   * @remarks
   * Raw embed script
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
   * Agent ID (returned by the platform)
   * 
   * @example
   * liyang1_v@soulapp
   */
  agentId?: string;
  /**
   * @remarks
   * Agent Name
   * 
   * @example
   * 演示
   */
  agentName?: string;
  /**
   * @remarks
   * bizId of the associated application instance
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Credential
   */
  credential?: ListAppAssistantAgentsResponseBodyModuleCredential;
  /**
   * @remarks
   * Embed configuration
   */
  embedConfig?: ListAppAssistantAgentsResponseBodyModuleEmbedConfig;
  /**
   * @remarks
   * Extension parameters
   */
  extraParams?: { [key: string]: string };
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Agent platform appId
   * 
   * @example
   * WA12313123131
   */
  platformAppId?: string;
  /**
   * @remarks
   * Platform Type
   * 
   * @example
   * VMWARE
   */
  platformType?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * User ID
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
   * is retry allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * App Name.
   * 
   * @example
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @remarks
   * dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * dynamic error message, used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * response Data
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
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Reserved parameter.
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

