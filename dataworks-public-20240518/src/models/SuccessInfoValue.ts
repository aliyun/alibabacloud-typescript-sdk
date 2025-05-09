// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuccessInfoValue extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The task does not exist.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

