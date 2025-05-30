// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResourceUsageResponseBodyData } from "./GetJobResourceUsageResponseBodyData";


export class GetJobResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetJobResourceUsageResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * 0A3B1E82006A23A918C70905BF08AEC7
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
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
   * 0b57ff7616612271051086500ea3ce
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
      data: GetJobResourceUsageResponseBodyData,
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

