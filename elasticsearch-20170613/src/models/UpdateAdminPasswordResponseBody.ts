// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdminPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FA05123-745C-42FD-A69B-AFF48EF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the password is updated. Valid values:
   * 
   * - true: The password is updated.
   * - false: The password failed to be updated.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

