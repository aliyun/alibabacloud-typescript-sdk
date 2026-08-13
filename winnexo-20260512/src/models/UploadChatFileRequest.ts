// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadChatFileRequest extends $dara.Model {
  /**
   * @remarks
   * 文件 MIME 类型（可选，不传时按 application/octet-stream 处理）
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * 原始文件名（含后缀，如 report.pdf）。中转生成的 OSS 地址不携带原始文件名，后端据此确定文件后缀与展示名
   * 
   * This parameter is required.
   * 
   * @example
   * report.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * 文件的 OSS 地址。使用 SDK 的 UploadChatFileAdvance 方法时由 SDK 中转上传后自动回填；直接调用本 API 时需自行传入可被服务端访问的 OSS 地址
   * 
   * This parameter is required.
   * 
   * @example
   * http://winnexo-file-transfer.oss-cn-hangzhou.aliyuncs.com/openapi/2026-08-06/9f8c2a1b
   */
  fileUrl?: string;
  /**
   * @remarks
   * Agent 命名空间标识
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
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
      contentType: 'contentType',
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      fileName: 'string',
      fileUrl: 'string',
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

