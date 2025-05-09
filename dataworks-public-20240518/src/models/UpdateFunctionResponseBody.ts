// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunctionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the ID.
   * 
   * @example
   * 12123960-CB2C-5086-868E-C6C1D024XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true
   * 
   * false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

