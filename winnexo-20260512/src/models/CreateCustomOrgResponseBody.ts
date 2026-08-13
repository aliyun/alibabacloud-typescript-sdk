// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomOrgResponseBody extends $dara.Model {
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
   * 注册成功的组织标识
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * 组织展示名称
   * 
   * @example
   * string_value
   */
  corpName?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 平台类型，固定为 custom
   * 
   * @example
   * string_value
   */
  platformType?: string;
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
      corpId: 'corpId',
      corpName: 'corpName',
      message: 'message',
      platformType: 'platformType',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      corpId: 'string',
      corpName: 'string',
      message: 'string',
      platformType: 'string',
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

