// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKBSyncLinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cli_xxxxxxbe8
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ******
   */
  clientSecret?: string;
  /**
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testName
   */
  linkName?: string;
  mcpEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  sheetMcpEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.feishu.cn/wiki/space/xxxxxx
   */
  sourceDir?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FEISHU
   */
  sourceType?: string;
  /**
   * @example
   * 30
   */
  syncIntervalMinutes?: number;
  /**
   * @example
   * 63eexxxx-xxxx-xxxx-xxxx-xxxxxx090f82
   */
  tenantId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      linkName: 'LinkName',
      mcpEndpoint: 'McpEndpoint',
      regionId: 'RegionId',
      sheetMcpEndpoint: 'SheetMcpEndpoint',
      sourceDir: 'SourceDir',
      sourceType: 'SourceType',
      syncIntervalMinutes: 'SyncIntervalMinutes',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      description: 'string',
      knowledgeBaseId: 'string',
      linkName: 'string',
      mcpEndpoint: 'string',
      regionId: 'string',
      sheetMcpEndpoint: 'string',
      sourceDir: 'string',
      sourceType: 'string',
      syncIntervalMinutes: 'number',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

