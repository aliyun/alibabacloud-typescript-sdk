// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadChatFileByBase64Request extends $dara.Model {
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
   * 标准 Base64 文件内容，不含 data URI 前缀
   * 
   * This parameter is required.
   * 
   * @example
   * YWJj
   */
  fileContentBase64?: string;
  /**
   * @remarks
   * 原始文件名（含后缀）
   * 
   * This parameter is required.
   * 
   * @example
   * report.pdf
   */
  fileName?: string;
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
      fileContentBase64: 'fileContentBase64',
      fileName: 'fileName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      fileContentBase64: 'string',
      fileName: 'string',
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

