// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can use the ID to troubleshoot errors.
   * 
   * @example
   * F332BED4-DD73-5972-A9C2-642BA6CFXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * - true: The call is successful.
   * 
   * - false: The call fails.
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

