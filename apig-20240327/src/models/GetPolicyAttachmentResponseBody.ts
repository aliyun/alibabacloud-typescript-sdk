// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPolicyAttachmentResponseBodyData } from "./GetPolicyAttachmentResponseBodyData";


export class GetPolicyAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetPolicyAttachmentResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 2C3B9A12-3868-5EB9-fBEA-F99E03DD1***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPolicyAttachmentResponseBodyData,
      message: 'string',
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

