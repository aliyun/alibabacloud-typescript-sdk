// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppAssistantAgentResponseBodyModuleCredential extends $dara.Model {
  extra?: { [key: string]: string };
  /**
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
  extra?: { [key: string]: string };
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
   * @example
   * duanwei@qianrutest
   */
  agentId?: string;
  agentName?: string;
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  credential?: CreateAppAssistantAgentResponseBodyModuleCredential;
  embedConfig?: CreateAppAssistantAgentResponseBodyModuleEmbedConfig;
  extraParams?: { [key: string]: string };
  /**
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @example
   * WA12313131313
   */
  platformAppId?: string;
  /**
   * @example
   * VMWARE
   */
  platformType?: string;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  errorArgs?: any[];
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
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  rootErrorMsg?: string;
  /**
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

