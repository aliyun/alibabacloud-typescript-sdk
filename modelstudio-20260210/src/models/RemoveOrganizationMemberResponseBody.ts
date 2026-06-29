// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveOrganizationMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is empty if the operation is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is empty if the operation is successful.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

