// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResolveWorkItemArtifactAccessResponseBody extends $dara.Model {
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
   * 产物短期签名下载地址，过期前可直接 GET
   * 
   * @example
   * example
   */
  downloadUrl?: string;
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
      code: 'code',
      downloadUrl: 'downloadUrl',
      expiresAt: 'expiresAt',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadUrl: 'string',
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

