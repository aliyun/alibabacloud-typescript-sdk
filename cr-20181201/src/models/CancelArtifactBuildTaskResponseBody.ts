// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelArtifactBuildTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - `true`: The API call was successful.
   * 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4C7DD0C-C9D6-437A-A7EE-121EFD70D002
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

