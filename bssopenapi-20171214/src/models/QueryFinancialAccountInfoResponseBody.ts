// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFinancialAccountInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the financial account. A value of MASTER indicates that the account is a management account. A value of MEMBER indicates that the account is a member.
   * 
   * @example
   * MEMBER
   */
  accountType?: string;
  /**
   * @remarks
   * Indicates whether the account is a financial account. A value of true indicates that the account is a financial account. A value of false indicates that the account is not a financial account.
   * 
   * @example
   * true
   */
  isFinancialAccount?: boolean;
  /**
   * @remarks
   * The ID of the group to which the member belongs.
   * 
   * @example
   * 124
   */
  memberGroupId?: number;
  /**
   * @remarks
   * The name of the group to which the member belongs.
   * 
   * @example
   * Test group
   */
  memberGroupName?: string;
  /**
   * @remarks
   * The display name of the member.
   * 
   * @example
   * Test
   */
  memberNickName?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * killortop3
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      isFinancialAccount: 'IsFinancialAccount',
      memberGroupId: 'MemberGroupId',
      memberGroupName: 'MemberGroupName',
      memberNickName: 'MemberNickName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      isFinancialAccount: 'boolean',
      memberGroupId: 'number',
      memberGroupName: 'string',
      memberNickName: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryFinancialAccountInfoResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 97426BC2-792E-41F5-92B8-73C710DA7779
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFinancialAccountInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

