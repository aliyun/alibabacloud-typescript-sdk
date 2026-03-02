// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo extends $dara.Model {
  bindMfa?: boolean;
  oldAkNum?: number;
  rootWithAccessKey?: number;
  subUser?: number;
  subUserBindMfa?: number;
  subUserPwdLevel?: string;
  subUserWithOldAccessKey?: number;
  subUserWithUnusedAccessKey?: number;
  unusedAkNum?: number;
  static names(): { [key: string]: string } {
    return {
      bindMfa: 'BindMfa',
      oldAkNum: 'OldAkNum',
      rootWithAccessKey: 'RootWithAccessKey',
      subUser: 'SubUser',
      subUserBindMfa: 'SubUserBindMfa',
      subUserPwdLevel: 'SubUserPwdLevel',
      subUserWithOldAccessKey: 'SubUserWithOldAccessKey',
      subUserWithUnusedAccessKey: 'SubUserWithUnusedAccessKey',
      unusedAkNum: 'UnusedAkNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindMfa: 'boolean',
      oldAkNum: 'number',
      rootWithAccessKey: 'number',
      subUser: 'number',
      subUserBindMfa: 'number',
      subUserPwdLevel: 'string',
      subUserWithOldAccessKey: 'number',
      subUserWithUnusedAccessKey: 'number',
      unusedAkNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo extends $dara.Model {
  accountSecurityPracticeUserInfo?: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      accountSecurityPracticeUserInfo: 'AccountSecurityPracticeUserInfo',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSecurityPracticeUserInfo: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo,
      score: 'number',
    };
  }

  validate() {
    if(this.accountSecurityPracticeUserInfo && typeof (this.accountSecurityPracticeUserInfo as any).validate === 'function') {
      (this.accountSecurityPracticeUserInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSecurityPracticeReportResponseBody extends $dara.Model {
  accountSecurityPracticeInfo?: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountSecurityPracticeInfo: 'AccountSecurityPracticeInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSecurityPracticeInfo: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountSecurityPracticeInfo && typeof (this.accountSecurityPracticeInfo as any).validate === 'function') {
      (this.accountSecurityPracticeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

