// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success. Other values indicate errors.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The description of the operation result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A9AEA84-7186-4D8D-B498-4585C6A2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
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

