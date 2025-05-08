// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceListPageResponseBodyData } from "./GetServiceListPageResponseBodyData";


export class GetServiceListPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response to the request.
   */
  data?: GetServiceListPageResponseBodyData;
  /**
   * @remarks
   * The request information.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2F946FB-F2E3-5BF4-8CBE-xxxxxxxx
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetServiceListPageResponseBodyData,
      message: 'string',
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

