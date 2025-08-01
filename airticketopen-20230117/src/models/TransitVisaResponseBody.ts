// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransitVisaResponseBodyData } from "./TransitVisaResponseBodyData";


export class TransitVisaResponseBody extends $dara.Model {
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: TransitVisaResponseBodyData[];
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': TransitVisaResponseBodyData },
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
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

