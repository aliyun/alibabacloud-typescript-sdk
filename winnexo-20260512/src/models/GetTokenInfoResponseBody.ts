// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenInfoResponseBody extends $dara.Model {
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
   * Token 是否开启（存在 ACTIVE 状态的 Token）
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Token 创建时间（ISO 8601）
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
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
   * 脱敏后的 Token 值
   * 
   * @example
   * string_value
   */
  tokenMasked?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      enabled: 'enabled',
      gmtCreate: 'gmtCreate',
      message: 'message',
      requestId: 'requestId',
      tokenMasked: 'tokenMasked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enabled: 'boolean',
      gmtCreate: 'string',
      message: 'string',
      requestId: 'string',
      tokenMasked: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

