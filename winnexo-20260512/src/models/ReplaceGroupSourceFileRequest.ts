// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceGroupSourceFileRequest extends $dara.Model {
  /**
   * @remarks
   * 新文件名；省略或空字符串保留原文件名，用户自定义展示名沿用现有保护规则
   * 
   * @example
   * example
   */
  fileName?: string;
  /**
   * @remarks
   * 已上传新文件的 OSS 持久化地址，使用上传接口返回值
   * 
   * This parameter is required.
   * 
   * @example
   * oss://example/new.txt
   */
  filePath?: string;
  /**
   * @remarks
   * 已上传新文件的访问 URL，可能携带临时签名
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/new.txt
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * 已上传新文件的文件记录 ID
   * 
   * This parameter is required.
   * 
   * @example
   * file_example
   */
  fileRecordId?: string;
  /**
   * @remarks
   * 是否等待解析完成；默认 false 异步受理，true 同步等待，网关超时 300000ms
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * 资料所属协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * 当前空间物理 GROUP 资料 ID；引用资料只读
   * 
   * This parameter is required.
   * 
   * @example
   * source_example
   */
  sourceId?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
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
      groupId: 'groupId',
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
      groupId: 'string',
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

