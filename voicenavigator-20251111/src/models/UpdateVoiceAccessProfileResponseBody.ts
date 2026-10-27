// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVoiceAccessProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the operation. `OK` indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the updated access profile.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message if the request fails.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The dynamic error parameter list.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7401D698-0AAC-5909-B68E-88C68805FFB8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

