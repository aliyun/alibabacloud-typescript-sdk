// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCapabilityResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * 7CC54C38-D721-4C55-A410-2A94B5A6BE0F
   */
  requestId?: string;
  /**
   * @remarks
   * The status.
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

