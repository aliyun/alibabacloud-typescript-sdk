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
   * The function service trigger.
   * 
   * @example
   * http://sanfang_test-xxxxxx.cn-shanghai-vpc.fcapp.run
   */
  fcHttpTriggerUrl?: string;
  /**
   * @remarks
   * The region of the function service.
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
   * The access key of the robot workspace.
   * 
   * @example
   * 14791f5f226b4878b3d9b676a0291234
   */
  agentKey?: string;
  /**
   * @remarks
   * Indicates whether the robot workspace is a large model workspace.
   * 
   * @example
   * false
   */
  agentLlm?: boolean;
  /**
   * @remarks
   * The chatbot ID.
   * 
   * @example
   * d31794e2a51f47d2901b4094d88311d7
   */
  chatBotId?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * Indicates whether the emotion recognition configuration is enabled. This value is always false for large models.
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
   * Indicates whether the debug version is in the draft state.
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
   * Indicates whether the long pause configuration is enabled. This value is always false for large models.
   * 
   * @example
   * false
   */
  longWaitEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the filler word configuration is enabled.
   * 
   * @example
   * false
   */
  miniPlaybackEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the graceful barge-in configuration is enabled. This value is always false for large models.
   * 
   * @example
   * false
   */
  newBargeInEnable?: boolean;
  /**
   * @remarks
   * The robot access type. If the scenario is a small model scenario, this field is empty. If the scenario is a large model scenario, this field is Managed.
   * 
   * @example
   * Empty or Managed
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The robot engine. If the scenario is a small model scenario, this field is empty. If the scenario is a large model scenario, this field is Prompts.
   * 
   * @example
   * Empty or Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * The Function Compute service mode configuration.
   */
  nluProfile?: ListScriptsResponseBodyScriptsListNluProfile;
  /**
   * @remarks
   * The reason for rejection.
   * 
   * @example
   * Non-compliant script wording
   */
  rejectReason?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * Telesales
   */
  scene?: string;
  /**
   * @remarks
   * The script description.
   * 
   * @example
   * Telesales script
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
   * Telesales script
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
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578965079000
   */
  updateTime?: number;
  /**
   * @remarks
   * The robot workspace ID.
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
   * The array of scripts.
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
   * The message returned by the API.
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
   * The list of scripts.
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

