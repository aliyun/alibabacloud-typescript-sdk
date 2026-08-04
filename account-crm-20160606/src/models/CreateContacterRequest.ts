// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContacterRequest extends $dara.Model {
  contacterAddress?: string;
  contacterDingding?: string;
  contacterEmail?: string;
  contacterMobile?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contacterName?: string;
  contacterPosition?: string;
  contacterStaffNo?: string;
  contacterType?: string;
  contacterWangwang?: string;
  emailConfirmed?: boolean;
  mobileConfirmed?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      contacterAddress: 'ContacterAddress',
      contacterDingding: 'ContacterDingding',
      contacterEmail: 'ContacterEmail',
      contacterMobile: 'ContacterMobile',
      contacterName: 'ContacterName',
      contacterPosition: 'ContacterPosition',
      contacterStaffNo: 'ContacterStaffNo',
      contacterType: 'ContacterType',
      contacterWangwang: 'ContacterWangwang',
      emailConfirmed: 'EmailConfirmed',
      mobileConfirmed: 'MobileConfirmed',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacterAddress: 'string',
      contacterDingding: 'string',
      contacterEmail: 'string',
      contacterMobile: 'string',
      contacterName: 'string',
      contacterPosition: 'string',
      contacterStaffNo: 'string',
      contacterType: 'string',
      contacterWangwang: 'string',
      emailConfirmed: 'boolean',
      mobileConfirmed: 'boolean',
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

