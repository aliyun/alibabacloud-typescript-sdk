// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalFileRequest extends $dara.Model {
  /**
   * @remarks
   * 资源描述（可选）
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 目标个人目录 ID；不传时自动绑定到当前数字员工默认根目录，传入时必须是当前用户在当前数字员工下的已有个人目录
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 文件后缀名（可选，如 pdf、docx）
   * 
   * @example
   * string_value
   */
  fileExt?: string;
  /**
   * @remarks
   * 原始文件名（可选，含后缀）
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * 文件 OSS 持久化地址（必填，对应 settings.file_path）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  filePath?: string;
  /**
   * @remarks
   * 文件公开访问 URL（可选，带签名，对应 settings.file_public_url）
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * 文件记录 ID（可选，对应 settings.file_record_id）
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * 资源显示名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 数字员工名称（已废弃：不再作为个人资源隔离条件，仅保留用于来源追溯）
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      fileExt: 'fileExt',
      fileName: 'fileName',
      filePath: 'filePath',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      fileExt: 'string',
      fileName: 'string',
      filePath: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      name: 'string',
      operatingObjectName: 'string',
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

