// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The generated ticket value.
   * 
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range: 
   * - true: Request succeeded 
   * - false: Request failed
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

