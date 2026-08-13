// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCreditUsageResponseBody extends $dara.Model {
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
   * 用户 credit 限额
   * 
   * @example
   * string_value
   */
  creditLimit?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 剩余 credit（实时，来自 Redis）
   * 
   * @example
   * string_value
   */
  remainingCredits?: string;
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
   * 影子 credit 限额
   * 
   * @example
   * string_value
   */
  shadowCreditLimit?: string;
  /**
   * @remarks
   * 剩余影子 credit（实时，来自 Redis）
   * 
   * @example
   * string_value
   */
  shadowRemainingCredits?: string;
  /**
   * @remarks
   * 已消耗影子 credit（实时，来自 Redis）
   * 
   * @example
   * string_value
   */
  shadowUsedCredits?: string;
  /**
   * @remarks
   * 租户ID
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * 已消耗 credit（实时，来自 Redis）
   * 
   * @example
   * string_value
   */
  usedCredits?: string;
  /**
   * @remarks
   * 用户ID
   * 
   * @example
   * 1
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      creditLimit: 'creditLimit',
      message: 'message',
      remainingCredits: 'remainingCredits',
      requestId: 'requestId',
      shadowCreditLimit: 'shadowCreditLimit',
      shadowRemainingCredits: 'shadowRemainingCredits',
      shadowUsedCredits: 'shadowUsedCredits',
      tenantId: 'tenantId',
      usedCredits: 'usedCredits',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creditLimit: 'string',
      message: 'string',
      remainingCredits: 'string',
      requestId: 'string',
      shadowCreditLimit: 'string',
      shadowRemainingCredits: 'string',
      shadowUsedCredits: 'string',
      tenantId: 'number',
      usedCredits: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

