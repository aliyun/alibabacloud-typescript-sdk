// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKBSyncLinkRequest extends $dara.Model {
  clientId?: string;
  clientSecret?: string;
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
   * pkbl-xxxxx
   */
  linkId?: string;
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
  syncEnabled?: boolean;
  /**
   * @example
   * 20
   */
  syncIntervalMinutes?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      knowledgeBaseId: 'KnowledgeBaseId',
      linkId: 'LinkId',
      mcpEndpoint: 'McpEndpoint',
      regionId: 'RegionId',
      sheetMcpEndpoint: 'SheetMcpEndpoint',
      syncEnabled: 'SyncEnabled',
      syncIntervalMinutes: 'SyncIntervalMinutes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      knowledgeBaseId: 'string',
      linkId: 'string',
      mcpEndpoint: 'string',
      regionId: 'string',
      sheetMcpEndpoint: 'string',
      syncEnabled: 'boolean',
      syncIntervalMinutes: 'number',
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

