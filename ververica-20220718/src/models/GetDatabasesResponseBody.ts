// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Database } from "./Database";


export class GetDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of databases that meet the specified conditions when success is true. This value is empty when success is false.
   */
  data?: Database[];
  /**
   * @remarks
   * - If success is false, a business error code is returned.
   *  
   * - If success is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * - If success is false, a business error message is returned.
   * 
   * - If success is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code, which is always 200. Use the success field to determine whether the request was successful.
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
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Database },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

