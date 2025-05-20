// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeviceInfoResponseBodyData } from "./GetDeviceInfoResponseBodyData";


export class GetDeviceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code returned for the request. A value of Success indicates that the request was successful. Other values indicate that the request failed. You can troubleshoot the error by viewing the error message returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDeviceInfoResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceInfoResponseBodyData,
      httpCode: 'number',
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

