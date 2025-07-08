// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsPackageSummaryNewResponseBody extends $dara.Model {
  certifyType?: number;
  interPackageCount?: number;
  interPackageSum?: number;
  mktPackageCount?: number;
  mktPackageSum?: number;
  requestId?: string;
  smsPackageCount?: number;
  smsPackageSum?: number;
  sysPackageCount?: number;
  sysPackageSum?: number;
  static names(): { [key: string]: string } {
    return {
      certifyType: 'CertifyType',
      interPackageCount: 'InterPackageCount',
      interPackageSum: 'InterPackageSum',
      mktPackageCount: 'MktPackageCount',
      mktPackageSum: 'MktPackageSum',
      requestId: 'RequestId',
      smsPackageCount: 'SmsPackageCount',
      smsPackageSum: 'SmsPackageSum',
      sysPackageCount: 'SysPackageCount',
      sysPackageSum: 'SysPackageSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyType: 'number',
      interPackageCount: 'number',
      interPackageSum: 'number',
      mktPackageCount: 'number',
      mktPackageSum: 'number',
      requestId: 'string',
      smsPackageCount: 'number',
      smsPackageSum: 'number',
      sysPackageCount: 'number',
      sysPackageSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

