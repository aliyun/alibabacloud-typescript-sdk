// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSourceBloodResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 46e537a5****,3dadsu****
   */
  requestId?: string;
  /**
   * @remarks
   * Array of dataset IDs.
   */
  result?: string[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request was successful
   * - false: The request failed
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
      result: { 'type': 'array', 'itemType': 'string' },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

