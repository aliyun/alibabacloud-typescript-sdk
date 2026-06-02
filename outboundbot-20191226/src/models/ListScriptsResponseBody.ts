// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsResponseBodyScriptsListNluProfile extends $dara.Model {
  fcFunction?: string;
  fcHttpTriggerUrl?: string;
  fcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      fcFunction: 'FcFunction',
      fcHttpTriggerUrl: 'FcHttpTriggerUrl',
      fcRegion: 'FcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcFunction: 'string',
      fcHttpTriggerUrl: 'string',
      fcRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBodyScriptsList extends $dara.Model {
  agentKey?: string;
  agentLlm?: boolean;
  createTime?: number;
  /**
   * @example
   * DRAFTED
   */
  debugStatus?: string;
  /**
   * @example
   * false
   */
  emotionEnable?: boolean;
  industry?: string;
  /**
   * @example
   * true
   */
  isDebugDrafted?: boolean;
  /**
   * @example
   * true
   */
  isDrafted?: boolean;
  /**
   * @example
   * false
   */
  isPreset?: boolean;
  /**
   * @example
   * false
   */
  longWaitEnable?: boolean;
  /**
   * @example
   * false
   */
  miniPlaybackEnable?: boolean;
  /**
   * @example
   * false
   */
  newBargeInEnable?: boolean;
  nluAccessType?: string;
  nluEngine?: string;
  nluProfile?: ListScriptsResponseBodyScriptsListNluProfile;
  rejectReason?: string;
  scene?: string;
  scriptDescription?: string;
  /**
   * @example
   * 8d6a6e41-8093-49af-a9d1-0281878758ac
   */
  scriptId?: string;
  scriptName?: string;
  /**
   * @example
   * DRAFTED
   */
  status?: string;
  /**
   * @example
   * 1578965079000
   */
  updateTime?: number;
  agentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      agentLlm: 'AgentLlm',
      createTime: 'CreateTime',
      debugStatus: 'DebugStatus',
      emotionEnable: 'EmotionEnable',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      isPreset: 'IsPreset',
      longWaitEnable: 'LongWaitEnable',
      miniPlaybackEnable: 'MiniPlaybackEnable',
      newBargeInEnable: 'NewBargeInEnable',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
      nluProfile: 'NluProfile',
      rejectReason: 'RejectReason',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      status: 'Status',
      updateTime: 'UpdateTime',
      agentId: 'agentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      agentLlm: 'boolean',
      createTime: 'number',
      debugStatus: 'string',
      emotionEnable: 'boolean',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      isPreset: 'boolean',
      longWaitEnable: 'boolean',
      miniPlaybackEnable: 'boolean',
      newBargeInEnable: 'boolean',
      nluAccessType: 'string',
      nluEngine: 'string',
      nluProfile: ListScriptsResponseBodyScriptsListNluProfile,
      rejectReason: 'string',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      status: 'string',
      updateTime: 'number',
      agentId: 'number',
    };
  }

  validate() {
    if(this.nluProfile && typeof (this.nluProfile as any).validate === 'function') {
      (this.nluProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBodyScripts extends $dara.Model {
  list?: ListScriptsResponseBodyScriptsList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListScriptsResponseBodyScriptsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  scripts?: ListScriptsResponseBodyScripts;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scripts: 'Scripts',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scripts: ListScriptsResponseBodyScripts,
      success: 'boolean',
    };
  }

  validate() {
    if(this.scripts && typeof (this.scripts as any).validate === 'function') {
      (this.scripts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

