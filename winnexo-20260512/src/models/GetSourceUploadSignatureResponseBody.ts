// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceUploadSignatureResponseBody extends $dara.Model {
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
   * 文件 Content-Type
   * 
   * @example
   * string_value
   */
  contentType?: string;
  /**
   * @remarks
   * 签名 URL 有效时长（秒）
   * 
   * @example
   * 1
   */
  expiresIn?: number;
  /**
   * @remarks
   * 文件公开访问 URL
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
   * 文件 OSS 内部 URL
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
   * 上传 HTTP 方法（固定为 PUT）
   * 
   * @example
   * string_value
   */
  method?: string;
  /**
   * @remarks
   * OSS 对象名
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
   * 签名上传 URL（PUT 方式）
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  uploadSignatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      contentType: 'contentType',
      expiresIn: 'expiresIn',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      fileUrl: 'fileUrl',
      message: 'message',
      method: 'method',
      objectName: 'objectName',
      requestId: 'requestId',
      uploadSignatureUrl: 'uploadSignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contentType: 'string',
      expiresIn: 'number',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      fileUrl: 'string',
      message: 'string',
      method: 'string',
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

