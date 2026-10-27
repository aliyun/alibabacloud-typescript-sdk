// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVocabularyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of `OK` indicates the request succeeded.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the deleted vocabulary.
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
   * The error message.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * A list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29D8CB48-2384-59C4-9618-3824009635C2
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

