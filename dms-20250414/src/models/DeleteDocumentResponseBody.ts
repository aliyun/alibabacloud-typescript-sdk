// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the document was deleted. Valid values:
   * 
   * - **true**: The deletion was successful.
   * 
   * - **false**: The deletion failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error code that is returned if the request fails.
   * 
   * @example
   * KnowledgeBaseNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request fails.
   * 
   * @example
   * Resource not found kb-***
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique request ID. Use this ID to troubleshoot errors.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

