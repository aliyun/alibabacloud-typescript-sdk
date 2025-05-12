// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetErAttachmentResponseBodyContent } from "./GetErAttachmentResponseBodyContent";


export class GetErAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: GetErAttachmentResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is displayed.)
   * 
   * @example
   * You don\\"t have the permission to do this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F0D9440-1F97-5613-87CD-D3047172A93C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetErAttachmentResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

