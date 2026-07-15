// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowDagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Return Code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The Error Message returned on failure.
   */
  message?: string;
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:
   * 
   * - true: The API call succeeded.
   * 
   * - false: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

