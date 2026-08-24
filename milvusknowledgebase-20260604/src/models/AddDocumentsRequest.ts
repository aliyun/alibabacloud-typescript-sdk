// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDocumentsRequestDedup extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable content deduplication.
   * 
   * @example
   * true
   */
  contentDedup?: boolean;
  /**
   * @remarks
   * Specifies whether to enable document name deduplication.
   * 
   * @example
   * true
   */
  docNameDedup?: boolean;
  static names(): { [key: string]: string } {
    return {
      contentDedup: 'ContentDedup',
      docNameDedup: 'DocNameDedup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentDedup: 'boolean',
      docNameDedup: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDocumentsRequestDocuments extends $dara.Model {
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * CHANGELOG.md
   */
  name?: string;
  /**
   * @remarks
   * The document path. This is the file name or relative path used during upload, which must be consistent with the pre-signed request.
   * 
   * @example
   * 2026_06_23_17_49_52WwGSUezpG2u2iHWxyYGzkf9KtormhkxN/CHANGELOG.md
   */
  path?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 1024
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDocumentsRequestDingTalkConfiguration extends $dara.Model {
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   * 
   * @example
   * ignore
   */
  appId?: string;
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   * 
   * @example
   * ignore
   */
  appPassword?: string;
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   * 
   * @example
   * ignore
   */
  dingDocMcpLink?: string;
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   * 
   * @example
   * ignore
   */
  dingTableMcpLink?: string;
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   * 
   * @example
   * ignore
   */
  knowledgeId?: string;
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   * 
   * @example
   * ignore
   */
  knowledgeType?: string;
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   * 
   * @example
   * ignore
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appPassword: 'appPassword',
      dingDocMcpLink: 'dingDocMcpLink',
      dingTableMcpLink: 'dingTableMcpLink',
      knowledgeId: 'knowledgeId',
      knowledgeType: 'knowledgeType',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appPassword: 'string',
      dingDocMcpLink: 'string',
      dingTableMcpLink: 'string',
      knowledgeId: 'string',
      knowledgeType: 'string',
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

export class AddDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * The deduplication configuration.
   */
  dedup?: AddDocumentsRequestDedup;
  /**
   * @remarks
   * The list of documents.
   */
  documents?: AddDocumentsRequestDocuments[];
  /**
   * @remarks
   * The import type.
   * 
   * @example
   * LOCAL_UPLOAD
   */
  importType?: string;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * @example
   * kb-3bd02617e9be335f
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The batch label configuration. The key must be a label field defined in the knowledge base. The value supports string, int64, float32, bool, and list types.
   * 
   * @example
   * {"department":"legal","topics":["policy","contract"],"reviewed":true}
   */
  metaFields?: any;
  /**
   * @remarks
   * The ID of the processing strategy.
   * 
   * @example
   * kb-strategy-7043984ca395eabd
   */
  strategyId?: string;
  /**
   * @remarks
   * Not supported. Ignore this parameter.
   */
  dingTalkConfiguration?: AddDocumentsRequestDingTalkConfiguration;
  /**
   * @remarks
   * Defaults to root when omitted.
   * 
   * @example
   * root
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      dedup: 'Dedup',
      documents: 'Documents',
      importType: 'ImportType',
      knowledgeBaseId: 'KnowledgeBaseId',
      metaFields: 'MetaFields',
      strategyId: 'StrategyId',
      dingTalkConfiguration: 'dingTalkConfiguration',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedup: AddDocumentsRequestDedup,
      documents: { 'type': 'array', 'itemType': AddDocumentsRequestDocuments },
      importType: 'string',
      knowledgeBaseId: 'string',
      metaFields: 'any',
      strategyId: 'string',
      dingTalkConfiguration: AddDocumentsRequestDingTalkConfiguration,
      parentId: 'string',
    };
  }

  validate() {
    if(this.dedup && typeof (this.dedup as any).validate === 'function') {
      (this.dedup as any).validate();
    }
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    if(this.dingTalkConfiguration && typeof (this.dingTalkConfiguration as any).validate === 'function') {
      (this.dingTalkConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

