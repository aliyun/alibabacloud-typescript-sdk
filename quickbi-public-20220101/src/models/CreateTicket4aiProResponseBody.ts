// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicket4AiProResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A**********DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The embedding ticket.
   * 
   * @example
   * true
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

