// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBasePreSignedUrlRequestDocuments extends $dara.Model {
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
   * contract-2026.md
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

export class GetKnowledgeBasePreSignedUrlRequest extends $dara.Model {
  documents?: GetKnowledgeBasePreSignedUrlRequestDocuments[];
  /**
   * @example
   * 3600
   */
  expiresIn?: number;
  /**
   * @example
   * kb-3bd02617e9be335f
   */
  knowledgeBaseId?: string;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      expiresIn: 'ExpiresIn',
      knowledgeBaseId: 'KnowledgeBaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': GetKnowledgeBasePreSignedUrlRequestDocuments },
      expiresIn: 'number',
      knowledgeBaseId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

