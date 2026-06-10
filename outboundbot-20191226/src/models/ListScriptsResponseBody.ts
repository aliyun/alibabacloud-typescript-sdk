// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsResponseBodyScriptsListNluProfile extends $dara.Model {
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * sanfang_test
   */
  fcFunction?: string;
  /**
   * @remarks
   * The URL of the function trigger.
   * 
   * @example
   * http://sanfang_test-xxxxxx.cn-shanghai-vpc.fcapp.run
   */
  fcHttpTriggerUrl?: string;
  /**
   * @remarks
   * The function region.
   * 
   * @example
   * cn-shanghai
   */
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
  /**
   * @remarks
   * The agent access key.
   * 
   * @example
   * 14791f5f226b4878b3d9b676a0291234
   */
  agentKey?: string;
  /**
   * @remarks
   * Indicates whether the agent is an LLM agent.
   * 
   * @example
   * false
   */
  agentLlm?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1578965079000
   */
  createTime?: number;
  /**
   * @remarks
   * The debug status.
   * 
   * @example
   * DRAFTED
   */
  debugStatus?: string;
  /**
   * @remarks
   * Indicates whether emotion detection is enabled. This parameter is always false for LLM-based scripts.
   * 
   * @example
   * false
   */
  emotionEnable?: boolean;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * 金融
   */
  industry?: string;
  /**
   * @remarks
   * Indicates whether the debug version of the script is a draft.
   * 
   * @example
   * true
   */
  isDebugDrafted?: boolean;
  /**
   * @remarks
   * Indicates whether the script is a draft.
   * 
   * @example
   * true
   */
  isDrafted?: boolean;
  /**
   * @remarks
   * Indicates whether the script is for a preset scene.
   * 
   * @example
   * false
   */
  isPreset?: boolean;
  /**
   * @remarks
   * Indicates whether long wait is enabled. This parameter is always false for LLM-based scripts.
   * 
   * @example
   * false
   */
  longWaitEnable?: boolean;
  /**
   * @remarks
   * Indicates whether mini playback is enabled.
   * 
   * @example
   * false
   */
  miniPlaybackEnable?: boolean;
  /**
   * @remarks
   * Indicates whether graceful barge-in is enabled. This parameter is always false for LLM-based scripts.
   * 
   * @example
   * false
   */
  newBargeInEnable?: boolean;
  /**
   * @remarks
   * The NLU access type, which is set to Managed for LLM scenarios and is empty for small model scenarios.
   * 
   * @example
   * 空或者Managed
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The NLU engine, which is set to Prompts for LLM scenarios and is empty for small model scenarios.
   * 
   * @example
   * 空或者Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * The Function Compute configuration for function calling mode.
   */
  nluProfile?: ListScriptsResponseBodyScriptsListNluProfile;
  /**
   * @remarks
   * The rejection reason.
   * 
   * @example
   * 话术用语不合规
   */
  rejectReason?: string;
  /**
   * @remarks
   * The scene.
   * 
   * @example
   * 电销
   */
  scene?: string;
  /**
   * @remarks
   * The script description.
   * 
   * @example
   * 电话销售话术
   */
  scriptDescription?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 8d6a6e41-8093-49af-a9d1-0281878758ac
   */
  scriptId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * 电话销售话术
   */
  scriptName?: string;
  /**
   * @remarks
   * The script status.
   * 
   * @example
   * DRAFTED
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1578965079000
   */
  updateTime?: number;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 1160195
   */
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
  /**
   * @remarks
   * The list of scripts.
   */
  list?: ListScriptsResponseBodyScriptsList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of scripts.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * The paginated list of scripts.
   */
  scripts?: ListScriptsResponseBodyScripts;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

