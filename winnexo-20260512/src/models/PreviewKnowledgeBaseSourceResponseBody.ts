// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewKnowledgeBaseSourceResponseBody extends $dara.Model {
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
   * 文本内容（CONTENT类型使用）
   * 
   * @example
   * 示例内容
   */
  content?: string;
  /**
   * @remarks
   * 文件扩展名（OSS_IMM类型使用）
   * 
   * @example
   * string_value
   */
  fileExt?: string;
  /**
   * @remarks
   * 文件名（OSS_IMM类型使用）
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 预览类型：OSS_IMM / IMAGE / AUDIO / VIDEO / HTML / DING_TALK / VOICE_MEETING / CONTENT
   * 
   * @example
   * OSS_IMM
   */
  previewType?: string;
  /**
   * @remarks
   * 预览URL（OSS_IMM、DING_TALK、VOICE_MEETING使用）
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  previewUrl?: string;
  /**
   * @remarks
   * 公开下载URL（可供下载的文件URL）
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  publicUrl?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      fileExt: 'fileExt',
      fileName: 'fileName',
      message: 'message',
      previewType: 'previewType',
      previewUrl: 'previewUrl',
      publicUrl: 'publicUrl',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      fileExt: 'string',
      fileName: 'string',
      message: 'string',
      previewType: 'string',
      previewUrl: 'string',
      publicUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

