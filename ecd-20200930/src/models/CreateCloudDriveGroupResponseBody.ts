// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudDriveGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results. A value of success indicates that the operation is successful. If the operation failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The data information.
   * 
   * @example
   * []
   */
  data?: string;
  /**
   * @remarks
   * The error message that is returned. This parameter is not returned if the value of Code is success.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FD14D2A1-CC39-5ED3-8EE7-11FDF4B9D6D2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. true: The call is successful. false: The call fails.
   * 
   * @example
   * True
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
      data: 'string',
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

