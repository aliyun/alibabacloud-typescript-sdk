// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2017-03-17 11:08:02
   */
  date?: string;
  failReason?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
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

export class QueryFailReasonForRegistrantProfileRealNameVerificationResponseBody extends $dara.Model {
  data?: QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData[];
  /**
   * @example
   * 548C407F-AEA2-4B5D-90DF-EC11EBB1D76F
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
      data: { 'type': 'array', 'itemType': QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData },
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

