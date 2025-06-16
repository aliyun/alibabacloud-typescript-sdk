// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpnAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned by the current operation. **200** indicates that the operation is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information returned by the current operation.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29440C49-398F-3D06-BA8B-E3CD13F3246D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current operation is successful.
   * 
   * *   **true**
   * *   **false**
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
      code: 'string',
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

