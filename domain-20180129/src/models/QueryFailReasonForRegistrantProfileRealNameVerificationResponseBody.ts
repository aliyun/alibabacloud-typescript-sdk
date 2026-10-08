// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Review Date.
   * 
   * @example
   * 2017-03-17 11:08:02
   */
  date?: string;
  /**
   * @remarks
   * The reason why identity verification failed the Review.
   * 
   * For Solutions after identity verification fails the Review, see [Reasons for identity verification failure and Solutions](https://help.aliyun.com/document_detail/35885.html).
   * 
   * @example
   * 证件电子信息核验不合格
   */
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
  /**
   * @remarks
   * The List of reasons why identity verification failed the Review.
   */
  data?: QueryFailReasonForRegistrantProfileRealNameVerificationResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
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

