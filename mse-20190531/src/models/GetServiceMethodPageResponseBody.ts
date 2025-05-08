// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceMethodPageResponseBodyData } from "./GetServiceMethodPageResponseBodyData";


export class GetServiceMethodPageResponseBody extends $dara.Model {
  data?: GetServiceMethodPageResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 2DD5A212-C77B-3XXF-9XXE-XXX9XXXE5XX1
   */
  requestId?: string;
  /**
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
      data: GetServiceMethodPageResponseBodyData,
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

