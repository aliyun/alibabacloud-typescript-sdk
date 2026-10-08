// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFailingReasonListForQualificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Review date.
   * 
   * @example
   * 2017-03-17 11:08:02
   */
  date?: string;
  /**
   * @remarks
   * Reason for domain name qualification verification failure.
   * 
   * @example
   * 证件审核不通过
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

export class QueryFailingReasonListForQualificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of domain name qualification verification failures.
   */
  data?: QueryFailingReasonListForQualificationResponseBodyData[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
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
      data: { 'type': 'array', 'itemType': QueryFailingReasonListForQualificationResponseBodyData },
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

