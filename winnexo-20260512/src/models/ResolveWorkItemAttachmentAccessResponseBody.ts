// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResolveWorkItemAttachmentAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * 附件短期预览地址，过期前可直接 GET
   * 
   * @example
   * example
   */
  accessUrl?: string;
  /**
   * @remarks
   * 业务状态码；成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 地址过期时间(ISO8601)
   * 
   * @example
   * example
   */
  expiresAt?: string;
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessUrl: 'accessUrl',
      code: 'code',
      expiresAt: 'expiresAt',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessUrl: 'string',
      code: 'string',
      expiresAt: 'string',
      message: 'string',
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

