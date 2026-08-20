// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCreditUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The credit limit of the user.
   * 
   * @example
   * string_value
   */
  creditLimit?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The remaining credits in real time.
   * 
   * @example
   * string_value
   */
  remainingCredits?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The shadow credit limit.
   * 
   * @example
   * string_value
   */
  shadowCreditLimit?: string;
  /**
   * @remarks
   * The remaining shadow credits in real time.
   * 
   * @example
   * string_value
   */
  shadowRemainingCredits?: string;
  /**
   * @remarks
   * The consumed shadow credits in real time.
   * 
   * @example
   * string_value
   */
  shadowUsedCredits?: string;
  /**
   * @remarks
   * The ID of the tenant to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * The consumed credits in real time.
   * 
   * @example
   * string_value
   */
  usedCredits?: string;
  /**
   * @remarks
   * The user ID.
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

