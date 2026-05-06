// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVocabularyResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance llm-baployoyopf22m2r does not exist.
   */
  message?: string;
  params?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CF6D3484-19A1-5C77-863B-AC8B5754D37C
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

