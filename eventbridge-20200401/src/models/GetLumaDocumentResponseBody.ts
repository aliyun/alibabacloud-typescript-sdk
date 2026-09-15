// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseDocument } from "./KnowledgeBaseDocument";


export class GetLumaDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned by the operation. A value of Success indicates that the call succeeds. Otherwise, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The document details, including the processing status and metadata.
   */
  data?: KnowledgeBaseDocument;
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
   * Indicates whether the call is successful. A value of true indicates that the call succeeds.
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
      data: KnowledgeBaseDocument,
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

