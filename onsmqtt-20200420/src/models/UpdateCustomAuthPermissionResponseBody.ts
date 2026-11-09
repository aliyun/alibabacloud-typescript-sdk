// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAuthPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code returned upon failed invocation. For more information, see Error Codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Information
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8CC04203-679B-4DED-89D9-E7C2E979****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. true: Call succeeded. false: Call failed.
   * 
   * @example
   * True
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

