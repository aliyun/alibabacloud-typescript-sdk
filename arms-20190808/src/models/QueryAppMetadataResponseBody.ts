// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API call status.
   * 
   * - 2xx: The request was successful.
   * 
   * - 3xx: The request was redirected.
   * 
   * - 4xx: A client-side error occurred.
   * 
   * - 5xx: A server-side error occurred.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned object.
   * 
   * @example
   * {\\"408d5533\\": \\"SELECT * FROM user_base_info\\"}
   */
  data?: { [key: string]: any };
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
   * The request ID.
   * 
   * @example
   * 51877BAC-330C-5845-BDFD-C7859AD33FB7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the query was successful.
   * 
   * - `true`: The query was successful.
   * 
   * - `false`: The query failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

