// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentResponseBodyDataContentExecutionConfig extends $dara.Model {
  skipAskHuman?: boolean;
  /**
   * @example
   * true
   */
  skipPlan?: boolean;
  skipSqlConfirm?: boolean;
  skipWebReportConfirm?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipAskHuman: 'SkipAskHuman',
      skipPlan: 'SkipPlan',
      skipSqlConfirm: 'SkipSqlConfirm',
      skipWebReportConfirm: 'SkipWebReportConfirm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipAskHuman: 'boolean',
      skipPlan: 'boolean',
      skipSqlConfirm: 'boolean',
      skipWebReportConfirm: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentResponseBodyDataContentKnowledgeConfigList extends $dara.Model {
  accessType?: string;
  mcpServerId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      mcpServerId: 'McpServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      mcpServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentResponseBodyDataContent extends $dara.Model {
  /**
   * @example
   * 16738266********
   */
  aliyunParentId?: string;
  /**
   * @example
   * 20372822********
   */
  aliyunUid?: string;
  /**
   * @example
   * HaoY*****
   */
  creatorUserName?: string;
  /**
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  dataJson?: string;
  description?: string;
  /**
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  executionConfig?: ListCustomAgentResponseBodyDataContentExecutionConfig;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtModified?: string;
  instruction?: string;
  knowledge?: string;
  knowledgeConfigList?: ListCustomAgentResponseBodyDataContentKnowledgeConfigList[];
  /**
   * @example
   * 20372822********
   */
  modifier?: string;
  /**
   * @example
   * HaoY*****
   */
  modifierUserName?: string;
  name?: string;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  offlineTime?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  releaseTime?: string;
  /**
   * @example
   * RELEASED
   */
  status?: string;
  textReportConfig?: string;
  webReportConfig?: string;
  /**
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunParentId: 'AliyunParentId',
      aliyunUid: 'AliyunUid',
      creatorUserName: 'CreatorUserName',
      customAgentId: 'CustomAgentId',
      dataJson: 'DataJson',
      description: 'Description',
      dmsUnit: 'DmsUnit',
      executionConfig: 'ExecutionConfig',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instruction: 'Instruction',
      knowledge: 'Knowledge',
      knowledgeConfigList: 'KnowledgeConfigList',
      modifier: 'Modifier',
      modifierUserName: 'ModifierUserName',
      name: 'Name',
      offlineTime: 'OfflineTime',
      region: 'Region',
      releaseTime: 'ReleaseTime',
      status: 'Status',
      textReportConfig: 'TextReportConfig',
      webReportConfig: 'WebReportConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunParentId: 'string',
      aliyunUid: 'string',
      creatorUserName: 'string',
      customAgentId: 'string',
      dataJson: 'string',
      description: 'string',
      dmsUnit: 'string',
      executionConfig: ListCustomAgentResponseBodyDataContentExecutionConfig,
      gmtCreated: 'string',
      gmtModified: 'string',
      instruction: 'string',
      knowledge: 'string',
      knowledgeConfigList: { 'type': 'array', 'itemType': ListCustomAgentResponseBodyDataContentKnowledgeConfigList },
      modifier: 'string',
      modifierUserName: 'string',
      name: 'string',
      offlineTime: 'string',
      region: 'string',
      releaseTime: 'string',
      status: 'string',
      textReportConfig: 'string',
      webReportConfig: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.executionConfig && typeof (this.executionConfig as any).validate === 'function') {
      (this.executionConfig as any).validate();
    }
    if(Array.isArray(this.knowledgeConfigList)) {
      $dara.Model.validateArray(this.knowledgeConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentResponseBodyData extends $dara.Model {
  content?: ListCustomAgentResponseBodyDataContent[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  totalElements?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListCustomAgentResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentResponseBody extends $dara.Model {
  data?: ListCustomAgentResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCustomAgentResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

