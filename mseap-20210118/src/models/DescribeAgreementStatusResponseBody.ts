// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgreementStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 10aa40008e081ad7b1fb50bffc3a70b1
   */
  agreementCode?: string;
  /**
   * @example
   * 6254E13A-A79F-5786-9C75-7590727342C9
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1219541161213057
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agreementCode: 'AgreementCode',
      requestId: 'RequestId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementCode: 'string',
      requestId: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

