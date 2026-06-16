// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecurityCheckReportResponseBodyData extends $dara.Model {
  cloudSecurityGuide?: number;
  configCheckNumber?: number;
  contactCheckNumber?: number;
  riskEventNumber?: number;
  sasCheckNumber?: number;
  securityStatus?: number;
  suggestionText?: string;
  static names(): { [key: string]: string } {
    return {
      cloudSecurityGuide: 'CloudSecurityGuide',
      configCheckNumber: 'ConfigCheckNumber',
      contactCheckNumber: 'ContactCheckNumber',
      riskEventNumber: 'RiskEventNumber',
      sasCheckNumber: 'SasCheckNumber',
      securityStatus: 'SecurityStatus',
      suggestionText: 'SuggestionText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudSecurityGuide: 'number',
      configCheckNumber: 'number',
      contactCheckNumber: 'number',
      riskEventNumber: 'number',
      sasCheckNumber: 'number',
      securityStatus: 'number',
      suggestionText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecurityCheckReportResponseBody extends $dara.Model {
  code?: string;
  data?: QuerySecurityCheckReportResponseBodyData;
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
      data: QuerySecurityCheckReportResponseBodyData,
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

