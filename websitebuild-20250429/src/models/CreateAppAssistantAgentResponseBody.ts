// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppAssistantAgentResponseBodyModuleCredential extends $dara.Model {
  /**
   * @remarks
   * Extension field
   */
  extra?: { [key: string]: string };
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
      extra: 'Extra',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class CreateAppAssistantAgentResponseBodyModuleEmbedConfig extends $dara.Model {
  /**
   * @remarks
   * Extension Fields
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

export class CreateAppAssistantAgentResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Agent ID (returned by platform)
   * 
   * @example
   * duanwei@qianrutest
   */
  agentId?: string;
  /**
   * @remarks
   * Agent Name
   * 
   * @example
   * 测试业务空间
   */
  agentName?: string;
  /**
   * @remarks
   * Associated application instance bizId
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Credential
   */
  credential?: CreateAppAssistantAgentResponseBodyModuleCredential;
  /**
   * @remarks
   * Embed Configuration
   */
  embedConfig?: CreateAppAssistantAgentResponseBodyModuleEmbedConfig;
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
   * WA12313131313
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
   * 1231313131
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
      credential: CreateAppAssistantAgentResponseBodyModuleCredential,
      embedConfig: CreateAppAssistantAgentResponseBodyModuleEmbedConfig,
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

export class CreateAppAssistantAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Permission denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * App name.
   * 
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message, used to replace the `%s` placeholder in the **ErrMessage** error message.  
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
   * Response data
   */
  module?: CreateAppAssistantAgentResponseBodyModule;
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
   * Abnormal message
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
      module: CreateAppAssistantAgentResponseBodyModule,
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
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

