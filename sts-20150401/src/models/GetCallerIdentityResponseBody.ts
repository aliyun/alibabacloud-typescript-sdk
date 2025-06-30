// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallerIdentityResponseBody extends $dara.Model {
  /**
   * @example
   * 196813200012****
   */
  accountId?: string;
  /**
   * @example
   * acs:ram::196813200012****:user/admin
   */
  arn?: string;
  /**
   * @example
   * RAMUser
   */
  identityType?: string;
  /**
   * @example
   * 28877424437521****
   */
  principalId?: string;
  /**
   * @example
   * 3C87BF47-3724-5443-ADC1-5AEAD9A03EB1
   */
  requestId?: string;
  /**
   * @example
   * 33537620082992****
   */
  roleId?: string;
  /**
   * @example
   * 216959339000****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      arn: 'Arn',
      identityType: 'IdentityType',
      principalId: 'PrincipalId',
      requestId: 'RequestId',
      roleId: 'RoleId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      arn: 'string',
      identityType: 'string',
      principalId: 'string',
      requestId: 'string',
      roleId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

