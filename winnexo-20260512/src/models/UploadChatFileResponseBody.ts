// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadChatFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 文件 MIME 类型
   * 
   * @example
   * string_value
   */
  contentType?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * 文件公开访问 URL（有效期 1 小时）
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * 文件记录 ID
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * 文件 remote_url（入库路径）
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  fileUrl?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * OSS 对象路径
   * 
   * @example
   * string_value
   */
  objectName?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 签名上传 URL（本接口为后端直传，该字段为空）
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  uploadSignatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      contentType: 'contentType',
      fileName: 'fileName',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      fileUrl: 'fileUrl',
      message: 'message',
      objectName: 'objectName',
      requestId: 'requestId',
      uploadSignatureUrl: 'uploadSignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contentType: 'string',
      fileName: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      fileUrl: 'string',
      message: 'string',
      objectName: 'string',
      requestId: 'string',
      uploadSignatureUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

