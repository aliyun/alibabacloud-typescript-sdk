// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseChunk } from "./KnowledgeBaseChunk";


export class GetLumaChunkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code of the operation. A value of Success indicates that the call succeeds. Otherwise, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The chunk details, including the body content and position.
   */
  data?: KnowledgeBaseChunk;
  /**
   * @remarks
   * The message returned by the operation. The value is Operation success if the call succeeds, or a specific error description if the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting and ticket submission.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: KnowledgeBaseChunk,
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

