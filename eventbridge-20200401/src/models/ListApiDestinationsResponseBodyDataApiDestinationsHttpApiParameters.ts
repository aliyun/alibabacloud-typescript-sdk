// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the API destination.
   * 
   * @example
   * http://127.0.0.1:8001/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * - POST
   * 
   * - GET
   * 
   * - DELETE
   * 
   * - PUT
   * 
   * - HEAD
   * 
   * - TRACE
   * 
   * - PATCH
   * 
   * @example
   * POST
   */
  method?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      method: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

