// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1********DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 472b241b-c651-****-****-ee719d6faf45
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - `true`: The request succeeded.
   * 
   * - `false`: The request failed.
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
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

