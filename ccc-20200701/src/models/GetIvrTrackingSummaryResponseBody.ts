// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIvrTrackingSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Unknown error code \\"NoPermission.Recording\\". Reason: null
   */
  message?: string;
  /**
   * @example
   * DE803553-8AA9-4B9D-9E4E-A82BC69EDCEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

