// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeSourceRequestDataSource extends $dara.Model {
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

export class UpdateKnowledgeSourceRequestDocumentDingTalk extends $dara.Model {
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
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization.
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

export class UpdateKnowledgeSourceRequestDocumentFeishu extends $dara.Model {
  /**
   * @remarks
   * The application ID of Feishu or Lark. This is not the AppSecret.
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
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization.
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

export class UpdateKnowledgeSourceRequestDocumentLark extends $dara.Model {
  /**
   * @remarks
   * The application ID of Feishu or Lark. This is not the AppSecret.
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
   * The URLs of the knowledge bases, spaces, or documents selected for this connector. The actual allowed scope is determined by the connector and authorization.
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

export class UpdateKnowledgeSourceRequestDocumentWeCom extends $dara.Model {
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

export class UpdateKnowledgeSourceRequestDocumentYuqueTeams extends $dara.Model {
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
   * The Yuque team access credential. This credential is used only for creation or updates and is not returned in the response.
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

export class UpdateKnowledgeSourceRequestDocumentYuque extends $dara.Model {
  /**
   * @remarks
   * The Yuque team configuration. Each team independently selects the synchronization scope.
   */
  teams?: UpdateKnowledgeSourceRequestDocumentYuqueTeams[];
  static names(): { [key: string]: string } {
    return {
      teams: 'Teams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teams: { 'type': 'array', 'itemType': UpdateKnowledgeSourceRequestDocumentYuqueTeams },
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

export class UpdateKnowledgeSourceRequestDocument extends $dara.Model {
  /**
   * @remarks
   * The connector type. Valid values: DINGTALK, FEISHU, LARK, WECOM, and YUQUE. This value cannot be changed after creation.
   * 
   * @example
   * WECOM
   */
  connectorType?: string;
  /**
   * @remarks
   * The DingTalk configuration. This parameter is present only when the connector type is DINGTALK.
   */
  dingTalk?: UpdateKnowledgeSourceRequestDocumentDingTalk;
  /**
   * @remarks
   * The Feishu configuration. This parameter is present only when the connector type is FEISHU.
   */
  feishu?: UpdateKnowledgeSourceRequestDocumentFeishu;
  /**
   * @remarks
   * The Lark configuration. This parameter is present only when the connector type is LARK.
   */
  lark?: UpdateKnowledgeSourceRequestDocumentLark;
  /**
   * @remarks
   * The WeCom configuration. This parameter is present only when the connector type is WECOM.
   */
  weCom?: UpdateKnowledgeSourceRequestDocumentWeCom;
  /**
   * @remarks
   * The Yuque configuration. This parameter is present only when the connector type is YUQUE.
   */
  yuque?: UpdateKnowledgeSourceRequestDocumentYuque;
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
      dingTalk: UpdateKnowledgeSourceRequestDocumentDingTalk,
      feishu: UpdateKnowledgeSourceRequestDocumentFeishu,
      lark: UpdateKnowledgeSourceRequestDocumentLark,
      weCom: UpdateKnowledgeSourceRequestDocumentWeCom,
      yuque: UpdateKnowledgeSourceRequestDocumentYuque,
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

export class UpdateKnowledgeSourceRequestProject extends $dara.Model {
  /**
   * @remarks
   * Optional. Limits the read environment to Dev or Prod. If this parameter is not specified, cross-environment read access is not granted.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The DataWorks workspace ID, which is used to locate the source.
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

export class UpdateKnowledgeSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The complete configuration for Type=DATA_SOURCE.
   */
  dataSource?: UpdateKnowledgeSourceRequestDataSource;
  /**
   * @remarks
   * The new description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The complete configuration for Type=DOCUMENT. Credentials are not returned after they are written.
   */
  document?: UpdateKnowledgeSourceRequestDocument;
  /**
   * @remarks
   * The ID of the knowledge base to which the source belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The new name.
   * 
   * @example
   * Sales Project
   */
  name?: string;
  /**
   * @remarks
   * The complete configuration for Type=PROJECT.
   */
  project?: UpdateKnowledgeSourceRequestProject;
  /**
   * @remarks
   * The source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * src-001
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      description: 'Description',
      document: 'Document',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      project: 'Project',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: UpdateKnowledgeSourceRequestDataSource,
      description: 'string',
      document: UpdateKnowledgeSourceRequestDocument,
      knowledgeBaseId: 'string',
      name: 'string',
      project: UpdateKnowledgeSourceRequestProject,
      sourceId: 'string',
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

