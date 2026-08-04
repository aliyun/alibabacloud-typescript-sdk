// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindContacterResponseBodyData extends $dara.Model {
  contacterAddress?: string;
  contacterDingding?: string;
  contacterEmail?: string;
  contacterId?: number;
  contacterMobile?: string;
  contacterName?: string;
  contacterPosition?: string;
  contacterStaffNo?: string;
  contacterType?: string;
  contacterWangwang?: string;
  emailConfirmed?: boolean;
  mobileConfirmed?: boolean;
  static names(): { [key: string]: string } {
    return {
      contacterAddress: 'ContacterAddress',
      contacterDingding: 'ContacterDingding',
      contacterEmail: 'ContacterEmail',
      contacterId: 'ContacterId',
      contacterMobile: 'ContacterMobile',
      contacterName: 'ContacterName',
      contacterPosition: 'ContacterPosition',
      contacterStaffNo: 'ContacterStaffNo',
      contacterType: 'ContacterType',
      contacterWangwang: 'ContacterWangwang',
      emailConfirmed: 'EmailConfirmed',
      mobileConfirmed: 'MobileConfirmed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacterAddress: 'string',
      contacterDingding: 'string',
      contacterEmail: 'string',
      contacterId: 'number',
      contacterMobile: 'string',
      contacterName: 'string',
      contacterPosition: 'string',
      contacterStaffNo: 'string',
      contacterType: 'string',
      contacterWangwang: 'string',
      emailConfirmed: 'boolean',
      mobileConfirmed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindContacterResponseBody extends $dara.Model {
  code?: string;
  data?: FindContacterResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: FindContacterResponseBodyData,
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

