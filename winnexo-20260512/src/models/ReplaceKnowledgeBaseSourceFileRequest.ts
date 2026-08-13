// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceKnowledgeBaseSourceFileRequest extends $dara.Model {
  /**
   * @remarks
   * 新文件名（可选；不传或空字符串时保持原文件名）
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * 新文件的 OSS 持久化地址（由上传签名接口返回）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  filePath?: string;
  /**
   * @remarks
   * 新文件的公开访问 URL（可能携带临时签名）
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * 新文件的文件记录 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * 是否同步等待重新解析完成；默认 false，异步入队
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * 待替换的企业知识库 FILE 数据源 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      filePath: 'filePath',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      forceSync: 'forceSync',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      filePath: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      forceSync: 'boolean',
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

