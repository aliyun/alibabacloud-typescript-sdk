// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeSourcesResponseBodyDataSourcesDataSource extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks data source. The server uses this ID to resolve the workspace, environment, and data source type.
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

export class ListKnowledgeSourcesResponseBodyDataSourcesDocumentDingTalk extends $dara.Model {
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

export class ListKnowledgeSourcesResponseBodyDataSourcesDocumentFeishu extends $dara.Model {
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

export class ListKnowledgeSourcesResponseBodyDataSourcesDocumentLark extends $dara.Model {
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

export class ListKnowledgeSourcesResponseBodyDataSourcesDocumentWeComSpaces extends $dara.Model {
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

export class ListKnowledgeSourcesResponseBodyDataSourcesDocumentWeCom extends $dara.Model {
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
  spaces?: ListKnowledgeSourcesResponseBodyDataSourcesDocumentWeComSpaces[];
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      spaces: 'Spaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      spaces: { 'type': 'array', 'itemType': ListKnowledgeSourcesResponseBodyDataSourcesDocumentWeComSpaces },
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

export class ListKnowledgeSourcesResponseBodyDataSourcesDocumentYuqueTeams extends $dara.Model {
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

export class ListKnowledgeSourcesResponseBodyDataSourcesDocumentYuque extends $dara.Model {
  /**
   * @remarks
   * The Yuque team configurations. Each team independently selects the synchronization scope.
   */
  teams?: ListKnowledgeSourcesResponseBodyDataSourcesDocumentYuqueTeams[];
  static names(): { [key: string]: string } {
    return {
      teams: 'Teams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teams: { 'type': 'array', 'itemType': ListKnowledgeSourcesResponseBodyDataSourcesDocumentYuqueTeams },
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

export class ListKnowledgeSourcesResponseBodyDataSourcesDocument extends $dara.Model {
  /**
   * @remarks
   * The connector type. Valid values: DINGTALK, FEISHU, LARK, WECOM, or YUQUE. The connector type cannot be changed after the source is created.
   * 
   * @example
   * WECOM
   */
  connectorType?: string;
  /**
   * @remarks
   * Indicates whether the credentials required by the connector are configured. This field is read-only, and the credential content or ciphertext is not returned.
   */
  credentialConfigured?: boolean;
  /**
   * @remarks
   * The DingTalk configuration. This field is available only when the connector type is DingTalk.
   */
  dingTalk?: ListKnowledgeSourcesResponseBodyDataSourcesDocumentDingTalk;
  /**
   * @remarks
   * The Feishu configuration. This field is available only when the connector type is Feishu.
   */
  feishu?: ListKnowledgeSourcesResponseBodyDataSourcesDocumentFeishu;
  /**
   * @remarks
   * The Lark configuration. This field is available only when the connector type is Lark.
   */
  lark?: ListKnowledgeSourcesResponseBodyDataSourcesDocumentLark;
  /**
   * @remarks
   * The WeCom configuration. This field is available only when the connector type is WeCom.
   */
  weCom?: ListKnowledgeSourcesResponseBodyDataSourcesDocumentWeCom;
  /**
   * @remarks
   * The Yuque configuration. This field is available only when the connector type is Yuque.
   */
  yuque?: ListKnowledgeSourcesResponseBodyDataSourcesDocumentYuque;
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
      dingTalk: ListKnowledgeSourcesResponseBodyDataSourcesDocumentDingTalk,
      feishu: ListKnowledgeSourcesResponseBodyDataSourcesDocumentFeishu,
      lark: ListKnowledgeSourcesResponseBodyDataSourcesDocumentLark,
      weCom: ListKnowledgeSourcesResponseBodyDataSourcesDocumentWeCom,
      yuque: ListKnowledgeSourcesResponseBodyDataSourcesDocumentYuque,
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

export class ListKnowledgeSourcesResponseBodyDataSourcesProject extends $dara.Model {
  /**
   * @remarks
   * The environment type. This optional field restricts the read environment to Dev or Prod. If this field is not specified, it does not mean that you have the permissions to read both environments.
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

export class ListKnowledgeSourcesResponseBodyDataSources extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1790200400000
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
   * The data source information. This field is available only when Type is set to DATA_SOURCE.
   */
  dataSource?: ListKnowledgeSourcesResponseBodyDataSourcesDataSource;
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
   * The document information. This field is available only when Type is set to DOCUMENT.
   */
  document?: ListKnowledgeSourcesResponseBodyDataSourcesDocument;
  /**
   * @remarks
   * The ID of the knowledge base to which the source belongs. The source cannot be migrated to another knowledge base after it is created.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The last modification time. The value is a UNIX timestamp in milliseconds.
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
   * Sales Topic Project
   */
  name?: string;
  /**
   * @remarks
   * The project information. This field is available only when Type is set to PROJECT.
   */
  project?: ListKnowledgeSourcesResponseBodyDataSourcesProject;
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
   * The source type. Valid values: PROJECT (workspace), DATA_SOURCE (DataWorks data source), or DOCUMENT (external document source).
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
      dataSource: ListKnowledgeSourcesResponseBodyDataSourcesDataSource,
      description: 'string',
      document: ListKnowledgeSourcesResponseBodyDataSourcesDocument,
      knowledgeBaseId: 'string',
      modifyTime: 'number',
      name: 'string',
      project: ListKnowledgeSourcesResponseBodyDataSourcesProject,
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

export class ListKnowledgeSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination token for the next page. If no next page exists, the value is null.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The knowledge sources that you have permission to read on the current page.
   */
  sources?: ListKnowledgeSourcesResponseBodyDataSources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      sources: { 'type': 'array', 'itemType': ListKnowledgeSourcesResponseBodyDataSources },
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. This code is used to determine the error type when the request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: ListKnowledgeSourcesResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
      maxResults: 'MaxResults',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListKnowledgeSourcesResponseBodyData,
      maxResults: 'number',
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

