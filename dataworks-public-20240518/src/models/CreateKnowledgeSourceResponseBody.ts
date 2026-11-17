// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeSourceResponseBodyDataDataSource extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks data source. The server uses this ID to resolve the associated workspace, environment, and data source type.
   * 
   * @example
   * 12345
   */
  dataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyDataDocumentDingTalk extends $dara.Model {
  /**
   * @remarks
   * The ID of the Feishu or Lark application. This is not the AppSecret.
   * 
   * @example
   * app-001
   */
  appId?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization settings.
   */
  sourceUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sourceUrls: 'SourceUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      sourceUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceUrls)) {
      $dara.Model.validateArray(this.sourceUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyDataDocumentFeishu extends $dara.Model {
  /**
   * @remarks
   * The ID of the Feishu or Lark application. This is not the AppSecret.
   * 
   * @example
   * app-001
   */
  appId?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization settings.
   */
  sourceUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sourceUrls: 'SourceUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      sourceUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceUrls)) {
      $dara.Model.validateArray(this.sourceUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyDataDocumentLark extends $dara.Model {
  /**
   * @remarks
   * The ID of the Feishu or Lark application. This is not the AppSecret.
   * 
   * @example
   * app-001
   */
  appId?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization settings.
   */
  sourceUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sourceUrls: 'SourceUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      sourceUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceUrls)) {
      $dara.Model.validateArray(this.sourceUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyDataDocumentWeComSpaces extends $dara.Model {
  /**
   * @remarks
   * The identity of the shared space.
   * 
   * @example
   * space-001
   */
  spaceId?: string;
  /**
   * @remarks
   * The display name verified by the server. This field is not used for identity verification.
   * 
   * @example
   * R&D Knowledge
   */
  spaceName?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      spaceName: 'SpaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      spaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyDataDocumentWeCom extends $dara.Model {
  /**
   * @remarks
   * The ID of the WeCom bot.
   * 
   * @example
   * bot-001
   */
  botId?: string;
  /**
   * @remarks
   * The selected shared spaces, including their identities and display names.
   */
  spaces?: CreateKnowledgeSourceResponseBodyDataDocumentWeComSpaces[];
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      spaces: 'Spaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      spaces: { 'type': 'array', 'itemType': CreateKnowledgeSourceResponseBodyDataDocumentWeComSpaces },
    };
  }

  validate() {
    if(Array.isArray(this.spaces)) {
      $dara.Model.validateArray(this.spaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyDataDocumentYuqueTeams extends $dara.Model {
  /**
   * @remarks
   * The URL of the team site.
   * 
   * @example
   * https://www.yuque.com
   */
  host?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization settings.
   */
  sourceUrls?: string[];
  /**
   * @remarks
   * The team ID verified by the server.
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * The team logon name. This is read-only display information.
   * 
   * @example
   * example-team
   */
  teamLogin?: string;
  /**
   * @remarks
   * The team name. This is read-only display information.
   * 
   * @example
   * Sample Team
   */
  teamName?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      sourceUrls: 'SourceUrls',
      teamId: 'TeamId',
      teamLogin: 'TeamLogin',
      teamName: 'TeamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      sourceUrls: { 'type': 'array', 'itemType': 'string' },
      teamId: 'string',
      teamLogin: 'string',
      teamName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceUrls)) {
      $dara.Model.validateArray(this.sourceUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyDataDocumentYuque extends $dara.Model {
  /**
   * @remarks
   * The Yuque team configurations. Each team independently selects the synchronization scope.
   */
  teams?: CreateKnowledgeSourceResponseBodyDataDocumentYuqueTeams[];
  static names(): { [key: string]: string } {
    return {
      teams: 'Teams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teams: { 'type': 'array', 'itemType': CreateKnowledgeSourceResponseBodyDataDocumentYuqueTeams },
    };
  }

  validate() {
    if(Array.isArray(this.teams)) {
      $dara.Model.validateArray(this.teams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyDataDocument extends $dara.Model {
  /**
   * @remarks
   * The type of the connector. Valid values: DINGTALK, FEISHU, LARK, WECOM, and YUQUE. The connector type cannot be changed after creation.
   * 
   * @example
   * WECOM
   */
  connectorType?: string;
  /**
   * @remarks
   * Indicates whether the credentials required for the connector are configured. This field is read-only and does not return the credential content or ciphertext.
   */
  credentialConfigured?: boolean;
  /**
   * @remarks
   * The DingTalk configuration. This parameter is available only when ConnectorType is set to DINGTALK.
   */
  dingTalk?: CreateKnowledgeSourceResponseBodyDataDocumentDingTalk;
  /**
   * @remarks
   * The Feishu configuration. This parameter is available only when ConnectorType is set to FEISHU.
   */
  feishu?: CreateKnowledgeSourceResponseBodyDataDocumentFeishu;
  /**
   * @remarks
   * The Lark configuration. This parameter is available only when ConnectorType is set to LARK.
   */
  lark?: CreateKnowledgeSourceResponseBodyDataDocumentLark;
  /**
   * @remarks
   * The WeCom configuration. This parameter is available only when ConnectorType is set to WECOM.
   */
  weCom?: CreateKnowledgeSourceResponseBodyDataDocumentWeCom;
  /**
   * @remarks
   * The Yuque configuration. This parameter is available only when ConnectorType is set to YUQUE.
   */
  yuque?: CreateKnowledgeSourceResponseBodyDataDocumentYuque;
  static names(): { [key: string]: string } {
    return {
      connectorType: 'ConnectorType',
      credentialConfigured: 'CredentialConfigured',
      dingTalk: 'DingTalk',
      feishu: 'Feishu',
      lark: 'Lark',
      weCom: 'WeCom',
      yuque: 'Yuque',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorType: 'string',
      credentialConfigured: 'boolean',
      dingTalk: CreateKnowledgeSourceResponseBodyDataDocumentDingTalk,
      feishu: CreateKnowledgeSourceResponseBodyDataDocumentFeishu,
      lark: CreateKnowledgeSourceResponseBodyDataDocumentLark,
      weCom: CreateKnowledgeSourceResponseBodyDataDocumentWeCom,
      yuque: CreateKnowledgeSourceResponseBodyDataDocumentYuque,
    };
  }

  validate() {
    if(this.dingTalk && typeof (this.dingTalk as any).validate === 'function') {
      (this.dingTalk as any).validate();
    }
    if(this.feishu && typeof (this.feishu as any).validate === 'function') {
      (this.feishu as any).validate();
    }
    if(this.lark && typeof (this.lark as any).validate === 'function') {
      (this.lark as any).validate();
    }
    if(this.weCom && typeof (this.weCom as any).validate === 'function') {
      (this.weCom as any).validate();
    }
    if(this.yuque && typeof (this.yuque as any).validate === 'function') {
      (this.yuque as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyDataProject extends $dara.Model {
  /**
   * @remarks
   * The environment type. This parameter is optional and restricts the read environment to Dev or Prod. If this parameter is not specified, it does not mean that you have the permissions to read data from both environments.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. This field is used to locate the source.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1790200000000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator. This field is written by the server.
   * 
   * @example
   * 1000000000000000
   */
  createUser?: string;
  /**
   * @remarks
   * This field is present only when Type is DATA_SOURCE.
   */
  dataSource?: CreateKnowledgeSourceResponseBodyDataDataSource;
  /**
   * @remarks
   * The description of the source’s purpose. This field is optional.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * This field is present only when Type is DOCUMENT.
   */
  document?: CreateKnowledgeSourceResponseBodyDataDocument;
  /**
   * @remarks
   * The ID of the knowledge base to which the source belongs. The source cannot be migrated to another knowledge base after creation.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The last modification time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1790200300000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name used to identify the source.
   * 
   * @example
   * Sales topic project
   */
  name?: string;
  /**
   * @remarks
   * This field is present only when Type is PROJECT.
   */
  project?: CreateKnowledgeSourceResponseBodyDataProject;
  /**
   * @remarks
   * The stable source ID generated by the service.
   * 
   * @example
   * src-001
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the source. Valid values: PROJECT (workspace), DATA_SOURCE (DataWorks data source), and DOCUMENT (external document source).
   * 
   * @example
   * PROJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSource: 'DataSource',
      description: 'Description',
      document: 'Document',
      knowledgeBaseId: 'KnowledgeBaseId',
      modifyTime: 'ModifyTime',
      name: 'Name',
      project: 'Project',
      sourceId: 'SourceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      dataSource: CreateKnowledgeSourceResponseBodyDataDataSource,
      description: 'string',
      document: CreateKnowledgeSourceResponseBodyDataDocument,
      knowledgeBaseId: 'string',
      modifyTime: 'number',
      name: 'string',
      project: CreateKnowledgeSourceResponseBodyDataProject,
      sourceId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. It is used to determine the error type when the request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned upon success.
   */
  data?: CreateKnowledgeSourceResponseBodyData;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateKnowledgeSourceResponseBodyData,
      message: 'string',
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

