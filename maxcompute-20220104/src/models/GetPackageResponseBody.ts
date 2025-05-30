// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPackageResponseBodyData } from "./GetPackageResponseBodyData";


export class GetPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPackageResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message.
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
   * The ID of the request.
   * 
   * @example
   * 0b57ff8316614119858417939e3e54
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
      data: GetPackageResponseBodyData,
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

