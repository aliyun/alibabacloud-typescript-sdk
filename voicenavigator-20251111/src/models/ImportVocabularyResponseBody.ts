// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportVocabularyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list of vocabulary IDs.
   */
  data?: string[];
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
   * The response message.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * Parameters used to dynamically generate the error message.
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
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

