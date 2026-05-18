// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDocumentChunksResponseBody extends $dara.Model {
  /**
   * @remarks
   * 实际删除的行数
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @example
   * KnowledgeBaseNotFound
   */
  errorCode?: string;
  /**
   * @example
   * Resource not found kb-***
   */
  errorMessage?: string;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
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
      data: 'number',
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

