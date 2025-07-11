// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStorageAmountSummaryResponseBodyData } from "./GetStorageAmountSummaryResponseBodyData";


export class GetStorageAmountSummaryResponseBody extends $dara.Model {
  data?: GetStorageAmountSummaryResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 688003E1-D1B4-5468-957E-2FFB3AC8D79B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetStorageAmountSummaryResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
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

