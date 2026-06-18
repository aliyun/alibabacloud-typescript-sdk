// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportNodesStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Resource not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B0699629-14FC-51E7-B49E-AAD83F6FEB60
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
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

