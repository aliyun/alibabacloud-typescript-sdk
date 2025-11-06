// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFailReasonForDomainRealNameVerificationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2017-03-17 11:08:02
   */
  date?: string;
  /**
   * @example
   * SUCCEED
   */
  domainNameVerificationStatus?: string;
  failReason?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      domainNameVerificationStatus: 'string',
      failReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFailReasonForDomainRealNameVerificationResponseBody extends $dara.Model {
  data?: QueryFailReasonForDomainRealNameVerificationResponseBodyData[];
  /**
   * @example
   * 1F1BA893-AD33-4248-8CB8-1657E3733052
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryFailReasonForDomainRealNameVerificationResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

