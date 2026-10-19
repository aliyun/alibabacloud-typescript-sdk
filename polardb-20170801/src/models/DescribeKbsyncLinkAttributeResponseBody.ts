// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKBSyncLinkAttributeResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The validity period of the successful snapshot of Lark group members for fallback reuse, in seconds. This parameter is returned only for FEISHU synchronization links. A value of -1 indicates that the snapshot never expires. A value of 0 indicates that snapshot fallback reuse is disabled. A positive integer indicates the maximum age of the snapshot allowed for reuse. The valid value configured for the link is returned. If no value is configured, the default value -1 is returned.
   * 
   * @example
   * -1
   */
  feishuChatMemberStaleTtlSeconds?: number;
  /**
   * @remarks
   * The ID of the DingTalk user who performs the operation. This parameter is returned only for DINGTALK synchronization links.
   * 
   * @example
   * manager123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      feishuChatMemberStaleTtlSeconds: 'FeishuChatMemberStaleTtlSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feishuChatMemberStaleTtlSeconds: 'number',
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

export class DescribeKBSyncLinkAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The client ID of the source application.
   * 
   * @example
   * cli_a123456
   */
  clientId?: string;
  /**
   * @remarks
   * The synchronization configuration whitelist returned based on the source type. For DINGTALK, UserId can be returned. For FEISHU, FeishuChatMemberStaleTtlSeconds can be returned.
   */
  config?: DescribeKBSyncLinkAttributeResponseBodyConfig;
  /**
   * @remarks
   * The creation time of the synchronization link.
   * 
   * @example
   * 2026-09-22T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the synchronization link.
   * 
   * @example
   * Synchronize Lark knowledge base documents
   */
  description?: string;
  /**
   * @remarks
   * The source channel of the synchronization link. Valid values: OSS, DINGTALK, FEISHU, and SHAREPOINT.
   * 
   * @example
   * FEISHU
   */
  imPlatform?: string;
  /**
   * @remarks
   * The unique identifier of the synchronization link.
   * 
   * @example
   * pkbl-123456
   */
  linkId?: string;
  /**
   * @remarks
   * The name of the synchronization link.
   * 
   * @example
   * feishu-doc-sync
   */
  linkName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-1234567890ab
   */
  requestId?: string;
  /**
   * @remarks
   * The source directory.
   * 
   * @example
   * /documents
   */
  sourceDir?: string;
  /**
   * @remarks
   * The automatic synchronization interval, in minutes.
   * 
   * @example
   * 60
   */
  syncIntervalMinutes?: number;
  /**
   * @remarks
   * The status of the synchronization link.
   * 
   * @example
   * RUNNING
   */
  syncStatus?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      config: 'Config',
      creationTime: 'CreationTime',
      description: 'Description',
      imPlatform: 'ImPlatform',
      linkId: 'LinkId',
      linkName: 'LinkName',
      requestId: 'RequestId',
      sourceDir: 'SourceDir',
      syncIntervalMinutes: 'SyncIntervalMinutes',
      syncStatus: 'SyncStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      config: DescribeKBSyncLinkAttributeResponseBodyConfig,
      creationTime: 'string',
      description: 'string',
      imPlatform: 'string',
      linkId: 'string',
      linkName: 'string',
      requestId: 'string',
      sourceDir: 'string',
      syncIntervalMinutes: 'number',
      syncStatus: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

