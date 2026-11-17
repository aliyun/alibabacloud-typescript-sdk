// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeSourceRequestDataSource extends $dara.Model {
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

export class CreateKnowledgeSourceRequestDocumentDingTalk extends $dara.Model {
  /**
   * @remarks
   * The MCP authorization credential for the DingTalk document connector. This credential is used only for creation or updates and is not returned in the response.
   * 
   * @example
   * 123456****
   */
  mcpKey?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization settings.
   */
  sourceUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      mcpKey: 'McpKey',
      sourceUrls: 'SourceUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpKey: 'string',
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

export class CreateKnowledgeSourceRequestDocumentFeishu extends $dara.Model {
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
   * The secret of the Feishu or Lark application. This secret is used only for creation or updates and is not returned in the response.
   * 
   * @example
   * 123456****
   */
  appSecret?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization settings.
   */
  sourceUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      sourceUrls: 'SourceUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
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

export class CreateKnowledgeSourceRequestDocumentLark extends $dara.Model {
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
   * The secret of the Feishu or Lark application. This secret is used only for creation or updates and is not returned in the response.
   * 
   * @example
   * 123456****
   */
  appSecret?: string;
  /**
   * @remarks
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization settings.
   */
  sourceUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      sourceUrls: 'SourceUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
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

export class CreateKnowledgeSourceRequestDocumentWeCom extends $dara.Model {
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
   * The secret of the WeCom bot. This secret is used only for creation or updates and is not returned in the response.
   * 
   * @example
   * 123456****
   */
  botSecret?: string;
  /**
   * @remarks
   * The IDs of the shared spaces selected for the WeCom connector.
   */
  spaceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      botSecret: 'BotSecret',
      spaceIds: 'SpaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      botSecret: 'string',
      spaceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.spaceIds)) {
      $dara.Model.validateArray(this.spaceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeSourceRequestDocumentYuqueTeams extends $dara.Model {
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
   * The access token for the Yuque team. This token is used only for creation or updates and is not returned in the response.
   * 
   * @example
   * 123456****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      sourceUrls: 'SourceUrls',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      sourceUrls: { 'type': 'array', 'itemType': 'string' },
      token: 'string',
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

export class CreateKnowledgeSourceRequestDocumentYuque extends $dara.Model {
  /**
   * @remarks
   * The Yuque team configurations. Each team independently selects the synchronization scope.
   */
  teams?: CreateKnowledgeSourceRequestDocumentYuqueTeams[];
  static names(): { [key: string]: string } {
    return {
      teams: 'Teams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teams: { 'type': 'array', 'itemType': CreateKnowledgeSourceRequestDocumentYuqueTeams },
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

export class CreateKnowledgeSourceRequestDocument extends $dara.Model {
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
   * The DingTalk configuration. This parameter is available only when ConnectorType is set to DINGTALK.
   */
  dingTalk?: CreateKnowledgeSourceRequestDocumentDingTalk;
  /**
   * @remarks
   * The Feishu configuration. This parameter is available only when ConnectorType is set to FEISHU.
   */
  feishu?: CreateKnowledgeSourceRequestDocumentFeishu;
  /**
   * @remarks
   * The Lark configuration. This parameter is available only when ConnectorType is set to LARK.
   */
  lark?: CreateKnowledgeSourceRequestDocumentLark;
  /**
   * @remarks
   * The WeCom configuration. This parameter is available only when ConnectorType is set to WECOM.
   */
  weCom?: CreateKnowledgeSourceRequestDocumentWeCom;
  /**
   * @remarks
   * The Yuque configuration. This parameter is available only when ConnectorType is set to YUQUE.
   */
  yuque?: CreateKnowledgeSourceRequestDocumentYuque;
  static names(): { [key: string]: string } {
    return {
      connectorType: 'ConnectorType',
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
      dingTalk: CreateKnowledgeSourceRequestDocumentDingTalk,
      feishu: CreateKnowledgeSourceRequestDocumentFeishu,
      lark: CreateKnowledgeSourceRequestDocumentLark,
      weCom: CreateKnowledgeSourceRequestDocumentWeCom,
      yuque: CreateKnowledgeSourceRequestDocumentYuque,
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

export class CreateKnowledgeSourceRequestProject extends $dara.Model {
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

export class CreateKnowledgeSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure idempotence.
   * 
   * @example
   * source-create-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The data source configuration. This parameter is required when Type is set to DATA_SOURCE.
   */
  dataSource?: CreateKnowledgeSourceRequestDataSource;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The document configuration. This parameter is required when Type is set to DOCUMENT.
   */
  document?: CreateKnowledgeSourceRequestDocument;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The name of the source.
   * 
   * This parameter is required.
   * 
   * @example
   * Sales topic project
   */
  name?: string;
  /**
   * @remarks
   * The project configuration. This parameter is required when Type is set to PROJECT.
   */
  project?: CreateKnowledgeSourceRequestProject;
  /**
   * @remarks
   * The type of the knowledge source. Valid values: PROJECT, DATA_SOURCE, and DOCUMENT.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataSource: 'DataSource',
      description: 'Description',
      document: 'Document',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      project: 'Project',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataSource: CreateKnowledgeSourceRequestDataSource,
      description: 'string',
      document: CreateKnowledgeSourceRequestDocument,
      knowledgeBaseId: 'string',
      name: 'string',
      project: CreateKnowledgeSourceRequestProject,
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

