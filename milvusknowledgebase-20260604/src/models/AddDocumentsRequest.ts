// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDocumentsRequestDedup extends $dara.Model {
  /**
   * @example
   * true
   */
  contentDedup?: boolean;
  /**
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
   * @example
   * CHANGELOG.md
   */
  name?: string;
  /**
   * @remarks
   * 本地上传时为预签名上传使用的批次相对路径；不同 ImportType 下含义由导入类型定义。
   * 
   * @example
   * 2026_06_23_17_49_52WwGSUezpG2u2iHWxyYGzkf9KtormhkxN/CHANGELOG.md
   */
  path?: string;
  /**
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
   * @example
   * ignore
   */
  appId?: string;
  /**
   * @example
   * ignore
   */
  appPassword?: string;
  /**
   * @example
   * ignore
   */
  dingDocMcpLink?: string;
  /**
   * @example
   * ignore
   */
  dingTableMcpLink?: string;
  /**
   * @example
   * ignore
   */
  knowledgeId?: string;
  /**
   * @example
   * ignore
   */
  knowledgeType?: string;
  /**
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
  dedup?: AddDocumentsRequestDedup;
  documents?: AddDocumentsRequestDocuments[];
  /**
   * @remarks
   * 当前支持 LOCAL_UPLOAD；OSS_IMPORT 和 PUBLIC_URL 为后续导入方式预留。
   * 
   * @example
   * LOCAL_UPLOAD
   */
  importType?: string;
  /**
   * @example
   * kb-3bd02617e9be335f
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * 导入时批量设置到本批次所有知识数据的标签键值。Key 必须为知识库已定义标签字段；Value 支持 string、int64、float32、bool、list。
   * 
   * @example
   * {"department":"legal","topics":["policy","contract"],"reviewed":true}
   */
  metaFields?: any;
  /**
   * @example
   * kb-strategy-7043984ca395eabd
   */
  strategyId?: string;
  dingTalkConfiguration?: AddDocumentsRequestDingTalkConfiguration;
  static names(): { [key: string]: string } {
    return {
      dedup: 'Dedup',
      documents: 'Documents',
      importType: 'ImportType',
      knowledgeBaseId: 'KnowledgeBaseId',
      metaFields: 'MetaFields',
      strategyId: 'StrategyId',
      dingTalkConfiguration: 'dingTalkConfiguration',
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

