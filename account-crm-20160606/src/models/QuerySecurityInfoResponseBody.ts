// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecurityInfoResponseBodyAccountSecurityInfoDto extends $dara.Model {
  aliyunId?: string;
  name?: string;
  nationalityCode?: string;
  pk?: string;
  profileType?: string;
  securityEmail?: string;
  securityMobile?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      name: 'Name',
      nationalityCode: 'NationalityCode',
      pk: 'Pk',
      profileType: 'ProfileType',
      securityEmail: 'SecurityEmail',
      securityMobile: 'SecurityMobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      name: 'string',
      nationalityCode: 'string',
      pk: 'string',
      profileType: 'string',
      securityEmail: 'string',
      securityMobile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecurityInfoResponseBody extends $dara.Model {
  accountSecurityInfoDto?: QuerySecurityInfoResponseBodyAccountSecurityInfoDto;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountSecurityInfoDto: 'AccountSecurityInfoDto',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSecurityInfoDto: QuerySecurityInfoResponseBodyAccountSecurityInfoDto,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accountSecurityInfoDto && typeof (this.accountSecurityInfoDto as any).validate === 'function') {
      (this.accountSecurityInfoDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

