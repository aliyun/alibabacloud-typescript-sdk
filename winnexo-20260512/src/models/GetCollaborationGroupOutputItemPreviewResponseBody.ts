// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCollaborationGroupOutputItemPreviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * 公共业务状态码，由后端Code字段映射；错误时用于识别失败原因。
   * 
   * @example
   * ERR.Robject.Auth.TenantAccessDenied
   */
  code?: string;
  /**
   * @remarks
   * 可直接展示的文本正文或预览提示；不提供正文的文件类型可为空。
   * 
   * @example
   * # 技术方案
   */
  content?: string;
  /**
   * @remarks
   * 是否降级为下载。true时应展示下载入口，不要按在线文档预览器处理。
   * 
   * @example
   * false
   */
  degraded?: boolean;
  /**
   * @remarks
   * 短期签名下载地址；普通文件有效期3600秒，邮件正文可为空。过期后重新调用本接口。示例仅展示URL格式，不包含真实签名。
   * 
   * @example
   * https://example.com/download/document.md
   */
  downloadUrl?: string;
  /**
   * @remarks
   * 文件扩展名，不含点；无扩展名时可为空。
   * 
   * @example
   * md
   */
  fileExt?: string;
  /**
   * @remarks
   * 文件名，包含扩展名；无文件名时可为空。
   * 
   * @example
   * codex-r2-a-baseline.md
   */
  fileName?: string;
  /**
   * @remarks
   * 对话生成文件的产出明细ID。取GetNodeDetail返回的artifacts中ref.kind为USER_OUTPUT_ITEM的ref.id；不是artifactId。
   * 
   * @example
   * 51469466
   */
  itemId?: string;
  /**
   * @remarks
   * 公共错误说明，由后端Message字段映射；错误时描述失败原因。
   * 
   * @example
   * 无权访问租户 2147483647，用户不属于该租户
   */
  message?: string;
  /**
   * @remarks
   * 预览方式，例如CONTENT为文本正文，HTML为网页，IMAGE为图片，AUDIO为音频，VIDEO为视频，OSS_IMM为文档预览。
   * 
   * @example
   * CONTENT
   */
  previewType?: string;
  /**
   * @remarks
   * 短期预览地址；正文可直接展示时可为空。地址过期后重新调用本接口。示例仅展示URL格式，不是可访问凭证。
   * 
   * @example
   * https://example.com/preview/document
   */
  previewUrl?: string;
  /**
   * @remarks
   * 请求追踪ID，由后端RequestId字段映射，用于排查调用失败。
   * 
   * @example
   * c9cf6cb3-3f5c-4994-a8a1-c93379a6f5cf
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      degraded: 'degraded',
      downloadUrl: 'downloadUrl',
      fileExt: 'fileExt',
      fileName: 'fileName',
      itemId: 'itemId',
      message: 'message',
      previewType: 'previewType',
      previewUrl: 'previewUrl',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      degraded: 'boolean',
      downloadUrl: 'string',
      fileExt: 'string',
      fileName: 'string',
      itemId: 'string',
      message: 'string',
      previewType: 'string',
      previewUrl: 'string',
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

