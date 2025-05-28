// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicket4CopilotResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787************05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * ID of the Smart Q module to be embedded.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request succeeded
   * - false: The request failed
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

