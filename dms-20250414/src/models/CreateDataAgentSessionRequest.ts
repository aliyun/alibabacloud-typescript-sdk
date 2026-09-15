// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentSessionRequestSessionConfigMcpHeadersMcpHeader extends $dara.Model {
  /**
   * @remarks
   * The key to add to the header.
   * 
   * @example
   * UserId
   */
  key?: string;
  /**
   * @remarks
   * The value to add to the header.
   * 
   * @example
   * 421****571
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentSessionRequestSessionConfigMcpHeaders extends $dara.Model {
  /**
   * @remarks
   * The MCP header configuration.
   */
  mcpHeader?: CreateDataAgentSessionRequestSessionConfigMcpHeadersMcpHeader[];
  /**
   * @remarks
   * The ID of the MCP server.
   * 
   * @example
   * 1fl4r*****1qi
   */
  mcpServerId?: string;
  static names(): { [key: string]: string } {
    return {
      mcpHeader: 'McpHeader',
      mcpServerId: 'McpServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpHeader: { 'type': 'array', 'itemType': CreateDataAgentSessionRequestSessionConfigMcpHeadersMcpHeader },
      mcpServerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mcpHeader)) {
      $dara.Model.validateArray(this.mcpHeader);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentSessionRequestSessionConfig extends $dara.Model {
  /**
   * @remarks
   * The custom agent ID.
   * 
   * @example
   * ca-e*******ckd
   */
  customAgentId?: string;
  /**
   * @remarks
   * The stage of the custom agent. Valid values:
   * - **debug**: the debugging stage.
   * - **prod**: the production stage.
   * 
   * @example
   * debug
   */
  customAgentStage?: string;
  /**
   * @remarks
   * Specifies whether to enable web search.
   * 
   * @example
   * false
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * The encryption key.
   * 
   * @example
   * null
   */
  encryptKey?: string;
  /**
   * @remarks
   * The encryption type.
   * 
   * @example
   * null
   */
  encryptType?: string;
  /**
   * @remarks
   * The list of knowledge base IDs.
   */
  kbUuidList?: string[];
  /**
   * @remarks
   * The language. Valid values:
   * - **CHINESE**: Chinese.
   * - **ENGLISH**: English.
   * 
   * @example
   * CHINESE
   */
  language?: string;
  /**
   * @remarks
   * The list of MCP header configurations.
   */
  mcpHeaders?: CreateDataAgentSessionRequestSessionConfigMcpHeaders[];
  /**
   * @remarks
   * The list of MCP server IDs in the session configuration.
   */
  mcpServerIds?: string[];
  /**
   * @remarks
   * The mode. Valid values:
   *  - **ASK_DATA**: the data query mode.
   *  - **ANALYSIS**: the analysis mode.
   *  - **INSIGHT**: the insight mode.
   * 
   * @example
   * ANALYSIS
   */
  mode?: string;
  /**
   * @remarks
   * The report page width.
   * 
   * @example
   * 0
   */
  reportPageWidth?: number;
  /**
   * @remarks
   * The report watermark.
   * 
   * @example
   * null
   */
  reportWaterMark?: string;
  /**
   * @remarks
   * The name of the user OSS bucket. Analysis process files and report artifacts can be uploaded to the specified OSS bucket.
   * 
   * @example
   * user-oss-bucket
   */
  userOssBucket?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      customAgentStage: 'CustomAgentStage',
      enableSearch: 'EnableSearch',
      encryptKey: 'EncryptKey',
      encryptType: 'EncryptType',
      kbUuidList: 'KbUuidList',
      language: 'Language',
      mcpHeaders: 'McpHeaders',
      mcpServerIds: 'McpServerIds',
      mode: 'Mode',
      reportPageWidth: 'ReportPageWidth',
      reportWaterMark: 'ReportWaterMark',
      userOssBucket: 'UserOssBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      customAgentStage: 'string',
      enableSearch: 'boolean',
      encryptKey: 'string',
      encryptType: 'string',
      kbUuidList: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      mcpHeaders: { 'type': 'array', 'itemType': CreateDataAgentSessionRequestSessionConfigMcpHeaders },
      mcpServerIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      reportPageWidth: 'number',
      reportWaterMark: 'string',
      userOssBucket: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kbUuidList)) {
      $dara.Model.validateArray(this.kbUuidList);
    }
    if(Array.isArray(this.mcpHeaders)) {
      $dara.Model.validateArray(this.mcpHeaders);
    }
    if(Array.isArray(this.mcpServerIds)) {
      $dara.Model.validateArray(this.mcpServerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * f-8*******01m
   */
  file?: string;
  /**
   * @remarks
   * The session configuration.
   */
  sessionConfig?: CreateDataAgentSessionRequestSessionConfig;
  /**
   * @remarks
   * The title. Chinese and English characters are supported. Maximum length: 128 characters.
   * 
   * @example
   * Help me analyze this data and generate a report
   */
  title?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 12****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      file: 'File',
      sessionConfig: 'SessionConfig',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      file: 'string',
      sessionConfig: CreateDataAgentSessionRequestSessionConfig,
      title: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.sessionConfig && typeof (this.sessionConfig as any).validate === 'function') {
      (this.sessionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

