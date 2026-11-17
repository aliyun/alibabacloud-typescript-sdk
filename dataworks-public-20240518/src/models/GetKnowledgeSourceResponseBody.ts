// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeSourceResponseBodyDataDataSource extends $dara.Model {
  /**
   * @remarks
   * The DataWorks data source ID. The server uses this ID to resolve the associated workspace, environment, and data source type.
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

export class GetKnowledgeSourceResponseBodyDataDocumentDingTalk extends $dara.Model {
  /**
   * @remarks
   * The Feishu or Lark application ID. This is not the AppSecret.
   * 
   * @example
   * app-001
   */
  appId?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization.
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

export class GetKnowledgeSourceResponseBodyDataDocumentFeishu extends $dara.Model {
  /**
   * @remarks
   * The Feishu or Lark application ID. This is not the AppSecret.
   * 
   * @example
   * app-001
   */
  appId?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization.
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

export class GetKnowledgeSourceResponseBodyDataDocumentLark extends $dara.Model {
  /**
   * @remarks
   * The Feishu or Lark application ID. This is not the AppSecret.
   * 
   * @example
   * app-001
   */
  appId?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization.
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

export class GetKnowledgeSourceResponseBodyDataDocumentWeComSpaces extends $dara.Model {
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
   * R&D knowledge
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

export class GetKnowledgeSourceResponseBodyDataDocumentWeCom extends $dara.Model {
  /**
   * @remarks
   * The WeCom bot ID.
   * 
   * @example
   * bot-001
   */
  botId?: string;
  /**
   * @remarks
   * The selected shared spaces, including their identities and display names.
   */
  spaces?: GetKnowledgeSourceResponseBodyDataDocumentWeComSpaces[];
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      spaces: 'Spaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      spaces: { 'type': 'array', 'itemType': GetKnowledgeSourceResponseBodyDataDocumentWeComSpaces },
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

export class GetKnowledgeSourceResponseBodyDataDocumentYuqueTeams extends $dara.Model {
  /**
   * @remarks
   * The team site address.
   * 
   * @example
   * https://www.yuque.com
   */
  host?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization.
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
   * Sample team
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

export class GetKnowledgeSourceResponseBodyDataDocumentYuque extends $dara.Model {
  /**
   * @remarks
   * The Yuque team configuration. Each team independently selects the synchronization scope.
   */
  teams?: GetKnowledgeSourceResponseBodyDataDocumentYuqueTeams[];
  static names(): { [key: string]: string } {
    return {
      teams: 'Teams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teams: { 'type': 'array', 'itemType': GetKnowledgeSourceResponseBodyDataDocumentYuqueTeams },
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

export class GetKnowledgeSourceResponseBodyDataDocument extends $dara.Model {
  /**
   * @remarks
   * The connector type. Valid values: DINGTALK, FEISHU, LARK, WECOM, and YUQUE. The connector type cannot be changed after creation.
   * 
   * @example
   * WECOM
   */
  connectorType?: string;
  /**
   * @remarks
   * Indicates whether the credentials required for the connector are configured. This is a read-only field and does not return the credential content or ciphertext.
   */
  credentialConfigured?: boolean;
  /**
   * @remarks
   * The DingTalk configuration. This field exists only when the connector type is DingTalk.
   */
  dingTalk?: GetKnowledgeSourceResponseBodyDataDocumentDingTalk;
  /**
   * @remarks
   * The Feishu configuration. This field exists only when the connector type is Feishu.
   */
  feishu?: GetKnowledgeSourceResponseBodyDataDocumentFeishu;
  /**
   * @remarks
   * The Lark configuration. This field exists only when the connector type is Lark.
   */
  lark?: GetKnowledgeSourceResponseBodyDataDocumentLark;
  /**
   * @remarks
   * The WeCom configuration. This field exists only when the connector type is WeCom.
   */
  weCom?: GetKnowledgeSourceResponseBodyDataDocumentWeCom;
  /**
   * @remarks
   * The Yuque configuration. This field exists only when the connector type is Yuque.
   */
  yuque?: GetKnowledgeSourceResponseBodyDataDocumentYuque;
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
      dingTalk: GetKnowledgeSourceResponseBodyDataDocumentDingTalk,
      feishu: GetKnowledgeSourceResponseBodyDataDocumentFeishu,
      lark: GetKnowledgeSourceResponseBodyDataDocumentLark,
      weCom: GetKnowledgeSourceResponseBodyDataDocumentWeCom,
      yuque: GetKnowledgeSourceResponseBodyDataDocumentYuque,
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

export class GetKnowledgeSourceResponseBodyDataProject extends $dara.Model {
  /**
   * @remarks
   * The optional environment type that restricts read access to Dev or Prod. If this field is not specified, it does not mean that cross-environment read access is granted.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. This is a source location field.
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

export class GetKnowledgeSourceResponseBodyData extends $dara.Model {
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
   * The data source information. This field exists only when Type is set to DATA_SOURCE.
   */
  dataSource?: GetKnowledgeSourceResponseBodyDataDataSource;
  /**
   * @remarks
   * The optional description of the purpose.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The document information. This field exists only when Type is set to DOCUMENT.
   */
  document?: GetKnowledgeSourceResponseBodyDataDocument;
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
   * The name used by users to identify the source.
   * 
   * @example
   * Sales topic project
   */
  name?: string;
  /**
   * @remarks
   * The project information. This field exists only when Type is set to PROJECT.
   */
  project?: GetKnowledgeSourceResponseBodyDataProject;
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
   * The source type. Valid values: PROJECT (workspace), DATA_SOURCE (DataWorks data source), and DOCUMENT (external document source).
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
      dataSource: GetKnowledgeSourceResponseBodyDataDataSource,
      description: 'string',
      document: GetKnowledgeSourceResponseBodyDataDocument,
      knowledgeBaseId: 'string',
      modifyTime: 'number',
      name: 'string',
      project: GetKnowledgeSourceResponseBodyDataProject,
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

export class GetKnowledgeSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. You can use this code to determine the error type when a request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: GetKnowledgeSourceResponseBodyData;
  /**
   * @remarks
   * The security error message returned when the request fails.
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
      data: GetKnowledgeSourceResponseBodyData,
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

