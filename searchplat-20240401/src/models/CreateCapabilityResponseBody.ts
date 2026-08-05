// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCapabilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CC93E65-6734-5060-BEF7-0EB0A4862BCF
   */
  requestId?: string;
  /**
   * @remarks
   * The request status.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'httpCode',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

