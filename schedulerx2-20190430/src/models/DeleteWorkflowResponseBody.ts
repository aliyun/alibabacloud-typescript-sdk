// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message. This parameter is returned only if the request fails.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the workflow was deleted successfully. Valid values:
   * 
   * - **true**: The workflow was deleted.
   * 
   * - **false**: The workflow was not deleted.
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

