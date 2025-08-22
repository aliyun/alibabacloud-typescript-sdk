// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDcdnFullDomainsBlockIPResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * If the value of Code is not 0, specific required parameters are missing or the parameter format is invalid.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-802B-72F8FD6DA2FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

