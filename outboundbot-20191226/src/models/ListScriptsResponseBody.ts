// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsResponseBodyScriptsListNluProfile extends $dara.Model {
  /**
   * @remarks
   * The function service name.
   * 
   * @example
   * sanfang_test
   */
  fcFunction?: string;
  /**
   * @remarks
   * The function service trigger URL.
   * 
   * @example
   * http://sanfang_test-xxxxxx.cn-shanghai-vpc.fcapp.run
   */
  fcHttpTriggerUrl?: string;
  /**
   * @remarks
   * The function service region.
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
   * The access key of the robot business workspace.
   * 
   * @example
   * 14791f5f226b4878b3d9b676a0291234
   */
  agentKey?: string;
  /**
   * @remarks
   * Indicates whether the robot business workspace is a large model workspace.
   * 
   * @example
   * false
   */
  agentLlm?: boolean;
  chatBotId?: string;
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
   * Indicates whether the emotion recognition feature is enabled. This parameter is set to false for all large model scenarios.
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
   * Finance
   */
  industry?: string;
  /**
   * @remarks
   * Indicates whether the debug version is in draft state.
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
   * Indicates whether the scenario is a preset scenario.
   * 
   * @example
   * false
   */
  isPreset?: boolean;
  /**
   * @remarks
   * Indicates whether the long pause detection feature is enabled. This parameter is set to false for all large model scenarios.
   * 
   * @example
   * false
   */
  longWaitEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the filler phrase feature is enabled.
   * 
   * @example
   * false
   */
  miniPlaybackEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the graceful barge-in feature is enabled. This parameter is set to false for all large model scenarios.
   * 
   * @example
   * false
   */
  newBargeInEnable?: boolean;
  /**
   * @remarks
   * The robot access type. If the scenario uses a small model, this field is empty. If the scenario uses a large model, this field is set to Managed.
   * 
   * @example
   * Empty or Managed
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The robot engine. If the scenario uses a small model, this field is empty. If the scenario uses a large model, this field is set to Prompts.
   * 
   * @example
   * Empty or Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * The function computing service mode configuration.
   */
  nluProfile?: ListScriptsResponseBodyScriptsListNluProfile;
  /**
   * @remarks
   * The reason for review rejection.
   * 
   * @example
   * Non-compliant script language
   */
  rejectReason?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * Telemarketing
   */
  scene?: string;
  /**
   * @remarks
   * The script description.
   * 
   * @example
   * Telemarketing script
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
   * Telemarketing script
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
   * The robot business workspace ID.
   * 
   * @example
   * 1160195
   */
  agentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      agentLlm: 'AgentLlm',
      chatBotId: 'ChatBotId',
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
      chatBotId: 'string',
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
   * The script array.
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The script list.
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

